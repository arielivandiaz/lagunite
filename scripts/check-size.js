#!/usr/bin/env node
/**
 * Fail if dist/lagunite.css gzip size exceeds the RTP-5 budget.
 * Run after `npm run build`.
 */
import fs from 'fs';
import path from 'path';
import zlib from 'zlib';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const cssPath = path.join(__dirname, '../dist/lagunite.css');
const jsPath = path.join(__dirname, '../dist/lagunite.js');

const CSS_GZIP_BUDGET = 55 * 1024; // 55 KB
const JS_GZIP_BUDGET = 5 * 1024; // 5 KB

function gzipSize(file) {
  if (!fs.existsSync(file)) {
    throw new Error(`Missing ${file} — run npm run build first`);
  }
  const raw = fs.readFileSync(file);
  return zlib.gzipSync(raw).length;
}

function kb(n) {
  return (n / 1024).toFixed(2);
}

const cssGzip = gzipSize(cssPath);
const jsGzip = gzipSize(jsPath);

console.log(`lagunite.css gzip: ${kb(cssGzip)} KB (budget ${kb(CSS_GZIP_BUDGET)} KB)`);
console.log(`lagunite.js  gzip: ${kb(jsGzip)} KB (budget ${kb(JS_GZIP_BUDGET)} KB)`);

let failed = false;
if (cssGzip > CSS_GZIP_BUDGET) {
  console.error('❌ CSS gzip exceeds budget');
  failed = true;
}
if (jsGzip > JS_GZIP_BUDGET) {
  console.error('❌ JS gzip exceeds budget');
  failed = true;
}

if (failed) process.exit(1);
console.log('✅ Size budget OK');
