---
name: lagunite-flex
description: >-
  Build layouts with Lagunite flex utilities. Use when creating HTML layouts,
  navbars, card grids, sidebars, forms, or any flex-based component using the
  Lagunite CSS framework classes from 03-layout/01-flex.css.
---

# Lagunite Flex Layout

## Core rules

1. Every direction class (`.row`, `.col`, `.rowr`, `.colr`) already sets `display: flex; flex-wrap: wrap; justify-content: center; align-items: center`. You never need to add `d-flex` alongside them.
2. Responsive prefix `x` = mobile (max-width: 639px), `d` = desktop (min-width: 640px). No prefix = all breakpoints.
3. Gap follows the same semantic scale as `marg`/`padd`: `xs → --space-1 (4px)`, `s → --space-3 (12px)`, base `→ --space-6 (24px)`, `l → --space-12 (48px)`, `xl → --space-16 (64px)`.

## Class reference

### Container direction
- `.row` `.rowr` `.col` `.colr` — set flex-direction
- `.xcol` `.dcol` etc. — responsive variants
- `.col-row` — column on mobile, row on desktop
- `.row-col` — row on mobile, column on desktop

### Gap
- Semantic: `.gap-xs` `.gap-s` `.gap` `.gap-l` `.gap-xl`
- Numeric: `.gap-1` through `.gap-16` (maps to `--space-N`)
- Directional: `.gap-h-*` (column-gap), `.gap-v-*` (row-gap)
- Responsive: `.xgap-*` `.dgap-*`

### Alignment (all use `!important`, all have `x`/`d` variants)
- `jc-` = justify-content: `c` center, `fs` flex-start, `fe` flex-end, `sb` space-between, `sa` space-around, `se` space-evenly
- `ai-` = align-items: `c` center, `fs` flex-start, `fe` flex-end, `s` stretch, `bl` baseline
- `as-` = align-self: `c` `fs` `fe` `s`
- `ac-` = align-content: `c` `fs` `fe` `s` `sa` `sb`

### Flex items
- `.flex-1` (1 1 0%), `.flex-auto` (1 1 auto), `.flex-initial` (0 1 auto), `.flex-none`
- `.flex-grow` `.flex-grow-0` `.flex-shrink` `.flex-shrink-0`

### Order
- `.order-first` `.order-last` `.order-none` `.order-1`…`.order-5`
- Responsive: `.xorder-*` `.dorder-*`

### Wrap
- `.flex-wrap` `.flex-nowrap` + `x`/`d` variants

### Shorthands
- `.flex-center` = flex + centered both axes
- `.flex-center-h` = flex + centered horizontal only
- `.flex-center-v` = flex + centered vertical only

## How to compose

Build layouts by chaining classes on the container, then add item-level classes to children:

```html
<!-- Container: direction + gap + alignment override -->
<div class="row gap-s jc-sb ai-c">
  <!-- Items: flex sizing -->
  <div class="flex-shrink-0">Fixed sidebar</div>
  <div class="flex-1">Stretchy content</div>
</div>
```

### Responsive pattern

Use combo classes or responsive prefixes:

```html
<!-- Combo: column on mobile, row on desktop -->
<div class="col-row gap-4">
  <div class="flex-1">A</div>
  <div class="flex-1">B</div>
</div>

<!-- Explicit: different gap per breakpoint -->
<div class="row xgap-xs dgap-4">
  <div>A</div>
  <div>B</div>
</div>
```

## Common recipes

### Navbar
```html
<nav class="row jc-sb ai-c gap-4 padd-h-s">
  <div>Logo</div>
  <div class="row gap-s">
    <a href="#">Link</a>
    <a href="#">Link</a>
  </div>
</nav>
```

### Sidebar + content
```html
<div class="col-row gap-4">
  <aside style="width:240px" class="flex-shrink-0">Sidebar</aside>
  <main class="flex-1">Content</main>
</div>
```

### Centered hero
```html
<section class="flex-center col gap-s" style="min-height:60vh">
  <h1>Title</h1>
  <p>Subtitle</p>
  <a href="#" class="btn">CTA</a>
</section>
```

### Card grid (equal width)
```html
<div class="row gap-s">
  <div class="flex-1" style="min-width:200px">Card</div>
  <div class="flex-1" style="min-width:200px">Card</div>
  <div class="flex-1" style="min-width:200px">Card</div>
</div>
```

### Form row
```html
<div class="row ai-c gap-s">
  <label class="flex-shrink-0" style="width:120px">Name</label>
  <input type="text" class="flex-1" />
</div>
```

## Do not

- Do NOT add `d-flex` when you already have `.row`/`.col` — they already set `display: flex`.
- Do NOT use `style="display:flex"` — use the utility classes.
- Do NOT mix `f-gap-*` (old, removed) with `gap-*` (current).
- Do NOT forget that containers default to `flex-wrap: wrap` and centered alignment. Override with `.flex-nowrap`, `.jc-fs`, `.ai-s`, etc. when needed.

## Additional resources

- Full class reference: see [LAYOUT-FLEX.md](src/css/03-layout/LAYOUT-FLEX.md)
- Cheatsheet: see [FLEX-CHEATSHEET.md](src/css/03-layout/FLEX-CHEATSHEET.md)
