#!/usr/bin/env node

/**
 * Example: Using Generated CSS Documentation
 * 
 * This file demonstrates different use cases for the generated JSON docs
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DOCS_DIR = path.join(__dirname, '../docs/asJson');

// Load a specific documentation file
function loadDocs(category, file) {
  const filePath = path.join(DOCS_DIR, category, file);
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

// ============================================================================
// Example 1: List all utility classes in a file
// ============================================================================
function listAllClasses() {
  console.log('\n📋 Example 1: List All Classes in 01-fonts.css\n');
  
  const fontsDocs = loadDocs('01-text', '01-fonts.json');
  
  console.log(`File: ${fontsDocs.file}`);
  console.log(`Total selectors: ${fontsDocs.totalSelectors}`);
  console.log(`Has responsive variants: ${fontsDocs.hasResponsive}\n`);
  
  fontsDocs.content
    .filter(item => item.selectorType === 'class')
    .forEach(item => {
      console.log(`  ${item.selector.padEnd(20)} → ${item.cssRule}`);
    });
}

// ============================================================================
// Example 2: Find all selectors using a specific CSS variable
// ============================================================================
function findByToken() {
  console.log('\n🔍 Example 2: Find Selectors Using --color-primary\n');
  
  const colorDocs = loadDocs('02-colors', '02-text.json');
  
  const results = colorDocs.content.filter(
    item => item.tokens.includes('--color-primary')
  );
  
  console.log(`Found ${results.length} selectors using --color-primary:\n`);
  results.forEach(item => {
    console.log(`  ${item.selector}`);
  });
}

// ============================================================================
// Example 3: List all responsive utilities
// ============================================================================
function listResponsiveUtils() {
  console.log('\n📱 Example 3: Responsive Utilities in Layout\n');
  
  const flexDocs = loadDocs('03-layout', '01-flex.json');
  
  const responsive = flexDocs.content.filter(item => item.responsive);
  
  console.log(`Responsive utilities in ${flexDocs.file}:\n`);
  responsive.slice(0, 10).forEach(item => {
    console.log(`  ${item.selector.padEnd(25)} (has .x and .d variants)`);
  });
  console.log(`\n  ... and ${responsive.length - 10} more`);
}

// ============================================================================
// Example 4: Generate TypeScript types
// ============================================================================
function generateTypes() {
  console.log('\n🔧 Example 4: Generate TypeScript Type\n');
  
  const fontsDocs = loadDocs('01-text', '01-fonts.json');
  
  const classNames = fontsDocs.content
    .filter(item => item.selectorType === 'class')
    .map(item => item.selector.replace('.', ''));
  
  console.log('export type FontClass =');
  classNames.forEach((name, i) => {
    const isLast = i === classNames.length - 1;
    console.log(`  | '${name}'${isLast ? ';' : ''}`);
  });
}

// ============================================================================
// Example 5: Find all utilities by category
// ============================================================================
function findByCategory() {
  console.log('\n🏷️  Example 5: Utilities by Category\n');
  
  const shadowDocs = loadDocs('04-decorators', '02-shadows.json');
  
  // Group by category
  const byCategory = shadowDocs.content.reduce((acc, item) => {
    const cat = item.category || 'Uncategorized';
    if (!acc[cat]) acc[cat] = [];
    acc[cat].push(item);
    return acc;
  }, {});
  
  Object.entries(byCategory).forEach(([category, items]) => {
    console.log(`${category} (${items.length} utilities):`);
    items.forEach(item => {
      console.log(`  ${item.selector}`);
    });
    console.log('');
  });
}

// ============================================================================
// Example 6: Generate HTML documentation
// ============================================================================
function generateHTML() {
  console.log('\n📄 Example 6: Generate HTML Snippet\n');
  
  const borderDocs = loadDocs('04-decorators', '04-border.json');
  
  console.log('<div class="utility-docs">');
  console.log('  <h2>Border Utilities</h2>');
  
  borderDocs.content
    .filter(item => item.selectorType === 'class')
    .slice(0, 5)
    .forEach(item => {
      console.log(`  <div class="utility-item">`);
      console.log(`    <code>${item.selector}</code>`);
      console.log(`    <p>${item.description || item.category || 'No description'}</p>`);
      console.log(`    <pre>${item.cssRule}</pre>`);
      console.log(`  </div>`);
    });
  
  console.log('</div>');
}

// ============================================================================
// Example 7: Generate autocomplete data
// ============================================================================
function generateAutocomplete() {
  console.log('\n⌨️  Example 7: Generate Autocomplete Data\n');
  
  const flexDocs = loadDocs('03-layout', '01-flex.json');
  
  const autocomplete = flexDocs.content
    .filter(item => item.selectorType === 'class')
    .map(item => ({
      label: item.selector.replace('.', ''),
      description: item.category || item.description,
      detail: item.cssRule,
      kind: 'class',
      insertText: item.selector.replace('.', '')
    }));
  
  console.log('Autocomplete items (sample):');
  console.log(JSON.stringify(autocomplete.slice(0, 3), null, 2));
}

// ============================================================================
// Example 8: Validate CSS variable usage
// ============================================================================
function validateTokens() {
  console.log('\n✅ Example 8: Validate CSS Token Usage\n');
  
  const fontsDocs = loadDocs('01-text', '01-fonts.json');
  const configDocs = loadDocs('00-config', '02-typography.json');
  
  // Get all defined variables from config
  const definedTokens = new Set(
    configDocs.customProperties.map(prop => prop.property)
  );
  
  // Find all used tokens
  const usedTokens = new Set();
  fontsDocs.content.forEach(item => {
    item.tokens.forEach(token => usedTokens.add(token));
  });
  
  console.log(`Defined tokens: ${definedTokens.size}`);
  console.log(`Used tokens: ${usedTokens.size}\n`);
  
  // Find undefined tokens
  const undefined = [...usedTokens].filter(token => !definedTokens.has(token));
  
  if (undefined.length > 0) {
    console.log('⚠️  Tokens used but not defined in config:');
    undefined.forEach(token => console.log(`  - ${token}`));
  } else {
    console.log('✓ All tokens are properly defined!');
  }
}

// ============================================================================
// Run all examples
// ============================================================================
console.log('═'.repeat(70));
console.log('   Lagunite CSS Documentation - Usage Examples');
console.log('═'.repeat(70));

try {
  listAllClasses();
  findByToken();
  listResponsiveUtils();
  generateTypes();
  findByCategory();
  generateHTML();
  generateAutocomplete();
  validateTokens();
  
  console.log('\n' + '═'.repeat(70));
  console.log('   Examples complete!');
  console.log('═'.repeat(70) + '\n');
} catch (error) {
  console.error('\n❌ Error running examples:', error.message);
  console.error('Make sure to run "npm run docs:generate" first!\n');
}
