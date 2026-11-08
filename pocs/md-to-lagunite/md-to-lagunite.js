/**
 * MD → Lagunite HTML (browser, zero deps).
 *
 * Supports a CommonMark-ish subset + Lagunite directives:
 *   :::card … :::
 *   :::alert [info|success|warning|error] … :::
 *   ```lagunite  → trusted HTML snippet (POC only)
 *
 * @example
 *   import { mdToLagunite } from './md-to-lagunite.js';
 *   root.innerHTML = mdToLagunite(source);
 */

const ALERT_KINDS = new Set(['info', 'success', 'warning', 'error']);

/** @param {string} s */
function escapeHtml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Inline: `code`, **bold**, *italic*, [text](url)
 * Order matters: code first so markdown inside ticks stays literal.
 * @param {string} text
 */
function inline(text) {
  let s = escapeHtml(text);

  s = s.replace(/`([^`]+)`/g, '<code class="font-s">$1</code>');
  s = s.replace(/\*\*([^*]+)\*\*/g, '<strong class="bold">$1</strong>');
  // italics: single *…* (after bold already consumed **)
  s = s.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  s = s.replace(
    /\[([^\]]+)\]\(([^)\s]+)\)/g,
    '<a class="color-primary" href="$2">$1</a>',
  );

  return s;
}

/**
 * @typedef {'p'|'h'|'ul'|'ol'|'quote'|'hr'|'code'|'fence'|'directive'|'blank'} BlockKind
 * @typedef {{ kind: BlockKind, level?: number, ordered?: boolean, lang?: string, name?: string, arg?: string, lines: string[] }} Block
 */

/**
 * Split markdown into coarse blocks (line-oriented).
 * @param {string} src
 * @returns {Block[]}
 */
function tokenize(src) {
  const lines = String(src).replace(/\r\n?/g, '\n').split('\n');
  /** @type {Block[]} */
  const blocks = [];
  let i = 0;

  const push = (block) => {
    blocks.push(block);
  };

  while (i < lines.length) {
    const line = lines[i];

    // fenced code
    const fenceOpen = line.match(/^```([\w-]*)\s*$/);
    if (fenceOpen) {
      const lang = fenceOpen[1] || '';
      i += 1;
      const body = [];
      while (i < lines.length && !/^```\s*$/.test(lines[i])) {
        body.push(lines[i]);
        i += 1;
      }
      if (i < lines.length) i += 1; // closing ```
      push({ kind: 'fence', lang, lines: body });
      continue;
    }

    // directive :::name [arg]
    const dirOpen = line.match(/^:::(\w+)(?:\s+(\S+))?\s*$/);
    if (dirOpen) {
      const name = dirOpen[1];
      const arg = dirOpen[2] || '';
      i += 1;
      const body = [];
      while (i < lines.length && !/^:::\s*$/.test(lines[i])) {
        body.push(lines[i]);
        i += 1;
      }
      if (i < lines.length) i += 1;
      push({ kind: 'directive', name, arg, lines: body });
      continue;
    }

    if (/^\s*$/.test(line)) {
      push({ kind: 'blank', lines: [] });
      i += 1;
      continue;
    }

    if (/^---+\s*$/.test(line) || /^\*\*\*+\s*$/.test(line)) {
      push({ kind: 'hr', lines: [] });
      i += 1;
      continue;
    }

    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      push({ kind: 'h', level: heading[1].length, lines: [heading[2]] });
      i += 1;
      continue;
    }

    if (/^>\s?/.test(line)) {
      const body = [];
      while (i < lines.length && /^>\s?/.test(lines[i])) {
        body.push(lines[i].replace(/^>\s?/, ''));
        i += 1;
      }
      push({ kind: 'quote', lines: body });
      continue;
    }

    if (/^[-*+]\s+/.test(line)) {
      const body = [];
      while (i < lines.length && /^[-*+]\s+/.test(lines[i])) {
        body.push(lines[i].replace(/^[-*+]\s+/, ''));
        i += 1;
      }
      push({ kind: 'ul', lines: body });
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const body = [];
      while (i < lines.length && /^\d+\.\s+/.test(lines[i])) {
        body.push(lines[i].replace(/^\d+\.\s+/, ''));
        i += 1;
      }
      push({ kind: 'ol', lines: body });
      continue;
    }

    // paragraph: gather until blank / special
    const body = [line];
    i += 1;
    while (i < lines.length) {
      const next = lines[i];
      if (/^\s*$/.test(next)) break;
      if (/^#{1,3}\s+/.test(next)) break;
      if (/^>\s?/.test(next)) break;
      if (/^[-*+]\s+/.test(next)) break;
      if (/^\d+\.\s+/.test(next)) break;
      if (/^```/.test(next)) break;
      if (/^:::/.test(next)) break;
      if (/^---+\s*$/.test(next) || /^\*\*\*+\s*$/.test(next)) break;
      body.push(next);
      i += 1;
    }
    push({ kind: 'p', lines: body });
  }

  return blocks;
}

/**
 * @param {Block} block
 * @param {(inner: string) => string} [renderInner]
 */
function renderBlock(block, renderInner = mdToLagunite) {
  switch (block.kind) {
    case 'blank':
      return '';

    case 'hr':
      return '<hr class="border-t border-light marg-v" />';

    case 'h': {
      const tag = `h${block.level}`;
      const size =
        block.level === 1 ? 'font-xl' : block.level === 2 ? 'font-l' : 'font-m';
      return `<${tag} class="${size} bold color-text">${inline(block.lines[0])}</${tag}>`;
    }

    case 'p':
      return `<p class="font-s lh color-text">${inline(block.lines.join(' '))}</p>`;

    case 'ul':
      return [
        '<ul class="list-disc list-inside list-spaced font-s color-text col gap-xs">',
        ...block.lines.map((item) => `<li>${inline(item)}</li>`),
        '</ul>',
      ].join('');

    case 'ol':
      return [
        '<ol class="list-decimal list-inside list-spaced font-s color-text col gap-xs">',
        ...block.lines.map((item) => `<li>${inline(item)}</li>`),
        '</ol>',
      ].join('');

    case 'quote': {
      const body = inline(block.lines.join(' '));
      return `<div class="alert alert-info" role="note"><p class="font-s marg-0">${body}</p></div>`;
    }

    case 'fence': {
      const lang = (block.lang || '').toLowerCase();
      const raw = block.lines.join('\n');

      // Trusted Lagunite/HTML snippet — author-controlled POC input only
      if (lang === 'lagunite' || lang === 'html') {
        return `<div class="row ai-c gap flex-wrap">${raw}</div>`;
      }

      return [
        '<pre class="bg-surface padd-s border-r overflow-auto font-s">',
        `<code>${escapeHtml(raw)}</code>`,
        '</pre>',
      ].join('');
    }

    case 'directive':
      return renderDirective(block, renderInner);

    default:
      return `<!-- GAP: unknown block ${block.kind} -->`;
  }
}

/**
 * @param {Block} block
 * @param {(inner: string) => string} renderInner
 */
function renderDirective(block, renderInner) {
  const name = (block.name || '').toLowerCase();
  const innerMd = block.lines.join('\n');
  const innerHtml = renderInner(innerMd).trim();

  if (name === 'card') {
    return [
      '<article class="card">',
      '<div class="card-body col gap-s">',
      innerHtml,
      '</div>',
      '</article>',
    ].join('');
  }

  if (name === 'alert') {
    let kind = (block.arg || 'info').toLowerCase();
    if (!ALERT_KINDS.has(kind)) kind = 'info';
    return `<div class="alert alert-${kind}" role="status">${innerHtml}</div>`;
  }

  // Unknown directive → visible GAP, still render children
  return [
    `<!-- GAP: unknown directive ::: ${escapeHtml(name)} -->`,
    `<div class="col gap-s bordered padd-s">${innerHtml}</div>`,
  ].join('');
}

/**
 * Convert markdown source to a Lagunite HTML fragment.
 * @param {string} source
 * @returns {string}
 */
export function mdToLagunite(source) {
  const blocks = tokenize(source);
  const parts = [];

  for (const block of blocks) {
    const html = renderBlock(block, mdToLagunite);
    if (html) parts.push(html);
  }

  return parts.join('\n');
}

/**
 * Wrap a fragment in a page column shell (optional helper for apps).
 * @param {string} fragmentHtml
 * @param {{ className?: string }} [opts]
 */
export function wrapArticle(fragmentHtml, opts = {}) {
  const className = opts.className || 'col jc-fs ai-fs gap';
  return `<div class="${className}">${fragmentHtml}</div>`;
}

export const __test = { escapeHtml, inline, tokenize, renderBlock };
