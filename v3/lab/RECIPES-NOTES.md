# Lab recipes — notas

Lista espejo de [`index.html`](./index.html). Espacio para notas por caso.

---

## Top 1–5 · Forms & dialogs

### 1 · validate-input-after-interaction
`recipes/validate-input-after-interaction.html` — `:user-invalid` / `:user-valid` after blur or submit.

**Notas:**


### 2 · required-field-feedback
`recipes/required-field-feedback.html` — Empty required fields stay neutral until interact.

**Notas:**


### 3 · accessible-error-announcement
`recipes/accessible-error-announcement.html` — Sync `aria-invalid` with `:user-invalid`.

**Notas:**


### 4 · declarative-dialog-popover-control
`recipes/declarative-dialog-popover-control.html` — Invoker Commands + `dialog.modal` / `popover`.

**Notas:**


### 5 · light-dismiss-a-dialog
`recipes/light-dismiss-a-dialog.html` — `closedby="any"` + backdrop fallback.

**Notas:**


---

## Top 6–10 · Theme, autofill, accent, :has, type

### 6 · dark-mode
`recipes/dark-mode.html` — `.night` + `color-scheme`.

**Notas:**


### 7 · autofill-sign-in-form
`recipes/autofill-sign-in-form.html` — Sign-in autocomplete + enterkeyhint.

**Notas:**


### 8 · brand-consistent-forms
`recipes/brand-consistent-forms.html` — `accent-color` / `.accent-primary`.

**Notas:**
- Native “Plan” (`fieldset`): chrome del browser sin padding → se ve apretado. Lagunite no estiliza `fieldset` (GAP / o al menos `padd-s` en el demo).
- “Lagunite custom” demasiado corto: solo `.checkbox` + `.radio-group`. Faltaban `.toggle`, `.radio-btns` (y un `.selectable-option` de muestra).
- Tesis OK (preferir native + accent); el contraste native vs custom necesita más ejemplos custom para que se entienda el “when needed”.
- Fix en recipe: `padd-s` en fieldset + custom ampliado (toggle / radio-btns / selectable-option).

### 9 · style-parent-with-has
`recipes/style-parent-with-has.html` — `.form-surface:has(:user-invalid)`.

**Notas:**


### 10 · improve-text-layout-and-legibility
`recipes/improve-text-layout-and-legibility.html` — `.text-balance` · `.text-pretty`.

**Notas:**


---

## Top 11–15 · Tooltip, drawer, spinner, CQ, search

### 11 · position-aware-tooltips
`recipes/position-aware-tooltips.html` — `[data-tooltip]` + anchored popover.

**Notas:**


### 12 · navigation-drawer
`recipes/navigation-drawer.html` — `.sidebar-drawer` + backdrop.

**Notas:**


### 13 · spinner
`recipes/spinner.html` — `.spinner` / `progress.spinner`.

**Notas:**


### 14 · size-aware-styling
`recipes/size-aware-styling.html` — `.cq` container queries.

**Notas:**


### 15 · search-hidden-content
`recipes/search-hidden-content.html` — `details` + `hidden="until-found"`.

**Notas:**


---

## Oleada 2 · Bloque A (forms)

### 16 · autofill-sign-up-form
`recipes/autofill-sign-up-form.html` — `new-password` · Create account.

**Notas:**


### 17 · autofill-address-form
`recipes/autofill-address-form.html` — Shipping address autocomplete.

**Notas:**


### 18 · autofill-highlight-inputs
`recipes/autofill-highlight-inputs.html` — `:autofill` primary tint.

**Notas:**


### 19 · form-fields-automatically-fit-contents
`recipes/form-fields-automatically-fit-contents.html` — `.input-fit` / field-sizing.

**Notas:**


### 20 · branded-select-styling
`recipes/branded-select-styling.html` — `.select-base`.

**Notas:**


### 21 · rich-media-picker
`recipes/rich-media-picker.html` — `.selectable-option` + select-base.

