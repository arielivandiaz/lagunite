# Lagunite — Ready to Prod (v2.1)

> **Fecha:** 2026-09-15 · **Versión candidata:** `2.1.0` · **Release:** en **revisión personal** (no publicar aún).  
> **Revisión / pulido:** [`REVISION-v2.1.md`](./REVISION-v2.1.md) ← checklist tuya antes de NPM.  
> **Hecho (borrador agente):** [`FEATURES.md`](./FEATURES.md) · [`SUPPORT.md`](./SUPPORT.md) · [`CHANGELOG.md`](./CHANGELOG.md)  
> **Después del CSS estable:** [`ToDo-ai-first.md`](./ToDo-ai-first.md) (pausado)

**En alcance:** `src/css/**`, `src/js/**`, `dist/`, `docs/` generados, demos canónicas, release.  
**Fuera:** `lagunite-web/**`, compiler AI-first, playground JSON.

---

## DoD v2.1

1. Todo `src/css/**` del bundle **readyToProd** (incluye picker + selectable).
2. JS de componentes documentado y smoke-testeado (picker-wheel).
3. **5 demos** en `demos/` sin `style=""` inventado (o con `<!-- GAP -->` resuelto).
4. `npm run lint:css` + `build` + `docs:generate` pasan.
5. README + CHANGELOG v2.1; `npm pack --dry-run` OK.
6. RTP-5 mínima firmada (focus, contraste, night en demos, browsers documentados).

---

## Orden de ataque

1. ~~**RTP-1b**~~ — ✅ cerrado 2026-09-15  
2. ~~**RTP-anti-slop**~~ — ✅ cerrado 2026-09-15  
3. ~~**RTP-3**~~ — ✅ cerrado 2026-09-15  
4. ~~**RTP-5**~~ — ✅ cerrado 2026-09-15  
5. ~~**RTP-2 residual**~~ — ✅ source maps en build  
6. ~~**RTP-4**~~ — ✅ docs + pack dry-run (publish manual)  

---

## RTP-1b · Cerrar framework CSS — ✅

### Componentes nuevos
- [x] Auditar `06-molecules/14-picker-wheel.css` → readyToProd  
  - [x] IDs `#06-14-*` · tokens · `.night` · reduced-motion · focus-visible  
  - [x] JS: a11y listbox, teclado, export en `src/lagunite.js`  
  - [x] POC: `pocs/poc-picker-wheel.html`  
  - [x] Skills/cheatsheet molecules + `docs:generate`
- [x] Auditar `06-molecules/15-selectable-option.css` → readyToProd  
  - [x] IDs `#06-15-*` · input visually-hidden · `.night` · focus-visible  
  - [x] POC: `pocs/mobile/poc-goal-selector.html`  
  - [x] Skills + `docs:generate`

### Deudas de API (decididas v2.1)
- [x] `object-fit` — dueño único: `03-layout/06-containers.css` (ya consolidado). `object-position` utilities **won’t ship v2.1**
- [x] `pallete` → `palette` — **won’t fix v2.1** (path interno; diferir)
- [x] `jc-c` vs `jc-center` — **`jc-c` canónico**; no alias `jc-center` en v2.1
- [x] Prefijos `xd-`/`dd-` — **won’t fix v2.1**
- [x] Organisms 07/08 — **documentado** (salto 06→09); no renumerar

### Proceso (al tocar CSS)
1. Capa + archivo numerado + `@ID` · tokens del sistema  
2. Import via `generate-imports` · demo o `<!-- GAP -->`  
3. `docs:generate` + skill/cheatsheet de la capa  
4. No romper classnames públicos sin nota en CHANGELOG (preferir alias)

**Done 1b:** ✅ picker + selectable readyToProd + deudas decididas + skills al día.

---

## RTP-anti-slop · Remanentes — ✅

> P0 ya shipped → [`FEATURES.md`](./FEATURES.md). Migration notes → [`CHANGELOG.md`](./CHANGELOG.md).

### Docs / migration
- [x] Auditar demos/POCs btn margin — footers mobile ya usan `gap-s`; stacks auth OK; `.marg-0` queda defensivo
- [x] Deprecar en skills `.color-text-alt` como muted → `.text-muted` / `.card-text` (+ `.color-on-fill`)
- [x] Entry CHANGELOG: “anti-slop defaults” + migration notes
- [x] Actualizar `anti-slop.md` / `compose.md` (L-20 alineado a flex-start real)

### P1 — superficies
- [x] Gradientes `bgg-*` — comentario de capa + patterns sin page-fill
- [x] Docs `.bg-1`…`.bg-9` = theme accent fills

