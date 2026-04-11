# Spacing & Sizing Cheatsheet — Lagunite

## Margin (marg)
```
All:    .marg-0(!)  .marg-xs(4)  .marg-s(12)  .marg(24)  .marg-l(48)  .marg-xl(64)
Horiz:  .marg-h-xs  .marg-h-s    .marg-h      .marg-h-l  .marg-h-xl
Vert:   .marg-v-xs  .marg-v-s    .marg-v      .marg-v-l  .marg-v-xl
Left:   .marg-lf-xs .marg-lf-s   .marg-lf     .marg-lf-l .marg-lf-xl
Right:  .marg-rg-xs .marg-rg-s   .marg-rg     .marg-rg-l .marg-rg-xl
Top:    .marg-t-xs  .marg-t-s    .marg-t      .marg-t-l  .marg-t-xl
Bottom: .marg-b-xs  .marg-b-s    .marg-b      .marg-b-l  .marg-b-xl
Auto:   .marg-auto
```
Responsive: `x` (mobile), `d` (desktop) — e.g. `.xmarg-s`, `.dmarg-h-l`

## Padding (padd)
```
All:    .padd-0(!)  .padd-xs(4)  .padd-s(12)  .padd(24)  .padd-l(48)  .padd-xl(64)
Horiz:  .padd-h-xs  .padd-h-s    .padd-h      .padd-h-l  .padd-h-xl
Vert:   .padd-v-xs  .padd-v-s    .padd-v      .padd-v-l  .padd-v-xl
Left:   .padd-lf-xs .padd-lf-s   .padd-lf     .padd-lf-l .padd-lf-xl
Right:  .padd-rg-xs .padd-rg-s   .padd-rg     .padd-rg-l .padd-rg-xl
Top:    .padd-t-xs  .padd-t-s    .padd-t      .padd-t-l  .padd-t-xl
Bottom: .padd-b-xs  .padd-b-s    .padd-b      .padd-b-l  .padd-b-xl
```
Responsive: same `x`/`d` prefix pattern.

## Token scale (shared by margin, padding, gap)
```
xs  = --space-1  (4px)
s   = --space-3  (12px)
(base) = --space-6  (24px)
l   = --space-12 (48px)
xl  = --space-16 (64px)
```

## Position
```
Types:  .pos-static  .pos-relative  .pos-absolute  .pos-fixed  .pos-sticky
Short:  .rel (relative)  .abs (absolute)
```

### Absolute shortcuts (pa-)
```
.pa-full  (all edges 0)     .pa-h  (left+right 0)   .pa-v  (top+bottom 0)
.pa-t     .pa-b     .pa-lf     .pa-rg
.pa-tl    .pa-tr    .pa-bl     .pa-br
```

### Fixed shortcuts (pf-)
```
.pf-full  .pf-h  .pf-v  .pf-t  .pf-b  .pf-lf  .pf-rg
.pf-tl    .pf-tr .pf-bl .pf-br
```

### Centering
```
.center-h    horizontal (left/right 0 + margin auto)
.center-v    vertical (top/bottom 0 + margin auto)
.abs-center  absolute + translate(-50%, -50%)
```

### Inset
```
.top-0  .right-0  .bottom-0  .left-0
.top-auto .right-auto .bottom-auto .left-auto
.top-full .right-full .bottom-full .left-full
.top-1\/2 .right-1\/2 .bottom-1\/2 .left-1\/2
```

### Z-index
```
.z0  .z1  .z2  .z3  .z4  .z5  .z10  .z15  .z20
```

### Float
```
.float-r / .float-rg    .float-l / .float-lf
.float-tr .float-tl .float-tc  (absolute positioned)
.float-br .float-bl .float-bc
.float-c  .float-cl .float-cr
```

### Separators
```
Vertical:   .separator-v-xs  .separator-v-s  .separator-v  .separator-v-l  .separator-v-xl
Horizontal: .separator-h-xs  .separator-h-s  .separator-h  .separator-h-l  .separator-h-xl
```

## Overflow
```
.overflow-auto  .overflow-hidden  .overflow-visible  .overflow-scroll
.overflow-x-*   .overflow-y-*
.scrollbar-thin  .scrollbar-none
```

## Size (08-size.css)
```
Special:  .w-auto  .h-auto  .w-min  .h-min  .w-max  .h-max  .w-fit  .h-fit
Screen:   .w-full-screen  .h-full-screen  .w-half-screen  .h-half-screen
Fixed:    .w1(48px) … .w15(1920px)    .h1(20px) … .h15(768px)
Min:      .minw1 … .minw15            .minh1 … .minh15
Max:      .maxw1 … .maxw15            .maxh1 … .maxh15
Fluid:    .wf1 … .wf15 (clamp)        .hf1 … .hf15 (clamp)
```

## Width (09-width.css)
```
Percent:      .wp5 … .wp100 (5% steps)
Min %:        .minwp10 … .minwp100
Max %:        .maxwp10 … .maxwp100
Fractions:    .wp-1\/3  .wp-2\/3  .wp-1\/6  .wp-5\/6
Viewport:     .vw10 … .vw100
Min viewport: .minvw10 … .minvw100
Max viewport: .maxvw10 … .maxvw100
```

## Height (10-height.css)
```
Percent:      .hp5 … .hp100 (5% steps)
Min %:        .minhp10 … .minhp100
Max %:        .maxhp10 … .maxhp100
Fractions:    .hp-1\/3  .hp-2\/3  .hp-1\/6  .hp-5\/6
Viewport:     .vh5 … .vh100
Min viewport: .minvh10 … .minvh100
Max viewport: .maxvh10 … .maxvh100
```

All responsive: `x` prefix (mobile ≤639px), `d` prefix (desktop ≥640px).
