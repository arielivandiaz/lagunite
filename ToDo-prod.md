# Lagunite — Ready to Prod (v2.1)

> **Fecha actualización:** 2026-09-14 · **Versión actual:** 2.0.22 · **Objetivo:** estabilizar y completar el **runtime CSS (+ JS de componentes)** y publicar un release NPM auditado.
>
> **Prioridad de producto (acordada):**  
> 1) **Terminar y estabilizar la librería CSS** (`ToDo-prod` — este archivo)  
> 2) Recién después: track AI-first JSON→HTML ([`ToDo-ai-first.md`](./ToDo-ai-first.md) / [`FUTURE-AI-FIRST.md`](./FUTURE-AI-FIRST.md))  
> AI-first es norte de futuro; **no compite** con el cierre de v2.1. Congelar renames cosméticos de utilities salvo bugs o deudas explícitas de abajo.
>
> **Scope explícito:**
> - ✅ En alcance: `src/css/**`, `src/js/**` (componentes del framework), `dist/`, `docs/` generados, demos canónicas, release engineering.
> - ⏸️ Fuera de alcance: `lagunite-web/**` (repo aparte), compiler/schema AI-first, playground JSON.
> - ⏸️ `web/**` / POCs sueltos: archivar o mover; no bloquean el release si existen demos canónicas.

Este documento es la **única checklist ejecutable** para cerrar el framework CSS hacia producción.

---

## 📊 Estado real (2026-09-14)

### Ya hecho
- Auditoría archivo-a-archivo **RTP-1** de las capas históricas (config → misc) — ver checklist abajo, casi todo `[x]`.
- Stylelint limpio (0 errores) · build Vite/PostCSS OK · `package.json` exports/keywords/repo OK.
- Docs pipeline `docs:generate` / `docs:merge` · skills + cheatsheets · contraste skill.
- Imports auto en `src/lagunite.css` incluyen moléculas nuevas.

### Gaps que aún impiden “framework completo / release”
| # | Gap | Fase |
| --- | --- | --- |
| 1 | **2 moléculas nuevas sin auditoría readyToProd:** `14-picker-wheel`, `15-selectable-option` (+ JS del picker) | RTP-1b |
| 2 | **Deudas de naming/consolidación** abiertas (object-fit, pallete→palette, jc-c vs jc-center, xd-/dd-) | RTP-1b |
| 3 | **Sin carpeta `demos/` canónica** — solo POCs dispersos | RTP-3 |
| 4 | **README / CHANGELOG / publish path** incompletos | RTP-4 |
| 5 | **a11y + night + tokens + browsers** no firmados de punta a punta | RTP-5 |
| 6 | Skills/cheatsheets **no documentan** picker-wheel / selectable-option | RTP-1b / docs |
| 7 | Diagnóstico viejo del doc (abril) decía “auditoría sin empezar / stylelint nunca corrido” — **obsoleto** | (corregido acá) |

### Inventario CSS actual
66 archivos en `src/css/**` (sin capa `09-patterns` en disco; patterns viven como skill/docs, no como carpeta CSS).  
Moléculas nuevas ya importadas en `src/lagunite.css`:
- `06-molecules/14-picker-wheel.css` + `src/js/06-molecules/14-picker-wheel.js`
- `06-molecules/15-selectable-option.css` (CSS-only, `:checked`)

---

## 🎯 Definición de “framework completo” (DoD v2.1)

El release v2.1 se considera listo cuando:

1. Todo `src/css/**` en el bundle está **revisado / readyToProd** (incluye picker + selectable).
2. JS de componentes del framework está documentado y smoke-testeado (picker-wheel).
3. Existen **5 demos canónicas** en `demos/` sin `style=""` inventado (o con `<!-- GAP -->` resuelto).
4. `npm run lint:css` + `npm run build` + `npm run docs:generate` pasan.
5. README + CHANGELOG reflejan v2.1; `npm pack --dry-run` OK.
6. Checklist RTP-5 mínima firmada (focus, contraste semántico, night en demos, browsers documentados).

**Fuera del DoD v2.1:** AI compiler, MCP, playground JSON, multi-target React.

---

## 🚦 Plan por fases (orden de ataque)

### Orden recomendado ahora
1. **RTP-1b** — cerrar deudas + auditar moléculas nuevas  
2. **RTP-3** — demos canónicas (prueba de que el CSS sirve)  
3. **RTP-5** — a11y / night / tokens (en paralelo con demos)  
4. **RTP-2 residual** — source maps + limpiar warning `07-form`  
5. **RTP-4** — README, CHANGELOG, publish  

---

