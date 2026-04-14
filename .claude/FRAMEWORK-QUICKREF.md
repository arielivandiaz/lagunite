# Lagunite Framework — Quick Reference

> Condensed class tables for all layers. For full detail, read the skill files listed in CLAUDE.md.

## Breakpoints

| Prefix | Condition | Use for |
| --- | --- | --- |
| (none) | All viewports | Base styles |
| `x` | `max-width: 639px` | Mobile overrides |
| `d` | `min-width: 640px` | Desktop overrides |

## Tokens (CSS variables)

- **Spacing:** `--space-1` (4px) → `--space-32`, `--space-px`
- **Radius:** `--radius-s` `--radius-m` `--radius-l` `--radius-xl` `--radius-full`
- **Semantic colors:** `--color-text-base` `--color-primary` `--color-secondary` `--color-tertiary` `--color-success` `--color-warning` `--color-error`
- **Typography:** `--font-text` `--font-headers` `--font-sans` `--font-mono` | `--font-size-xs/s/l/xl/xxl/3xl` | `--font-weight-light/normal/medium/bold`

Do not invent CSS variables. Only use tokens from `src/css/00-config/`.

---

## Typography (`src/css/01-text/`)

| Group | Classes |
| --- | --- |
| Font family | `.font-text` `.font-headers` `.font-sans` `.font-mono` |
| Font size | `.font-xs` `.font-s` `.font-l` `.font-xl` `.font-xxl` `.font-3xl` `.font-250` `.font-300` `.font-400` `.font-500` |
| Fluid sizes | `.font-fluid-xs` `.font-fluid-s` `.font-fluid` `.font-fluid-l` `.font-fluid-xl` |
| Weight | `.font-weight-0` (light) `.font-weight-1` (normal) `.font-weight-2` (medium) `.font-weight-3` (bold) — also `.bold` `.italic` |
| Transform | `.uppercase` `.lowercase` `.capitalize` |
| Letter spacing | `.letter-spacing-xs` `.letter-spacing-s` `.letter-spacing` `.letter-spacing-l` `.letter-spacing-xl` `.letter-spacing-xxl` |
| Line height | `.lh-xs` `.lh-s` `.lh` `.lh-l` `.lh-xl` `.lh-xxl` |
| Text align | `.ta-c` `.ta-lf` `.ta-rg` `.ta-j` `.ta-ja` (+ `xta-*` / `dta-*`) |

---

## Colors (`src/css/02-colors/`)

### Text colors
- Semantic: `.color-text` `.color-text-alt` `.color-primary` `.color-primary-light` `.color-primary-dark` `.color-secondary` `.color-secondary-light` `.color-secondary-dark` `.color-tertiary` `.color-tertiary-light` `.color-tertiary-dark` `.color-almost-black` `.color-almost-white` `.color-success` `.color-warning` `.color-error`
- Palette: `.color-{gray|blue|green|yellow|red}-{50|100|200|300|400|500|600|700|800|900|950}`

### Backgrounds
- Semantic: `.bg` `.bg-alt` `.bg-1`…`.bg-9` `.bg-black` `.bg-ablack` `.bg-white` `.bg-awhite` `.bg-success` `.bg-warning` `.bg-error`
- Gradients: `.bgg-1`…`.bgg-8` `.bgg-success` | Directional: `.bgg-lf-1`…`4` `.bgg-rg-1`…`4` `.bgg-t-1`…`4` `.bgg-b-1`…`4` `.bgg-tl/tr/bl/br-1`…`4`
- Palette: `.bg-{gray|blue|green|yellow|red}-{50…950}`

### Border colors
- `.border-color-primary` (+ `-light` `-dark`) `.border-color-secondary` `.border-color-tertiary` `.border-color-black` `.border-color-white` `.border-color-transparent` `.border-color-success` `.border-color-warning` `.border-color-error`
- Palette: `.border-color-{gray|blue|green|yellow|red}-{50…950}`

> Many `.bg-*` utilities set both background AND text color. Do not stack conflicting `.color-*` on the same element.

---

## Spacing (`src/css/03-layout/04-margin.css`, `05-padding.css`)

**Scale:** `xs`=4px `s`=12px (none)=24px `l`=48px `xl`=64px

### Margin — `.marg-{dir}-{scale}` (+ `x`/`d` prefix)
Directions: (none)=all `-h`=horizontal `-v`=vertical `-t` `-b` `-lf` `-rg`
Special: `.marg-auto` `.marg-0` (+ directional resets)

### Padding — `.padd-{dir}-{scale}` (+ `x`/`d` prefix)
Same directions as margin. Special: `.padd-0`

