import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function getAllJsonFiles(dirPath, arrayOfFiles = []) {
  const files = fs.readdirSync(dirPath);
  
  files.forEach(file => {
    const fullPath = path.join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllJsonFiles(fullPath, arrayOfFiles);
    } else if (path.extname(file) === '.json') {
      arrayOfFiles.push(fullPath);
    }
  });
  
  return arrayOfFiles;
}

function mergeJsonFiles() {
  const asJsonDir = path.join(__dirname, '..', 'docs', 'asJson');
  const outputFile = path.join(__dirname, '..', 'docs', 'docs.json');
  
  // Check if the asJson folder exists
  if (!fs.existsSync(asJsonDir)) {
    console.error('The asJson folder does not exist');
    return;
  }
  
  const jsonFiles = getAllJsonFiles(asJsonDir);
  const mergedData = [];
  
  // Process each JSON file
  jsonFiles.forEach(filePath => {
    try {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const jsonData = JSON.parse(fileContent);
      mergedData.push(jsonData);
      console.log(`✓ Processed: ${path.relative(asJsonDir, filePath)}`);
    } catch (error) {
      console.error(`✗ Error processing ${filePath}:`, error.message);
    }
  });
  
  // Write the merged data to docs.json
  try {
    fs.writeFileSync(outputFile, JSON.stringify(mergedData, null, 2));
    console.log(`\n✓ docs.json file created with ${mergedData.length} merged files`);
  } catch (error) {
    console.error('✗ Error writing docs.json:', error.message);
  }
}

mergeJsonFiles();