### Fase RTP-1 · Auditoría CSS (histórica) — ✅ casi completa

> Meta original: cada archivo `readyToProd`. El listado largo de abajo queda como registro.

**Pendientes arrastrados (mover a RTP-1b):**
- [ ] Consolidar `object-fit` / `object-position` (`06-containers` vs `01-effects`)
- [ ] Renombre `01-pallete.css` → `01-palette.css` (imports + docs + scripts)
- [ ] Unificar naming flex/grid (`jc-c` vs `jc-center`) — decidir + alias o migrate
- [ ] Homogeneizar display responsive (`xd-*`/`dd-*` → `x*`/`d*` + alias)

**Registro archivo por archivo** (auditoría 2026-04-16/17):

- [x] `00-config/01-pallete.css` … `05-base.css`
- [x] `01-text/*`
- [x] `02-colors/*`
- [x] `03-layout/*`
- [x] `04-decorators/*`
- [x] `05-atoms/*`
- [x] `06-molecules/01` … `13` (stat-cards/list-item/tabs/skeleton renombrados)
- [x] `07-compounds/*`
- [x] `08-organisms/*` (salto 07/08 en numeración = deuda menor)
- [x] `10-misc/*`

*(Detalle histórico de fixes por archivo: conservar en git history de este ToDo / commits de abril; no repetir aquí para no alargar.)*

---

### Fase RTP-1b · Cerrar framework CSS (prioridad actual)

> **Meta:** lo que falta para decir “el CSS del framework está completo y estable”.

#### Componentes nuevos (obligatorio)
- [ ] Auditar `06-molecules/14-picker-wheel.css` → readyToProd  
  - [ ] IDs `#06-14-*` OK · tokens válidos · `.night` · reduced-motion si anima  
  - [ ] Revisar `src/js/06-molecules/14-picker-wheel.js` + export en `src/lagunite.js`  
  - [ ] Demo o POC canónico (puede vivir en `demos/` o promover desde `pocs/`)  
  - [ ] Documentar en `ai/skills/molecules.md` + cheatsheet molecules  
  - [ ] `npm run docs:generate` tras el OK
- [ ] Auditar `06-molecules/15-selectable-option.css` → readyToProd  
  - [ ] IDs `#06-15-*` · a11y label/input · `.night`  
  - [ ] Demo (goal/preference list)  
  - [ ] Skills + docs:generate

#### Deudas de API (decidir y aplicar o explicitar “won’t fix v2.1”)
- [ ] `object-fit` / `object-position` — una sola capa dueña
- [ ] `pallete` → `palette` (breaking de path interno; actualizar generadores)
- [ ] Convención `jc-c` vs `jc-center` (elegir canónica; alias de compat si hace falta)
- [ ] Prefijos `xd-`/`dd-` en display
- [ ] Numeración organisms 07/08 faltantes — documentar o renumerar (bajo riesgo)

#### Proceso al agregar / editar CSS (responde notas Ariel)
**Si hay que agregar algo nuevo:**
1. Elegir capa (`05-atoms` … `08-organisms`, etc.)
2. Archivo numerado + bloque `@ID`
3. Tokens del sistema (no hex sueltos salvo excepción documentada)
4. Import via `generate-imports` / build
5. Demo mínima o GAP explícito
6. `docs:generate` + actualizar skill/cheatsheet de esa capa
7. Marcar fila readyToProd en este ToDo

**Si hay que editar o extender algo existente:**
1. No romper classnames públicos sin nota en CHANGELOG
2. Preferir alias + deprecation antes de rename breaking
3. Re-correr lint + docs:generate
4. Actualizar demo que cubra el componente
5. Si el cambio es solo cosmético de naming → diferir post-v2.1 salvo deuda RTP-1b marcada

**Done RTP-1b cuando:** picker + selectable readyToProd + deudas decididas (hechas o “won’t fix v2.1” por escrito) + skills al día.

---

### Fase RTP-2 · Calidad de código y build — ✅ mayormente hecha

- [x] Stylelint 0 errores (2026-04-17)
- [x] Build prod OK · baseline ~330 KB / ~48 KB gzip (v2.0.21)
- [x] Imports / orden de capas OK
- [x] package.json exports / pack dry-run OK
- [x] docs:generate sincronizado (re-correr tras RTP-1b)
- [ ] Source maps (`.css.map`) en `vite.config.js` — opcional para v2.1
- [ ] Limpiar warning script `Skipping 07-form (not found)`
- [ ] Re-baseline gzip tras incluir picker/selectable; fijar budget en RTP-5

---

### Fase RTP-3 · Demos canónicas de validación