**Notas:**


---

## Oleada 2 · Bloque B (overlays)

### 22 · resilient-context-menus-and-nested-dropdowns
`recipes/resilient-context-menus-and-nested-dropdowns.html` — `.dropdown-panel` + popover/anchor.

**Notas:**


### 23 · persistent-toast-notifications
`recipes/persistent-toast-notifications.html` — `popover="manual"` · `.toast`.

**Notas:**


### 24 · progress-ring
`recipes/progress-ring.html` — `progress.progress-ring`.

**Notas:**


### 25 · interest-triggered-tooltips
`recipes/interest-triggered-tooltips.html` — `interestfor` · `.tooltip-hint`.

**Notas:**


---

## Oleada 2 · Bloque C (scroll)

### 26 · scroll-progress-indicator
`recipes/scroll-progress-indicator.html` — `.scroll-progress` · scroll timeline.

**Notas:**


### 27 · scrollability-affordance-hints
`recipes/scrollability-affordance-hints.html` — `.scroll-state` · hint fades.

**Notas:**


### 28 · state-aware-sticky-headers
`recipes/state-aware-sticky-headers.html` — `.sticky-state` · stuck chrome.

**Notas:**


### 29 · scrollspy
`recipes/scrollspy.html` — `.scrollspy` · `:target-current`.

**Notas:**


---

## Oleada 2 · Bloque D (motion + cola)

### 30 · animate-element-entry-exit
`recipes/animate-element-entry-exit.html` — `.enter-exit` · `@starting-style`.

**Notas:**


### 31 · animate-to-from-top-layer
`recipes/animate-to-from-top-layer.html` — `dialog.modal` overlay motion.

**Notas:**


### 32 · soft-edge-content-fade
`recipes/soft-edge-content-fade.html` — `.fade-edge-b` / `.fade-edge-y`.

**Notas:**


### 33 · precise-text-alignment
`recipes/precise-text-alignment.html` — `.text-trim`.

**Notas:**


### 34 · child-state-based-styling
`recipes/child-state-based-styling.html` — `.card-state:has(...)`.

**Notas:**


### 35 · optimize-image-priority
`recipes/optimize-image-priority.html` — `fetchpriority` · `loading`.

**Notas:**


---

## Oleada 3 · Bloque E (layout CSS)

### 36 · fluid-scaling
`recipes/fluid-scaling.html` — `.cq` · `.font-cq` / `.padd-cq`.

**Notas:**


### 37 · overflow-clipping-control
`recipes/overflow-clipping-control.html` — `.overflow-clip` · `.clip-margin-*`.

**Notas:**


### 38 · dynamic-sibling-styling
`recipes/dynamic-sibling-styling.html` — `.sibling-hue` · sibling-index.

**Notas:**


### 39 · content-based-styling
`recipes/content-based-styling.html` — `.card-media:has(img)`.

**Notas:**


### 40 · dynamic-sibling-animations
`recipes/dynamic-sibling-animations.html` — `.stagger` delays.

**Notas:**


---

## Oleada 3 · Bloque F (media / perf)

### 35 · optimize-image-priority *(ya en D)*
`recipes/optimize-image-priority.html` — `fetchpriority` · `loading`.

**Notas:**


### 41 · defer-rendering-heavy-content
`recipes/defer-rendering-heavy-content.html` — `.cv-auto` · `.cv-size-*`.

**Notas:**


### 42 · deliver-optimized-decorative-images
`recipes/deliver-optimized-decorative-images.html` — `<picture>` · `.bg-image-set`.

**Notas:**


### 43 · resolution-optimized-pseudo-elements
`recipes/resolution-optimized-pseudo-elements.html` — `.icon-set` · image-set.

**Notas:**


### 44 · interactions-in-complex-layouts
`recipes/interactions-in-complex-layouts.html` — `.contain-*`.

**Notas:**
