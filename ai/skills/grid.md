# Lagunite Grid Layout

> Build grid layouts with CSS Grid utilities. Use when creating card grids, dashboards, 12-column systems, or any grid-based component.

**Source file:** `src/css/03-layout/02-grid.css`

---

## Core rules

1. `.grid` creates a 1-column grid with `gap: var(--space-4)`. Add `.grid-cols-N` to set column count.
2. `.grid-auto` creates responsive columns via `auto-fit, minmax(250px, 1fr)` — no column count needed.
3. Responsive prefix `x` = mobile (max-width: 639px), `d` = desktop (min-width: 640px).
4. Gap uses the **same `.gap-*` classes** from `01-flex.css` — `gap` works for both flex and grid. Do NOT use `.g-gap-*` (removed).
5. Shared alignment (`jc-*`, `ai-*`, `ac-*`, `as-*`) comes from `01-flex.css` and works in grid context.

## Containers

- `.grid` — 1-column grid
- `.grid-auto` — responsive auto-fit columns (min 250px)
- `.grid-auto-fill` — like auto but keeps empty track slots
- `.grid-center` — grid with `place-items: center`
- Responsive: `.xgrid`, `.dgrid`, `.xgrid-auto`, `.dgrid-auto`

## Columns & rows

- `.grid-cols-1` through `.grid-cols-12` — set column count
- `.grid-rows-1` through `.grid-rows-6` — set row count
- Responsive: `.xgrid-cols-1`…`4`, `.dgrid-cols-1`…`12`, same for rows

## Gap (from `01-flex.css`, shared)

- Semantic: `.gap-xs` `.gap-s` `.gap` `.gap-l` `.gap-xl`
- Numeric: `.gap-1` through `.gap-16`
- Directional: `.gap-h-*` (column-gap), `.gap-v-*` (row-gap)
- Responsive: `.xgap-*` `.dgap-*`

## Span

- `.col-span-1` … `.col-span-12`, `.col-span-full`
- `.row-span-1` … `.row-span-6`, `.row-span-full`
- Responsive: `.xcol-span-*`, `.dcol-span-*`, `.xrow-span-*`, `.drow-span-*`

## Start / End (explicit placement)

- `.col-start-1`…`6`, `.col-start-auto`, `.col-end-1`…`7`, `.col-end-auto`
- `.row-start-1`…`6`, `.row-start-auto`, `.row-end-1`…`7`, `.row-end-auto`

## Grid-specific alignment (all have `x`/`d` variants)

- `ji-` = justify-items: `c` center, `s` start, `e` end, `str` stretch
- `pi-` = place-items: `c` `s` `e` `str`
- `js-` = justify-self: `c` `s` `e` `str`
- `ps-` = place-self: `c` `s` `e` `str`

## Auto flow

- `.grid-flow-row` `.grid-flow-col` `.grid-flow-dense`
- `.grid-flow-row-dense` `.grid-flow-col-dense`
- `.auto-cols-auto` `.auto-cols-min` `.auto-cols-max` `.auto-cols-fr`
- `.auto-rows-auto` `.auto-rows-min` `.auto-rows-max` `.auto-rows-fr`

## How to compose

```html
<!-- 3 columns, with span -->
<div class="grid grid-cols-3 gap-s">
  <div class="col-span-2">Wide item</div>
  <div>Normal item</div>
</div>

<!-- 1 col mobile, 3 cols desktop -->
<div class="grid xgrid-cols-1 dgrid-cols-3 gap-s">
  <div>A</div><div>B</div><div>C</div>
</div>

<!-- Auto-fit: no column count needed -->
<div class="grid-auto gap-4">
  <div>Card</div><div>Card</div><div>Card</div>
</div>
```

## Common recipes

### Dashboard (sidebar + content)
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
  <div>Col 1</div><div>Col 2</div><div>Col 3</div>
</div>
```

## Do not

- Do NOT use `.g-gap-*` — removed. Use `.gap-*` from `01-flex.css`.
- Do NOT use `grid-gap` in custom CSS — use `gap`.
- Do NOT forget `.grid-cols-N` or `.grid-auto` — `.grid` alone is 1 column.

**Cheatsheet:** `src/css/03-layout/GRID-CHEATSHEET.md`
