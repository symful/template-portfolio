import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const configDir = path.join(__dirname, '..', 'public', 'config');

const filesToMerge = [
  'profile.json',
  'education.json',
  'languages.json',
  'skills.json',
  'experience.json',
  'achievements.json',
  'projects.json',
  'organizations.json',
  'assignments.json',
  'theme.json'
];

async function mergeJsonFiles() {
  const mergedData = {};

  for (const file of filesToMerge) {
    const filePath = path.join(configDir, file);
    try {
      if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const data = JSON.parse(fileContent);
        // Use the filename without extension as the key
        const key = path.basename(file, '.json');
        mergedData[key] = data;
        console.log(`Merged ${file}`);
      } else {
        console.warn(`File not found: ${filePath}`);
      }
    } catch (error) {
       console.error(`Error reading or parsing ${file}:`, error);
    }
  }

  const outputPath = path.join(configDir, 'portfolio.json');
  fs.writeFileSync(outputPath, JSON.stringify(mergedData, null, 2), 'utf-8');
  console.log(`\nSuccessfully created ${outputPath}`);
  
  // Create a backup of old files and delete them
  console.log('\nCleaning up old individual JSON files...');
  for (const file of filesToMerge) {
      const filePath = path.join(configDir, file);
      if (fs.existsSync(filePath)) {
          fs.unlinkSync(filePath);
          console.log(`Deleted ${file}`);
      }
  }
  console.log('Cleanup complete.');
}

mergeJsonFiles();
