#!/usr/bin/env node

/**
 * Increment the dev compile counter stored in Times_Lagunite_was_compiled_in_dev.txt
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const COUNTER_PATH = path.join(__dirname, '../Times_Lagunite_was_compiled_in_dev.txt');

function readCount(filePath) {
  if (!fs.existsSync(filePath)) return 0;
  const raw = fs.readFileSync(filePath, 'utf8').trim();
  const parsed = parseInt(raw, 10);
  if (Number.isNaN(parsed)) {
    throw new Error(`Counter file contains a non-numeric value: "${raw}"`);
  }
  return parsed;
}

function writeCount(filePath, value) {
  fs.writeFileSync(filePath, `${value}`, 'utf8');
}

async function main() {
  const current = readCount(COUNTER_PATH);
  const next = current + 1;
  writeCount(COUNTER_PATH, next);
  console.log(`Dev compile count updated: ${current} -> ${next}`);
}

main().catch(err => {
  console.error('Failed to update dev compile count:', err.message);
  process.exit(1);
});
