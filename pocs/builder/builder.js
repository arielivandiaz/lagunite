import { BLOCKS, BLOCK_TYPES, STARTER_PAGE } from './blocks.js';

const CSS_URL = new URL('../../src/lagunite.css', import.meta.url).href;
const STORAGE_KEY = 'lagunite-builder:v1';
const byId = new Map(BLOCKS.map((b) => [b.id, b]));
const typeLabel = new Map(BLOCK_TYPES.map((t) => [t.type, t.label]));

/*
 * Comportamientos de los bloques (burger, toggle de facturación).
 * La misma función corre en el canvas y se serializa dentro del HTML exportado.
 */
function lagBehaviors(root) {
  root.addEventListener('click', (e) => {
    const burger = e.target.closest('[data-lb-burger]');
    if (burger) {
      burger.closest('[data-lb-navbar]')?.classList.toggle('open');
      return;
    }
    const billing = e.target.closest('[data-lb-billing]');
    if (billing) {
      const section = billing.closest('[data-lb-pricing]');
      const mode = billing.dataset.lbBilling;
      section.querySelectorAll('[data-lb-billing]').forEach((b) => {
        const on = b === billing;
        b.classList.toggle('active', on);
        b.setAttribute('aria-pressed', String(on));
      });
      section.querySelectorAll('[data-monthly]').forEach((el) => {
        el.textContent = mode === 'yearly' ? el.dataset.yearly : el.dataset.monthly;
      });
    }
  });
}

// ─── Estado ────────────────────────────────────────────────
let uidSeq = 0;
const newUid = () => `b${Date.now().toString(36)}${(uidSeq++).toString(36)}`;

const state = {
  blocks: [], // [{ uid, id }]
  insertAt: null, // índice donde insertar; null = al final
  swapUid: null, // bloque cuyo variante se está cambiando
  filter: null, // type o null = todos
  night: false,
  mobile: false,
};

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (saved && Array.isArray(saved.blocks)) {
      state.blocks = saved.blocks.filter((b) => byId.has(b.id)).map((b) => ({ uid: newUid(), id: b.id }));
      state.night = !!saved.night;
      return;
    }
  } catch { /* storage no disponible: arrancamos con la página de ejemplo */ }
  state.blocks = STARTER_PAGE.map((id) => ({ uid: newUid(), id }));
}

function save() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ blocks: state.blocks.map(({ id }) => ({ id })), night: state.night }));
  } catch { /* ignorar */ }
}

// ─── Canvas (iframe) ───────────────────────────────────────
const frame = document.getElementById('canvas');
let doc = null;

const CANVAS_CHROME = `
  .lb-block { position: relative; }
  .lb-block:hover, .lb-block:focus-within, .lb-block.is-swapping { outline: 2px dashed var(--color-primary); outline-offset: -2px; }
  .lb-tools { position: absolute; top: 8px; right: 8px; z-index: 50; display: none; }
  .lb-block:hover .lb-tools, .lb-block:focus-within .lb-tools, .lb-block.is-swapping .lb-tools { display: flex; }
  .lb-insert { display: flex; justify-content: center; padding: 4px 0; opacity: 0.35; }
  .lb-insert:hover, .lb-insert:focus-within, .lb-insert.is-active, .lb-empty .lb-insert { opacity: 1; }
  .lb-insert.is-active { outline: 2px solid var(--color-primary); outline-offset: -2px; }
  .lb-flash { animation: lb-flash 0.9s ease; }
  @keyframes lb-flash { from { box-shadow: inset 0 0 0 4px var(--color-primary); } to { box-shadow: inset 0 0 0 0 transparent; } }
  @media (prefers-reduced-motion: reduce) { .lb-flash { animation: none; } }
`;

function initFrame() {
  frame.srcdoc = `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="${CSS_URL}" /><style>${CANVAS_CHROME}</style></head><body class="bg"></body></html>`;
  frame.addEventListener('load', () => {
    doc = frame.contentDocument;
    lagBehaviors(doc);
    doc.addEventListener('click', onCanvasClick);
    render();
  }, { once: true });
}

const insertZone = (index) => `
  <div class="lb-insert${state.insertAt === index && !state.swapUid ? ' is-active' : ''}">
    <button type="button" class="btn ghost size-xs" data-act="insert" data-index="${index}">+ Agregar sección acá</button>
  </div>`;

