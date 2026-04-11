# Lagunite Grid Layout — Reference

## Quick start

CSS Grid with utility classes. Pick a container, set columns, add gap:

```html
<div class="grid grid-cols-3 gap-s">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</div>

<div class="grid-auto gap-4">   <!-- auto-fit columns, min 250px -->
  <div>Card</div>
  <div>Card</div>
  <div>Card</div>
</div>
```

---

## 1. Grid containers

| Class | Columns | Notes |
|-------|---------|-------|
| `.grid` | `1fr` (1 col) | Base grid, gap `--space-4` |
| `.grid-auto` | `auto-fit, minmax(250px, 1fr)` | Responsive columns |
| `.grid-auto-fill` | `auto-fill, minmax(250px, 1fr)` | Like auto but keeps empty tracks |
| `.grid-center` | — | `display: grid; place-items: center` |

### Responsive containers

| Mobile (`x`, max 639px) | Desktop (`d`, min 640px) |
|---|---|
| `.xgrid` (1 col, gap `--space-4`) | `.dgrid` (1 col, gap `--space-6`) |
| `.xgrid-auto` (min 200px) | `.dgrid-auto` (min 300px) |

---

## 2. Columns

| Class | Columns |
|-------|---------|
| `.grid-cols-1` … `.grid-cols-12` | `repeat(N, 1fr)` |

Responsive: `.xgrid-cols-1`…`4` (mobile), `.dgrid-cols-1`…`12` (desktop).

---

## 3. Rows

| Class | Rows |
|-------|------|
| `.grid-rows-1` … `.grid-rows-6` | `repeat(N, 1fr)` |

Responsive: `.xgrid-rows-1`…`4` (mobile), `.dgrid-rows-1`…`6` (desktop).

---

## 4. Gap

**Use `.gap-*` classes from `01-flex.css`** — CSS `gap` works for both flex and grid.

| Semantic | Token | Value |
|----------|-------|-------|
| `.gap-0` | — | `0` |
| `.gap-xs` | `--space-1` | 4 px |
| `.gap-s` | `--space-3` | 12 px |
| `.gap` | `--space-6` | 24 px |
| `.gap-l` | `--space-12` | 48 px |
| `.gap-xl` | `--space-16` | 64 px |

Directional: `.gap-h-*` (column-gap), `.gap-v-*` (row-gap).  
Numeric: `.gap-1` … `.gap-16` (map 1:1 to `--space-N`).  
Responsive: `.xgap-*` (mobile), `.dgap-*` (desktop).

---

## 5. Column span

| Class | CSS |
|-------|-----|
| `.col-span-1` … `.col-span-12` | `grid-column: span N` |
| `.col-span-full` | `grid-column: 1 / -1` |

Responsive: `.xcol-span-1`…`4`, `.xcol-span-full` (mobile), `.dcol-span-1`…`12`, `.dcol-span-full` (desktop).

---

## 6. Row span

| Class | CSS |
|-------|-----|
| `.row-span-1` … `.row-span-6` | `grid-row: span N` |
| `.row-span-full` | `grid-row: 1 / -1` |

Responsive: `.xrow-span-1`…`4`, `.xrow-span-full` (mobile), `.drow-span-1`…`6`, `.drow-span-full` (desktop).

---

## 7. Column / row start & end

| Class | CSS |
|-------|-----|
| `.col-start-1` … `.col-start-6`, `.col-start-auto` | `grid-column-start` |
| `.col-end-1` … `.col-end-7`, `.col-end-auto` | `grid-column-end` |
| `.row-start-1` … `.row-start-6`, `.row-start-auto` | `grid-row-start` |
| `.row-end-1` … `.row-end-7`, `.row-end-auto` | `grid-row-end` |

---

## 8. Grid alignment (grid-specific)

Shared alignment properties (`justify-content`, `align-items`, `align-content`, `align-self`) use the **flex classes** (`.jc-c`, `.ai-c`, `.ac-c`, `.as-c`) — they work in grid context too.

Grid-only properties use abbreviated suffixes: `-c` (center), `-s` (start), `-e` (end), `-str` (stretch).

### Justify items (`ji`)

| Class | Value |
|-------|-------|
| `.ji-c` | `center` |
| `.ji-s` | `start` |
| `.ji-e` | `end` |
| `.ji-str` | `stretch` |

### Place items (`pi`) — shorthand for justify-items + align-items

| Class | Value |
|-------|-------|
| `.pi-c` | `center` |
| `.pi-s` | `start` |
| `.pi-e` | `end` |
| `.pi-str` | `stretch` |

### Justify self (`js`) — per item

`.js-c` `.js-s` `.js-e` `.js-str`

### Place self (`ps`) — per item shorthand

`.ps-c` `.ps-s` `.ps-e` `.ps-str`

All grid alignment classes have responsive variants: `x` and `d` prefix.

---

## 9. Auto flow

| Class | CSS |
|-------|-----|
| `.grid-flow-row` | `grid-auto-flow: row` |
| `.grid-flow-col` | `grid-auto-flow: column` |
| `.grid-flow-dense` | `grid-auto-flow: dense` |
| `.grid-flow-row-dense` | `grid-auto-flow: row dense` |
| `.grid-flow-col-dense` | `grid-auto-flow: column dense` |

---

## 10. Auto columns / rows

| Class | CSS |
|-------|-----|
| `.auto-cols-auto` | `grid-auto-columns: auto` |
| `.auto-cols-min` | `grid-auto-columns: min-content` |
| `.auto-cols-max` | `grid-auto-columns: max-content` |
| `.auto-cols-fr` | `grid-auto-columns: minmax(0, 1fr)` |
| `.auto-rows-auto` | `grid-auto-rows: auto` |
| `.auto-rows-min` | `grid-auto-rows: min-content` |
| `.auto-rows-max` | `grid-auto-rows: max-content` |
| `.auto-rows-fr` | `grid-auto-rows: minmax(0, 1fr)` |

---

## Common patterns (copy-paste)

### Responsive card grid

```html
<div class="grid-auto gap-s">
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
  <div>Card 4</div>
</div>
```

### Dashboard (sidebar + main)

```html
<div class="grid dgrid-cols-4 gap-4">
  <aside>Sidebar</aside>
  <main class="dcol-span-3">Content</main>
</div>
```

### 12-column layout

```html
<div class="grid grid-cols-12 gap-s">
  <div class="col-span-3">Sidebar</div>
  <div class="col-span-6">Main</div>
  <div class="col-span-3">Aside</div>
</div>
```

### Full-width row inside grid

```html
<div class="grid grid-cols-3 gap-s">
  <div class="col-span-full">Full-width header</div>
  <div>Col 1</div>
  <div>Col 2</div>
  <div>Col 3</div>
</div>
```

### Mobile 1-col, desktop 3-col

```html
<div class="grid xgrid-cols-1 dgrid-cols-3 gap-s">
  <div>A</div>
  <div>B</div>
  <div>C</div>
</div>
```

### Centered items in grid

```html
<div class="grid grid-cols-3 pi-c gap-s" style="min-height:200px">
  <div>Centered A</div>
  <div>Centered B</div>
  <div>Centered C</div>
</div>
```
