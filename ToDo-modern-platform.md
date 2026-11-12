# ToDo — Modern Platform (MWG → Lagunite)

> Inventario de los **~135 use-cases** de [Modern Web Guidance](https://github.com/GoogleChrome/modern-web-guidance) triados para Lagunite.  
> **Fecha:** 2026-09-17 · **Estado:** backlog vivo (Fase inventario)  
> **Mapa estratégico:** [`ai/MODERN-WEB-GUIDANCE-MAP.md`](./ai/MODERN-WEB-GUIDANCE-MAP.md) · **Lab:** [`LAB-ROADMAP.md`](./LAB-ROADMAP.md) · **Support:** [`SUPPORT.md`](./SUPPORT.md)

---

## Opinión / tesis (cómo usar esto)

Querés dos cosas a la vez:

1. **Buckets 1–3** (CSS core · JS molecule · Skill only) → mejoran el producto y los agents.  
2. **135 muestras hechas con Lagunite** → vitrina de adopción (Lab).

Eso es viable si cada “muestra” **no** es un producto completo:

| Tipo de muestra | Qué es | Esfuerzo |
| --- | --- | --- |
| **Recipe** | 1 pantalla HTML corta (≈40–120 líneas) + clases Lagunite + nota MWG | Bajo — mayoría Skill |
| **Component demo** | Como `demos/04` / POC molecule | Medio — CSS/JS core |
| **Mini-tool** | Interactivo usable | Alto — pocos, Lab hero |

**No** implementamos las 135 features en `dist/lagunite.css`.  
**Sí** catalogamos las 135: cada una tiene bucket + skill + estado de muestra.

Buckets **4–6** (Lab-only sin skill, App/fuera, Won’t) siguen listados para no mentir el inventario, pero **no** son el foco de trabajo de framework.

---

## Buckets (primeros 3 = foco)

| ID | Bucket | Significa |
| --- | --- | --- |
| **1** | **CSS core** | Nueva utility/componente en `src/css` (o cambio de selectores) |
| **2** | **JS molecule** | Componente con JS (patrón picker-wheel) |
| **3** | **Skill only** | HTML/CSS nativo + clases **ya** existentes; skill/Validator enseña el patrón |
| 4 | Lab showcase | Demo narrativa; no cambia core ni skill urgente |
| 5 | App / fuera | Passkeys, AI on-device, analytics, WebMCP… |
| 6 | Won’t (v2.x) | Fuera de matriz Baseline, size, o identidad Lagunite |

**Columnas de las tablas**

- **MWG id** — guide id (`npx modern-web-guidance@latest retrieve <id>`)
- **Bucket** — 1–6
- **Skill / capa** — dónde vive la tarea Lagunite
- **Muestra** — `todo` · `partial` (POC/demo cercano) · `done` · `n/a`
- **Nota** — gap o acción

---

## Cómo generar / cerrar tareas (proceso)

```text
1. Pick fila Bucket 1|2|3 con Muestra=todo
2. retrieve MWG id  →  leer patrón nativo
3. Implementar:
   - (1) CSS + docs:generate + demo
   - (2) CSS+JS + POC
   - (3) bullet en skill + recipe HTML en v3/lab/recipes/<id>.html
4. Marcar Muestra=done · link en Lab hub
5. UI Validator en la recipe
```

**Meta muestra:** `v3/lab/recipes/` con **un HTML por use-case** de buckets 1–3 (y opcionalmente 4).  
Hub: `lab/index.html` filtra por bucket / categoría MWG.

---

## Prioridad de oleadas

| Oleada | Scope | Outcome |
| --- | --- | --- |
| **O0** | Este doc + hub Lab vacío + plantilla recipe | Inventario accionable |
| **O1** | Forms + a11y error + night/dark (≈20 recipes) | Skills parcheadas + muestras |
| **O2** | Dialog / popover / tooltip / drawer (≈15) | Compounds + organisms alineados a nativo |
| **O3** | CSS layout modernos viables (≈15 Bucket 1 candidatos) | Utilities o GAP explícito |
| **O4** | UI atoms scroll/sticky/carousel (Skill + Lab) | Recipes sin engordar core |
| **O5** | Resto Skill-only + stubs “fuera” | Catálogo 135 completo en hub |

---

## Inventario por categoría MWG

> Conteos aproximados al README MWG (preview). IDs = slug del use-case.

### accessibility (1)

| MWG id | Bucket | Skill / capa | Muestra | Nota |
| --- | --- | --- | --- | --- |
| accessible-error-announcement | **3** | validate-a11y · validate-forms | **done** | recipe `v3/lab/recipes/accessible-error-announcement.html` |

### built-in-ai (4) — fuera del core

| MWG id | Bucket | Skill / capa | Muestra | Nota |
| --- | --- | --- | --- | --- |
| language-detection | 5 | — | n/a | App; no CSS |
| language-model | 5 | — | n/a | App |
| summarizer | 5 | — | n/a | App |
| translator | 5 | — | n/a | App |

### css (13)

| MWG id | Bucket | Skill / capa | Muestra | Nota |
| --- | --- | --- | --- | --- |
| animate-to-intrinsic-sizes | **1** / 3 | decorators | todo | Auditar si hay utility; si no → GAP o token motion + recipe |
| calculate-with-intrinsic-sizes | **1** | spacing · containers | todo | Candidato `calc-size` / docs; Baseline check |
| child-state-based-styling | **1** / 2 | compounds | done | `.card-state:has(...)` |
| content-based-styling | **3** | compounds | done | `.card-media:has(...)` |
| design-token-reactivity | **3** | tokens | todo | Ya tokens CSS; skill “density/theme via vars” |
| dynamic-sibling-styling | **1** | decorators | done | `.sibling-hue` / `.sibling-vars` |
| fluid-scaling | **1** | containers | done | `.font-cq` / `.padd-cq` + `.cq` |
| individual-transform-properties | **3** | decorators | todo | Si existen utils translate/rotate/scale → skill; else GAP |
| overflow-clipping-control | **1** | spacing | done | `.overflow-clip` / `.clip-margin-*` |
| reduce-style-repetition | 6 | — | n/a | `@function` CSS — no skill Lagunite aún |
| size-aware-styling | **1** | containers · grid | **done** | `.cq` + `.cq-row` / show-m · recipe |
| style-parent-with-has | **3** | validate-forms | **done** | `.form-surface` + label `:has` · recipe |
| usage-aware-component-variations | **1** | tokens · compose | todo | Style queries — experimental; GAP o Lab |

### forms (15) — oleada O1

| MWG id | Bucket | Skill / capa | Muestra | Nota |
| --- | --- | --- | --- | --- |
| animated-select-picker | **2** / 3 | molecules · atoms | todo | Customizable select vs picker-wheel |
| autofill-address-form | **3** | validate-forms · patterns | **done** | recipe |
| autofill-highlight-inputs | **1** / 3 | atoms · colors | **done** | `:autofill` tint · recipe |
| autofill-payment-form | **3** | validate-forms · patterns | todo | Recipe auth/pay |
| autofill-sign-in-form | **3** | validate-forms · patterns | **done** | recipe `v3/lab/recipes/autofill-sign-in-form.html` |
| autofill-sign-up-form | **3** | validate-forms · patterns | **done** | recipe |
| brand-consistent-forms | **1** / 3 | atoms · tokens | **done** | root `accent-color` + `.accent-*` · recipe |
| branded-select-styling | **1** / 2 | atoms · molecules | **done** | `.select-base` · recipe |
| custom-select-picker-layouts | **2** | molecules | todo | Cercano selectable / picker |
| form-fields-automatically-fit-contents | **1** | atoms | **done** | `.input-fit` · recipe |
| ime-safe-enter-submit | **3** | validate-forms | todo | Skill JS note (no CSS) |
| required-field-feedback | **3** | validate-forms | **done** | recipe `v3/lab/recipes/required-field-feedback.html` |
| rich-media-picker | **2** / 3 | molecules · selectable | **done** | selectable-option + select-base recipe |
| select-menu-interaction | **3** | validate-forms | todo | |
| validate-input-after-interaction | **1** / 3 | validate-forms · atoms | **done** | CSS `:user-*` + `.reveal-user-invalid` · recipe `v3/lab/recipes/…` |

### js (8) — fuera / Lab app

| MWG id | Bucket | Skill / capa | Muestra | Nota |
| --- | --- | --- | --- | --- |
| calculate-event-differentials | 5 | — | n/a | Temporal API |
| capture-location-agnostic-data | 5 | — | n/a | |
| coordinate-global-events | 5 | — | n/a | |
| format-human-readable-durations | 5 | — | n/a | UI puede usar type Lagunite |
| manage-recurring-intervals | 5 | — | n/a | |
| model-partial-time-concepts | 5 | — | n/a | |
| stabilize-reactive-state | 5 | — | n/a | Framework UI libs |
| support-global-calendar-systems | 5 | — | n/a | |

### performance (23) — fuera del CSS core

| MWG id | Bucket | Skill / capa | Muestra | Nota |
| --- | --- | --- | --- | --- |
| batch-analytics-events | 5 | — | n/a | |
| break-up-long-tasks | 5 | — | n/a | |
| calculate-total-foreground-time | 5 | — | n/a | |
| conditional-async-dependencies | 5 | — | n/a | |
| defer-rendering-heavy-content | **3** / 4 | misc | done | `.cv-auto` + `.cv-size-*` |
| defer-work-until-scroll-ends | 5 | — | n/a | |
| deliver-optimized-decorative-images | **3** | patterns · decorators | done | picture + `.bg-image-set` |
| deprioritize-background-fetches | 5 | — | n/a | |
| detect-initial-visibility-state | 5 | — | n/a | |
| efficient-background-processing | 5 | — | n/a | |
| faster-spa-view-transitions | 4 | decorators | todo | Lab SPA only |
| flicker-free-client-side-ab-testing | 5 | — | n/a | |
| full-session-analytics | 5 | — | n/a | |
| identify-heavy-scripts | 5 | — | n/a | |
| identify-inp-causes | 5 | — | n/a | |
| improve-next-page-load-performance | 4 | — | todo | Speculation — Lab note |
| interactions-in-complex-layouts | **3** | compose · misc | done | `.contain-*` |
| optimize-image-priority | **3** | patterns | done | recipe `fetchpriority` / `loading` |
| optimize-preload-priority | 4 | — | todo | |
| optimize-script-priority | 4 | — | todo | |
| resolution-optimized-pseudo-elements | **3** | misc | done | `.icon-set` + image-set |
| schedule-tasks-by-priority | 5 | — | n/a | |
| sequence-distributed-events | 5 | — | n/a | |

### privacy (1)

| MWG id | Bucket | Skill / capa | Muestra | Nota |
| --- | --- | --- | --- | --- |
| privacy | 5 | — | n/a | Headers / producto |

### security (6)

| MWG id | Bucket | Skill / capa | Muestra | Nota |
| --- | --- | --- | --- | --- |
| passkeys | 5 | — | n/a | |
| passkey-authentication | 5 | — | n/a | |
| passkey-conditional-create | 5 | — | n/a | |
| passkey-management | 5 | — | n/a | |
| passkey-reauthentication | 5 | — | n/a | |
| passkey-registration | 5 | — | n/a | |

### ui-atoms (10)

| MWG id | Bucket | Skill / capa | Muestra | Nota |
| --- | --- | --- | --- | --- |
| carousel-slide-effects | **2** / 3 | molecules · decorators | todo | Scroll-driven; Baseline |
| component-specific-light-dark-theme | **3** | validate-night · colors | todo | `color-scheme` en isla (code block) |
| position-aware-tooltips | **1** / 2 | molecules (tooltip) | **done** | data-tooltip + `.tooltip-popover` · recipe |
| pull-to-reveal | 4 / 6 | — | todo | Móvil; Lab o won’t |
| resilient-context-menus-and-nested-dropdowns | **2** / 3 | molecules (dropdown) | done | `.dropdown-panel` + recipe |
| scroll-position-aware-elements | **3** | organisms · misc | todo | Recipe FAB back-to-top |
| scroll-progress-indicator | **1** / 3 | decorators · animations | done | `.scroll-progress` |
| scrollability-affordance-hints | **1** / 3 | overflow | done | `.scroll-state` + hints |
| shrinking-header-on-scroll | **3** / 2 | organisms (navbar) | todo | Animation scroll-driven |
| state-aware-sticky-headers | **1** / 3 | position | done | `.sticky-state` / `.sticky-surface` |

### ui-behaviors (29)

| MWG id | Bucket | Skill / capa | Muestra | Nota |
| --- | --- | --- | --- | --- |
| anchor-positioning-tab-underline | **1** / 3 | molecules (tabs) | todo | Underline morph |
| animate-element-entry-exit | **3** | decorators | done | `.enter-exit` |
| animate-to-from-top-layer | **1** / 3 | compounds | done | `dialog.modal` motion |
| carousel-snap-highlights | **3** | misc · decorators | todo | Scroll snap |
| consistent-cross-document-transitions | 4 | — | todo | MPA Lab |
| cross-document-transitions | 4 | — | todo | |
| custom-button-actions | **3** | atoms · compounds | todo | Invoker commands |
| declarative-dialog-popover-control | **3** | compounds | **done** | recipe + `dialog.modal` CSS · invoker fallback |
| directional-navigation-transitions | 4 | decorators | todo | Lab |
| dynamic-sibling-animations | **3** | decorators | done | `.stagger` |
| group-element-transitions | 4 | decorators | todo | View transitions list |
| highlight-text-ranges | 4 / 6 | — | todo | CSS Highlight API — Lab |
| interactive-content-reveal | 4 | decorators | todo | |
| interest-triggered-action-previews | **3** | molecules | todo | Interest invokers — Baseline |
| interest-triggered-tooltips | **3** | molecules (tooltip) | done | `.tooltip-hint` + recipe |
| light-dismiss-a-dialog | **3** | compounds | **done** | recipe · `closedby="any"` + Safari fallback |
| move-dom-element-without-losing-state | 5 | — | n/a | `moveBefore` — app |
| parallax-scroll-effects | 4 / 6 | decorators | todo | Anti-slop: usar con cuidado |
| persistent-top-layer-ui | **3** | compounds | todo | |
| physics-based-easing | **3** | decorators · tokens | todo | `linear()` easing tokens? |
| platform-controls-dismiss-dialog | **3** | compounds · validate-a11y | todo | Esc / back |
| same-document-transitions | 4 | decorators | todo | SPA Lab |
| scroll-entry-exit-effects | **3** | decorators | todo | |
| scroll-snap-realtime-feedback | **3** | misc | todo | |
| scroll-snap-state-sync | **3** | misc · molecules | todo | |
| scroll-target-on-load | **3** | misc | todo | `scroll-initial-target` |
| scrollytelling | 4 | — | todo | Marketing Lab |
| search-hidden-content | **3** | molecules · compounds | **done** | details + until-found · recipe |
| swipe-to-remove | **2** / 4 | molecules | todo | Touch Lab |

### ui-components (7)

| MWG id | Bucket | Skill / capa | Muestra | Nota |
| --- | --- | --- | --- | --- |
| navigation-drawer | **3** | organisms (sidebar) | **done** | `.sidebar-drawer` + backdrop · recipe |
| persistent-app-tours | 4 | compounds | todo | Popover tour Lab |
| persistent-toast-notifications | **1** / 2 | molecules · alerts | done | `popover=manual` + `.toast-stack` / `--toast-offset` |
| progress-ring | **1** | atoms | done | `11-progress-ring.css` |
| scrollspy | **2** / 3 | organisms · navbar | done | `.scrollspy` + IO fallback |
| spinner | **1** / 3 | atoms · decorators | **done** | `10-spinner.css` · recipe |
| stack-drill-down | 4 | patterns | todo | Mobile nav Lab |

### visual-design (16)

| MWG id | Bucket | Skill / capa | Muestra | Nota |
| --- | --- | --- | --- | --- |
| adapt-scrollbar-to-contrast-preferences | **3** | validate-a11y · contrast | todo | |
| apply-webgl-shaders | 6 | — | n/a | Fuera identidad |
| complex-shapes | 4 / 6 | decorators | todo | `clip-path` Lab |
| customize-scrollbar-color-and-thickness | **1** / 3 | decorators · tokens | todo | scrollbar-color utilities? |
| dark-mode | **3** (+1) | validate-night · colors | **done** | `color-scheme` on `:root`/`.night` · recipe |
| export-html-media-from-canvas | 5 | — | n/a | |
| expose-canvas-content-to-browser-features | 5 | — | n/a | |
| improve-text-layout-and-legibility | **1** / 3 | typography | **done** | `.text-balance` / `.text-pretty` · recipe |
| interactive-content-in-3d-scenes | 6 | — | n/a | |
| precise-text-alignment | **1** / 3 | typography | done | `.text-trim` |
| prevent-text-wrapping | **3** | typography · misc | todo | Si hay `nowrap` utils |
| shaped-cutouts | 4 | decorators | todo | |
| soft-edge-content-fade | **1** / 3 | decorators | done | `.fade-edge-*` |
| visually-stable-font-fallbacks | **3** | typography · tokens | todo | `font-size-adjust` |
| visually-stable-mixed-fonts | **3** | typography | todo | |
| visually-texture-content | 4 / 6 | decorators | todo | Filtros; anti-slop |

### webmcp (2)

| MWG id | Bucket | Skill / capa | Muestra | Nota |
| --- | --- | --- | --- | --- |
| agentic-forms | 5 / 4 | validate-forms | todo | Lab “AI-readable form” opcional |
| agentic-javascript-tools | 5 | — | n/a | |

---

## Resumen numérico (aprox.)

| Bucket | ~Count | Rol |
| --- | --- | --- |
| **1 CSS core** | ~25 (varios compartidos 1/3) | Mejoras reales al bundle |
| **2 JS molecule** | ~10 | Pocos componentes |
| **3 Skill only** | ~55 | Mayoría de recipes Lab |
| 4 Lab showcase | ~20 | Narrativa sin core |
| 5 App / fuera | ~40 | Stub en hub (“no es Lagunite”) |
| 6 Won’t | ~8 | Documentar rechazo |

**Muestras “hechas con Lagunite”:** objetivo práctico = **recipes para todo Bucket 1+2+3** (~70–90 HTML), no 135 apps. Los Bucket 5/6 aparecen en el hub como tarjetas “fuera de alcance” con link al guide MWG.

---

## Top 15 accionables (empezar aquí)

| # | MWG id | Bucket | Acción Lagunite |
| --- | --- | --- | --- |
| 1 | validate-input-after-interaction | 1/3 | ✅ CSS `:user-*` + skill + recipe |
| 2 | required-field-feedback | 3 | ✅ recipe + validate-forms |
| 3 | accessible-error-announcement | 3 | ✅ recipe + validate-a11y |
| 4 | declarative-dialog-popover-control | 3 | ✅ recipe + `dialog.modal` + compounds |
| 5 | light-dismiss-a-dialog | 3 | ✅ recipe + `closedby` fallback |
| 6 | dark-mode | 3/1 | ✅ `color-scheme` + recipe |
| 7 | autofill-sign-in-form | 3 | ✅ recipe |
| 8 | brand-consistent-forms | 1/3 | ✅ accent + recipe |
| 9 | style-parent-with-has | 3 | ✅ `.form-surface` + recipe |
| 10 | improve-text-layout-and-legibility | 1/3 | ✅ `.text-balance`/`.text-pretty` |
| 11 | position-aware-tooltips | 1/2 | ✅ recipe + anchor popover CSS |
| 12 | navigation-drawer | 3 | ✅ `.sidebar-drawer` + recipe |
| 13 | spinner | 1/3 | ✅ atom + recipe |
| 14 | size-aware-styling | 1 | ✅ `.cq` + recipe |
| 15 | search-hidden-content | 3 | ✅ details / until-found recipe |

---

## Top 15 · Oleada 2 (propuesta)

Tras Oleada 1 (forms · dialogs · night · type · drawer · CQ), el backlog 1–3 restante se resume en **6 temas**. Este Top 15 prioriza impacto Lagunite (CSS/skill/recipe), no Lab marketing puro ni bucket 5.

### Temas principales (mapa)

| Tema | Qué empuja | Ejemplos MWG pendientes |
| --- | --- | --- |
| **A · Forms / select / autofill** | Completar la familia forms | autofill-sign-up, address, payment, `:autofill` highlight, field-sizing, select branded / picker |
| **B · Overlay / menus / toast** | Capas top-layer y feedback | dropdown+anchor, toast stack, interest tooltips, progress-ring |
| **C · Scroll / sticky / snap** | App chrome y listas | scroll progress, scroll shadows, sticky state, FAB, scrollspy, carousel snap |
| **D · Motion / entry-exit** | Decorators modernos | starting-style, modal enter/exit, intrinsic size animate, stagger siblings |
| **E · CSS layout moderno** | Utilities / tokens | fluid scaling, overflow clip, sibling-index, `:has` layouts, text-box trim |
| **F · Media / perf light** | Skills + HTML nativo | fetchpriority, picture/image-set, content-visibility |

Fuera de Oleada 2 (dejar en 4/5/6): passkeys, Temporal, INP tooling, WebMCP, WebGL, scrollytelling pesado, view transitions SPA/MPA (salvo un Lab hero después).

### Top 15 accionables (Oleada 2)

| # | MWG id | Bucket | Tema | Acción Lagunite |
| --- | --- | --- | --- | --- |
| 16 | autofill-sign-up-form | 3 | A | ✅ recipe |
| 17 | autofill-address-form | 3 | A | ✅ recipe |
| 18 | autofill-highlight-inputs | 1/3 | A | ✅ `:autofill` CSS + recipe |
| 19 | form-fields-automatically-fit-contents | 1 | A | ✅ `.input-fit` + recipe |
| 20 | branded-select-styling | 1/2 | A | ✅ `.select-base` + recipe |
| 21 | rich-media-picker | 2/3 | A | ✅ selectable-option + select-base recipe |
| 22 | resilient-context-menus-and-nested-dropdowns | 2/3 | B | ✅ `.dropdown-panel` + recipe |
| 23 | persistent-toast-notifications | 1/2 | B | ✅ `popover=manual` toast + recipe |
| 24 | progress-ring | 1 | B | ✅ `progress.progress-ring` atom + recipe |
| 25 | interest-triggered-tooltips | 3 | B | ✅ `.tooltip-hint` + recipe |
| 26 | scroll-progress-indicator | 1/3 | C | ✅ `.scroll-progress` + recipe |
| 27 | scrollability-affordance-hints | 1/3 | C | ✅ `.scroll-state` + hints + recipe |
| 28 | state-aware-sticky-headers | 1/3 | C | ✅ `.sticky-state` + recipe |
| 29 | scrollspy | 2/3 | C | ✅ `.scrollspy` + IO fallback recipe |
| 30 | animate-element-entry-exit | 3 | D | ✅ `.enter-exit` + recipe |
| 31 | animate-to-from-top-layer | 1/3 | D | ✅ `dialog.modal` motion + recipe |
| 32 | soft-edge-content-fade | 1 | D/E | ✅ `.fade-edge-*` + recipe |
| 33 | precise-text-alignment | 1 | D/E | ✅ `.text-trim` + recipe |
| 34 | child-state-based-styling | 1/2 | D/E | ✅ `.card-state` + recipe |
| 35 | optimize-image-priority | 3 | D/F | ✅ recipe (attrs) |

**Cola corta (31–35):** ✅ done with Bloque D.

### Cómo atacar Oleada 2

1. Bloque **A** (16–21) — ✅ done.  
2. Bloque **B** (22–25) — ✅ done.  
3. Bloque **C** (26–29) — ✅ done.  
4. Bloque **D** (#30 + cola 31–35) — ✅ done.

### Oleada 3 · Bloque E (CSS layout moderno)

| # | MWG id | Bucket | Tema | Acción Lagunite |
| --- | --- | --- | --- | --- |
| 36 | fluid-scaling | 1 | E | ✅ `.font-cq` / `.padd-cq` + `.cq` |
| 37 | overflow-clipping-control | 1 | E | ✅ `.overflow-clip` + `.clip-margin-*` |
| 38 | dynamic-sibling-styling | 1 | E | ✅ `.sibling-hue` / `.sibling-vars` |
| 39 | content-based-styling | 3 | E | ✅ `.card-media` + recipe |
| 40 | dynamic-sibling-animations | 3 | E | ✅ `.stagger` + recipe |

Ya cubierto en D (tema E solapado): `#33` text-trim · `#34` card-state.

### Oleada 3 · Bloque F (media / perf light)

| # | MWG id | Bucket | Tema | Acción Lagunite |
| --- | --- | --- | --- | --- |
| 35 | optimize-image-priority | 3 | F | ✅ (hecho en D) recipe attrs |
| 41 | defer-rendering-heavy-content | 3 | F | ✅ `.cv-auto` / `.cv-size-*` |
| 42 | deliver-optimized-decorative-images | 3 | F | ✅ `<picture>` + `.bg-image-set` |
| 43 | resolution-optimized-pseudo-elements | 3 | F | ✅ `.icon-set` |
| 44 | interactions-in-complex-layouts | 3 | F | ✅ `.contain-*` + recipe |

Mismo DoD que Oleada 1: recipe en `v3/lab/recipes/` · skill/CSS si Bucket 1–2 · marcar **done** aquí · polish visual después.

---

## Estructura Lab propuesta (muestras)

```text
lab/
  index.html                 # hub: filtros bucket / categoría / estado
  about.html
  _recipe-template.html
  recipes/
    validate-input-after-interaction.html
    declarative-dialog-popover-control.html
    dark-mode.html
    …
  posts/                     # blog solo para heroes (no 135 posts)
```

Cada recipe:

1. Title = MWG id  
2. Link `retrieve` / docs web-features  
3. Live markup Lagunite  
4. Lista clases héroe  
5. `<!-- GAP -->` si aplica  
6. Bucket badge  

---

## Checklist inmediato

- [x] Aprobar tesis: **~70–90 recipes** (1–3) + stubs 5/6 en hub ≠ 135 productos
- [x] Crear `lab/` hub + primera recipe (`validate-input-after-interaction`)
- [ ] Skill bridge `ai/skills/modern-platform.md` (hot map Top 15)
- [x] Oleada O1 arranque: Top 5 recipes (forms/a11y/dialogs) + skills / CSS `:user-*` + `dialog.modal`
- [ ] Ir marcando **Muestra** en este archivo (`todo` → `done`)
- [x] Tras CSS: `docs:generate` solo si Bucket 1 tocó `src/css`
- [ ] **Importante (post Lab estable):** Recipes como skilllets — ver § siguiente

---

## Recipes como skilllets (importante · post HTML estable)

> **Prioridad alta** para la base de conocimiento AI (consumo en este repo y en proyectos hermanos).  
> **No empezar** a mitad de la pasada Lab / REVISION-v2.2: primero fijar el set de recipes HTML; después convertir.  
> Relacionado: [`ai/AGENTS-AND-SKILLS.md`](./ai/AGENTS-AND-SKILLS.md) backlog · [`ToDo-ai-first.md`](./ToDo-ai-first.md) (pack `@lagunite/ai`).

### Tesis

Los HTML de `v3/lab/recipes/` son **fixtures de browser** (night, progressive, revisión humana). Para la IA son ruido (chrome del lab, cards de demo, tokens altos) y no un contrato de “qué emitir”.  
**Canónico para agentes:** markdown corto tipo skilllet, mismo espíritu que `ai/skills/`.

### Qué SÍ / qué NO

| Artefacto | Rol | ¿Skilllet? |
| --- | --- | --- |
| `v3/lab/recipes/*.html` | Probar en browser | No — quedan como fixture / vista |
| `demos/` | Barra visual QA / release | No — pantallas enteras |
| `pocs/` | Exploración / regresión | No — fixtures |
| **`ai/recipes/<id>.md`** (propuesto) | Instrucción on-demand para agentes | **Sí** — fuente canónica del patrón |

### Formato skilllet (plantilla)

```text
# <mwg-id o nombre>
When: …
Do: …
Markup: (3–8 líneas canónicas Lagunite)
Don’t: …
A11y: …
Classes: …
See also: <layer skill> · fixture `v3/lab/recipes/<id>.html` (opcional)
```

### Checklist de ejecución

- [ ] Decidir path canónico: `ai/recipes/<id>.md` (preferido) vs sección larga dentro de layer skills
- [ ] Plantilla + ejemplo piloto (p. ej. `spinner`, `validate-input-after-interaction`)
- [ ] Migrar recipes Bucket 1–3 hechas: un `.md` por id (no volcar demos/pocs)
- [ ] Layer skills (`atoms`, `validate-forms`, …): dejar de apuntar solo al HTML; link al skilllet
- [ ] Índice on-demand (`ai/SKILLS-INDEX.md` o `ai/recipes/README.md`) — **no** precargar todas
- [ ] HTML lab: mantener (o adelgazar a vista del snippet); no matar el browser QA
- [ ] `npm run ai:sync` si hace falta discovery wrapper (opcional: skill `lagunite-recipes` router)
- [ ] Documentar en `CONTEXT-HYGIENE` / `AGENTS-AND-SKILLS`: recipe skilllets = load on demand
- [ ] (Luego) incluir `ai/recipes/` en el futuro pack `@lagunite/ai` para proyectos consumidores

**Done cuando:** un agente en otro workspace puede componer un patrón MWG abriendo el skilllet (sin parsear el HTML del lab), y el Lab sigue sirviendo para ojo humano / night / browsers.

---

## Relación con otros docs

| Doc | Relación |
| --- | --- |
| [`ai/MODERN-WEB-GUIDANCE-MAP.md`](./ai/MODERN-WEB-GUIDANCE-MAP.md) | Estrategia / por qué |
| Este archivo | **Backlog ejecutable** |
| [`LAB-ROADMAP.md`](./LAB-ROADMAP.md) | Lab persuasión (3 heroes); recipes MWG = pista paralela del catálogo |
| [`ToDo-prod.md`](./ToDo-prod.md) | Release CSS v2.1 — no mezclar; modern-platform = post-gate o paralelo Lab |
| [`ToDo-ai-first.md`](./ToDo-ai-first.md) | Compiler / `@lagunite/ai`; skilllets alimentan el pack de conocimiento |
