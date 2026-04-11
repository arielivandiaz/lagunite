# Lagunite Flex Layout — Reference

## Quick start

Every flex container in Lagunite starts **centered and wrapping** by default.  
Just pick a direction:

```html
<div class="row gap-s">          <!-- horizontal, small gap -->
  <div>A</div>
  <div>B</div>
</div>

<div class="col gap-4">          <!-- vertical, 16 px gap -->
  <div>A</div>
  <div>B</div>
</div>
```

---

## 1. Direction classes

| Class | CSS | Notes |
|-------|-----|-------|
| `.row` | `flex-direction: row` | Default horizontal |
| `.rowr` | `flex-direction: row-reverse` | |
| `.col` | `flex-direction: column` | Vertical stack |
| `.colr` | `flex-direction: column-reverse` | |

All of them set `display: flex; flex-wrap: wrap; justify-content: center; align-items: center`.

### Responsive direction

| Mobile only (`x`) | Desktop only (`d`) |
|---|---|
| `.xcol` `.xcolr` `.xrow` `.xrowr` | `.dcol` `.dcolr` `.drow` `.drowr` |

### Combo direction (flips at 640 px)

| Class | Mobile | Desktop |
|-------|--------|---------|
| `.col-row` | column | row |
| `.col-rowr` | column | row-reverse |
| `.row-col` | row | column |
| `.row-colr` | row | column-reverse |

---

## 2. Gap

### Semantic scale (matches `marg` / `padd`)

| Class | Token | Value |
|-------|-------|-------|
| `.gap-0` | — | `0` |
| `.gap-xs` | `--space-1` | 4 px |
| `.gap-s` | `--space-3` | 12 px |
| `.gap` | `--space-6` | 24 px |
| `.gap-l` | `--space-12` | 48 px |
| `.gap-xl` | `--space-16` | 64 px |

Directional: `.gap-h-*` (column-gap), `.gap-v-*` (row-gap).

### Numeric scale (fine control)

`.gap-1` … `.gap-16` → map 1:1 to `--space-N`.

Responsive: `.xgap-*` (mobile), `.dgap-*` (desktop).

---

## 3. Wrap

| Class | CSS |
|-------|-----|
| `.flex-wrap` | `flex-wrap: wrap` |
| `.flex-nowrap` | `flex-wrap: nowrap` |

Responsive: `.xflex-wrap`, `.dflex-nowrap`, etc.

---

## 4. Alignment

### Justify content (`jc`)

| Class | Value |
|-------|-------|
| `.jc-c` | `center` |
| `.jc-fs` | `flex-start` |
| `.jc-fe` | `flex-end` |
| `.jc-sb` | `space-between` |
| `.jc-sa` | `space-around` |
| `.jc-se` | `space-evenly` |

### Align items (`ai`)

| Class | Value |
|-------|-------|
| `.ai-c` | `center` |
| `.ai-fs` | `flex-start` |
| `.ai-fe` | `flex-end` |
| `.ai-s` | `stretch` |
| `.ai-bl` | `baseline` |

### Align self (`as`) — per item

`.as-c` `.as-fs` `.as-fe` `.as-s`

### Align content (`ac`) — multi-line

`.ac-c` `.ac-fs` `.ac-fe` `.ac-s` `.ac-sa` `.ac-sb`

All alignment classes have responsive variants: `x` and `d` prefix.

---

## 5. Flex item utilities

| Class | CSS |
|-------|-----|
| `.flex-1` | `flex: 1 1 0%` — fill remaining space equally |
| `.flex-auto` | `flex: 1 1 auto` — fill based on content size |
| `.flex-initial` | `flex: 0 1 auto` — default flex behavior |
| `.flex-none` | `flex: none` — don't grow or shrink |
| `.flex-grow` | `flex-grow: 1` |
| `.flex-grow-0` | `flex-grow: 0` |
| `.flex-shrink` | `flex-shrink: 1` |
| `.flex-shrink-0` | `flex-shrink: 0` |

---

## 6. Order

| Class | Order |
|-------|-------|
| `.order-first` | `-9999` |
| `.order-last` | `9999` |
| `.order-none` | `0` |
| `.order-1` … `.order-5` | `1` … `5` |

Responsive: `.xorder-first`, `.dorder-1`, etc.

---

## 7. Convenience shorthands

| Class | What it does |
|-------|-------------|
| `.flex-center` | `display: flex` + centered both axes |
| `.flex-center-h` | `display: flex` + centered horizontally |
| `.flex-center-v` | `display: flex` + centered vertically |

Responsive: `.xflex-center`, `.dflex-center-h`, etc.

---

## Common patterns (copy-paste)

### Navbar

```html
<nav class="row jc-sb ai-c gap-4 padd-h-s">
  <div class="logo">Brand</div>
  <div class="row gap-s">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </div>
</nav>
```

### Card grid (stack mobile, row desktop)

```html
<div class="col-row gap-s">
  <div class="flex-1">Card 1</div>
  <div class="flex-1">Card 2</div>
  <div class="flex-1">Card 3</div>
</div>
```

### Sidebar + content

```html
<div class="col-row gap-4">
  <aside style="width: 240px;" class="flex-shrink-0">Sidebar</aside>
  <main class="flex-1">Content</main>
</div>
```

### Form row (label left, input right)

```html
<div class="row ai-c gap-s">
  <label class="flex-shrink-0" style="width:120px;">Name</label>
  <input type="text" class="flex-1" />
</div>
```

### Centered hero

```html
<section class="flex-center col gap-s" style="min-height:60vh;">
  <h1>Welcome</h1>
  <p>Subtitle text</p>
  <a href="#" class="btn">Get started</a>
</section>
```

### Reorder on mobile

```html
<div class="row gap-4">
  <div class="xorder-2 flex-1">Sidebar (moves to bottom on mobile)</div>
  <div class="xorder-1 flex-1">Content (moves to top on mobile)</div>
</div>
```
