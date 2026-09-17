# Revisión personal v2.1 — antes de publicar

> **Estado:** en pulido · **No es “cerrado”** · **No publicar** hasta que firmes la sección final.  
> Trabajo de agente (RTP) = borrador técnico. Este doc = **tu** checklist de aceptación.  
> Fecha apertura: 2026-09-15 · Versión candidata: `2.1.0`  
> Relacionados: [`ToDo-prod.md`](./ToDo-prod.md) · [`FEATURES.md`](./FEATURES.md) · [`SUPPORT.md`](./SUPPORT.md) · [`CHANGELOG.md`](./CHANGELOG.md)  
> **Pasada agente (atajo):** [`REVISION-v2.1-ariel.md`](./REVISION-v2.1-ariel.md) — hallazgos + prioridades; no reemplaza tu §8.

### Cómo usar
1. Marca `[x]` solo cuando **vos** lo revisaste (ojo / teclado / navegador).
2. Si algo falla → anotalo en **§ Problemas abiertos** (abajo) y no marques la sección.
3. Orden sugerido: gates → demos → CSS críticos → skills → ejemplos de casos → pack.

---

## 0. Gates globales (antes de mirar pixel)

- [ ] `npm run lint:css` — 0 errores
- [ ] `npm run build` — OK
- [ ] `npm run check:size` — CSS gzip ≤ 55 KB
- [ ] `npm run docs:generate` — sin warning raro (no debe aparecer `07-form`)
- [ ] `npm pack --dry-run` — tarball con `dist/` + README + LICENSE
- [ ] `package.json` version = `2.1.0` y coincide con CHANGELOG / badges README
- [ ] No hay secretos / `.env` en el pack

---

## 1. Demos canónicas (`demos/`)

Abrir con `npm run dev` → `/demos/`. Probar **320 / 640 / 1024 / 1440** y toggle **Night/Day**.

| Demo | Revisar | OK |
| --- | --- | --- |
| [`index.html`](./demos/index.html) | Hub legible, links correctos | [ ] |
| [`01-landing.html`](./demos/01-landing.html) | Navbar burger móvil, hero, cards flat, footer, sin `bgg` page-fill | [ ] |
| [`02-dashboard.html`](./demos/02-dashboard.html) | Sidebar open móvil, topbar, stat-cards, tabla, badges | [ ] |
| [`03-forms.html`](./demos/03-forms.html) | Labels, select, checkbox, toggle, radio, selectable-option, alert, CTA único | [ ] |
| [`04-components.html`](./demos/04-components.html) | Tabs, segmented, list-item, empty-state, **modal**, **picker-wheel** (JS) | [ ] |
| [`05-night-mode.html`](./demos/05-night-mode.html) | Parte en `.night`; muted legible; `.bg-1` solo como acento + `.color-on-fill` | [ ] |
| [`README.md`](./demos/README.md) | Inventario coherente con lo que querés archivar | [ ] |

### Criterios por demo
- [ ] Solo clases documentadas (o `<!-- GAP -->` explícito)
- [ ] Sin traps anti-slop: flex center forzado en forms, twin CTA full-width, `.color-text-alt` como muted, `.bg-1`… como panel
- [ ] Focus visible al tabbear botones / links / inputs
- [ ] Headings en orden razonable; icon-only con `aria-label`

---

## 2. CSS — archivo por archivo (`src/css/`)

Marcá cada archivo tras mirar: tokens (no hex sueltos injustificados), `@ID`, `.night` si aplica, `prefers-reduced-motion` si anima, focus en interactivos.

### 00-config (5)
- [ ] `00-config/01-pallete.css`
- [ ] `00-config/02-typography.css`
- [ ] `00-config/03-theme.css`
- [ ] `00-config/04-measures.css`
- [ ] `00-config/05-base.css`

### 01-text (2)
- [ ] `01-text/01-fonts.css`
- [ ] `01-text/02-typography.css`

### 02-colors (3)
- [ ] `02-colors/01-background.css` — `.bg-1`… = acentos; `.bg-surface*`; comentarios `bgg-*`
- [ ] `02-colors/02-text.css` — `.text-muted`, `.color-on-fill`, deprecación muted de `.color-text-alt`
- [ ] `02-colors/03-border.css`

### 03-layout (10)
- [ ] `03-layout/01-flex.css` — default start + `.flex-center*`
- [ ] `03-layout/02-grid.css`
- [ ] `03-layout/03-position.css`
- [ ] `03-layout/04-margin.css`
- [ ] `03-layout/05-padding.css`
- [ ] `03-layout/06-containers.css` — dueño de `object-fit`
- [ ] `03-layout/07-overflow.css`
- [ ] `03-layout/08-size.css`
- [ ] `03-layout/09-width.css`
- [ ] `03-layout/10-height.css`

