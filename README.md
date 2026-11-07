# Lagunite 2.1

[![NPM Version](https://img.shields.io/npm/v/lagunite?style=flat-square)](https://www.npmjs.com/package/lagunite)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)

> **[Leer en Español](./README_ES.md)** · **[Our story](./story/STORY_EN.md)** · **[Landing / business brief](./README-BUSINESS.md)** · **[How to prompt Lagunite](./README-PROMPTS.md)**

Readable CSS, proven in production. Lagunite is the utility-first framework we used to ship many websites quickly and at scale: **descriptive class names**, semantic tokens, layered components (atoms → organisms) and a real night mode.

In the AI era we're adapting it for agents, but it is **not yet more efficient than Tailwind or plain CSS** in tokens per result. We keep working on it in the open — real examples in the Lab, a stronger core, and published benchmarks ([`story/BENCHMARK.md`](./story/BENCHMARK.md)).

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

Night mode: add `class="night"` on `body`.

Responsive prefixes: **base → `x*` (≤639px) → `d*` (≥640px)**. Flex gap: `.gap-*` / `xgap*` / `dgap*`.

---

## What’s in v2.1

| Layer | Includes |
| --- | --- |
| Config / tokens | palette, theme, measures, typography |
| Layout | flex, grid, spacing, containers, size, CQ helpers |
| Colors | surfaces (`.bg`, `.bg-surface*`), accents (`.bg-1`…`.bg-9`), text, borders |
| Atoms | buttons, inputs, table, badges, avatars, chips, tags, **spinner**, **progress-ring** |
| Molecules | form-groups, alerts, dropdown, tabs, tooltips, toast, stat-cards, **picker-wheel**, **selectable-option**, … |
| Compounds | cards, modals (`dialog.modal`), bottom-sheet, empty-state |
| Organisms | navbar, sidebar (+ drawer), footer, topbar, dashboard shells |

Full catalog: [`FEATURES.md`](./FEATURES.md) · cheatsheets under `src/css/*/`.

### Lab & site

| Surface | What |
| --- | --- |
| [`lab/`](./lab/) | HTML recipes (Modern Web Guidance → Lagunite). Index: `lab/index.html` |
| [`web/`](./web/) | Astro site: docs + Lab mirror (`/lab`, `/docs/…`) |
| `old/demos/` | Legacy demo pages (archived) |

---

## Lagunite + AI: work in progress

Today an agent builds more cheaply with Tailwind or plain CSS than with Lagunite — models know those by heart and have to learn Lagunite on every task. We don't hide it: we measure it. Every skills and core release is evaluated against the same set of screens ([`story/BENCHMARK.md`](./story/BENCHMARK.md)).

If you want to try building with an agent, this is what exists today:

| Available today | Path |
| --- | --- |
| Lean agent identity | [`AGENTS.md`](./AGENTS.md) |
| **How to prompt (users)** | [`README-PROMPTS.md`](./README-PROMPTS.md) |
| Skills map | [`ai/AGENTS-AND-SKILLS.md`](./ai/AGENTS-AND-SKILLS.md) |
| Layer + validate skills | [`ai/skills/`](./ai/skills/) · index [`ai/SKILLS-INDEX.md`](./ai/SKILLS-INDEX.md) |
| UI Validator agent | `ai/agents/lagunite-ui-validator.md` |
| Sync Cursor / Copilot / Claude wrappers | `npm run ai:sync` |
| Class docs for tools | `npm run docs:generate` → `docs/asJson` + `docs/asToon` |

**Typical agent loop:** `compose.md` → build HTML → `validate.md` (forms / night / a11y / anti-slop) → fix.

**Future exploration (paused, not part of the product):** JSON→HTML compiler / schema MVP. Track: [`ToDo-ai-first.md`](./ToDo-ai-first.md) · north star [`FUTURE-AI-FIRST.md`](./FUTURE-AI-FIRST.md). CSS gate first ([`ToDo-prod.md`](./ToDo-prod.md), personal review [`REVISION-v2.2.md`](./REVISION-v2.2.md)).

---

## Browsers & support

See [`SUPPORT.md`](./SUPPORT.md): Chromium, Firefox, Safari (macOS + iOS). **Print styles are not shipped.** CSS gzip budget ≤ 55 KB (`npm run check:size`).

---

## Anti-slop defaults (important)

- `.row` / `.col` start-aligned (center with `.flex-center` or `jc-c ai-c`)
- `.btn { margin: 0 }` — space with parent `gap` / `marg-*`
- Panels: `.bg` / `.card` / `.bg-surface*` — **not** `.bg-1`…`.bg-9`
- Muted: `.text-muted` / `.card-text` — on fills use `.color-on-fill`
- **Do not invent class names** — missing → closest utility or `<!-- GAP: … -->`

Migration notes: [`CHANGELOG.md`](./CHANGELOG.md). Taste filter for agents: [`ai/skills/anti-slop.md`](./ai/skills/anti-slop.md).

---

## Scripts

```bash
npm run dev           # Vite (CSS package)
npm run build         # dist/
npm run lint:css
npm run docs:generate # after CSS changes → asJson / asToon
npm run check:size    # after build
npm run ai:sync       # refresh IDE skill/agent wrappers
```

Astro site (separate package): `cd web && npm run dev` → Lab at `/lab`, docs under `/docs`.

---

## Contributing

See [`CONTRIBUTING.md`](./CONTRIBUTING.md). Release checklist: [`ToDo-prod.md`](./ToDo-prod.md).

## License

MIT © Ariel Diaz
