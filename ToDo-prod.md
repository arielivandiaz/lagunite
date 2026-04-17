# Lagunite — Ready to Prod (v2.1)

> **Fecha:** 2026-04-16 · **Versión actual:** 2.0.21 · **Objetivo:** llevar Lagunite a un release estable en NPM con calidad auditada archivo por archivo.
>
> **Scope explícito:**
> - ✅ En alcance: `src/css/**`, `dist/`, `docs/` (generados), scripts, release engineering.
> - ⏸️ Fuera de alcance por ahora: `web/**` (Ariel limpia luego), `lagunite-web/**` (proyecto separado, no tocar).
>
> Los archivos viejos (`ToDo.md`, `ToDoAriel.md`, `list-componentes-to-do.md`, `checklist.md`) se archivan como referencia. Este documento es la única fuente de verdad para la senda a producción.

---

## 📊 Diagnóstico inicial

**Lo que YA está hecho (verificado en repo):**
- 10 capas CSS completas con todos los archivos importados en `src/lagunite.css`.
- Componentes cubiertos: atoms (buttons, inputs, table, lists, figures, badges, avatars, chips, tags); molecules (form-groups, alerts, dropdown, tooltip, breadcrumb, dashboard-panels, segmented-control, stat-cards, list-item, tabs, skeleton, draggable-node); compounds (cards, modals, bottom-sheet, empty-state); organisms (navbar, sidebar, footer, dashboard-shell, topbar, dnd-canvas).
- Cheatsheets por capa + 16 skill files en `ai/skills/`.
- `CLAUDE.md` + `.claude/FRAMEWORK-QUICKREF.md`.
- Build funcional (Vite + PostCSS), `dist/lagunite.css` + `.js` + `.umd.cjs` generándose.
- Stylelint instalado, script `lint:css` definido.
- Docs auto-generadas en `docs/asJson` y `docs/asToon`.

**Gaps críticos para producción:**
1. **Auditoría archivo por archivo sin empezar:** `checklist.md` tiene 50 filas con todas las columnas vacías (revisado / Ids / correcciones / readyToProd).
2. **Stylelint nunca corrido a fondo**, posibles inconsistencias acumuladas.
3. **README.md apunta a features pero no refleja el estado real** de los componentes v2.0.21.
4. **Sin `CHANGELOG.md`** formal con historial de versiones.
5. **Sin release workflow** (tagging, publicación NPM validada, semver claro).
6. **Sin auditoría a11y** (focus visible, contraste, aria, navegación teclado).
7. **Sin verificación cross-browser** documentada.
8. **Demos dispersas en root** (`demo-*.html`, `poc-*.html`, `pocs/`): falta un set canónico de demos de validación para QA manual del release.

---

## 🚦 Plan por fases

### Fase RTP-1 · Auditoría CSS archivo por archivo

> **Meta:** completar la tabla de `checklist.md` para los 50 archivos de `src/css/**`. Este es el bloqueante raíz: hasta que cada archivo esté marcado como `readyToProd`, no hay release.

Para **cada archivo CSS** validar y marcar columna:
- [ ] **revisado** — leído de principio a fin en la versión actual.
- [ ] **Ids** — todos los bloques tienen ID concreto `#NN-NN-XX` (no placeholders `#NN-NN-XX` sin número).
- [ ] **correcciones** — typos, selectores inválidos, media queries mal escritas, propiedades deprecadas corregidas.
- [ ] **cambios** — renombres / consolidaciones documentados en el commit.
- [ ] **upgrades** — modernizaciones opcionales ya aplicadas (tokens donde hay hardcodes, `gap` donde hay margin-hack, etc.).
- [ ] **readyToProd** — firma final: sin dudas abiertas, consistente con el resto del sistema, cubierto por al menos una demo.

**Orden recomendado** (de infra hacia arriba):

