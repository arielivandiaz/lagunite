import fs from 'fs';
import path from 'path';

// Define source and destination paths
const cssDir = path.resolve(process.cwd(), 'src/css');
const outputFile = path.resolve(process.cwd(), 'src/lagunite.css');

console.log('🚀 Generating CSS entry file...');

try {
  // Read subdirectories inside /css
  const cssFolders = fs.readdirSync(cssDir).filter(folder => 
    fs.statSync(path.join(cssDir, folder)).isDirectory() && /^\d+-.+/.test(folder)
  ).sort(); // Sort alphabetically (and numerically thanks to zero-padding)

  const importStatements = cssFolders.flatMap(folder => {
    const folderPath = path.join(cssDir, folder);
    
    // Read files inside each subdirectory
    const files = fs.readdirSync(folderPath).filter(file => 
      file.endsWith('.css')
    ).sort(); // Sort the files

    // Create the @import statement for each file
    return files.map(file => `@import './css/${folder}/${file}';`);
  });
  
  const fileContent = [
    '/* THIS FILE IS AUTO-GENERATED. DO NOT EDIT MANUALLY. */',
    '/* For changes, modify files in /src/css and run `npm run dev` or `npm run build`. */',
    '',
    ...importStatements
  ].join('\n');

  // Write the content to src/main.css
  fs.writeFileSync(outputFile, fileContent);

  console.log(`✅ src/lagunite.css generated successfully with ${importStatements.length} imports.`);

} catch (error) {
  console.error('❌ Error generating CSS file:', error);
  process.exit(1);
}