### 04-decorators (8)
- [ ] `04-decorators/01-effects.css` — `.surface-glass`
- [ ] `04-decorators/02-shadows.css`
- [ ] `04-decorators/03-opacity.css`
- [ ] `04-decorators/04-border.css`
- [ ] `04-decorators/05-transforms.css`
- [ ] `04-decorators/06-transitions.css`
- [ ] `04-decorators/07-animations.css` — reduced-motion en loops
- [ ] `04-decorators/08-filters.css`

### 05-atoms (9)
- [ ] `05-atoms/01-buttons.css` — `margin: 0`, `:focus-visible`
- [ ] `05-atoms/02-inputs.css` — valid/invalid + placeholder; checkbox/toggle/radio
- [ ] `05-atoms/03-table.css`
- [ ] `05-atoms/04-lists.css`
- [ ] `05-atoms/05-figures.css`
- [ ] `05-atoms/06-badges.css`
- [ ] `05-atoms/07-avatars.css`
- [ ] `05-atoms/08-chips.css`
- [ ] `05-atoms/09-tags.css`

### 06-molecules (15)
- [ ] `06-molecules/01-form-groups.css`
- [ ] `06-molecules/02-alerts.css` — close `:focus-visible`
- [ ] `06-molecules/03-dropdown.css`
- [ ] `06-molecules/04-tooltip.css`
- [ ] `06-molecules/05-breadcrumb.css`
- [ ] `06-molecules/06-dashboard-panels.css`
- [ ] `06-molecules/07-dashboard-alt-panels.css`
- [ ] `06-molecules/08-draggable-node.css`
- [ ] `06-molecules/09-segmented-control.css`
- [ ] `06-molecules/10-stat-cards.css`
- [ ] `06-molecules/11-list-item.css`
- [ ] `06-molecules/12-tabs.css`
- [ ] `06-molecules/13-skeleton.css`
- [ ] `06-molecules/14-picker-wheel.css` — **prioridad**
- [ ] `06-molecules/15-selectable-option.css` — **prioridad**

### 07-compounds (4)
- [ ] `07-compounds/01-cards.css` — flat default, elevated opt-in, night `.card-text`
- [ ] `07-compounds/02-modals.css` — close focus + reduced-motion
- [ ] `07-compounds/03-bottom-sheet.css`
- [ ] `07-compounds/04-empty-state.css`

### 08-organisms (7)
- [ ] `08-organisms/01-navbar.css` — focus brand/link/burger
- [ ] `08-organisms/02-sidebar.css`
- [ ] `08-organisms/03-footer.css` — night links
- [ ] `08-organisms/04-dashboard-shell.css`
- [ ] `08-organisms/05-dashboard-alt-shell.css`
- [ ] `08-organisms/06-topbar.css`
- [ ] `08-organisms/09-dnd-canvas.css` — salto 07/08 OK (documentado)

### 10-misc (3)
- [ ] `10-misc/01-display.css`
- [ ] `10-misc/02-cursor.css`
- [ ] `10-misc/03-pseudo.css`

### Entry
- [ ] `src/lagunite.css` — imports coherentes (auto `generate-imports`)
- [ ] `src/lagunite.js` — export + auto-init picker

---

## 3. JavaScript

- [ ] `src/js/06-molecules/14-picker-wheel.js` — API `data-values` / `change`, teclado, listbox, `LAGUNITE_NO_AUTO_INIT`
- [ ] `src/js/utils/dom.js` — sin sorpresas / exports usados
- [ ] Bundle `dist/lagunite.js` + `.map` tras build

---

## 4. Skills (`ai/skills/`)

Contrastá cada skill con el CSS real (¿documenta clases que no existen? ¿falta picker/selectable/surface?).

### Validator / craft
- [ ] `validate.md`
- [ ] `validate-structure.md`
- [ ] `validate-forms.md`
- [ ] `validate-night.md`
- [ ] `validate-a11y.md`
- [ ] `compose.md`
- [ ] `contrast.md`
- [ ] `anti-slop.md`

### Capas
- [ ] `tokens.md`
- [ ] `typography.md`
- [ ] `colors.md`
- [ ] `spacing.md`
- [ ] `flex.md`
- [ ] `grid.md`
- [ ] `containers.md`
- [ ] `decorators.md` — ¿menciona `.surface-glass`?
- [ ] `atoms.md`
- [ ] `molecules.md` — picker + selectable
- [ ] `compounds.md` — elevated ≤1
- [ ] `organisms.md` — salto 07/08
- [ ] `patterns.md` — landing/auth anti-slop
- [ ] `misc.md`
- [ ] `tailwind-migration.md`

