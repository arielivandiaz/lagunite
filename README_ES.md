# Lagunite 2.1

[![NPM Version](https://img.shields.io/npm/v/lagunite?style=flat-square)](https://www.npmjs.com/package/lagunite)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)

> **[Read in English](./README.md)**

CSS utility-first con **nombres de clase descriptivos**, tokens semánticos y componentes por capas (átomos → organismos). Pensado para equipos que prefieren markup legible a abreviaciones crípticas.

---

## Instalación

```bash
npm install lagunite
```

```js
// CSS
import 'lagunite/style.css';

// JS opcional (picker-wheel auto-init, etc.)
import { PickerWheel, initPickerWheels } from 'lagunite';
```

Build local: `dist/lagunite.css` y `dist/lagunite.js` tras `npm run build`.

---

## Inicio rápido

```html
<link rel="stylesheet" href="node_modules/lagunite/dist/lagunite.css" />

<body class="bg">
  <main class="container padd-v-l col gap">
    <h1 class="font-xl bold color-text">Bienvenido</h1>
    <p class="font-s text-muted">Texto muted: .text-muted — no .color-text-alt.</p>
    <div class="row gap-s">
      <button type="button" class="btn">Primario</button>
      <button type="button" class="btn alt">Secundario</button>
    </div>
  </main>
</body>
```

Modo noche: `class="night"` en `body`.

Prefijos responsive: base → `x*` (≤639px) → `d*` (≥640px). Gap flex: `.gap-*` / `xgap*` / `dgap*`.

---

## Qué incluye v2.1

| Capa | Incluye |
| --- | --- |
| Config / tokens | palette, theme, measures, typography |
| Layout | flex, grid, spacing, containers, size |
| Colors | superficies (`.bg`, `.bg-surface*`), acentos (`.bg-1`…`.bg-9`), texto, bordes |
| Atoms | buttons, inputs, table, badges, avatars, chips, tags |
| Molecules | form-groups, alerts, dropdown, tabs, stat-cards, **picker-wheel**, **selectable-option**, … |
| Compounds | cards, modals, bottom-sheet, empty-state |
| Organisms | navbar, sidebar, footer, topbar, dashboard shells |

Catálogo: [`FEATURES.md`](./FEATURES.md) · cheatsheets en `src/css/*/`.

Demos canónicas: `npm run dev` → [`/demos/`](./demos/).

---

## Navegadores y soporte

Ver [`SUPPORT.md`](./SUPPORT.md): Chromium, Firefox, Safari (macOS + iOS). **Print no está soportado.** Budget CSS gzip ≤ 55 KB (`npm run check:size`).

---

## Defaults anti-slop (importante)

- `.row` / `.col` alinean al inicio (centrar con `.flex-center` o `jc-c ai-c`)
- `.btn { margin: 0 }` — espacio con `gap` / `marg-*` del padre
- Paneles: `.bg` / `.card` / `.bg-surface*` — **no** `.bg-1`…`.bg-9`
- Muted: `.text-muted` / `.card-text` — sobre fills: `.color-on-fill`

Notas de migración: [`CHANGELOG.md`](./CHANGELOG.md).

---

## Scripts

```bash
npm run dev
npm run build
npm run lint:css
npm run docs:generate
npm run check:size   # después de build
```

---

## AI-first (futuro)

JSON→HTML / compiler es **exploración futura**, no parte del runtime CSS v2.1. Ver [`FUTURE-AI-FIRST.md`](./FUTURE-AI-FIRST.md) / [`ToDo-ai-first.md`](./ToDo-ai-first.md) (en pausa).

Skills para agentes: [`ai/`](./ai/).

---

## Contribuir

Ver [`CONTRIBUTING.md`](./CONTRIBUTING.md). Checklist de release: [`ToDo-prod.md`](./ToDo-prod.md).

## Licencia

MIT © Ariel Diaz