### Position (`03-position.css`)
- Types: `.pos-static` `.pos-relative` `.pos-absolute` `.pos-fixed` `.pos-sticky` | shortcuts `.rel` `.abs`
- Absolute edges: `.pa-full` `.pa-h` `.pa-v` `.pa-t` `.pa-b` `.pa-lf` `.pa-rg` `.pa-tl` `.pa-tr` `.pa-bl` `.pa-br`
- Fixed edges: `.pf-full` `.pf-tl` `.pf-br` etc.
- Center: `.center-h` `.center-v` `.abs-center`
- Insets: `.top-0` `.right-0` `.bottom-0` `.left-0` `.top-auto` etc. `.top-1\/2` etc.
- Z-index: `.z0`…`.z5` `.z10` `.z15` `.z20`
- Separators: `.separator-v-xs`…`-xl` `.separator-h-xs`…`-xl`

### Sizing (`08-size.css`, `09-width.css`, `10-height.css`)
- Intrinsic: `.w-auto` `.h-auto` `.w-min` `.w-max` `.w-fit` `.h-fit`
- Screen: `.w-full-screen` `.h-full-screen` `.w-half-screen` `.h-half-screen` `.w-quarter-screen`
- Fixed: `.w1`…`.w15` `.h1`…`.h15` | min/max: `.minw1`…`.minw15` `.maxw1`…`.maxw15` `.minh`/`.maxh`
- Fluid: `.wf1`…`.wf15` `.hf1`…`.hf15`
- Width %: `.wp5`…`.wp100` | `.wp-1\/3` `.wp-2\/3` `.wp-1\/6` `.wp-5\/6`
- Viewport: `.vw10`…`.vw100` `.vh5`…`.vh100` (+ min/max variants)

---

## Flex (`src/css/03-layout/01-flex.css`)

> Direction classes (`.row` `.col` etc.) already set `display: flex; flex-wrap: wrap; justify-content: center; align-items: center`. Never add `d-flex` alongside.

| Group | Classes |
| --- | --- |
| Direction | `.row` `.rowr` `.col` `.colr` `.col-row` `.row-col` (+ `x`/`d` responsive variants) |
| Gap (semantic) | `.gap-xs` `.gap-s` `.gap` `.gap-l` `.gap-xl` |
| Gap (numeric) | `.gap-1`…`.gap-16` |
| Gap (directional) | `.gap-h-*` (column-gap) `.gap-v-*` (row-gap) (+ `xgap-*` `dgap-*`) |
| Justify-content | `.jc-c` `.jc-fs` `.jc-fe` `.jc-sb` `.jc-sa` `.jc-se` (+ `x`/`d`) |
| Align-items | `.ai-c` `.ai-fs` `.ai-fe` `.ai-s` `.ai-bl` (+ `x`/`d`) |
| Align-self | `.as-c` `.as-fs` `.as-fe` `.as-s` (+ `x`/`d`) |
| Flex items | `.flex-1` `.flex-auto` `.flex-initial` `.flex-none` `.flex-grow` `.flex-grow-0` `.flex-shrink` `.flex-shrink-0` |
| Wrap | `.flex-wrap` `.flex-nowrap` (+ `x`/`d`) |
| Order | `.order-first` `.order-last` `.order-none` `.order-1`…`.order-5` (+ `x`/`d`) |
| Shorthands | `.flex-center` `.flex-center-h` `.flex-center-v` |

---

## Grid (`src/css/03-layout/02-grid.css`)

> Gap uses the same `.gap-*` classes from flex. Do NOT use `.g-gap-*` (removed).

| Group | Classes |
| --- | --- |
| Containers | `.grid` `.grid-auto` `.grid-auto-fill` `.grid-center` (+ `xgrid` `dgrid` `xgrid-auto` `dgrid-auto`) |
| Columns | `.grid-cols-1`…`.grid-cols-12` (+ `xgrid-cols-1`…`4` `dgrid-cols-1`…`12`) |
| Rows | `.grid-rows-1`…`.grid-rows-6` (+ responsive) |
| Span | `.col-span-1`…`.col-span-12` `.col-span-full` `.row-span-1`…`.row-span-6` `.row-span-full` (+ `x`/`d`) |
| Placement | `.col-start-1`…`6` `.col-end-1`…`7` `.row-start-1`…`6` `.row-end-1`…`7` (+ `-auto`) |
| Grid-specific align | `ji-` `pi-` `js-` `ps-` + `c` `s` `e` `str` (+ `x`/`d`) |
| Auto flow | `.grid-flow-row` `.grid-flow-col` `.grid-flow-dense` etc. |

---

## Containers (`src/css/03-layout/06-containers.css`)

