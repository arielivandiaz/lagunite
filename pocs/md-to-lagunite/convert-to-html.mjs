#!/usr/bin/env node
/**
 * Convert markdown → full Lagunite blog HTML using a single base template.
 *
 * Usage:
 *   node convert-to-html.mjs <input.md> [-o out.html] [--template path] [--css href]
 *   ./convert-to-html.sh posts/hello.md
 *
 * Placeholders in blog-template.html:
 *   {{TITLE}} {{DATE}} {{LANG}} {{CSS_HREF}} {{HOME_HREF}}
 *   {{DESCRIPTION_META}} {{LEAD}} {{CONTENT}}
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';
import { dirname, resolve, relative, basename, extname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { mdToLagunite, wrapArticle } from './md-to-lagunite.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = resolve(__dirname, '../..');
const DEFAULT_TEMPLATE = join(__dirname, 'blog-template.html');
const DEFAULT_OUT_DIR = join(__dirname, 'out');

/**
 * @param {string[]} argv
 */
function parseArgs(argv) {
  /** @type {{ input?: string, out?: string, template: string, css?: string, home: string, help: boolean }} */
  const opts = {
    template: DEFAULT_TEMPLATE,
    home: '#',
    help: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const a = argv[i];
    if (a === '-h' || a === '--help') opts.help = true;
    else if (a === '-o' || a === '--out') opts.out = argv[++i];
    else if (a === '-t' || a === '--template') opts.template = resolve(argv[++i]);
    else if (a === '--css') opts.css = argv[++i];
    else if (a === '--home') opts.home = argv[++i];
    else if (!a.startsWith('-') && !opts.input) opts.input = a;
    else {
      console.error(`Unknown argument: ${a}`);
      process.exit(1);
    }
  }

  return opts;
}

/**
 * Minimal YAML-ish frontmatter: --- \\n key: value \\n ---
 * @param {string} source
 * @returns {{ meta: Record<string, string>, body: string }}
 */
function parseFrontmatter(source) {
  const text = String(source)
    .replace(/^\uFEFF/, '')
    .replace(/\r\n/g, '\n')
    .replace(/\r/g, '\n');
  if (!text.startsWith('---\n')) {
    return { meta: {}, body: text };
  }

  const end = text.search(/\n---\s*(?:\n|$)/);
  if (end === -1) return { meta: {}, body: text };

  const raw = text.slice(4, end);
  const body = text.slice(end).replace(/^\n---\s*\n?/, '');
  /** @type {Record<string, string>} */
  const meta = {};

  for (const line of raw.split('\n')) {
    const m = line.match(/^([A-Za-z0-9_-]+)\s*:\s*(.*)$/);
    if (!m) continue;
    let value = m[2].trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    meta[m[1]] = value;
  }

  return { meta, body };
}

/**
 * First ATX h1 → title; strip it from body so the template header owns the title.
 * @param {string} body
 * @returns {{ title: string | null, body: string }}
 */
function extractTitle(body) {
  const lines = body.replace(/\r\n?/g, '\n').split('\n');
  let i = 0;
  while (i < lines.length && /^\s*$/.test(lines[i])) i += 1;
  const m = lines[i]?.match(/^#\s+(.+)$/);
  if (!m) return { title: null, body };

  const title = m[1].trim();
  i += 1;
  while (i < lines.length && /^\s*$/.test(lines[i])) i += 1;
  return { title, body: lines.slice(i).join('\n') };
}

/**
 * @param {string} fromFile
 * @param {string} toFile
 */
function relHref(fromFile, toFile) {
  let rel = relative(dirname(fromFile), toFile).replace(/\\/g, '/');
  if (!rel.startsWith('.')) rel = `./${rel}`;
  return rel;
}

/**
 * @param {string} template
 * @param {Record<string, string>} vars
 */
function fillTemplate(template, vars) {
  return template.replace(/\{\{([A-Z0-9_]+)\}\}/g, (_, key) =>
    Object.prototype.hasOwnProperty.call(vars, key) ? vars[key] : '',
  );
}

function printHelp() {
  console.log(`Usage:
  node convert-to-html.mjs <input.md> [options]

Options:
  -o, --out <file>        Output HTML (default: out/<basename>.html)
  -t, --template <file>   Base HTML template (default: blog-template.html)
  --css <href>            Stylesheet href (default: relative path to src/lagunite.css)
  --home <href>           Brand link href (default: #)
  -h, --help              Show help

Frontmatter (optional):
  ---
  title: Post title
  date: 2026-09-21
  description: One-line summary
  lang: es
  lead: Optional subtitle under the title
  ---

If title is omitted, the first # heading is used (and removed from the body).
`);
}

function main() {
  const opts = parseArgs(process.argv.slice(2));
  if (opts.help || !opts.input) {
    printHelp();
    process.exit(opts.help ? 0 : 1);
  }

  const inputPath = resolve(opts.input);
  if (!existsSync(inputPath)) {
    console.error(`Input not found: ${inputPath}`);
    process.exit(1);
  }

  const outPath = resolve(
    opts.out ||
      join(DEFAULT_OUT_DIR, `${basename(inputPath, extname(inputPath))}.html`),
  );

  const templatePath = resolve(opts.template);
  if (!existsSync(templatePath)) {
    console.error(`Template not found: ${templatePath}`);
    process.exit(1);
  }

  const source = readFileSync(inputPath, 'utf8');
  const { meta, body: afterFm } = parseFrontmatter(source);

  let title = meta.title || '';
  let bodyMd = afterFm;
  const extracted = extractTitle(afterFm);

  if (!title && extracted.title) {
    title = extracted.title;
    bodyMd = extracted.body;
  } else if (
    title &&
    extracted.title &&
    extracted.title.toLowerCase() === title.toLowerCase()
  ) {
    // Same title in body → strip duplicate H1
    bodyMd = extracted.body;
  }

  if (!title) title = basename(inputPath, extname(inputPath));

  const fragment = mdToLagunite(bodyMd);
  const content = wrapArticle(fragment, { className: 'col jc-fs ai-fs gap' });

  const cssHref =
    opts.css ||
    relHref(outPath, join(REPO_ROOT, 'src', 'lagunite.css'));

  const description = meta.description || '';
  const lead = meta.lead
    ? `<p class="font-s text-muted lh marg-0">${escapeText(meta.lead)}</p>`
    : '';

  const html = fillTemplate(readFileSync(templatePath, 'utf8'), {
    TITLE: escapeText(title),
    DATE: escapeText(meta.date || ''),
    LANG: escapeText(meta.lang || 'es'),
    CSS_HREF: cssHref,
    HOME_HREF: opts.home,
    DESCRIPTION_META: description
      ? `<meta name="description" content="${escapeAttr(description)}" />`
      : '',
    LEAD: lead,
    CONTENT: indentBlock(content, 8),
  });

  mkdirSync(dirname(outPath), { recursive: true });
  writeFileSync(outPath, html, 'utf8');
  console.log(`Wrote ${outPath}`);
}

/** @param {string} s */
function escapeText(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

/** @param {string} s */
function escapeAttr(s) {
  return escapeText(s).replace(/"/g, '&quot;');
}

/**
 * @param {string} block
 * @param {number} spaces
 */
function indentBlock(block, spaces) {
  const pad = ' '.repeat(spaces);
  return block
    .split('\n')
    .map((line) => (line.trim() ? pad + line : line))
    .join('\n');
}

main();
