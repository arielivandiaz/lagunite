# Revisión v2.1 — pasada agente (para Ariel)

> **Quién:** pasada de agente (Cursor) · **Para:** Ariel Díaz  
> **No sustituye** tu firma en [`REVISION-v2.1.md`](./REVISION-v2.1.md) §8.  
> **Fecha pasada:** 2026-09-15 · Candidata: `2.1.0`  
> **Objetivo:** adelantarte hallazgos y un orden de mirada, para que tu revisión personal sea más corta.

### Leyenda
| Marca | Significado |
| --- | --- |
| `[x]` | Agente verificó por comando / lectura de código (no pixel/browser humano) |
| `[~]` | Parcial / OK en código; **vos** debés confirmar en browser |
| `[ ]` | No tocado o solo vos podés cerrarlo (Safari, “se ve bien”, publish) |
| **Ojo Ariel** | Prioridad visual / decisión tuya |

---

## Resumen ejecutivo (leé esto primero)

**Veredicto agente:** candidato a release **técnicamente listo** en gates automatizables. El riesgo restante es **QA visual + browsers** (P9) y un par de **docs desfasados** (quickref / `decorators.md`).

| Área | Estado agente | Qué mirás vos (rápido) |
| --- | --- | --- |
| Gates §0 | Lint + size + pack OK | Corré `build` + `docs:generate` una vez; smoke Chromium demos |
| Demos §1 | HTML limpio (sin `style=""`) | Night toggle + 320px en 01–03; picker + modal en 04 |
| CSS críticos | Anti-slop defaults en código | Confirmar look cards/forms night |
| Skills | Mayoría alineada | `decorators.md` sin `.surface-glass`; quickref débil en muted |
| Casos A–H §6 | No armados en esta pasada | Podés usar demos/POCs como atajo, pero §6 pide validación tuya |
| Publish §8 | **No autorizado** | Solo después de tu firma |

**Orden sugerido para vos (45–90 min):**
1. `npm run build` + abrir `/demos/` Chromium 320 + 1024 + Night.  
2. Demo 04: modal + picker teclado. Demo 05: muted + `.bg-1.color-on-fill`.  
3. Decidir filas §7 (P1 CSS map, P9 Safari/FF).  
4. Firmar [`REVISION-v2.1.md`](./REVISION-v2.1.md) §8 si no queda Alta abierta.

---

## 0. Gates globales

| Check | Agente | Nota |
| --- | --- | --- |
| `npm run lint:css` | [x] | Exit 0 (2026-09-15) |
| `npm run build` | [ ] | **No corrido en esta pasada** (evité tocar `dist/` / compile count). Corrélo vos antes de pack final |
| `npm run check:size` | [x] | CSS gzip **48.35 KB** / JS **2.60 KB** (budget 55 / 5) — holgado |
| `npm run docs:generate` | [ ] | No corrido aquí. Buscá warning `07-form` si regenerás |
| `npm pack --dry-run` | [x] | 8 files: `dist/*` + README + LICENSE + package.json. **Sin secretos** |
| `package.json` = `2.1.0` | [x] | Coincide CHANGELOG `[2.1.0]` |
| Sin `.env` en pack | [x] | Pack solo dist + docs raíz |

**Ojo Ariel:** un `build` limpio + `docs:generate` cierra el resto de §0.

---

## 1. Demos canónicas (`demos/`)

Lectura estática + grep (sin browser en esta pasada).

| Demo | Agente | Hallazgos |
| --- | --- | --- |
| `index.html` | [~] | Hub presente; **vos:** links click |
| `01-landing.html` | [~] | Menciona superficies vs `.bg-1`; sin `bgg` page-fill en grep |
| `02-dashboard.html` | [~] | Estructura sidebar/topbar en inventario README |
| `03-forms.html` | [~] | Labels + placeholders + alert-info sobre `:valid`; form start-aligned en markup |
| `04-components.html` | [~] | Modal + picker con `data-values`, prev/next, listener `change`; JS inline open/close |
| `05-night-mode.html` | [~] | Doc anti `.color-text-alt`; demo `.bg-1` + `.color-on-fill` OK en markup |
| `README.md` | [x] | Inventario 01–05 coherente |

