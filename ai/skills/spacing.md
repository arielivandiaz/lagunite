# Lagunite Spacing & Sizing

> Margin, padding, position, overflow, width, height, and sizing utilities.
> Use when controlling layout space, element dimensions, or positioning.

**Source files:** `src/css/03-layout/03-position.css`, `04-margin.css`, `05-padding.css`, `07-overflow.css`, `08-size.css`, `09-width.css`, `10-height.css`

---

## Core rules

1. Spacing uses a **semantic scale** shared across margin, padding, and gap: `xs` = `--space-1` (4px), `s` = `--space-3` (12px), base = `--space-6` (24px), `l` = `--space-12` (48px), `xl` = `--space-16` (64px).
2. Responsive prefix `x` = mobile (max-width: 639px), `d` = desktop (min-width: 640px). No prefix = all breakpoints.
3. Direction suffixes: `-h` (horizontal), `-v` (vertical), `-t` (top), `-b` (bottom), `-lf` (left), `-rg` (right).
4. The `-0` reset classes use `!important`. All other values do not.

## Margin (`marg`)

Pattern: `.marg-{direction}-{scale}`

```
.marg-xs    → margin: var(--space-1)              all sides
.marg-h-s   → margin-left/right: var(--space-3)
.marg-v-l   → margin-top/bottom: var(--space-12)
.marg-t-xl  → margin-top: var(--space-16)
.marg-lf-s  → margin-left: var(--space-3)
.marg-rg    → margin-right: var(--space-6)
.marg-auto  → margin: auto
.marg-0     → margin: 0 !important
```

Directions: (none)=all, h=horizontal, v=vertical, t=top, b=bottom, lf=left, rg=right.

## Padding (`padd`)

Same pattern as margin: `.padd-{direction}-{scale}`

```
.padd-xs    → padding: var(--space-1)
.padd-h-s   → padding-left/right: var(--space-3)
.padd-v     → padding-top/bottom: var(--space-6)
.padd-t-l   → padding-top: var(--space-12)
.padd-0     → padding: 0 !important
```

## Position

### Types
- `.pos-static`, `.pos-relative`, `.pos-absolute`, `.pos-fixed`, `.pos-sticky`
- Shortcuts: `.rel` (relative), `.abs` (absolute)

### Absolute shortcuts (`pa-`)
- `.pa-full` = all edges 0
- `.pa-h` = left + right 0
- `.pa-v` = top + bottom 0
- `.pa-t`, `.pa-b`, `.pa-lf`, `.pa-rg` = single edge
- `.pa-tl`, `.pa-tr`, `.pa-bl`, `.pa-br` = corners

### Fixed shortcuts (`pf-`)
Same pattern as absolute: `.pf-full`, `.pf-tl`, `.pf-br`, etc.

### Centering
- `.center-h` = horizontal center (left: 0, right: 0, margin-left/right: auto)
- `.center-v` = vertical center (top: 0, bottom: 0, margin: auto)
- `.abs-center` = absolute + top: 50% + left: 50% + translate(-50%, -50%)

### Float positioning
- `.float-r` / `.float-rg` = float right
- `.float-l` / `.float-lf` = float left
- `.float-tr`, `.float-tl`, `.float-tc` = absolute positioned in relative parent
- `.float-br`, `.float-bl`, `.float-bc`, `.float-c`, `.float-cl`, `.float-cr`

### Inset utilities
- `.top-0`, `.right-0`, `.bottom-0`, `.left-0`
- `.top-auto`, `.right-auto`, `.bottom-auto`, `.left-auto`
- `.top-full`, `.right-full`, `.bottom-full`, `.left-full` (100%)
- `.top-1\/2`, `.right-1\/2`, `.bottom-1\/2`, `.left-1\/2` (50%)

### Z-index
- `.z0` through `.z5`, `.z10`, `.z15`, `.z20`

### Separators
Empty block elements for spacing:
- `.separator-v-xs` through `.separator-v-xl` (vertical space via height)
- `.separator-h-xs` through `.separator-h-xl` (horizontal space via width)

## Overflow

- `.overflow-auto`, `.overflow-hidden`, `.overflow-visible`, `.overflow-scroll`
- `.overflow-x-*`, `.overflow-y-*` for directional control
- `.scrollbar-thin` = thin scrollbar
- `.scrollbar-none` = hide scrollbar

## Sizing (`08-size.css`)

### Intrinsic sizing
- `.w-auto`, `.h-auto`, `.w-min`, `.h-min`, `.w-max`, `.h-max`, `.w-fit`, `.h-fit`

### Screen-relative
- `.w-full-screen` (100dvw), `.h-full-screen` (100dvh)
- `.w-half-screen`, `.h-half-screen`, `.w-quarter-screen`, `.h-quarter-screen`

### Fixed sizes (token-based)
- `.w1` (48px) through `.w15` (1920px)
- `.h1` (20px) through `.h15` (768px)
- Matching `.minw1`…`.minw15`, `.maxw1`…`.maxw15`
- Matching `.minh1`…`.minh15`, `.maxh1`…`.maxh15`

### Fluid sizes (clamp)
- `.wf1` through `.wf15` — clamp(min, vw%, max)
- `.hf1` through `.hf15` — clamp(min, vh%, max)

## Width percentages (`09-width.css`)

- `.wp5` through `.wp100` (5% steps)
- `.minwp10` through `.minwp100`, `.maxwp10` through `.maxwp100`
- Fractions: `.wp-1\/3`, `.wp-2\/3`, `.wp-1\/6`, `.wp-5\/6`
- Viewport: `.vw10` through `.vw100`
- Min/max viewport: `.minvw10`…`.minvw100`, `.maxvw10`…`.maxvw100`

## Height percentages (`10-height.css`)

- `.hp5` through `.hp100` (5% steps)
- `.minhp10` through `.minhp100`, `.maxhp10` through `.maxhp100`
- Fractions: `.hp-1\/3`, `.hp-2\/3`, `.hp-1\/6`, `.hp-5\/6`
- Viewport: `.vh5` through `.vh100`
- Min/max viewport: `.minvh10`…`.minvh100`, `.maxvh10`…`.maxvh100`

## Composition examples

```html
<!-- Card with padding and margin -->
<div class="padd-s marg-b-s">Card content</div>

<!-- Sticky header -->
<header class="pos-sticky top-0 z10 padd-h-s">Nav</header>

<!-- Fixed sidebar on desktop -->
<aside class="dpos-fixed dpa-lf top-0 bottom-0" style="width:280px">Sidebar</aside>

<!-- Centered modal -->
<div class="pf-full z20">
  <div class="abs-center container-modal padd-l">Modal content</div>
</div>

<!-- Responsive spacing -->
<section class="xpadd-s dpadd-l xmarg-b-s dmarg-b-l">Content</section>

<!-- Full-height hero -->
<section class="h-full-screen flex-center col"><h1>Hero</h1></section>
```

## Do not

- Do NOT use `style="margin: ..."` when a utility class exists.
- Do NOT confuse `-lf` (left) with `-l` (large). `.marg-l` = large margin all sides. `.marg-lf` = margin-left only.
- Do NOT use `.z-10` (removed). Use `.z10` (no hyphen).
- Do NOT mix old aliases `.wmin`/`.wfc` (removed). Use `.w-min`/`.w-fit`.

**Cheatsheet:** `src/css/03-layout/LAYOUT-SPACING-CHEATSHEET.md`
