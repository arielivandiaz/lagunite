/**
 * POC shell: load MD → mdToLagunite → preview + optional source dump.
 */
import { mdToLagunite, wrapArticle } from './md-to-lagunite.js';

const editor = document.getElementById('md-editor');
const preview = document.getElementById('preview');
const htmlOut = document.getElementById('html-out');
const statusEl = document.getElementById('status');
const fileInput = document.getElementById('md-file');
const themeToggle = document.getElementById('theme-toggle');
const showHtml = document.getElementById('show-html');
const htmlPanel = document.getElementById('html-panel');

/** @param {string} msg */
function setStatus(msg) {
  if (statusEl) statusEl.textContent = msg;
}

function render() {
  const source = editor?.value ?? '';
  try {
    const fragment = mdToLagunite(source);
    const html = wrapArticle(fragment);
    if (preview) {
      preview.innerHTML = `<div class="card-body col gap">${html}</div>`;
    }
    if (htmlOut) htmlOut.textContent = html;
    setStatus(`${source.length} chars → rendered`);
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    if (preview) {
      preview.innerHTML = `<div class="card-body"><div class="alert alert-error" role="alert"><p class="font-s marg-0">${escapeUi(message)}</p></div></div>`;
    }
    setStatus(`Error: ${message}`);
  }
}

/** @param {string} s */
function escapeUi(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

async function loadSample() {
  try {
    const res = await fetch('./sample.md');
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const text = await res.text();
    if (editor) editor.value = text;
    render();
    setStatus('Loaded sample.md');
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    setStatus(`Could not fetch sample.md (${message}). Paste markdown or pick a file.`);
    if (editor && !editor.value) {
      editor.value = '# Paste markdown\n\nOr use **Choose .md file**.';
      render();
    }
  }
}

fileInput?.addEventListener('change', async () => {
  const file = fileInput.files?.[0];
  if (!file) return;
  const text = await file.text();
  if (editor) editor.value = text;
  render();
  setStatus(`Loaded ${file.name}`);
});

editor?.addEventListener('input', () => {
  render();
});

themeToggle?.addEventListener('change', () => {
  document.body.classList.toggle('night', themeToggle.checked);
});

showHtml?.addEventListener('change', () => {
  htmlPanel?.classList.toggle('d-none', !showHtml.checked);
});

document.getElementById('btn-sample')?.addEventListener('click', () => {
  loadSample();
});

document.getElementById('btn-clear')?.addEventListener('click', () => {
  if (editor) editor.value = '';
  render();
  setStatus('Cleared');
});

loadSample();
