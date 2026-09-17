# Canonical demos (`demos/`)

Stable screens for QA and release proof. Link `../src/lagunite.css` (and `../src/lagunite.js` when JS is needed).

| File | Covers |
| --- | --- |
| [index.html](./index.html) | Hub |
| [01-landing.html](./01-landing.html) | containers, grid, hero, buttons, cards, badges, footer |
| [02-dashboard.html](./02-dashboard.html) | sidebar, topbar, stat-cards, table, panels |
| [03-forms.html](./03-forms.html) | form-groups, inputs, select, checkbox/radio/toggle, alerts, selectable-option |
| [04-components.html](./04-components.html) | alerts, tabs, segmented, list-item, cards, empty-state, **picker-wheel** |
| [05-night-mode.html](./05-night-mode.html) | same surface recipe under `.night` |

**Criteria:** documented classes only · night toggle · basic a11y (labels, headings, focusable controls) · cheatsheet links in-page.

Open via `npm run dev` → `/demos/`.

Support matrix (browsers, night, print, size budget): [`../SUPPORT.md`](../SUPPORT.md).

---

## Inventory · older demos / POCs

| Path | Action |
| --- | --- |
| `demo-*.html` (repo root) | **Keep as archive** — exploratory; not canonical. Prefer `demos/` for release QA. |
| `pocs/ai-ui-test/b-*.html` | **Keep** — anti-slop / compose regression fixtures. |
| `pocs/poc-picker-wheel.html`, `pocs/mobile/*` | **Keep** — component POCs; promote patterns into `demos/` when needed. |
| `pocs/demo-*-layouts.html` | **Keep** — layout teaching pages. |
| `web/**` | **Out of scope** for v2.1 release (see ToDo-prod). |

Do **not** delete root `demo-*.html` in this pass — inventory only. Promote or delete in a dedicated cleanup PR if desired.