function renderCanvas() {
  if (!doc) return;
  doc.body.className = `bg${state.night ? ' night' : ''}${state.blocks.length ? '' : ' lb-empty'}`;
  doc.documentElement.classList.toggle('night', state.night);
  const parts = [insertZone(0)];
  state.blocks.forEach((b, i) => {
    const block = byId.get(b.id);
    parts.push(`
      <div class="lb-block${state.swapUid === b.uid ? ' is-swapping' : ''}" data-uid="${b.uid}">
        <div class="lb-tools row gap-xs ai-c card padd-xs shadow">
          <span class="font-xs text-muted padd-h-xs">${block.id}</span>
          <button type="button" class="btn alt size-xs" data-act="up" ${i === 0 ? 'disabled' : ''} aria-label="Subir ${block.name}">↑</button>
          <button type="button" class="btn alt size-xs" data-act="down" ${i === state.blocks.length - 1 ? 'disabled' : ''} aria-label="Bajar ${block.name}">↓</button>
          <button type="button" class="btn alt size-xs" data-act="swap">Cambiar variante</button>
          <button type="button" class="btn error ghost size-xs" data-act="remove" aria-label="Quitar ${block.name}">Quitar</button>
        </div>
        ${block.html}
      </div>`);
    parts.push(insertZone(i + 1));
  });
  doc.body.innerHTML = parts.join('');
}

function onCanvasClick(e) {
  const btn = e.target.closest('[data-act]');
  if (!btn) {
    // En el canvas los links no navegan.
    if (e.target.closest('a[href]')) e.preventDefault();
    return;
  }
  const act = btn.dataset.act;
  if (act === 'insert') {
    state.insertAt = Number(btn.dataset.index);
    state.swapUid = null;
    render();
    return;
  }
  const uid = btn.closest('[data-uid]').dataset.uid;
  const i = state.blocks.findIndex((b) => b.uid === uid);
  if (act === 'up' && i > 0) [state.blocks[i - 1], state.blocks[i]] = [state.blocks[i], state.blocks[i - 1]];
  if (act === 'down' && i < state.blocks.length - 1) [state.blocks[i + 1], state.blocks[i]] = [state.blocks[i], state.blocks[i + 1]];
  if (act === 'remove') {
    state.blocks.splice(i, 1);
    if (state.swapUid === uid) state.swapUid = null;
    state.insertAt = null;
  }
  if (act === 'swap') {
    state.swapUid = uid;
    state.insertAt = null;
    state.filter = byId.get(state.blocks[i].id).type;
  }
  save();
  render();
}

function flash(uid) {
  const el = doc?.querySelector(`[data-uid="${uid}"]`);
  if (!el) return;
  el.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
  el.classList.add('lb-flash');
  setTimeout(() => el.classList.remove('lb-flash'), 1000);
}

// ─── Paleta ────────────────────────────────────────────────
const typesEl = document.getElementById('types');
const listEl = document.getElementById('list');
const modeEl = document.getElementById('mode');
const cancelEl = document.getElementById('cancel');

function renderTypes() {
  const chip = (type, label) =>
    `<button type="button" class="btn size-xs${state.filter === type ? '' : ' ghost'}" data-type="${type ?? ''}" aria-pressed="${state.filter === type}">${label}</button>`;
  typesEl.innerHTML = chip(null, 'Todos') + BLOCK_TYPES.map((t) => chip(t.type, t.label)).join('');
}

function renderList() {
  const swapping = state.swapUid && state.blocks.find((b) => b.uid === state.swapUid);
  const items = BLOCKS.filter((b) => !state.filter || b.type === state.filter);
  listEl.classList.toggle('night', state.night);
  listEl.innerHTML = items.map((b) => {
    const current = swapping && swapping.id === b.id;
    return `
      <article class="card col ai-s gap-s flex-shrink-0 padd-s wp100${current ? ' card-primary' : ''}">
        <div class="lb-thumb border border-r bg"><div class="lb-thumb-inner bg" inert aria-hidden="true">${b.html}</div></div>
        <div class="row jc-sb ai-c gap-s wp100">
          <div class="col">
            <p class="font-s bold color-text marg-0">${b.name}</p>
            <p class="font-xs text-muted marg-0">${typeLabel.get(b.type)} · ${b.id}</p>
          </div>
          <button type="button" class="btn size-s" data-add="${b.id}" ${current ? 'disabled' : ''}>${swapping ? (current ? 'Actual' : 'Usar esta') : 'Agregar'}</button>
        </div>
        <p class="font-xs text-muted marg-0">${b.description}</p>
      </article>`;
  }).join('');
  scaleThumbs();
}