> **Meta:** QA manual + proof de que el framework se puede usar sin POCs caóticos.

**Demos obligatorias** (crear carpeta `demos/`):
- [ ] `demos/01-landing.html` — containers, grid, hero, buttons, cards, badges, footer
- [ ] `demos/02-dashboard.html` — sidebar + topbar + stat-cards + table + panels
- [ ] `demos/03-forms.html` — form-groups, inputs, select, checkbox/radio/switch, alerts + **selectable-option**
- [ ] `demos/04-components.html` — índice de componentes (incl. picker-wheel)
- [ ] `demos/05-night-mode.html` — mismas superficies bajo `.night`

**Criterios por demo:**
- [ ] Solo clases documentadas; `style=""` → `<!-- GAP -->` + ítem RTP-1b
- [ ] Responsive 320 / 640 / 1024 / 1440
- [ ] a11y básica (headings, labels, focus)
- [ ] Link a cheatsheet de la capa

**Limpieza:**
- [ ] Inventariar `demo-*.html` / `poc-*.html` / `pocs/` → archivar, promover a `demos/`, o borrar

**Done cuando:** las 5 demos abren con `npm run dev` y cubren el DoD visual.

---

### Fase RTP-4 · Release engineering

> **Meta:** publicar v2.1 con narrativa honestamente CSS-completa.

- [ ] **README.md** — install, quick start, lista real de componentes v2.1, badges, browsers
- [ ] **README_ES.md** — sync
- [ ] **CHANGELOG.md** — Keep a Changelog; retro v2.0.17→2.0.22 + entry 2.1.0
- [ ] Semver: default propuesto **v2.1.0** (minor) salvo breakings de RTP-1b (palette rename path, jc-*, etc.) → entonces documentar migration o diferir breakings
- [ ] `npm pack` / `npm publish --dry-run` / publish + smoke test proyecto vacío
- [ ] `CONTRIBUTING.md` mínimo + issue templates
- [ ] Mencionar AI-first solo como “exploración futura” (link a FUTURE), **no** como feature shippeada

---

### Fase RTP-5 · Auditoría transversal

> **Meta:** calidad que no se ve archivo por archivo.

- [ ] **a11y:** focus visible en atoms interactivos; contraste AA semántico; aria en modal/dropdown/tooltip/alert; `prefers-reduced-motion`
- [ ] **Browsers:** Chromium, Firefox, Safari (Mac+iOS) en demos; documentar soporte
- [ ] **`.night`:** componentes coherentes; cuerpo con tokens semánticos (no gray sueltos)
- [ ] **Tokens:** sin `var(--*)` rotos; hardcodes justificados o tokenizados
- [ ] **Print:** soportar o documentar “no soportado”
- [ ] **Size budget:** límite gzip + (opcional) fail en CI

---

## 🗺️ Roadmap corto (para no dispersarse)

| Paso | Fase | Resultado visible |
| --- | --- | --- |
| 1 | RTP-1b | Picker + selectable auditados + deudas decididas |
| 2 | RTP-3 | `demos/01`–`05` usables |
| 3 | RTP-5 (mínimo) | Night + focus + contraste en demos |
| 4 | RTP-2 residual | Warning 07-form limpio; baseline gzip |
| 5 | RTP-4 | Tag v2.1.0 + NPM |

Después de eso → retomar [`ToDo-ai-first.md`](./ToDo-ai-first.md).

---

## 🔗 Relación con AI-first

| Situación | Qué hacer |
| --- | --- |
| Idea JSON→HTML | Documentada; **en pausa de ejecución** hasta DoD v2.1 |
| Spike compiler | No empezar hasta demos + release path claros (salvo experimento personal aislado) |
| Rename de utilities | Solo si está en RTP-1b; si no, congelar |
| Docs asJson | Seguir generando; son input futuro del compiler, pero hoy sirven al release |

---

## 📝 Notas operativas

- Marcar progreso **aquí** (no reabrir `checklist.md` paralelo).
- Commits: seguir estilo del repo; tag final `v2.1.0` (o el semver que salga de RTP-4).
- POCs → `pocs/poc-*`; demos estables → `demos/NN-*.html`.
- Tras cualquier cambio CSS: `npm run lint:css` · `npm run build` · `npm run docs:generate`.

---

## Registro histórico RTP-1 (detalle abril 2026)

La auditoría detallada por archivo (bugs fix, renumeraciones, decisiones) está en el historial git de este documento (versión 2026-04-17). Resumen: config/text/colors/layout/decorators/atoms/molecules(01–13)/compounds/organisms/misc marcados readyToProd en esa pasada.
