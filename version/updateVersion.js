// https://github.com/arielivandiaz/auto-commit
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

// Replicate __dirname functionality in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Safely constructs the path to package.json
const packageJsonPath = path.join(__dirname, '..', 'package.json');

async function updateVersion() {
    // Get the command-line argument (mv, v, or none)
    const arg = process.argv[2];

    try {
        // Read the package.json file asynchronously
        const data = await fs.readFile(packageJsonPath, 'utf8');
        const packageObj = JSON.parse(data);
        
        // Split the version into its components and convert them to numbers
        let [major, minor, patch] = packageObj.version.split('.').map(Number);

        if (arg === 'mv') { // Update major version
            major++;
            minor = 0;
            patch = 0;
        } else if (arg === 'v') { // Update minor version
            minor++;
            patch = 0;
        } else { // Update patch (revision)
            patch++;
        }

        // Build the new version string
        const newVersion = `${major}.${minor}.${patch}`;
        packageObj.version = newVersion;

        // Write the updated object back to package.json, preserving formatting
        await fs.writeFile(packageJsonPath, JSON.stringify(packageObj, null, 2), 'utf8');
        
        // Print the new version to the console for the shell script to capture
        console.log(newVersion);

    } catch (err) {
        // If an error occurs, log it to the error console and exit the process
        console.error("Error updating version:", err);
        process.exit(1); // Exit with an error code to stop the shell script
    }
}

// Call the main function
updateVersion();