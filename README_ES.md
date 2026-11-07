# Lagunite 2.1

[![NPM Version](https://img.shields.io/npm/v/lagunite?style=flat-square)](https://www.npmjs.com/package/lagunite)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)

> **[Read in English](./README.md)** · **[Nuestra historia](./story/README.md)** · **[Brief de negocio / landing](./README-BUSINESS.md)** · **[Cómo pedir UI (prompts)](./README-PROMPTS.md)**

CSS legible, probado en producción. Lagunite es el framework utility-first con el que construimos muchos sitios de forma rápida y escalable: **nombres de clase descriptivos**, tokens semánticos, componentes por capas (átomos → organismos) y modo noche real.

En la era de la IA lo estamos adaptando para agentes, pero **todavía no es más eficiente que Tailwind o CSS puro** en tokens vs resultado. Seguimos trabajando en eso, en público: ejemplos reales en el Lab, un core más sólido y benchmarks publicados ([`story/BENCHMARK.md`](./story/BENCHMARK.md)).

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

Prefijos responsive: **base → `x*` (≤639px) → `d*` (≥640px)**. Gap flex: `.gap-*` / `xgap*` / `dgap*`.

---

## Qué incluye v2.1

| Capa | Incluye |
| --- | --- |
| Config / tokens | palette, theme, measures, typography |
| Layout | flex, grid, spacing, containers, size, helpers CQ |
| Colors | superficies (`.bg`, `.bg-surface*`), acentos (`.bg-1`…`.bg-9`), texto, bordes |
| Atoms | buttons, inputs, table, badges, avatars, chips, tags, **spinner**, **progress-ring** |
| Molecules | form-groups, alerts, dropdown, tabs, tooltips, toast, stat-cards, **picker-wheel**, **selectable-option**, … |
| Compounds | cards, modals (`dialog.modal`), bottom-sheet, empty-state |
| Organisms | navbar, sidebar (+ drawer), footer, topbar, dashboard shells |

Catálogo: [`FEATURES.md`](./FEATURES.md) · cheatsheets en `src/css/*/`.

### Lab y sitio

| Superficie | Qué es |
| --- | --- |
| [`lab/`](./lab/) | Recipes HTML (Modern Web Guidance → Lagunite). Índice: `lab/index.html` |
| [`web/`](./web/) | Sitio Astro: docs + espejo del Lab (`/lab`, `/docs/…`) |
| `old/demos/` | Demos antiguas (archivo) |

---

## Lagunite + IA: en progreso

Hoy un agente construye más barato con Tailwind o CSS puro que con Lagunite: los modelos ya los conocen de memoria y a Lagunite lo tienen que aprender en cada tarea. No lo escondemos: lo medimos. Cada release de skills y del core se evalúa contra el mismo set de pantallas ([`story/BENCHMARK.md`](./story/BENCHMARK.md)).

Si querés probar construir con un agente, esto es lo que existe hoy:

| Ya existe | Ruta |
| --- | --- |
| Identidad lean del agente | [`AGENTS.md`](./AGENTS.md) |
| **Cómo pedir UI (prompts)** | [`README-PROMPTS.md`](./README-PROMPTS.md) |
| Mapa de skills | [`ai/AGENTS-AND-SKILLS.md`](./ai/AGENTS-AND-SKILLS.md) |
| Skills por capa + validate | [`ai/skills/`](./ai/skills/) · índice [`ai/SKILLS-INDEX.md`](./ai/SKILLS-INDEX.md) |
| Agente UI Validator | `ai/agents/lagunite-ui-validator.md` |
| Sync wrappers Cursor / Copilot / Claude | `npm run ai:sync` |
| Docs de clases para tools | `npm run docs:generate` → `docs/asJson` + `docs/asToon` |

**Loop típico del agente:** `compose.md` → HTML → `validate.md` (forms / night / a11y / anti-slop) → fix.

**Exploración a futuro (en pausa, no es parte del producto):** compiler JSON→HTML / schema MVP. Track: [`ToDo-ai-first.md`](./ToDo-ai-first.md) · norte [`FUTURE-AI-FIRST.md`](./FUTURE-AI-FIRST.md). Primero el gate CSS ([`ToDo-prod.md`](./ToDo-prod.md), revisión [`REVISION-v2.2.md`](./REVISION-v2.2.md)).

---

## Navegadores y soporte

Ver [`SUPPORT.md`](./SUPPORT.md): Chromium, Firefox, Safari (macOS + iOS). **Print no está soportado.** Budget CSS gzip ≤ 60 KB (`npm run check:size`).

---

## Defaults anti-slop (importante)

- `.row` / `.col` alinean al inicio (centrar con `.flex-center` o `jc-c ai-c`)
- `.btn { margin: 0 }` — espacio con `gap` / `marg-*` del padre
- Paneles: `.bg` / `.card` / `.bg-surface*` — **no** `.bg-1`…`.bg-9`
- Muted: `.text-muted` / `.card-text` — sobre fills: `.color-on-fill`
- **No inventar class names** — si falta → utilidad cercana o `<!-- GAP: … -->`

Notas de migración: [`CHANGELOG.md`](./CHANGELOG.md). Filtro de gusto para agentes: [`ai/skills/anti-slop.md`](./ai/skills/anti-slop.md).

---

## Scripts

```bash
npm run dev           # Vite (paquete CSS)
npm run build         # dist/
npm run lint:css
npm run docs:generate # tras cambios CSS → asJson / asToon
npm run check:size    # después de build
npm run ai:sync       # refrescar wrappers de skills/agentes en IDEs
```

Sitio Astro (paquete aparte): `cd web && npm run dev` → Lab en `/lab`, docs en `/docs`.

---

## Contribuir

Ver [`CONTRIBUTING.md`](./CONTRIBUTING.md). Checklist de release: [`ToDo-prod.md`](./ToDo-prod.md).

## Licencia

MIT © Ariel Diaz
