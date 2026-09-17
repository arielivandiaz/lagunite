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
   - (3) bullet en skill + recipe HTML en lab/recipes/<id>.html
4. Marcar Muestra=done · link en Lab hub
5. UI Validator en la recipe
```

**Meta muestra:** `lab/recipes/` con **un HTML por use-case** de buckets 1–3 (y opcionalmente 4).  
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
| accessible-error-announcement | **3** | validate-a11y · validate-forms | todo | Sync `aria-invalid` con feedback post-interact (`.form-error-msg` / `:user-invalid`) |

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
| child-state-based-styling | **3** | compose · colors | todo | `:has()` ya en matriz; recipe + skill |
| content-based-styling | **3** | compose · flex | todo | `:has()` layouts |
| design-token-reactivity | **3** | tokens | todo | Ya tokens CSS; skill “density/theme via vars” |
| dynamic-sibling-styling | **1** | misc · decorators | todo | `sibling-index()` — Baseline; utility o GAP |
| fluid-scaling | **1** | typography · spacing | todo | Container-based fluid; hoy `x*`/`d*` |
| individual-transform-properties | **3** | decorators | todo | Si existen utils translate/rotate/scale → skill; else GAP |
| overflow-clipping-control | **1** | spacing · misc | todo | `overflow: clip` / clip-margin |
| reduce-style-repetition | 6 | — | n/a | `@function` CSS — no skill Lagunite aún |
| size-aware-styling | **1** | containers · grid | todo | Container queries — gran candidato v2.2 |
| style-parent-with-has | **3** | validate-forms | todo | `.form-group:has(:user-invalid)` recipe |
| usage-aware-component-variations | **1** | tokens · compose | todo | Style queries — experimental; GAP o Lab |

### forms (15) — oleada O1

| MWG id | Bucket | Skill / capa | Muestra | Nota |
| --- | --- | --- | --- | --- |
| animated-select-picker | **2** / 3 | molecules · atoms | todo | Customizable select vs picker-wheel |
| autofill-address-form | **3** | validate-forms · patterns | todo | `autocomplete` + `.form-group` |
| autofill-highlight-inputs | **1** / 3 | atoms · colors | todo | Estilo `:autofill` si falta en CSS |
| autofill-payment-form | **3** | validate-forms · patterns | todo | Recipe auth/pay |
| autofill-sign-in-form | **3** | validate-forms · patterns | partial | Hay POC mobile login |
| autofill-sign-up-form | **3** | validate-forms · patterns | todo | |
| brand-consistent-forms | **1** / 3 | atoms · tokens | todo | `accent-color` token si falta |
| branded-select-styling | **1** / 2 | atoms · molecules | todo | Select appearance vs custom |
| custom-select-picker-layouts | **2** | molecules | todo | Cercano selectable / picker |
| form-fields-automatically-fit-contents | **1** | atoms | todo | `field-sizing` — Baseline |
| ime-safe-enter-submit | **3** | validate-forms | todo | Skill JS note (no CSS) |
| required-field-feedback | **3** (+1?) | validate-forms | todo | Prefer `:user-invalid`; evaluar CSS gate placeholder |
| rich-media-picker | **2** / 3 | molecules · selectable | partial | selectable-option / chips |
| select-menu-interaction | **3** | validate-forms | todo | |
| validate-input-after-interaction | **1** / 3 | validate-forms · atoms | todo | **P0** — migrar mental model `:valid`→`:user-invalid` |

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
| defer-rendering-heavy-content | **3** / 4 | compose · misc | todo | `content-visibility` recipe si cabe |
| defer-work-until-scroll-ends | 5 | — | n/a | |
| deliver-optimized-decorative-images | **3** | compose · patterns | todo | `image-set` / HTML picture — skill |
| deprioritize-background-fetches | 5 | — | n/a | |
| detect-initial-visibility-state | 5 | — | n/a | |
| efficient-background-processing | 5 | — | n/a | |
| faster-spa-view-transitions | 4 | decorators | todo | Lab SPA only |
| flicker-free-client-side-ab-testing | 5 | — | n/a | |
| full-session-analytics | 5 | — | n/a | |
| identify-heavy-scripts | 5 | — | n/a | |
| identify-inp-causes | 5 | — | n/a | |
| improve-next-page-load-performance | 4 | — | todo | Speculation — Lab note |
| interactions-in-complex-layouts | **3** | compose · grid | todo | Evitar layout thrash — skill compose |
| optimize-image-priority | **3** | patterns | todo | `fetchpriority` en demos |
| optimize-preload-priority | 4 | — | todo | |
| optimize-script-priority | 4 | — | todo | |
| resolution-optimized-pseudo-elements | **3** | decorators | todo | |
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
| position-aware-tooltips | **1** / 2 | molecules (tooltip) | todo | Anchor positioning |
| pull-to-reveal | 4 / 6 | — | todo | Móvil; Lab o won’t |
| resilient-context-menus-and-nested-dropdowns | **2** / 3 | molecules (dropdown) | todo | Popover + anchor |
| scroll-position-aware-elements | **3** | organisms · misc | todo | Recipe FAB back-to-top |
| scroll-progress-indicator | **1** / 3 | decorators · misc | todo | Utility o recipe CSS |
| scrollability-affordance-hints | **1** / 3 | decorators | todo | Scroll shadows |
| shrinking-header-on-scroll | **3** / 2 | organisms (navbar) | todo | Animation scroll-driven |
| state-aware-sticky-headers | **1** / 3 | organisms · misc | todo | `scroll-state` queries |

### ui-behaviors (29)

| MWG id | Bucket | Skill / capa | Muestra | Nota |
| --- | --- | --- | --- | --- |
| anchor-positioning-tab-underline | **1** / 3 | molecules (tabs) | todo | Underline morph |
| animate-element-entry-exit | **3** | decorators | todo | `@starting-style` / display transition |
| animate-to-from-top-layer | **3** | compounds | todo | Modal enter/exit |
| carousel-snap-highlights | **3** | misc · decorators | todo | Scroll snap |
| consistent-cross-document-transitions | 4 | — | todo | MPA Lab |
| cross-document-transitions | 4 | — | todo | |
| custom-button-actions | **3** | atoms · compounds | todo | Invoker commands |
| declarative-dialog-popover-control | **3** | compounds | todo | **P0** `<dialog>` + button command |
| directional-navigation-transitions | 4 | decorators | todo | Lab |
| dynamic-sibling-animations | **3** | decorators | todo | Stagger via sibling-index |
| group-element-transitions | 4 | decorators | todo | View transitions list |
| highlight-text-ranges | 4 / 6 | — | todo | CSS Highlight API — Lab |
| interactive-content-reveal | 4 | decorators | todo | |
| interest-triggered-action-previews | **3** | molecules | todo | Interest invokers — Baseline |
| interest-triggered-tooltips | **3** | molecules (tooltip) | todo | |
| light-dismiss-a-dialog | **3** | compounds | todo | **P0** `closedby` |
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
| search-hidden-content | **3** | molecules · compounds | todo | `hidden=until-found` + accordion |
| swipe-to-remove | **2** / 4 | molecules | todo | Touch Lab |

### ui-components (7)

| MWG id | Bucket | Skill / capa | Muestra | Nota |
| --- | --- | --- | --- | --- |
| navigation-drawer | **3** | organisms (sidebar) | partial | Mapear a sidebar overlay |
| persistent-app-tours | 4 | compounds | todo | Popover tour Lab |
| persistent-toast-notifications | **1** / 2 | molecules · alerts | todo | ¿Toast stack? GAP vs alert |
| progress-ring | **1** | atoms | todo | Candidato atom nuevo |
| scrollspy | **2** / 3 | organisms · misc | todo | Nav highlight |
| spinner | **1** / 3 | atoms · decorators | todo | Loading + reduced-motion |
| stack-drill-down | 4 | patterns | todo | Mobile nav Lab |

### visual-design (16)

| MWG id | Bucket | Skill / capa | Muestra | Nota |
| --- | --- | --- | --- | --- |
| adapt-scrollbar-to-contrast-preferences | **3** | validate-a11y · contrast | todo | |
| apply-webgl-shaders | 6 | — | n/a | Fuera identidad |
| complex-shapes | 4 / 6 | decorators | todo | `clip-path` Lab |
| customize-scrollbar-color-and-thickness | **1** / 3 | decorators · tokens | todo | scrollbar-color utilities? |
| dark-mode | **3** (+1?) | validate-night · colors | partial | demos/05; sumar `color-scheme` |
| export-html-media-from-canvas | 5 | — | n/a | |
| expose-canvas-content-to-browser-features | 5 | — | n/a | |
| improve-text-layout-and-legibility | **1** / 3 | typography | todo | `text-wrap: balance/pretty` |
| interactive-content-in-3d-scenes | 6 | — | n/a | |
| precise-text-alignment | **1** / 3 | typography | todo | `text-box` / trim |
| prevent-text-wrapping | **3** | typography · misc | todo | Si hay `nowrap` utils |
| shaped-cutouts | 4 | decorators | todo | |
| soft-edge-content-fade | **1** / 3 | decorators | todo | Mask fade scroll hint |
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
| 1 | validate-input-after-interaction | 1/3 | Skills + evaluar CSS `:user-invalid` |
| 2 | required-field-feedback | 3 | validate-forms + recipe |
| 3 | accessible-error-announcement | 3 | validate-a11y |
| 4 | declarative-dialog-popover-control | 3 | compounds + `<dialog>` recipe |
| 5 | light-dismiss-a-dialog | 3 | compounds |
| 6 | dark-mode | 3/1 | validate-night + `color-scheme` |
| 7 | autofill-sign-in-form | 3 | patterns + recipe (reusar POC) |
| 8 | brand-consistent-forms | 1/3 | `accent-color` token/util |
| 9 | style-parent-with-has | 3 | form-group:has recipe |
| 10 | improve-text-layout-and-legibility | 1/3 | typography utilities |
| 11 | position-aware-tooltips | 1/2 | tooltip + anchor |
| 12 | navigation-drawer | 3 | sidebar overlay recipe |
| 13 | spinner | 1/3 | atom loading |
| 14 | size-aware-styling | 1 | container queries (spike v2.2) |
| 15 | search-hidden-content | 3 | accordion / tabs + `hidden=until-found` |

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

- [ ] Aprobar tesis: **~70–90 recipes** (1–3) + stubs 5/6 en hub ≠ 135 productos
- [ ] Crear `lab/` hub + `_recipe-template.html`
- [ ] Skill bridge `ai/skills/modern-platform.md` (hot map Top 15)
- [ ] Oleada O1: 5 recipes forms/a11y + parches skills
- [ ] Ir marcando **Muestra** en este archivo (`todo` → `done`)
- [ ] Tras CSS: `docs:generate` solo si Bucket 1 tocó `src/css`

---

## Relación con otros docs

| Doc | Relación |
| --- | --- |
| [`ai/MODERN-WEB-GUIDANCE-MAP.md`](./ai/MODERN-WEB-GUIDANCE-MAP.md) | Estrategia / por qué |
| Este archivo | **Backlog ejecutable** |
| [`LAB-ROADMAP.md`](./LAB-ROADMAP.md) | Lab persuasión (3 heroes); recipes MWG = pista paralela del catálogo |
| [`ToDo-prod.md`](./ToDo-prod.md) | Release CSS v2.1 — no mezclar; modern-platform = post-gate o paralelo Lab |