function scaleThumbs() {
  listEl.querySelectorAll('.lb-thumb').forEach((thumb) => {
    const inner = thumb.firstElementChild;
    const scale = thumb.clientWidth / inner.offsetWidth;
    inner.style.transform = `scale(${scale})`;
    thumb.style.height = `${Math.min(Math.max(inner.offsetHeight * scale, 60), 200)}px`;
  });
}
new ResizeObserver(scaleThumbs).observe(listEl);

function renderMode() {
  const nameAt = (i) => (state.blocks[i] ? byId.get(state.blocks[i].id).name : null);
  let text = 'Agregando al final de la página';
  let active = false;
  if (state.swapUid) {
    const b = state.blocks.find((x) => x.uid === state.swapUid);
    text = `Cambiando variante de “${byId.get(b.id).name}”`;
    active = true;
  } else if (state.insertAt !== null) {
    const before = nameAt(state.insertAt - 1);
    const after = nameAt(state.insertAt);
    text = before && after ? `Agregando entre “${before}” y “${after}”` : before ? `Agregando después de “${before}”` : after ? `Agregando antes de “${after}”` : 'Agregando a la página';
    active = true;
  }
  modeEl.textContent = text;
  cancelEl.classList.toggle('d-none', !active);
}

typesEl.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-type]');
  if (!btn) return;
  state.filter = btn.dataset.type || null;
  renderTypes();
  renderList();
});

listEl.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-add]');
  if (!btn) return;
  const id = btn.dataset.add;
  let uid;
  if (state.swapUid) {
    const b = state.blocks.find((x) => x.uid === state.swapUid);
    b.id = id;
    uid = b.uid;
    state.swapUid = null;
  } else {
    const at = state.insertAt ?? state.blocks.length;
    uid = newUid();
    state.blocks.splice(at, 0, { uid, id });
    state.insertAt = state.insertAt === null ? null : at + 1;
  }
  save();
  render();
  flash(uid);
});

cancelEl.addEventListener('click', () => {
  state.swapUid = null;
  state.insertAt = null;
  render();
});

// ─── Toolbar ───────────────────────────────────────────────
const themeEl = document.getElementById('theme');

document.querySelectorAll('[data-viewport]').forEach((btn) => {
  btn.addEventListener('click', () => {
    state.mobile = btn.dataset.viewport === 'mobile';
    document.querySelectorAll('[data-viewport]').forEach((b) => {
      const on = b === btn;
      b.classList.toggle('active', on);
      b.setAttribute('aria-pressed', String(on));
    });
    frame.classList.toggle('is-mobile', state.mobile);
  });
});

themeEl.addEventListener('click', () => {
  state.night = !state.night;
  save();
  render();
});

document.getElementById('reset').addEventListener('click', () => {
  if (!confirm('¿Volver a la página de ejemplo? Se pierde lo armado.')) return;
  state.blocks = STARTER_PAGE.map((id) => ({ uid: newUid(), id }));
  state.insertAt = null;
  state.swapUid = null;
  save();
  render();
});

function exportHtml() {
  const body = state.blocks.map((b) => `<!-- block: ${b.id} -->${byId.get(b.id).html}`).join('\n');
  const needsJs = state.blocks.some((b) => /data-lb-(burger|billing)/.test(byId.get(b.id).html));
  const script = needsJs ? `\n<script>\n(${lagBehaviors.toString()})(document);\n</script>` : '';
  return `<!DOCTYPE html>
<html lang="es"${state.night ? ' class="night"' : ''}>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Mi landing</title>
  <!-- Lagunite: ajustá la ruta a tu copia de dist/lagunite.css -->
  <link rel="stylesheet" href="lagunite.css" />
</head>
<body class="bg${state.night ? ' night' : ''}">
${body}
${script}
</body>
</html>
`;
}

const copyEl = document.getElementById('copy');
copyEl.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(exportHtml());
    copyEl.textContent = '¡Copiado!';
  } catch {
    copyEl.textContent = 'No se pudo copiar';
  }
  setTimeout(() => { copyEl.textContent = 'Copiar HTML'; }, 1500);
});

document.getElementById('download').addEventListener('click', () => {
  const url = URL.createObjectURL(new Blob([exportHtml()], { type: 'text/html' }));
  const a = Object.assign(document.createElement('a'), { href: url, download: 'landing.html' });
  a.click();
  URL.revokeObjectURL(url);
});

// ─── Render ────────────────────────────────────────────────
function render() {
  themeEl.textContent = state.night ? 'Day' : 'Night';
  renderCanvas();
  renderTypes();
  renderMode();
  renderList();
}

load();
initFrame();
