#!/usr/bin/env node

/**
 * Lagunite CSS Documentation Generator
 * 
 * Automatically generates JSON documentation from CSS files
 * Extracts classes, selectors, properties, and @ID comments
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import postcss from 'postcss';
import { encode } from '@toon-format/toon';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const SRC_DIR = path.join(__dirname, '../src/css');
const DOCS_DIR = path.join(__dirname, '../docs/asJson');
const DOCS_TOON_DIR = path.join(__dirname, '../docs/asToon');

// CSS folder to docs folder mapping
const FOLDER_MAP = {
  '00-config': '00-config',
  '01-text': '01-text',
  '02-colors': '02-colors',
  '03-layout': '03-layout',
  '04-decorators': '04-decorators',
  '05-atoms': '05-atoms',
  '06-molecules': '06-molecules',
  '07-compounds': '07-compounds',
  '08-organisms': '08-organisms',
  '07-form': '07-form',
  '10-misc': '10-misc'
};

/**
 * Extract metadata comments stacked before a rule (ID + description)
 * Walks backward through consecutive comments to find:
 *  - ID: comment starting with @ID: #...
 *  - description: first non-ID, non-category (*** ... ***) comment
 */
function extractMeta(node) {
  let cursor = node.prev();
  let id = null;
  let description = null;

  while (cursor && cursor.type === 'comment') {
    const text = cursor.text.trim();

    if (!id) {
      const match = text.match(/@ID:\s*(#[\w-]+)/);
      if (match) {
        id = match[1];
      }
    }

    if (!description && !text.startsWith('@ID:') && !/^\*{3}/.test(text)) {
      description = text;
    }

    cursor = cursor.prev();
  }

  return { id, description };
}

/**
 * Extract category comment from triple-asterisk blocks
 */
function extractCategory(node) {
  if (!node.prev() || node.prev().type !== 'comment') return null;
  const comment = node.prev().text.trim();
  // Match comments like /*** Category Name ***/
  const match = comment.match(/^\*{3}\s*(.+?)\s*\*{3}$/);
  return match ? match[1] : null;
}

/**
 * Determine if selector is responsive (has .x or .d prefix variants)
 */
function hasResponsiveVariants(cssContent, baseSelector) {
  const cleanSelector = baseSelector.replace(/^\./, '');
  const xVariant = `.x${cleanSelector}`;
  const dVariant = `.d${cleanSelector}`;
  return cssContent.includes(xVariant) || cssContent.includes(dVariant);
}

/**
 * Extract CSS variables used in declarations
 */
function extractCSSVariables(declarations) {
  const variables = new Set();
  const varRegex = /var\((--[\w-]+)\)/g;
  
  declarations.forEach(decl => {
    let match;
    while ((match = varRegex.exec(decl.value)) !== null) {
      variables.add(match[1]);
    }
  });
  
  return Array.from(variables);
}

/**
 * Get selector type (class, id, element, pseudo, etc.)
 */
function getSelectorType(selector) {
  if (selector.startsWith('.')) return 'class';
  if (selector.startsWith('#')) return 'id';
  if (selector.includes(':hover')) return 'pseudo-hover';
  if (selector.includes(':')) return 'pseudo';
  if (/^[a-z][a-z0-9]*$/i.test(selector)) return 'element';
  return 'complex';
}

/**
 * Parse a single CSS file
 */
async function parseCSSFile(filePath, cssContent) {
  const fileName = path.basename(filePath);
  const folderName = path.basename(path.dirname(filePath));
  const root = postcss.parse(cssContent);
  
  const entries = [];
  let lastID = null;
  let lastDescription = null;
  let currentCategory = null;

  root.walkRules(rule => {
    // Skip media queries for base documentation (we'll note responsive support)
    if (rule.parent && rule.parent.type === 'atrule' && rule.parent.name === 'media') {
      return;
    }

    // Extract ID, description, and category from stacked comments
    const { id: ruleID, description: ruleDescription } = extractMeta(rule);
    const ruleCategory = extractCategory(rule);
    const effectiveID = ruleID ?? lastID;
    
    if (ruleID) lastID = ruleID;
    if (ruleCategory) currentCategory = ruleCategory;

    // Process each selector in the rule
    const selectors = rule.selector.split(',').map(s => s.trim());
    
    selectors.forEach(selector => {
      const properties = [];
      
      rule.walkDecls(decl => {
        properties.push(decl.prop);
      });

      // Build CSS declarations body only (content inside braces)
      const cssRule = (rule.nodes || [])
        .map(node => node.toString().trim())
        .filter(Boolean)
        .join('\n');

      // Use the last non-empty description if not defined
      const effectiveDescription = ruleDescription ?? lastDescription ?? currentCategory ?? '';
      if (ruleDescription) lastDescription = ruleDescription;

      entries.push({
        type: 'selector',
        selectorType: getSelectorType(selector),
        selector: selector,
        id: effectiveID,
        category: currentCategory,
        properties: properties,
        cssRule: cssRule,
        responsive: hasResponsiveVariants(cssContent, selector),
        description: effectiveDescription
      });
    });
  });

  // Extract CSS custom properties (variables)
  const customProperties = [];
  root.walkDecls(decl => {
    if (decl.prop.startsWith('--')) {
      customProperties.push({
        property: decl.prop,
        value: decl.value
      });
    }
  });

  const result = {
    folder: folderName,
    file: fileName,
    lastUpdated: new Date().toISOString().split('T')[0],
    hasResponsive: entries.some(e => e.responsive),
    totalSelectors: entries.length,
    content: entries
  };

  // Only include customProperties if they exist
  if (customProperties.length > 0) {
    result.customProperties = customProperties;
  }

  return result;
}

/**
 * Process all CSS files in a directory
 */
async function processCSSDirectory(dirPath, outputDir) {
  const files = fs.readdirSync(dirPath);
  
  for (const file of files) {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    // Skip non-CSS files and directories
    if (stat.isDirectory() || !file.endsWith('.css')) continue;
    
    console.log(`Processing: ${file}`);
    
    try {
      const cssContent = fs.readFileSync(filePath, 'utf8');
      const docData = await parseCSSFile(filePath, cssContent);
      
      // Generate output JSON file
      const jsonFileName = file.replace('.css', '.json');
      const outputPath = path.join(outputDir, jsonFileName);
      
      fs.writeFileSync(
        outputPath,
        JSON.stringify(docData, null, 2),
        'utf8'
      );
      
      // Generate Toon format file
      const toonFileName = file.replace('.css', '.toon');
      const toonOutputPath = path.join(outputDir.replace('asJson', 'asToon'), toonFileName);
      const toonDir = path.dirname(toonOutputPath);
      
      if (!fs.existsSync(toonDir)) {
        fs.mkdirSync(toonDir, { recursive: true });
      }
      
      fs.writeFileSync(
        toonOutputPath,
        encode(docData),
        'utf8'
      );
      
      console.log(`  ✓ Generated: ${jsonFileName} (${docData.totalSelectors} selectors)`);
      console.log(`  ✓ Generated: ${toonFileName} (Toon format)`);
    } catch (error) {
      console.error(`  ✗ Error processing ${file}:`, error.message);
    }
  }
}

/**
 * Clean old documentation files
 */
function cleanOldDocs() {
  console.log('🧹 Cleaning old documentation files...\n');
  
  // Clean JSON docs
  if (fs.existsSync(DOCS_DIR)) {
    const folders = fs.readdirSync(DOCS_DIR, { withFileTypes: true });
    folders.forEach(folder => {
      if (folder.isDirectory()) {
        const folderPath = path.join(DOCS_DIR, folder.name);
        const files = fs.readdirSync(folderPath);
        files.forEach(file => {
          if (file.endsWith('.json')) {
            fs.unlinkSync(path.join(folderPath, file));
            console.log(`  ✓ Removed: ${folder.name}/${file}`);
          }
        });
      }
    });
  }
  
  // Clean Toon docs
  if (fs.existsSync(DOCS_TOON_DIR)) {
    const folders = fs.readdirSync(DOCS_TOON_DIR, { withFileTypes: true });
    folders.forEach(folder => {
      if (folder.isDirectory()) {
        const folderPath = path.join(DOCS_TOON_DIR, folder.name);
        const files = fs.readdirSync(folderPath);
        files.forEach(file => {
          if (file.endsWith('.toon')) {
            fs.unlinkSync(path.join(folderPath, file));
            console.log(`  ✓ Removed: ${folder.name}/${file}`);
          }
        });
      }
    });
  }
  
  console.log('');
}

/**
 * Main execution
 */
async function main() {
  console.log('🚀 Lagunite CSS Documentation Generator\n');
  
  // Clean old documentation files
  cleanOldDocs();
  
  // Ensure output directories exist
  if (!fs.existsSync(DOCS_DIR)) {
    fs.mkdirSync(DOCS_DIR, { recursive: true });
  }
  if (!fs.existsSync(DOCS_TOON_DIR)) {
    fs.mkdirSync(DOCS_TOON_DIR, { recursive: true });
  }
  
  // Process each CSS folder
  for (const [cssFolder, docsFolder] of Object.entries(FOLDER_MAP)) {
    const srcPath = path.join(SRC_DIR, cssFolder);
    const outputPath = path.join(DOCS_DIR, docsFolder);
    
    if (!fs.existsSync(srcPath)) {
      console.log(`⚠️  Skipping ${cssFolder} (not found)`);
      continue;
    }
    
    // Ensure output folder exists
    if (!fs.existsSync(outputPath)) {
      fs.mkdirSync(outputPath, { recursive: true });
    }
    
    console.log(`\n📁 Processing ${cssFolder}/`);
    await processCSSDirectory(srcPath, outputPath);
  }
  
  console.log('\n✨ Documentation generation complete!\n');
}

// Run the script
main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