### P2 — deco opt-in
- [x] Cards: flat default documentado; `.card-elevated` ≤1 / vista; reduced-motion en `.card-hover`
- [x] `.surface-glass` opt-in (effects) — no default en sidebar/card/modal
- [x] Motion: reduced-motion mata loops infinitos en `.animate-*`
- [x] Status dots: estáticos; documentado “solo estado real” (L-18)
- [x] Auth recipe en patterns: un `.btn.size-l.marg-0.wp100` + link

### Cierre
- [x] Smoke: `pocs/ai-ui-test/b-01-auth.html` (+ B03 muted); B02 sin cambios de patrón

**Done:** ✅ changelog + P1/P2 + skills + POCs B alineados.

---

## RTP-2 · Residuales — ✅

- [x] Source maps — JS `.map` en `dist/` (`vite` `sourcemap: true`). CSS map no lo emite el extract de Vite lib; aceptable v2.1.
- [x] Limpiar warning `Skipping 07-form (not found)` — removido de `scripts/generate-css-docs.js`
- [x] Re-baseline gzip — ~49 KB CSS / budget **55 KB** (`npm run check:size`) · ver [`SUPPORT.md`](./SUPPORT.md)

---

## RTP-3 · Demos canónicas — ✅

Carpeta [`demos/`](./demos/):

- [x] `01-landing.html` — containers, grid, hero, buttons, cards, badges, footer
- [x] `02-dashboard.html` — sidebar + topbar + stat-cards + table + panels
- [x] `03-forms.html` — form-groups, inputs, select, checkbox/radio/toggle, alerts + **selectable-option**
- [x] `04-components.html` — índice (incl. **picker-wheel**)
- [x] `05-night-mode.html` — mismas superficies bajo `.night`
- [x] `index.html` + `README.md` (inventario root `demo-*` / `pocs/` → keep archive)

**Criterios:** clases documentadas · night toggle · a11y básica · links a cheatsheets.  
**Limpieza:** inventariada en `demos/README.md` (sin borrar archivos en este paso).

**Done:** ✅ las 5 demos + hub abren con `npm run dev` → `/demos/`.

---

## RTP-4 · Release — ✅ (publish pendiente de tu OK)

- [x] README.md (+ README_ES.md) — install, quick start, componentes v2.1, browsers
- [x] CHANGELOG.md — Keep a Changelog; entry **2.1.0**
- [x] Semver: **v2.1.0** (minor; breakings de naming diferidos)
- [x] `npm pack --dry-run` OK
- [ ] `npm publish` — **manual** cuando quieras subir a NPM
- [x] `CONTRIBUTING.md` + issue templates
- [x] AI-first solo como exploración futura (README + FUTURE link)

**Done docs/pack:** ✅ · Tag/publish: pendiente de comando explícito.

---

## RTP-5 · Auditoría transversal — ✅

Firmado en [`SUPPORT.md`](./SUPPORT.md) + fixes CSS/demos (2026-09-15).

- [x] **a11y:** `:focus-visible` en `.btn`, navbar, footer, modal-close, alert-close; modal demo + alerts/picker/selectable; reduced-motion en modal
- [x] **Browsers:** documentados en SUPPORT (Chromium / Firefox / Safari macOS+iOS)
- [x] **`.night`:** footer night tokens; demos 05 + toggles; surfaces semánticas
- [x] **Tokens:** hardcodes solo donde justificado; lint limpio
- [x] **Print:** **no soportado** v2.1 (explícito en SUPPORT)
- [x] **Size budget:** CSS gzip ≤ 55 KB · `npm run check:size`

**Done:** ✅ checklist mínima firmada; no es certificación WCAG completa.

---

## Roadmap corto

| Paso | Fase | Resultado |
| --- | --- | --- |
| ✅ | RTP-1b | Picker + selectable auditados + deudas decididas |
| ✅ | RTP-anti-slop | Remanentes + smoke + changelog |
| ✅ | RTP-3 | `demos/01`–`05` + hub |
| ✅ | RTP-5 | SUPPORT.md + focus/night/budget |
| ✅ | RTP-2 residual | Source maps + size baseline |
| ✅ | RTP-4 docs/pack | README · CHANGELOG 2.1.0 · pack dry-run |
| ⏭ | **Revisión personal** | [`REVISION-v2.1.md`](./REVISION-v2.1.md) |
| ⏭ | Publish | solo tras firmar §8 de REVISION |

---

## Notas

- Progreso **aquí**; features cerradas → mover a [`FEATURES.md`](./FEATURES.md).
- Tras CSS: `lint:css` · `build` · `docs:generate` · `check:size` tras build.
- POCs → `pocs/`; demos estables → `demos/NN-*.html`.
- Soporte: [`SUPPORT.md`](./SUPPORT.md).
