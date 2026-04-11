# Grid Cheatsheet — Lagunite

## Containers
```
.grid            1 column, gap --space-4
.grid-auto       auto-fit, min 250px
.grid-auto-fill  auto-fill, min 250px
.grid-center     display: grid + place-items: center
```

Responsive: `x` (mobile), `d` (desktop): `.xgrid`, `.dgrid`, `.xgrid-auto`, `.dgrid-auto`

## Columns & Rows
```
.grid-cols-1 … .grid-cols-12      template columns
.grid-rows-1 … .grid-rows-6       template rows
```

Responsive: `.xgrid-cols-1`…`4`, `.dgrid-cols-1`…`12`, same for rows.

## Gap (shared with flex)
```
Semantic:  .gap-xs(4)  .gap-s(12)  .gap(24)  .gap-l(48)  .gap-xl(64)
Numeric:   .gap-1(4)   .gap-2(8)   .gap-3(12) .gap-4(16)  .gap-6(24)  .gap-8(32)
Direction: .gap-h-*    .gap-v-*
```

## Span
```
.col-span-1 … .col-span-12   .col-span-full
.row-span-1 … .row-span-6    .row-span-full
```

Responsive: `.xcol-span-*`, `.dcol-span-*`, `.xrow-span-*`, `.drow-span-*`

## Start / End
```
.col-start-1…6  .col-start-auto    .col-end-1…7  .col-end-auto
.row-start-1…6  .row-start-auto    .row-end-1…7  .row-end-auto
```

## Alignment

### Shared (from flex, works in grid too)
```
justify-content:  .jc-c   .jc-fs  .jc-fe  .jc-sb  .jc-sa  .jc-se
align-items:      .ai-c   .ai-fs  .ai-fe  .ai-s   .ai-bl
align-self:       .as-c   .as-fs  .as-fe  .as-s
align-content:    .ac-c   .ac-fs  .ac-fe  .ac-s   .ac-sa  .ac-sb
```

### Grid-specific (all have x/d responsive)
```
justify-items:  .ji-c   .ji-s   .ji-e   .ji-str
place-items:    .pi-c   .pi-s   .pi-e   .pi-str
justify-self:   .js-c   .js-s   .js-e   .js-str
place-self:     .ps-c   .ps-s   .ps-e   .ps-str
```

## Auto Flow
```
.grid-flow-row   .grid-flow-col   .grid-flow-dense
.grid-flow-row-dense   .grid-flow-col-dense
```

## Auto Columns / Rows
```
.auto-cols-auto  .auto-cols-min  .auto-cols-max  .auto-cols-fr
.auto-rows-auto  .auto-rows-min  .auto-rows-max  .auto-rows-fr
```

## Responsive recipe

```html
<!-- Mobile 1-col, desktop 3-col -->
<div class="grid xgrid-cols-1 dgrid-cols-3 gap-s">
  <div>A</div> <div>B</div> <div>C</div>
</div>

<!-- Dashboard -->
<div class="grid dgrid-cols-4 gap-4">
  <aside>Sidebar</aside>
  <main class="dcol-span-3">Content</main>
</div>

<!-- Auto card grid -->
<div class="grid-auto gap-s">
  <div>Card</div> <div>Card</div> <div>Card</div>
</div>
```