| Group | Classes |
| --- | --- |
| Base | `.container` (100%, padded) `.container-fluid` (fluid padding) |
| Size | `.container-xs` (480px) `.container-s` (640px) `.container-m` (768px) `.container-l` (1024px) `.container-xl` (1280px) `.container-xxl` (1536px) |
| Semantic | `.container-prose` (65ch) `.container-card` (400px) `.container-sidebar` (320px) `.container-modal` (600px) `.container-hero` (1200px) `.container-narrow` (540px) `.container-wide` (1440px) |
| Sections | `.section-container` `.section-container-s` (768px) `.section-container-l` (1200px) — includes vertical padding |
| Combos | `.container-card-center` `.container-prose-justify` `.container-hero-center` |
| Constrain | `.constrain-xs` (128px) `.constrain-s` `.constrain-m` `.constrain-l` `.constrain-xl` (256px) |
| Object fit | `.object-contain` `.object-cover` `.object-fill` `.object-none` `.object-scale-down` (+ `x`/`d`) |
| Debug | `.container-debug` |

Responsive: `.xcontainer` `.dcontainer` `.dcontainer-xs`…`.dcontainer-xxl` `.dcontainer-hero` `.dcontainer-prose`

---

## Decorators (`src/css/04-decorators/`)

| Group | Key classes |
| --- | --- |
| Shadows | `.shadow-none` `.shadow-s` `.shadow` `.shadow-l` `.shadow-xl` `.shadow-inner` `.text-shadow-s` `.text-shadow` `.text-shadow-l` `.shadow-color-primary` |
| Opacity | `.opacity-0`…`.opacity-100` (steps: 0,5,10,20,25,30,40,50,60,70,75,80,90,100) `.hover-opacity-*` |
| Border width | `.border-w-0` `.border-w-1` `.border-w-2` `.border-w-4` (+ per-side `-t` `-b` `-lf` `-rg`) |
| Border style | `.border-solid` `.border-dashed` `.border-dotted` `.border-double` `.border-none` `.border-inset` |
| Border shortcuts | `.border` `.border-light` `.border-dark` `.bordered` |
| Border radius | `.border-r-0` `.border-r-s` `.border-r` `.border-r-l` `.border-r-xl` `.border-r-full` `.border-r-circle` |
| Decorative rings | `.border-circle-s` `.border-circle` `.border-circle-l` `.border-circle-xl` |
| Organic shapes | `.border-blob-{t,b,lf,rg}-1`…`4` |
| Transitions | `.transition` `.transition-none` `.transition-colors` `.transition-opacity` `.transition-transform` `.transition-shadow` |
| Duration | `.duration-0` `.duration-75` `.duration-100` `.duration-150` `.duration-200` `.duration-300` `.duration-500` `.duration-700` `.duration-1000` |
| Easing | `.ease-linear` `.ease-in` `.ease-out` `.ease-in-out` |
| Delay | `.delay-0` `.delay-75` `.delay-100` `.delay-150` `.delay-200` `.delay-300` `.delay-500` |
| Transforms | `.scale-*` (0-150) `.rotate-*` `.translate-x-*` `.translate-y-*` `.skew-x-*` `.skew-y-*` `.origin-*` |
| Animations | `.animate-spin` `.animate-pulse` `.animate-bounce` `.animate-fade-in` `.animate-fade-out` `.animate-slide-in` `.animate-slide-out` `.animate-shake` `.animate-none` |
| Filters | `.blur-*` `.brightness-*` `.contrast-*` `.grayscale` `.saturate-*` `.invert` `.sepia` `.hue-rotate-*` |
| Backdrop blur | `.backdrop-blur-none` `.backdrop-blur-s` `.backdrop-blur` `.backdrop-blur-l` `.backdrop-blur-xl` |
| Hover scale | `.hoverable-s` `.hoverable` `.hoverable-l` `.hoverable-xl` |
| Scroll | `.scroll-smooth` `.scroll-auto` `.snap-x` `.snap-y` `.snap-mandatory` `.snap-start` `.snap-center` |
| Misc effects | `.appearance-none` `.resize-none` `.resize` `.isolate` `.overflow-hidden` `.overflow-auto` `.scrollbar-none` `.scrollbar-thin` |

> **Gotcha:** `filter: ...` classes override each other (one winner). `backdrop-filter` is separate. Combining `.scale-*` and `.rotate-*` on the same element requires a composition layer.

---

## Atoms (`src/css/05-atoms/`)

### Tables
`.table` + modifiers: `.size-s` `.size-l` `.size-xl` | `.primary` `.secondary` `.tertiary` `.success` `.warning` `.error` | `.striped` `.bordered` `.hover` `.hover-cell` `.card` `.divided` `.divided-thick` | `.table-responsive` (wrapper) | `.stack-mobile` (needs `data-label` on `td`)

### Lists
`ul.alt` `ol.alt` `ul.bordered` | `.list-none` `.list-inline` `.list-spaced` `.list-disc` `.list-circle` `.list-square` `.list-decimal` `.list-alpha` `.list-roman` `.list-inside` `.list-outside` (+ `xlist-*` `dlist-*`)

