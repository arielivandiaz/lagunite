# CSS Documentation Generator

Automated tool to generate structured JSON documentation from Lagunite CSS files.

## Features

- ✅ **Automatic extraction** of CSS selectors, properties, and values
- ✅ **@ID comment parsing** from CSS files
- ✅ **Category detection** from comment blocks
- ✅ **CSS variable tracking** (tokens used in each selector)
- ✅ **Responsive variant detection** (.x and .d prefixes)
- ✅ **Structured JSON output** with rich metadata

## Usage

### Generate documentation once
```bash
npm run docs:generate
```

### Watch mode (regenerate on CSS changes)
```bash
npm run docs:watch
```

## JSON Structure

Each generated JSON file follows this structure:

```json
{
  "folder": "01-text",
  "file": "01-fonts.css",
  "lastUpdated": "2025-11-21",
  "hasResponsive": true,
  "totalSelectors": 42,
  "content": [
    {
      "type": "selector",
      "selectorType": "class",
      "selector": ".font-text",
      "id": "#01-01-03",
      "category": "Font Family",
      "properties": ["font-family"],
      "cssRule": ".font-text {\n  font-family: var(--font-text);\n}",
      "responsive": false,
      "description": "Font Family"
    }
  ]
}
```

## Field Descriptions

### Top Level
- **folder**: Source CSS folder name
- **file**: CSS filename
- **lastUpdated**: ISO date of generation
- **customProperties**: CSS variables defined in this file (only if they exist)
- **hasResponsive**: Whether file contains responsive variants
- **totalSelectors**: Count of documented selectors

### Content Entry
- **type**: Always "selector"
- **selectorType**: `class`, `id`, `element`, `pseudo`, `pseudo-hover`, or `complex`
- **selector**: The actual CSS selector (e.g., `.font-text`)
- **id**: ID from `@ID:` comment (e.g., `#01-01-03`)
- **category**: Category from comment block (e.g., "Font Family")
- **properties**: Array of CSS property names used (e.g., `["font-family", "line-height"]`)
- **cssRule**: Complete CSS rule as string (full selector block)
- **responsive**: Boolean if `.x` or `.d` variants exist
- **description**: Human-readable description (from category)

## Directory Structure

```
src/css/                  → Source CSS files
  ├── 00-config/
  ├── 01-text/
  ├── 02-colors/
  ├── 03-layout/
  ├── 04-decorators/
  └── ...

docs/asJson/              → Generated JSON docs
  ├── 00-config/
  │   ├── 01-pallete.json
  │   └── ...
  ├── 01-text/
  │   ├── 01-fonts.json
  │   └── ...
  └── ...
```

## @ID Comment Format

The script looks for ID comments in this format:

```css
/* @ID: #01-01-03 */
.font-text {
  font-family: var(--font-text);
}
```

## Category Comment Format

Category comments are extracted from triple-asterisk blocks:

```css
/*** Font Family ***/
.font-text { ... }
```

## Use Cases

### 1. Documentation Site Generation
```javascript
import fontsDocs from './docs/asJson/01-text/01-fonts.json';

// Generate HTML docs
fontsDocs.content.forEach(item => {
  console.log(`${item.selector}: ${item.description}`);
});
```

### 2. IDE Autocompletion
```typescript
// Generate TypeScript types
type LaguniteClass = 
  | 'font-text'
  | 'font-headers'
  | ...;
```

### 3. Search by CSS Property
```javascript
// Find all selectors using a specific property
const usesFlexbox = fontsDocs.content.filter(
  item => item.properties.includes('display') && 
          item.cssRule.includes('flex')
);
```

### 4. Responsive Utilities Report
```javascript
// List all responsive utilities
const responsiveUtils = fontsDocs.content.filter(
  item => item.responsive
);
```

## Integration with Build

Add to your build pipeline:

```json
{
  "scripts": {
    "prebuild": "npm run docs:generate && node scripts/generate-imports.js",
    "build": "vite build"
  }
}
```

## Troubleshooting

### Script fails with "Cannot find module 'postcss'"
```bash
npm install
```

### JSON files are empty
Check that CSS files have proper `@ID:` comments and valid syntax.

### Watch mode not detecting changes
Ensure nodemon is installed:
```bash
npm install --save-dev nodemon
```

## Future Enhancements

- [ ] Generate TypeScript types from JSON
- [ ] Create searchable HTML documentation
- [ ] Validate CSS against JSON (detect drift)
- [ ] Extract usage examples from demo files
- [ ] Generate utility class autocomplete for IDEs