### Criterios por demo
- [x] Sin `style=""` en `demos/` (grep vacío) — **P5 mejoró**: no hay GAP/`style` residual en canónicas
- [~] Anti-slop en markup: parece OK; **Ojo Ariel** night + mobile burger/sidebar
- [ ] Focus visible — solo browser
- [ ] Headings / aria — smoke teclado tuyo

**Ojo Ariel (demo):** en 04, picker usa `flex-center` en el chrome del wheel — correcto para ese control; no lo copies a forms.

---

## 2. CSS — prioritarios (muestra agente)

No marqué los 66 archivos uno a uno. Prioricé lo que rompe release / anti-slop.

| Archivo / tema | Agente | Nota |
| --- | --- | --- |
| `01-flex.css` | [x] | `.row`/`.col` → `flex-start`; existe `.flex-center*` |
| `01-buttons.css` | [x] | `margin: 0`; `:focus-visible` presente |
| `02-text` / muted | [~] | Skills + demos empujan `.text-muted` / `.color-on-fill` — **vos** mirá night |
| `01-background` acentos | [~] | Demo 05 usa `.bg-1` solo como acento |
| `01-cards` flat | [~] | CHANGELOG + FEATURES dicen flat default — confirmar visual |
| `14-picker-wheel.css` | [~] | RTP-1b cerrado en ToDo-prod; smoke en demo 04 |
| `15-selectable-option.css` | [~] | Idem; demo 03 |
| `01-effects` `.surface-glass` | [x] | Existe en CSS + cheatsheet decorators; **falta en** `ai/skills/decorators.md` |
| Resto capas 00–10 | [ ] | Muestreo no exhaustivo — usá checklist de `REVISION-v2.1.md` §2 si querés 100% |

**Ojo Ariel:** si solo tenés tiempo, §2 = colors + flex + buttons + inputs + picker + selectable + cards + navbar/footer.

---

## 3. JavaScript

| Ítem | Agente | Nota |
| --- | --- | --- |
| `14-picker-wheel.js` | [x] | `data-values` / `change` / listbox / teclado / `LAGUNITE_NO_AUTO_INIT` documentados e implementados |
| `src/lagunite.js` | [x] | Export + auto-init si no hay flag |
| `dist/*.js.map` | [x] | Pack incluye `.map` JS; **no** `lagunite.css.map` (P1) |

**Ojo Ariel:** en demo 04, Tab → flechas en picker; Esc/overlay en modal si lo esperás (JS demo cierra con botones; chequear overlay click).

---

## 4. Skills

| Skill / doc | Agente | Nota |
| --- | --- | --- |
| `anti-slop.md` / `compose.md` / `colors.md` / `flex.md` | [x] | Alineados a defaults v2.1 |
| `molecules.md` | [x] | Picker + selectable documentados |
| `patterns.md` | [x] | Landing/auth con `.text-muted` |
| `decorators.md` | [ ] | **Gap:** no menciona `.surface-glass` (sí está en cheatsheet CSS) → alimenta P6 |
| `FRAMEWORK-QUICKREF.md` | [~] | Flex-start OK; lista `.color-text-alt` y `.bg-1` **sin** advertencia muted/acento — confunde agentes |
| `.cursor/rules/lagunite-ai.mdc` | [ ] | No re-leído byte a byte esta pasada; cruzar con CLAUDE hard rules |
| Sync `.cursor/skills` vs `ai/skills` | [ ] | Fuera de esta pasada; relevante post-release / AI-first |

---

## 5. Docs de producto

| Doc | Agente | Nota |
| --- | --- | --- |
| README | [~] | Install/demos/anti-slop; sección **AI-first (future)** OK |
| README_ES | [ ] | No diff EN↔ES esta pasada — **releer** si tocaste EN |
| CHANGELOG 2.1.0 | [x] | Entrada honesta (anti-slop, demos, maps, picker) |
| SUPPORT | [x] | Matrix + budget; print unsupported |
| FEATURES | [ ] | Asumido sync con RTP; spot-check opcional |
| CONTRIBUTING + issue templates | [~] | Existen según git/RTP-4; no re-audité texto |