### Figures
`hr` + `.size-s`…`.size-xxl` | `.line-v` | `.square` `.rounded` `.circle` `.tear` `.triangle` `.point` | `.blob-1`…`.blob-5`

### Badges
`.badge` + `.badge-xs` `.badge-s` `.badge-l` | `.badge-primary` `.badge-secondary` `.badge-success` `.badge-info` `.badge-warning` `.badge-error` | `.badge-primary-light` `.badge-success-light` etc. | `.badge-outline` `.badge-pill` `.badge-dot` `.badge-icon` `.badge-counter` `.badge-dismissible` | Overlay: `.badge-absolute-top-right` `.badge-absolute-top-left` `.badge-absolute-bottom-right` `.badge-absolute-bottom-left`

### Avatars
`.avatar` + `.avatar-xs` `.avatar-s` `.avatar-l` `.avatar-xl` | `.avatar-circle` `.avatar-rounded` `.avatar-square` | `.avatar-status` + `.avatar-status-online` `-busy` `-away` `-offline` | `.avatar-placeholder` `.avatar-initials` | Groups: `.avatar-group` `.avatar-stack` `.avatar-stack-counter` (+ size variants)

---

## Molecules (`src/css/06-molecules/`)

### Form groups
`.form-group` `.form-label` `.form-help` `.form-error-msg` `.form-group.has-error` `.form-group.has-success` | `.input-group` `.input-group-prepend` `.input-group-append` | `.form-row` `.xform-row` `.dform-row`

### Alerts & toasts
`.alert` `.alert-success` `.alert-warning` `.alert-error` `.alert-info` `.alert-dismissible` `.alert-close` | `.toast` `.xtoast` `.dtoast`

### Dropdown
`.dropdown` (+ `.open`) `.dropdown-toggle` `.dropdown-menu` `.dropdown-menu-right` `.dropdown-item` `.dropdown-header` `.dropdown-divider`

### Tooltip
`data-tooltip="text"` on element + optional `.tooltip-bottom` `.tooltip-left` `.tooltip-right` (default: above)

### Breadcrumb
`.breadcrumb` `.breadcrumb-item` (+ `.active`) `.breadcrumb-arrow` `.breadcrumb-dot`

---

## Compounds (`src/css/07-compounds/`)

### Cards
`.card` + `.card-header` `.card-body` `.card-footer` `.card-img-top` `.card-img-bottom` `.card-title` `.card-text` | Modifiers: `.card-elevated` `.card-flat` `.card-hover` | Semantic: `.card-primary` `.card-success` `.card-warning` `.card-error` | Layout: `.card-horizontal` `.card-group`

### Modals
Structure: `.modal-overlay.open` > `.modal` > `.modal-header` + `.modal-body` + `.modal-footer`
Sizes: `.modal-s` `.modal-l` `.modal-xl` `.modal-fullscreen` | Wire `.open` with JS.

---

## Organisms (`src/css/08-organisms/`)

### Navbar
`.navbar` `.navbar-brand` `.navbar-nav` `.navbar-link` (+ `.active`) `.navbar-burger` | Variants: `.navbar-primary` `.navbar-transparent` `.navbar-sticky` | Mobile: toggle `.navbar.open` with JS.

### Sidebar
`.sidebar` `.sidebar-header` `.sidebar-nav` `.sidebar-section` `.sidebar-section-title` `.sidebar-link` (+ `.active`) `.sidebar-footer` | Variants: `.sidebar-compact` `.sidebar-dark` | Mobile: toggle `.sidebar.open` with JS.

### Footer
`.footer` `.footer-grid` `.footer-title` `.footer-links` `.footer-link` `.footer-bottom` | Variants: `.footer-dark` `.footer-minimal`

> All organisms support `.night` on an ancestor for dark mode.

---

## Misc (`src/css/10-misc/`)

### Display
`.d-block` `.d-inline` `.d-inline-block` `.d-flex` `.d-inline-flex` `.d-grid` `.d-none` `.d-contents` (+ `xd-*` `dd-*`)

### Visibility
`.visible` `.invisible` `.collapse` (+ `x`/`d` variants)

### Cursor & interaction
`.cursor-pointer` `.cursor-not-allowed` `.cursor-grab` `.cursor-grabbing` `.cursor-text` `.cursor-none` | `.pointer-events-none` `.pointer-events-auto` | `.select-none` `.select-all` `.select-text` `.select-auto`

### Pseudo-elements
`.before-block` `.before-inline` `.before-inline-block` `.before-absolute` `.before-overlay` `.before-content` (reads `data-before`) | Same for `.after-*` | `.clearfix` | `.content-none` `.content-empty`