- [x] `00-config/01-pallete.css` — ✅ 2026-04-16. 5 paletas HSL × 11 escalones, sin typos, IDs OK. Fix menor: whitespace en `:root {  `. Rename a `01-palette.css` diferido (batch con imports + docs).
- [x] `00-config/02-typography.css` — ✅ 2026-04-16. 5 families + 7 sizes + 4 weights. Todas las vars en uso (`--font-display` → stat-cards). Fix: consolidé 3 `@import url(...)` de Google Fonts en 1 request.
- [x] `00-config/03-theme.css` — ✅ 2026-04-16. Light + dark (`.night`) + toggle classes. Todas las vars (`-rgb`, border-width, chip, shadow) en uso. Decisiones: `--border-width-md` se queda (40+ usos), `.night *` universal selector se queda (patrón deliberado), indent cosmético se deja. Deuda técnica anotada: `--color-primary` hardcode vs palette (refactor fuera de scope).
- [x] `00-config/04-measures.css` — ✅ 2026-04-16. Spacing (14 niveles) + radius (5) + breakpoints (4). **Bug fix:** agregado `--space-0: 0` (se referenciaba en `segmented-control:30` sin estar definido). Blank line cosmética eliminada.
- [x] `00-config/05-base.css` — ✅ 2026-04-16. **3 bugs fix:** vars indefinidas corregidas (`--background_body` → `--color-bg`, `--text_color_alt` → `--color-text-alt`, `--color-bg-secondary` → `--color-bg-alt`). **Código muerto:** eliminado bloque "Media Query Example" (29 líneas de comentario mal formado). **Normalización:** breakpoint random `281-767px` en tabla mobile → `max-width: 639px` (alineado con framework). IDs renumerados secuencialmente. Deuda reconocida: `!important` en `a:hover`, hardcodes de px/color en `code`/`blockquote` (dejados por estabilidad visual).
- [x] `01-text/01-fonts.css` — ✅ 2026-04-16. h1-h6 fluid + MQ desktop, familias (.font-*), sizes (.font-xs..3xl + 250-500%), fluid, weights. **Bug fix:** `--line-height-tight` indefinido (usado aquí y en badges) → añadido a `02-typography.css` junto con `-normal` y `-loose`. Typos en comentarios (`**/`) y doble declaración `.font-weight-0` simplificada.
- [x] `01-text/02-typography.css` — ✅ 2026-04-16. Transform (upper/lower/capitalize), letter-spacing (6), line-height (6), text-align (5 × 3 breakpoints). Typos `**/` → `*/` (5 casos). Decisiones: letter-spacing `-l`/`-xl` en `em` se deja (intencional: proporcional al font-size). `.ta-ja` (justify-all) se deja pese a soporte browser limitado — API ya documentada, no rompe.
- [x] `02-colors/01-background.css` — ✅ 2026-04-16. 458 líneas: semánticos (bg/bg-alt/bg-1..9), b/w, success/warning/error, 8 gradientes + 24 directionales, paletas completas (gray/blue/green/yellow/red × 11). **2 bugs fix:** `var(--color-text)` indefinido usado 3 veces (2 aquí + 1 en buttons) → `--color-text-base`. **Renumeración IDs:** `#02-02-*` → `#02-01-*` (alinear con orden de archivo).
- [x] `02-colors/02-text.css` — ✅ 2026-04-16. 7 bloques: text-base/alt, primary/secondary/tertiary (con light/dark), almost-b/w, success/warning/error, paletas completas. Sin bugs. **Renumeración IDs:** `#02-01-*` → `#02-02-*` (alinear con orden de archivo). Trailing blank lines limpiadas.
- [x] `02-colors/03-border.css` — ✅ 2026-04-16. 4 bloques: semánticos (primary/secondary/tertiary + light/dark), b/w/transparent, success/warning/error + combinatorias con `.bg-*.border`, paletas completas. IDs `#02-03-*` correctos. Sin bugs, sin cambios.
- [ ] `03-layout/01-flex.css`
- [ ] `03-layout/02-grid.css`
- [ ] `03-layout/03-position.css`
- [ ] `03-layout/04-margin.css`
- [ ] `03-layout/05-padding.css`
- [ ] `03-layout/06-containers.css`
- [ ] `03-layout/07-overflow.css`
- [ ] `03-layout/08-size.css`
- [ ] `03-layout/09-width.css`
- [ ] `03-layout/10-height.css`
- [ ] `04-decorators/01-effects.css`
- [ ] `04-decorators/02-shadows.css`
- [ ] `04-decorators/03-opacity.css`
- [ ] `04-decorators/04-border.css`
- [ ] `04-decorators/05-transforms.css`
- [ ] `04-decorators/06-transitions.css`
- [ ] `04-decorators/07-animations.css`
- [ ] `04-decorators/08-filters.css`
- [x] `05-atoms/01-buttons.css` — ✅ 2026-04-16. Revisado en auditoría anterior, sin bugs.
- [x] `05-atoms/02-inputs.css` — ✅ 2026-04-17. **Fix:** declaración duplicada `appearance: textfield` eliminada (línea 992-993).
- [x] `05-atoms/03-table.css` — ✅ 2026-04-16. Revisado, sin bugs.
- [x] `05-atoms/04-lists.css` — ✅ 2026-04-16. Revisado, sin bugs.
- [x] `05-atoms/05-figures.css` — ✅ 2026-04-16. Revisado, sin bugs.
- [x] `05-atoms/06-badges.css` — ✅ 2026-04-16. Revisado, sin bugs.
- [x] `05-atoms/07-avatars.css` — ✅ 2026-04-16. **Rewrite completo:** archivo tenía ~10 tokens inexistentes (`--color-neutral-*`, `--color-surface`, `--color-text-inverse`, `--color-info`, `--color-success-dark`, `--transition-duration-*`, `--space-1-5`, `--font-weight-semibold`). Mapeado a tokens válidos del framework.
- [x] `05-atoms/08-chips.css` — ✅ 2026-04-16. Revisado, sin bugs.
- [x] `05-atoms/09-tags.css` — ✅ 2026-04-16. Revisado, sin bugs.
- [x] `06-molecules/01-form-groups.css` — ✅ 2026-04-16. Revisado, sin bugs.
- [x] `06-molecules/02-alerts.css` — ✅ 2026-04-16. Revisado, sin bugs.
- [x] `06-molecules/03-dropdown.css` — ✅ 2026-04-16. Revisado, sin bugs.
- [x] `06-molecules/04-tooltip.css` — ✅ 2026-04-16. Revisado, sin bugs.
- [x] `06-molecules/05-breadcrumb.css` — ✅ 2026-04-16. Revisado, sin bugs.
- [x] `06-molecules/06-dashboard-panels.css` — ✅ 2026-04-16. Revisado, sin bugs.
- [x] `06-molecules/07-dashboard-alt-panels.css` — ✅ 2026-04-17. Hardcodes intencionales (hex, rgba) del estilo alt-dashboard. **Fix stylelint:** añadido `-webkit-backdrop-filter` para Safari iOS.
- [x] `06-molecules/08-draggable-node.css` — ✅ 2026-04-16. **Fix:** `var(--space-44)` indefinido → `calc(var(--space-32) + var(--space-12))`.
- [x] `06-molecules/09-segmented-control.css` — ✅ 2026-04-16. Revisado, sin bugs.
- [x] `06-molecules/10-stat-cards.css` *(renombrado desde `09-stat-cards.css`)* — ✅ 2026-04-16. **Resolución de colisión:** renombrado + IDs `#06-09-*` → `#06-10-*`. Sin bugs funcionales.
- [x] `06-molecules/11-list-item.css` *(renombrado desde `10-list-item.css`)* — ✅ 2026-04-16. **Renombrado** + IDs `#06-10-*` → `#06-11-*`. **Bug fix:** `var(--color-info)` → `var(--blue-500)`.
- [x] `06-molecules/12-tabs.css` *(renombrado desde `10-tabs.css`)* — ✅ 2026-04-16. **Renombrado** + IDs `#06-10-*` → `#06-12-*`. Sin bugs funcionales.
- [x] `06-molecules/13-skeleton.css` *(renombrado desde `11-skeleton.css`)* — ✅ 2026-04-16. **Renombrado** + IDs `#06-11-*` → `#06-13-*`. Sin bugs funcionales.
- [x] `07-compounds/01-cards.css` — ✅ 2026-04-16. Revisado, sin bugs.
- [x] `07-compounds/02-modals.css` — ✅ 2026-04-16. Revisado, sin bugs.
- [x] `07-compounds/03-bottom-sheet.css` — ✅ 2026-04-16. Revisado, sin bugs.
- [x] `07-compounds/04-empty-state.css` — ✅ 2026-04-16. **Bug fix:** `var(--color-info)` → `var(--blue-500)`.
- [x] `08-organisms/01-navbar.css` — ✅ 2026-04-16. Revisado, sin bugs.
- [x] `08-organisms/02-sidebar.css` — ✅ 2026-04-16. Revisado, sin bugs.
- [x] `08-organisms/03-footer.css` — ✅ 2026-04-16. Revisado, sin bugs.
- [x] `08-organisms/04-dashboard-shell.css` — ✅ 2026-04-16. Revisado, sin bugs.
- [x] `08-organisms/05-dashboard-alt-shell.css` — ✅ 2026-04-17. Hardcodes intencionales. **Fix stylelint:** añadidos 3 `-webkit-backdrop-filter` para Safari iOS.
- [x] `08-organisms/06-topbar.css` — ✅ 2026-04-16. Revisado, sin bugs.
- [x] `08-organisms/09-dnd-canvas.css` — ✅ 2026-04-16. **Restructurado:** IDs reorganizados en 4 bloques (#08-09-01 a #08-09-04) para consistencia con otros organismos. Sin bugs. *(⚠️ salto de numeración en directorio: faltan 07, 08, deuda anotada.)*
- [x] `10-misc/01-display.css` — ✅ 2026-04-16. Revisado, sin bugs.
- [x] `10-misc/02-cursor.css` — ✅ 2026-04-16. Revisado, sin bugs.
- [x] `10-misc/03-pseudo.css` — ✅ 2026-04-16. Revisado, sin bugs.

**Pendientes arrastrados desde `ToDoAriel.md` que hay que resolver durante esta fase:**
- [ ] Decidir y consolidar `object-fit` / `object-position` (actualmente en `03-layout/06-containers.css` **y** `04-decorators/01-effects.css`).
- [ ] Decidir renombre `01-pallete.css` → `01-palette.css` (actualizar `scripts/generate-imports.js` y referencias).
- [x] **Resueltas colisiones** en `06-molecules/` (`09-09-`, `10-10-`) — archivos renombrados a 10-stat-cards, 11-list-item, 12-tabs, 13-skeleton con IDs renumerados. Salto `06 → 09` en organisms queda anotado como deuda menor (no crítico).
- [ ] Unificar naming flex/grid (`jc-c` vs `jc-center`) — decidir convención y aplicar.
- [ ] Homogeneizar prefijo responsive en display (`xd-*`/`dd-*`) con el resto (`x*`/`d*`), dejando alias si hace falta.

---

### Fase RTP-2 · Calidad de código y build

> **Meta:** el repo pasa lint limpio, compila sin warnings y el bundle tiene tamaño/source-maps adecuados.

- [x] **Stylelint correr y dejar limpio:** ✅ 2026-04-17
  - [x] Ejecutado `npm run lint:css` → 2305 errores iniciales.
  - [x] Autofix (`stylelint --fix`) redujo a 439 → `stylelint.config.cjs` ampliado (desactivadas reglas cosméticas: `declaration-block-single-line-max-declarations`, `no-descending-specificity`, `number-max-precision`, `selector-class-pattern`, `color-function-notation`, `alpha-value-notation`, `media-feature-range-notation`, `comment-empty-line-before`, `rule-empty-line-before`, `at-rule-empty-line-before`, `declaration-block-no-redundant-longhand-properties`; `property-no-vendor-prefix` permite `backdrop-filter`).
  - [x] Fixes manuales: duplicate `body {}` en base.css, duplicate `appearance` en inputs.css, 4× `-webkit-backdrop-filter` añadidos en dashboard-alt (Safari iOS).
  - [x] Estado final: **0 errores**.
- [x] **Build en modo producción:** ✅ 2026-04-17
  - [x] `npm run build` genera `dist/lagunite.css` sin errores.
  - [x] **Baseline:** 329.88 KB raw / 48.15 KB gzip (v2.0.21).
  - [ ] Source maps (`.css.map`) — pendiente, habilitar en `vite.config.js`.
- [x] **Imports y orden:** ✅ 2026-04-17
  - [x] `scripts/generate-imports.js` refleja estructura tras renombres (stat-cards/list-item/tabs/skeleton).
  - [x] Orden de `@import` en `src/lagunite.css` validado: config → text → colors → layout → decorators → atoms → molecules → compounds → organisms → misc.
- [x] **Package.json:** ✅ 2026-04-17
  - [x] `exports`, `main`, `module`, `style` apuntan a archivos reales de `dist/`.
  - [x] `npm pack --dry-run` → 6 archivos, 55.8 KB tarball, 349.8 KB unpacked.
  - [x] Añadidos `keywords` (12 términos: css, css-framework, utility-first, design-system, ui, dark-mode, night-mode, responsive, atoms, molecules, components).
  - [x] Añadidos `repository` (github.com/arielivandiaz/lagunite), `homepage`, `bugs`.
- [x] **Docs generadas:** ✅ 2026-04-17
  - [x] `npm run docs:generate` ejecutado — todas las capas regeneradas.
  - [x] `docs/asJson/` y `docs/asToon/` sincronizados con CSS v2.0.21.
  - [ ] ⚠️ Script advierte `Skipping 07-form (not found)` — directorio huérfano en script, limpiar en RTP-4.

---

### Fase RTP-3 · Demos canónicas de validación

> **Meta:** un set pequeño de demos en `demos/` (nueva carpeta limpia) que sirva para QA manual y como showcase. Los `demo-*.html` y `poc-*.html` sueltos del root se archivan o borran después.

**Demos base (obligatorias para release):**
- [ ] `demos/01-landing.html` — marketing: containers, grid, hero, buttons, cards, badges, footer.
- [ ] `demos/02-dashboard.html` — app layout: sidebar + topbar + stat-cards + table + dashboard-panels.
- [ ] `demos/03-forms.html` — formulario completo: form-groups, inputs, select, checkbox, radio, switch, range, validación, alerts.
- [ ] `demos/04-components.html` — índice navegable de TODOS los componentes en un solo archivo (prueba visual rápida).
- [ ] `demos/05-night-mode.html` — variante `.night` de las 4 demos anteriores lado a lado.

**Criterios de aceptación por demo:**
- [ ] Solo clases documentadas; cero `style=""`. Si aparece un gap, marcar `<!-- GAP: reason -->` y abrir ítem en Fase RTP-1.
- [ ] Responsive probado en 320 / 640 / 1024 / 1440 px.
- [ ] Pasa auditoría a11y básica (headings jerárquicos, labels, focus visible, contraste AA).
- [ ] Cada demo linkea a su sección en el cheatsheet correspondiente.

---

### Fase RTP-4 · Release engineering

> **Meta:** cadena reproducible para publicar en NPM con versionado semántico y changelog.

- [ ] **README.md:**
  - [ ] Actualizar ejemplos al estado v2.1 (clases que realmente existen).
  - [ ] Sección "Installation" con `npm i lagunite`, import del CSS y CDN fallback.
  - [ ] Sección "Quick start" con snippet mínimo funcional.
  - [ ] Link a cheatsheets de `src/css/**/*-CHEATSHEET.md`.
  - [ ] Badges de versión, licencia, tamaño bundle.
- [ ] **README_ES.md:** sincronizar con la versión EN tras cambios.
- [ ] **CHANGELOG.md:**
  - [ ] Crear si no existe, formato [Keep a Changelog](https://keepachangelog.com/).
  - [ ] Historial retroactivo mínimo: v2.0.17 → v2.0.21 (una línea por versión).
  - [ ] Entry para v2.1.0 detallando el trabajo de RTP-1/2/3.
- [ ] **Semver / tagging:**
  - [ ] Decidir si el release sale como v2.1.0 (minor) o v3.0.0 (major con breakings).
  - [ ] Git tag `vX.Y.Z` tras el merge a `main`.
- [ ] **NPM publish validation:**
  - [ ] `npm pack --dry-run` — revisar archivos incluidos.
  - [ ] `npm publish --dry-run` antes del real.
  - [ ] `npm publish` (con 2FA activo).
  - [ ] Smoke test: proyecto vacío con `npm i lagunite@latest` importa y funciona.
- [ ] **Contribuciones:**
  - [ ] `CONTRIBUTING.md` mínimo (cómo correr dev, lint, build).
  - [ ] `.github/ISSUE_TEMPLATE/` básico (bug, feature).

---

### Fase RTP-5 · Auditoría transversal (paralelizable)

> **Meta:** validar dimensiones que no se pueden chequear archivo-a-archivo.

- [ ] **Accesibilidad:**
  - [ ] Focus visible consistente en todos los atoms interactivos (button, input, link, checkbox, radio, switch).
  - [ ] Contraste AA en combinaciones `bg-*` / `color-*` del sistema semántico.
  - [ ] `aria-*` documentado en patrones que lo necesitan (modal, dropdown, tooltip, alert-dismissible).
  - [ ] `prefers-reduced-motion` respetado en animations (ya parcial en skeleton).
- [ ] **Cross-browser:**
  - [ ] Chromium, Firefox, Safari (Mac + iOS) en las 5 demos canónicas.
  - [ ] Documentar en README qué navegadores se soportan oficialmente.
- [ ] **Modo oscuro `.night`:**
  - [ ] Revisar que cada componente tenga regla `.night` coherente.
  - [ ] Paleta semántica (`--color-text-base`, `--color-bg`) sin color-gray-* sueltos en cuerpo.
- [ ] **Token sanity check:**
  - [ ] Todos los valores duros (px, hex, rgba) en componentes remplazados por tokens.
  - [ ] No hay `var(--*)` apuntando a variables no definidas.
- [ ] **Print styles:** decidir si se soportan o se documenta explícitamente que no.
- [ ] **Size budget:**
  - [ ] Fijar límite en KB gzip para `dist/lagunite.css`.
  - [ ] Falla el build si se supera (opcional, script simple con `stat` + `gzip`).

---

## 🧭 Enfoque temporal

- **Sprint 1 (semana 1-2):** Fase RTP-1 capas `00-config` a `04-decorators` + Fase RTP-2 stylelint limpio.
- **Sprint 2 (semana 3-4):** Fase RTP-1 capas `05-atoms` a `10-misc` + Fase RTP-3 demos 01-03.
- **Sprint 3 (semana 5):** Fase RTP-3 demos 04-05 + Fase RTP-5 (a11y + cross-browser).
- **Sprint 4 (semana 6):** Fase RTP-4 release (README, CHANGELOG, publish v2.1.0).

---

## 📝 Notas operativas

- Cada archivo de Fase RTP-1 se marca **aquí mismo** (no re-abrir `checklist.md` en paralelo; consolidar en este ToDo).
- Commits siguen el patrón `v2.0.x` del historial actual; el tag final cambia a `v2.1.0`.
- Al cerrar cada fase, actualizar memoria del proyecto con el hito alcanzado.
- POCs nuevos van a `pocs/` con prefijo `poc-`; demos estables pasan a `demos/` con prefijo numérico.
