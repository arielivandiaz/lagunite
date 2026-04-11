# Flex Cheatsheet — Lagunite

## Direction
```
.row      →  .col      ↓  .rowr  ←  .colr  ↑
```

Responsive: prefix `x` (mobile) or `d` (desktop).  
Combo: `.col-row` = col on mobile, row on desktop.

## Gap
```
Semantic:  .gap-xs(4)  .gap-s(12)  .gap(24)  .gap-l(48)  .gap-xl(64)
Numeric:   .gap-1(4)   .gap-2(8)   .gap-3(12) .gap-4(16)  .gap-6(24)  .gap-8(32)
Direction: .gap-h-*    .gap-v-*
```

## Alignment (all have x/d responsive)
```
justify-content:  .jc-c   .jc-fs  .jc-fe  .jc-sb  .jc-sa  .jc-se
align-items:      .ai-c   .ai-fs  .ai-fe  .ai-s   .ai-bl
align-self:       .as-c   .as-fs  .as-fe  .as-s
align-content:    .ac-c   .ac-fs  .ac-fe  .ac-s   .ac-sa  .ac-sb
```

## Flex items
```
.flex-1        fill equally       .flex-grow    grow: 1
.flex-auto     fill by content    .flex-grow-0  grow: 0
.flex-initial  default behavior   .flex-shrink  shrink: 1
.flex-none     don't flex         .flex-shrink-0 shrink: 0
```

## Wrap
```
.flex-wrap   .flex-nowrap
```

## Order
```
.order-first  .order-last  .order-none  .order-1 … .order-5
```

## Shorthands
```
.flex-center    = flex + center both axes
.flex-center-h  = flex + center horizontal
.flex-center-v  = flex + center vertical
```

## Responsive recipe

```html
<!-- Stack on mobile, side-by-side on desktop -->
<div class="col-row gap-s">
  <div class="flex-1">Left</div>
  <div class="flex-1">Right</div>
</div>

<!-- Navbar -->
<nav class="row jc-sb ai-c gap-4">
  <div>Logo</div>
  <div class="row gap-s">Links</div>
</nav>

<!-- Centered hero -->
<section class="flex-center col gap-s" style="min-height:60vh">
  <h1>Title</h1>
  <p>Subtitle</p>
</section>
```
