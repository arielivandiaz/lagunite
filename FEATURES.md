# Lagunite — Features shipped (CSS runtime)

> Catálogo de **capacidades ya entregadas** en el runtime CSS (+ JS de componentes).  
> Lo pendiente vive en [`ToDo-prod.md`](./ToDo-prod.md).  
> **Versión actual:** **2.1.0** · **Última actualización:** 2026-09-15

---

## Capas CSS auditadas (readyToProd)

Auditoría archivo-a-archivo (RTP-1, abr 2026). Todas estas capas están en el bundle y marcadas listas:

| Capa | Estado |
| --- | --- |
| `00-config` (palette, tokens, theme, base) | ✅ |
| `01-text` | ✅ |
| `02-colors` | ✅ |
| `03-layout` (flex, grid, spacing, display…) | ✅ |
| `04-decorators` | ✅ |
| `05-atoms` | ✅ |
| `06-molecules/01` … `15` | ✅ (incl. picker-wheel + selectable-option) |
| `07-compounds` | ✅ |
| `08-organisms` | ✅ (salto 06→09 documentado; no renumerar v2.1) |
| `10-misc` | ✅ |

**Nota:** `09-patterns` no es carpeta CSS; vive como skill/docs.

---

## Moléculas con JS

| Componente | Archivos | Notas |
| --- | --- | --- |
| **Picker wheel** | `06-molecules/14-picker-wheel.css` + `src/js/06-molecules/14-picker-wheel.js` | Auto-init; `change` event; teclado; POC `pocs/poc-picker-wheel.html` |
| **Selectable option** | `06-molecules/15-selectable-option.css` | CSS-only `:checked`; POC `pocs/mobile/poc-goal-selector.html` |

---

## Anti-slop defaults (CSS)

Cambios de incentivo para que el camino fácil no produzca UI genérica/rota.