### Índice / sync
- [ ] `ai/SKILLS-INDEX.md` al día
- [ ] `.claude/FRAMEWORK-QUICKREF.md` (si lo usás) no contradice flex-start / muted
- [ ] `.cursor/rules/lagunite-ai.mdc` alineado

---

## 5. Docs de producto (release)

- [ ] [`README.md`](./README.md) — install real, clases correctas, demos, AI-first = futuro
- [ ] [`README_ES.md`](./README_ES.md) — sync con EN
- [ ] [`CHANGELOG.md`](./CHANGELOG.md) — entrada `2.1.0` honesta
- [ ] [`SUPPORT.md`](./SUPPORT.md) — browsers / print / budget
- [ ] [`FEATURES.md`](./FEATURES.md) — refleja lo que realmente shippea
- [ ] [`CONTRIBUTING.md`](./CONTRIBUTING.md) + issue templates en `.github/ISSUE_TEMPLATE/`

---

## 6. Casos de ejemplo (armar / rehacer a mano)

Hacé (o pedí al agente) un HTML mínimo **nuevo** por caso; validalo vos en browser. No alcanza con que exista la demo canónica.

| # | Caso | Qué debe demostrar | Hecho |
| --- | --- | --- | --- |
| A | Auth / login | Un `.btn.size-l.marg-0.wp100` + link; `.text-muted`; sin twin CTA | [ ] |
| B | Settings form | `.form-group` + placeholders; start-aligned; footer actions `gap` | [ ] |
| C | Dashboard KPI | `.stat-card` + `.card` flat; no glass en todo | [ ] |
| D | Preference list | `.selectable-option` multi + radio | [ ] |
| E | Picker | `.picker-wheel` horizontal o vertical + evento `change` | [ ] |
| F | Night strip | `.night` + panel `.card` + acento `.bg-1.color-on-fill` | [ ] |
| G | Modal | Abrir/cerrar; focus en close; Esc/click overlay si aplica | [ ] |
| H | Landing corta | Hero sin `bgg` full-page; ≤1 `.card-elevated` | [ ] |

Referencias útiles (no sustituyen el caso): `pocs/ai-ui-test/b-01-auth.html`, `demos/03`–`05`.

---

## 7. Problemas / riesgos a resolver (pulido)

Marcá cuando quede **cerrado por vos**. Agregá filas nuevas abajo.

| ID | Tema | Severidad | Estado |
| --- | --- | --- | --- |
| P1 | CSS source map: Vite lib no emite `lagunite.css.map` (solo JS `.map`) — ¿aceptable o hay que forzar mapa CSS? | Media | [ ] |
| P2 | Typo path interno `01-pallete.css` — won’t fix v2.1; ¿documentado OK en README/SUPPORT? | Baja | [ ] |
| P3 | `object-position` utilities no shippean — cheatsheets viejos ¿quedan limpios? | Baja | [ ] |
| P4 | Organisms salto `06`→`09` — ¿OK dejarlo o confunde? | Baja | [ ] |
| P5 | Demos: revisar `style=""` / GAP restantes (min-heights, max-width captions) | Media | [ ] |
| P6 | Skills vs CSS: `decorators.md` / `contrast.md` / quickref pueden estar desfasados | Media | [ ] |
| P7 | POCs root `demo-*.html` / `pocs/` desactualizados post anti-slop — inventario only; ¿archivar/mover? | Baja | [ ] |
| P8 | `web/` fuera de alcance pero sigue en disco — ¿confunde al publicar? | Baja | [ ] |
| P9 | Smoke real Safari / Firefox (SUPPORT dice supported; ¿lo probaste vos?) | Alta | [ ] |
| P10 | README ejemplos vs clases inventadas antiguas — ya reescrito; releer una vez más | Media | [ ] |
| P11 | Increment-build / compile count en cada `build` — ¿molestia para release tag? | Baja | [ ] |
| P12 | Publicar: tag `v2.1.0` + `npm publish` solo tras firmar §8 | — | [ ] |

### Nuevos (agregá acá mientras revisás)

| ID | Tema | Severidad | Estado |
| --- | --- | --- | --- |
|  |  |  | [ ] |

---

## 8. Firma personal (solo cuando todo lo crítico esté OK)

- [ ] Revisé demos §1
- [ ] Revisé CSS prioritarios (colors, flex, buttons, inputs, picker, selectable, cards, navbar) §2
- [ ] Revisé skills críticas (compose, anti-slop, colors, molecules, patterns) §4
- [ ] Armé o validé casos A–H §6
- [ ] No quedan filas **Alta** abiertas en §7
- [ ] CHANGELOG / README / version alineados
- [ ] **Autorizo** `npm publish` / tag `v2.1.0`

Firma: _______________ · Fecha: _______________

---

## Nota

Mientras este documento no esté firmado, tratá `ToDo-prod.md` como historial de trabajo RTP, **no** como luz verde de release.
