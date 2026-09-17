# Lagunite 2.1

[![NPM Version](https://img.shields.io/npm/v/lagunite?style=flat-square)](https://www.npmjs.com/package/lagunite)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)

> **[Leer en Español](./README_ES.md)**

Utility-first CSS with **descriptive class names**, semantic tokens, and layered components (atoms → organisms). Built for teams that prefer readable markup over cryptic abbreviations.

---

## Install

```bash
npm install lagunite
```

```js
// CSS
import 'lagunite/style.css';

// Optional JS (picker-wheel auto-init, etc.)
import { PickerWheel, initPickerWheels } from 'lagunite';
```

CDN / local build: use `dist/lagunite.css` and `dist/lagunite.js` from this repo after `npm run build`.

---

## Quick start

```html
<link rel="stylesheet" href="node_modules/lagunite/dist/lagunite.css" />

<body class="bg">
  <main class="container padd-v-l col gap">
    <h1 class="font-xl bold color-text">Welcome</h1>
    <p class="font-s text-muted">Muted copy uses .text-muted — not .color-text-alt.</p>
    <div class="row gap-s">
      <button type="button" class="btn">Primary</button>
      <button type="button" class="btn alt">Secondary</button>
    </div>
  </main>
</body>
```

Night mode: add `class="night"` on `body` (toggle in demos).

Responsive prefixes: base → `x*` (≤639px) → `d*` (≥640px). Flex gap: `.gap-*` / `xgap*` / `dgap*`.

---

## What’s in v2.1

| Layer | Includes |
| --- | --- |
| Config / tokens | palette, theme, measures, typography |
| Layout | flex, grid, spacing, containers, size |
| Colors | surfaces (`.bg`, `.bg-surface*`), accents (`.bg-1`…`.bg-9`), text, borders |
| Atoms | buttons, inputs, table, badges, avatars, chips, tags |
| Molecules | form-groups, alerts, dropdown, tabs, stat-cards, **picker-wheel**, **selectable-option**, … |
| Compounds | cards, modals, bottom-sheet, empty-state |
| Organisms | navbar, sidebar, footer, topbar, dashboard shells |

Full catalog: [`FEATURES.md`](./FEATURES.md) · cheatsheets under `src/css/*/`.

Canonical demos: `npm run dev` → [`/demos/`](./demos/).

---

## Browsers & support

See [`SUPPORT.md`](./SUPPORT.md): Chromium, Firefox, Safari (macOS + iOS). **Print styles are not shipped.** CSS gzip budget ≤ 55 KB (`npm run check:size`).

---

## Anti-slop defaults (important)

- `.row` / `.col` start-aligned (center with `.flex-center` or `jc-c ai-c`)
- `.btn { margin: 0 }` — space with parent `gap` / `marg-*`
- Panels: `.bg` / `.card` / `.bg-surface*` — **not** `.bg-1`…`.bg-9`
- Muted: `.text-muted` / `.card-text` — on fills use `.color-on-fill`

Migration notes: [`CHANGELOG.md`](./CHANGELOG.md).

---

## Scripts

```bash
npm run dev          # Vite + demos
npm run build        # dist/
npm run lint:css
npm run docs:generate
npm run check:size   # after build
```

---

## AI-first (future)

JSON→HTML / compiler work is **exploration only** — not part of the v2.1 CSS runtime. See [`FUTURE-AI-FIRST.md`](./FUTURE-AI-FIRST.md) / [`ToDo-ai-first.md`](./ToDo-ai-first.md) (paused until CSS is stable).

Agent skills live under [`ai/`](./ai/).

---

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md). Release checklist: [`ToDo-prod.md`](./ToDo-prod.md).

## License

MIT © Ariel Diaz