| Feature | Qué hace | Dónde |
| --- | --- | --- |
| **Flex start por defecto** | `.row` / `.col` / `.rowr` / `.colr` usan `justify-content` + `align-items: flex-start`. Center solo con `.flex-center` / `jc-c`+`ai-c` | `03-layout/01-flex.css` |
| **Helpers de centrado** | `.flex-center`, `.flex-center-h`, `.flex-center-v` (compat del comportamiento viejo) | idem |
| **Btn sin margen mágico** | `.btn { margin: 0 }` — el espacio lo da el padre (`gap` / `marg-*`) | `05-atoms/01-buttons.css` |
| **On-fill text** | `.color-on-fill` (+ token `--color-on-fill`) = texto sobre fill primario; deja de confundirse con “muted” | `02-colors/02-text.css`, `00-config/03-theme.css` |
| **Muted semántico** | `.text-muted` (light + `.night`) | `02-colors/02-text.css` |
| **Surface aliases** | `.bg-surface` / `.bg-surface-raised` → fondos de panel (no `.bg-1`…`.bg-9`) | `02-colors/01-background.css` |
| **Inputs post-interact** | `:user-invalid` / `:user-valid` (success still gated on `[placeholder]` + filled) | `05-atoms/02-inputs.css` |
| **Error copy reveal** | `.form-error-msg.reveal-user-invalid` until `:user-invalid` | `06-molecules/01-form-groups.css` |
| **Native dialog shell** | `dialog.modal` + `::backdrop` (Invoker / `closedby` in Lab recipes) | `07-compounds/02-modals.css` |
| **color-scheme** | `:root` light · `.night` dark | `00-config/03-theme.css` |
| **accent-color** | root primary + `.accent-primary` / success / error | theme + `04-decorators/01-effects.css` |
| **form-surface :has** | Ancestor tint when `:user-invalid` | `06-molecules/01-form-groups.css` |
| **text-wrap utils** | `.text-balance` · `.text-pretty` | `01-text/02-typography.css` |
| **Spinner** | `.spinner` / `progress.spinner` + reduced-motion | `05-atoms/10-spinner.css` |
| **Container queries** | `.cq` · `.cq-row` · `.cq-show-m` / `.cq-hide-m` | `03-layout/06-containers.css` |
| **Sidebar drawer** | `.sidebar-drawer` · `.sidebar-backdrop` | `08-organisms/02-sidebar.css` |
| **Anchored tooltip** | `.tooltip-anchor` / `.tooltip-popover` (@supports) | `06-molecules/04-tooltip.css` |
| **Interest tooltip** | `interestfor` + `popover=hint` · `.tooltip-hint` | `06-molecules/04-tooltip.css` |
| **Dropdown panel** | `.dropdown-trigger` / `.dropdown-panel` (popover + anchor) | `06-molecules/03-dropdown.css` |
| **Manual toast** | `[popover].toast` · `.toast-stack` · `--toast-offset` | `06-molecules/02-alerts.css` |
| **Progress ring** | `progress.progress-ring` + wrap/content | `05-atoms/11-progress-ring.css` |
| **Scroll progress** | `.scroll-progress` (`animation-timeline: scroll()`) | `04-decorators/07-animations.css` |
| **Scroll hints** | `.scroll-state` · `.scroll-hint-top` / `-bottom` | `03-layout/07-overflow.css` |
| **Sticky stuck** | `.sticky-state` · `.sticky-surface` · `.sticky-section` | `03-layout/03-position.css` |
| **Scrollspy** | `.scrollspy` + `:target-current` | `08-organisms/01-navbar.css` |
| **Enter/exit** | `.enter-exit` · `.transition-discrete` | `04-decorators/06-transitions.css` |
| **Dialog motion** | `dialog.modal` `@starting-style` + overlay | `07-compounds/02-modals.css` |
| **Edge fade** | `.fade-edge-b` / `-t` / `-y` | `04-decorators/08-filters.css` |
| **Text trim** | `.text-trim` · `.text-trim-start` | `01-text/02-typography.css` |
| **Card :has state** | `.card-state` | `07-compounds/01-cards.css` |
| **Card media :has** | `.card-media` layout from child img | `07-compounds/01-cards.css` |
| **Fluid CQ type** | `.font-cq*` · `.padd-cq` · `.gap-cq` | `03-layout/06-containers.css` |
| **Overflow clip** | `.overflow-clip` · `.clip-margin-*` | `03-layout/07-overflow.css` |
| **Sibling index** | `.sibling-vars` · `.sibling-hue` · `.stagger` | `04-decorators/07-animations.css` |
| **Content-visibility** | `.cv-auto` · `.cv-size-*` | `10-misc/01-display.css` |
| **Contain** | `.contain-layout` / paint / content / strict | `10-misc/01-display.css` |
| **image-set bg** | `.bg-image-set` (`--bg-1x` / `--bg-2x`) | `04-decorators/01-effects.css` |
| **image-set icon** | `.icon-set` (`--icon-1x` / `--icon-2x`) | `10-misc/03-pseudo.css` |
| **Autofill tint** | `:autofill` / `:-webkit-autofill` on inputs | `05-atoms/02-inputs.css` |
| **Field sizing** | `.input-fit` / `.field-sizing` | `05-atoms/02-inputs.css` |
| **Select base** | `.select-base` (`appearance: base-select`) | `05-atoms/02-inputs.css` |
| **Night card text** | `.night .card-text` → gray-400 legible | `07-compounds/01-cards.css` |
| **`.surface-glass`** | Frosted panel opt-in (blur + translucent bg) | `04-decorators/01-effects.css` |
| **Card elevate opt-in** | Default `.card` flat; `.card-elevated` ≤1 / vista | `07-compounds/01-cards.css` + skills |

**Decisiones explícitas (no-features / no-hacer):**
- No borrar gradients / glass / shadows del framework
- No imponer tipografía “anti-Inter” en el CSS core
- Reglas R-XX anti-slop viven en `ai/skills/anti-slop.md`, no embebidas en CSS
- Status dots sin animación (solo estado real documentado)

---

## Tooling & release path (parcial)

| Feature | Estado |
| --- | --- |
| Stylelint 0 errores | ✅ |
| Build Vite/PostCSS prod | ✅ (~339 KB / **~49.4 KB gzip**; budget ≤55 KB via `check:size`) |
| Imports auto / orden de capas | ✅ (`generate-imports`) |
| `package.json` exports / `npm pack` dry-run | ✅ |
| Docs pipeline `docs:generate` / `docs:merge` | ✅ |
| Skills + cheatsheets + contraste | ✅ (incl. picker / selectable + anti-slop remanentes) |
| Canonical demos `demos/01`–`05` | ✅ |
| Support matrix [`SUPPORT.md`](./SUPPORT.md) | ✅ browsers · night · print N/A · size budget |
| Focus-visible on core interactives | ✅ btn · navbar · footer · modal · alerts |

---

## Fuera de este catálogo

- Track AI-first JSON→HTML → [`ToDo-ai-first.md`](./ToDo-ai-first.md) / [`FUTURE-AI-FIRST.md`](./FUTURE-AI-FIRST.md) (pausado hasta DoD v2.1)
- `lagunite-web/**` → repo aparte