---

## 6. Casos A–H

| # | Caso | Agente | Atajo para vos |
| --- | --- | --- | --- |
| A | Auth | [ ] | `pocs/ai-ui-test/b-01-auth.html` |
| B | Settings | [ ] | `pocs/ai-ui-test/b-03-settings.html` + demo 03 |
| C | Dashboard KPI | [ ] | demo 02 |
| D | Selectable | [ ] | demo 03 |
| E | Picker | [ ] | demo 04 + `pocs/poc-picker-wheel.html` |
| F | Night strip | [ ] | demo 05 |
| G | Modal | [ ] | demo 04 |
| H | Landing | [ ] | demo 01 |

**Ojo Ariel:** no hace falta HTML nuevo si validás estos archivos en browser y marcás §6 en tu doc personal.

---

## 7. Problemas / riesgos — veredicto agente

| ID | Tema | Severidad | Veredicto agente | Acción Ariel |
| --- | --- | --- | --- | --- |
| P1 | Sin `lagunite.css.map` | Media | **Aceptable** v2.1 (CHANGELOG ya lo dice; pack tiene JS maps) | Decidir OK o backlog 2.1.x |
| P2 | Typo `pallete` | Baja | Won’t fix; documentado en ToDo-prod | Cerrar OK |
| P3 | `object-position` | Baja | Won’t ship | Cerrar si cheatsheets no lo prometen |
| P4 | Organisms 06→09 | Baja | Documentado; no renumerar | Cerrar OK |
| P5 | `style=""` / GAP demos | Media | **Mejorado:** grep `demos/` sin `style=` ni GAP | Confirmar visual; cerrar o bajar a Baja |
| P6 | Skills vs CSS | Media | **Abierto:** `decorators.md` sin glass; quickref muted/bg | Fix docs 15 min **o** aceptar y ticket |
| P7 | POCs / `demo-*.html` root | Baja | Inventario only | Post-publish cleanup |
| P8 | `web/` en disco | Baja | Fuera de pack npm (8 files) | Ignorar para publish |
| P9 | Safari / Firefox | Alta | **Solo vos** | Smoke mínimo FF + Safari si podés |
| P10 | README ejemplos | Media | Spot OK (text-muted, demos) | Releer 5 min |
| P11 | increment-build en `build` | Baja | Ruido en git | No bloquear tag; o no commitear count |
| P12 | npm publish | — | **No** hasta tu §8 | — |

### Nuevos (pasada agente)

| ID | Tema | Severidad | Estado |
| --- | --- | --- | --- |
| A1 | `ai/skills/decorators.md` no documenta `.surface-glass` (sí CSS + cheatsheet + CHANGELOG) | Media | [ ] abrir fix o subsumir en P6 |
| A2 | `.claude/FRAMEWORK-QUICKREF.md` no advierte que `.color-text-alt` ≠ muted ni que `.bg-1`… son acentos | Media | [ ] fix short o P6 |
| A3 | Gates: `build` + `docs:generate` no re-corridos en esta pasada | Baja | [ ] tu §0 |

---

## 8. Firma — solo Ariel en el doc personal

Este archivo **no** autoriza publish.

- [ ] Cuando aceptes este passthrough, copiá cierres a [`REVISION-v2.1.md`](./REVISION-v2.1.md)
- [ ] Firmá §8 allá (no acá)

Pasada agente: **Cursor / Auto** · 2026-09-15  
Confianza: alta en gates/pack/anti-slop código; media en pixel-perfect y Safari.

---

## Nota de proceso

- Original intacto para tu checklist: [`REVISION-v2.1.md`](./REVISION-v2.1.md)  
- Track AI-first sigue **después** de tu §8 (plan Cursor-first).  
- Mientras no firmes, no `npm publish`.
