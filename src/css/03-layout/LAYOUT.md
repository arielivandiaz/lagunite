# Lagunite Layout Utilities Guide

## Overview
The `03-layout` folder contains utility classes for controlling layout, positioning, spacing, and sizing throughout the Lagunite design system. These utilities provide powerful tools for creating responsive, well-structured interfaces.

## File Structure & Purpose

### 01-flex.css
**Flexbox utilities** - Classes for creating flexible layouts with display: flex, including direction, wrapping, alignment, justification, and gap controls.

### 02-grid.css
**CSS Grid utilities** - Classes for creating grid-based layouts with precise column and row control, including auto-fit and auto-fill patterns.

### 03-position.css
**Positioning utilities** - Classes for controlling element positioning (static, relative, absolute, fixed, sticky), inset values, z-index stacking, and floating behaviors.

### 04-margin.css
**Margin spacing utilities** - Classes for applying margin spacing in all directions using the design system's spacing scale (0, xs, s, default, l, xl).

### 05-padding.css
**Padding spacing utilities** - Classes for applying padding spacing in all directions using the design system's spacing scale (0, xs, s, default, l, xl).

### 06-containers.css
**Container utilities** - Classes for creating centered, constrained content containers with various size presets, specialized containers (prose, card, modal, hero), and object-fit/position controls.

### 07-overflow.css
**Overflow utilities** - Classes for controlling overflow behavior (auto, hidden, visible, scroll) and scrollbar styling (thin, none).

### 10-size.css
**Size utilities** - Classes for controlling width and height with intrinsic sizing, percentages, fractions, viewport units, min/max constraints, and fluid sizing.

## Flexbox Utilities (`01-flex.css`)

### Display Flex
```css
.flex                   /* display: flex */
.inline-flex           /* display: inline-flex */
```

### Flex Direction
```css
.flex-row              /* flex-direction: row (default) */
.flex-row-reverse      /* flex-direction: row-reverse */
.flex-col              /* flex-direction: column */
.flex-col-reverse      /* flex-direction: column-reverse */
```

### Flex Wrap
```css
.flex-wrap             /* flex-wrap: wrap */
.flex-nowrap           /* flex-wrap: nowrap */
.flex-wrap-reverse     /* flex-wrap: wrap-reverse */
```

### Justify Content
```css
.justify-start         /* justify-content: flex-start */
.justify-end           /* justify-content: flex-end */
.justify-center        /* justify-content: center */
.justify-between       /* justify-content: space-between */
.justify-around        /* justify-content: space-around */
.justify-evenly        /* justify-content: space-evenly */
```

### Align Items
```css
.items-start           /* align-items: flex-start */
.items-end             /* align-items: flex-end */
.items-center          /* align-items: center */
.items-baseline        /* align-items: baseline */
.items-stretch         /* align-items: stretch */
```

### Align Self
```css
.self-auto             /* align-self: auto */
.self-start            /* align-self: flex-start */
.self-end              /* align-self: flex-end */
.self-center           /* align-self: center */
.self-stretch          /* align-self: stretch */
```

### Flex Grow/Shrink
```css
.flex-1                /* flex: 1 1 0% */
.flex-auto             /* flex: 1 1 auto */
.flex-initial          /* flex: 0 1 auto */
.flex-none             /* flex: none */
.grow                  /* flex-grow: 1 */
.grow-0                /* flex-grow: 0 */
.shrink                /* flex-shrink: 1 */
.shrink-0              /* flex-shrink: 0 */
```

### Gap
```css
.gap-xs                /* gap: var(--space-1) */
.gap-s                 /* gap: var(--space-3) */
.gap                   /* gap: var(--space-6) */
.gap-l                 /* gap: var(--space-12) */
.gap-xl                /* gap: var(--space-16) */

.gap-x-xs              /* column-gap: var(--space-1) */
.gap-y-xs              /* row-gap: var(--space-1) */
/* ...and similar for s, default, l, xl */
```

## Grid Utilities (`02-grid.css`)

### Display Grid
```css
.grid                  /* display: grid */
.inline-grid           /* display: inline-grid */
```

### Grid Template Columns
```css
.grid-cols-1           /* grid-template-columns: repeat(1, minmax(0, 1fr)) */
.grid-cols-2           /* 2 equal columns */
.grid-cols-3           /* 3 equal columns */
/* ...continues through... */
.grid-cols-12          /* 12 equal columns */

.grid-cols-auto        /* grid-template-columns: auto */
.grid-cols-auto-fit    /* grid-template-columns: repeat(auto-fit, minmax(0, 1fr)) */
.grid-cols-auto-fill   /* grid-template-columns: repeat(auto-fill, minmax(0, 1fr)) */
```

### Grid Template Rows
```css
.grid-rows-1           /* 1 row */
.grid-rows-2           /* 2 rows */
/* ...continues through... */
.grid-rows-6           /* 6 rows */
```

### Grid Column Span
```css
.col-span-1            /* grid-column: span 1 / span 1 */
.col-span-2            /* span 2 columns */
/* ...continues through... */
.col-span-12           /* span 12 columns */
.col-span-full         /* grid-column: 1 / -1 */
```

### Grid Row Span
```css
.row-span-1            /* grid-row: span 1 / span 1 */
.row-span-2            /* span 2 rows */
/* ...continues through... */
.row-span-6            /* span 6 rows */
.row-span-full         /* grid-row: 1 / -1 */
```

### Grid Gap
```css
.grid-gap-xs           /* gap: var(--space-1) */
.grid-gap-s            /* gap: var(--space-3) */
.grid-gap              /* gap: var(--space-6) */
.grid-gap-l            /* gap: var(--space-12) */
.grid-gap-xl           /* gap: var(--space-16) */
```

## Position Utilities (`03-position.css`)

### Position Types
```css
.pos-static            /* position: static */
.pos-relative          /* position: relative */
.pos-absolute          /* position: absolute */
.pos-fixed             /* position: fixed */
.pos-sticky            /* position: sticky */
```

### Inset Utilities
```css
.top-0                 /* top: 0 */
.right-0               /* right: 0 */
.bottom-0              /* bottom: 0 */
.left-0                /* left: 0 */

.top-auto              /* top: auto */
.right-auto            /* right: auto */
.bottom-auto           /* bottom: auto */
.left-auto             /* left: auto */

.top-full              /* top: 100% */
.right-full            /* right: 100% */
.bottom-full           /* bottom: 100% */
.left-full             /* left: 100% */

.top-1\/2              /* top: 50% */
.right-1\/2            /* right: 50% */
.bottom-1\/2           /* bottom: 50% */
.left-1\/2             /* left: 50% */
```

### Position Shortcuts
```css
.abs                   /* position: absolute */
.rel                   /* position: relative */

/* Absolute positioning helpers */
.pa-full               /* position: absolute; top: 0; right: 0; bottom: 0; left: 0 */
.pa-h                  /* position: absolute; left: 0; right: 0 */
.pa-v                  /* position: absolute; top: 0; bottom: 0 */
.pa-t                  /* position: absolute; top: 0 */
.pa-b                  /* position: absolute; bottom: 0 */
.pa-lf                 /* position: absolute; left: 0 */
.pa-rg                 /* position: absolute; right: 0 */
.pa-tl                 /* position: absolute; top: 0; left: 0 */
.pa-tr                 /* position: absolute; top: 0; right: 0 */
.pa-bl                 /* position: absolute; bottom: 0; left: 0 */
.pa-br                 /* position: absolute; bottom: 0; right: 0 */

/* Fixed positioning helpers */
.pf                    /* position: fixed */
.pf-full               /* position: fixed; top: 0; right: 0; bottom: 0; left: 0 */
.pf-h                  /* position: fixed; left: 0; right: 0 */
.pf-v                  /* position: fixed; top: 0; bottom: 0 */
/* ...and similar patterns as absolute */
```

### Centering Utilities
```css
.center-h              /* transform: translateX(-50%); left: 50% */
.center-v              /* transform: translateY(-50%); top: 50% */
.center                /* transform: translate(-50%, -50%); top: 50%; left: 50% */
.abs-center            /* position: absolute; center transform */
```

### Float Utilities
```css
.float-r / .float-rg   /* float: right */
.float-l / .float-lf   /* float: left */

/* Floating in relative containers */
.float-tr              /* position: absolute; top: 0; right: 0 */
.float-tl              /* position: absolute; top: 0; left: 0 */
.float-tc              /* position: absolute; top: 0; left: 50%; transform: translateX(-50%) */
.float-br              /* position: absolute; bottom: 0; right: 0 */
.float-bl              /* position: absolute; bottom: 0; left: 0 */
.float-bc              /* position: absolute; bottom: 0; left: 50%; transform: translateX(-50%) */
.float-c               /* position: absolute; center transform */
.float-cl              /* position: absolute; top: 50%; left: 0; transform: translateY(-50%) */
.float-cr              /* position: absolute; top: 50%; right: 0; transform: translateY(-50%) */
```

### Z-Index Stack
```css
.z-0                   /* z-index: 0 */
.z-10                  /* z-index: 10 */
.z-20                  /* z-index: 20 */
.z-30                  /* z-index: 30 */
.z-40                  /* z-index: 40 */
.z-50                  /* z-index: 50 */
.z-auto                /* z-index: auto */

/* Alternative z-index utilities */
.z0 - .z5              /* z-index: 0-5 */
.z10 - .z20            /* z-index: 10-20 */
```

## Margin Utilities (`04-margin.css`)

### All Sides Margin
```css
.marg-0                /* margin: 0 !important */
.marg-xs               /* margin: var(--space-1) */
.marg-s                /* margin: var(--space-3) */
.marg                  /* margin: var(--space-6) */
.marg-l                /* margin: var(--space-12) */
.marg-xl               /* margin: var(--space-16) */
```

### Horizontal Margin
```css
.marg-h-xs             /* margin-left/right: var(--space-1) */
.marg-h-s              /* margin-left/right: var(--space-3) */
.marg-h                /* margin-left/right: var(--space-6) */
.marg-h-l              /* margin-left/right: var(--space-12) */
.marg-h-xl             /* margin-left/right: var(--space-16) */
```

### Vertical Margin
```css
.marg-v-xs             /* margin-top/bottom: var(--space-1) */
.marg-v-s              /* margin-top/bottom: var(--space-3) */
.marg-v                /* margin-top/bottom: var(--space-6) */
.marg-v-l              /* margin-top/bottom: var(--space-12) */
.marg-v-xl             /* margin-top/bottom: var(--space-16) */
```

### Individual Side Margin
```css
/* Left */
.marg-lf-xs            /* margin-left: var(--space-1) */
.marg-lf-s            /* margin-left: var(--space-3) */
.marg-lf               /* margin-left: var(--space-6) */
.marg-lf-l            /* margin-left: var(--space-12) */
.marg-lf-xl            /* margin-left: var(--space-16) */

/* Right */
.marg-rg-xs            /* margin-right: var(--space-1) */
.marg-rg-s            /* margin-right: var(--space-3) */
.marg-rg               /* margin-right: var(--space-6) */
.marg-rg-l            /* margin-right: var(--space-12) */
.marg-rg-xl            /* margin-right: var(--space-16) */

/* Top */
.marg-t-xs             /* margin-top: var(--space-1) */
.marg-t-s             /* margin-top: var(--space-3) */
.marg-t                /* margin-top: var(--space-6) */
.marg-t-l             /* margin-top: var(--space-12) */
.marg-t-xl             /* margin-top: var(--space-16) */

/* Bottom */
.marg-b-xs             /* margin-bottom: var(--space-1) */
.marg-b-s              /* margin-bottom: var(--space-3) */
.marg-b                /* margin-bottom: var(--space-6) */
.marg-b-l              /* margin-bottom: var(--space-12) */
.marg-b-xl             /* margin-bottom: var(--space-16) */
```

## Padding Utilities (`05-padding.css`)

### All Sides Padding
```css
.padd-0                /* padding: 0 !important */
.padd-xs               /* padding: var(--space-1) */
.padd-s                /* padding: var(--space-3) */
.padd                  /* padding: var(--space-6) */
.padd-l                /* padding: var(--space-12) */
.padd-xl               /* padding: var(--space-16) */
```

### Horizontal Padding
```css
.padd-h-xs             /* padding-left/right: var(--space-1) */
.padd-h-s              /* padding-left/right: var(--space-3) */
.padd-h                /* padding-left/right: var(--space-6) */
.padd-h-l              /* padding-left/right: var(--space-12) */
.padd-h-xl             /* padding-left/right: var(--space-16) */
```

### Vertical Padding
```css
.padd-v-xs             /* padding-top/bottom: var(--space-1) */
.padd-v-s              /* padding-top/bottom: var(--space-3) */
.padd-v                /* padding-top/bottom: var(--space-6) */
.padd-v-l              /* padding-top/bottom: var(--space-12) */
.padd-v-xl             /* padding-top/bottom: var(--space-16) */
```

### Individual Side Padding
```css
/* Left */
.padd-lf-xs            /* padding-left: var(--space-1) */
.padd-lf-s             /* padding-left: var(--space-3) */
.padd-lf               /* padding-left: var(--space-6) */
.padd-lf-l             /* padding-left: var(--space-12) */
.padd-lf-xl            /* padding-left: var(--space-16) */

/* Right */
.padd-rg-xs            /* padding-right: var(--space-1) */
.padd-rg-s             /* padding-right: var(--space-3) */
.padd-rg               /* padding-right: var(--space-6) */
.padd-rg-l             /* padding-right: var(--space-12) */
.padd-rg-xl            /* padding-right: var(--space-16) */

/* Top */
.padd-t-xs             /* padding-top: var(--space-1) */
.padd-t-s              /* padding-top: var(--space-3) */
.padd-t                /* padding-top: var(--space-6) */
.padd-t-l              /* padding-top: var(--space-12) */
.padd-t-xl             /* padding-top: var(--space-16) */

/* Bottom */
.padd-b-xs             /* padding-bottom: var(--space-1) */
.padd-b-s              /* padding-bottom: var(--space-3) */
.padd-b                /* padding-bottom: var(--space-6) */
.padd-b-l              /* padding-bottom: var(--space-12) */
.padd-b-xl             /* padding-bottom: var(--space-16) */
```

## Container Utilities (`06-containers.css`)

### Base Container
```css
.container             /* Base responsive container with auto margins and padding */
```

### Container Sizes
```css
.container-xs          /* max-width: 480px */
.container-s           /* max-width: 640px */
.container-m           /* max-width: 768px */
.container-l           /* max-width: 1024px */
.container-xl          /* max-width: 1280px */
.container-xxl         /* max-width: 1536px */
```

### Specialized Containers
```css
.container-fluid       /* 100% width with responsive padding */
.container-prose       /* max-width: 65ch (optimal reading width) */
.container-card        /* max-width: 400px (card layouts) */
.container-sidebar     /* max-width: 320px (sidebar navigation) */
.container-modal       /* max-width: 600px (modal dialogs) */
.container-hero        /* max-width: 1200px (hero sections) */
.container-narrow      /* max-width: 540px (narrow content) */
.container-wide        /* max-width: 1440px (wide layouts) */
```

### Object Fit
```css
.object-contain        /* object-fit: contain */
.object-cover          /* object-fit: cover */
.object-fill           /* object-fit: fill */
.object-none           /* object-fit: none */
.object-scale-down     /* object-fit: scale-down */
```

### Object Position
```css
.object-center         /* object-position: center */
.object-top            /* object-position: top */
.object-bottom         /* object-position: bottom */
.object-left           /* object-position: left */
.object-right          /* object-position: right */
.object-left-top       /* object-position: left top */
.object-left-bottom    /* object-position: left bottom */
.object-right-top      /* object-position: right top */
.object-right-bottom   /* object-position: right bottom */
```

### Constrained Containers
```css
.constrain-xs          /* max-width: var(--space-32) (128px) */
.constrain-s           /* max-width: var(--space-40) (160px) */
.constrain-m           /* max-width: var(--space-48) (192px) */
.constrain-l           /* max-width: var(--space-56) (224px) */
.constrain-xl          /* max-width: var(--space-64) (256px) */
```

### Section Containers
```css
.section-container     /* Full-width section with vertical padding */
.section-container-s   /* Small section (max-width: 768px) */
.section-container-l   /* Large section (max-width: 1200px) */
```

### Container Combinations
```css
.container-card-center /* Card container with centered content */
.container-prose-justify /* Prose container with justified text */
.container-hero-center /* Hero container with centered content */
```

## Overflow Utilities (`07-overflow.css`)

### Basic Overflow
```css
.overflow-auto         /* overflow: auto */
.overflow-hidden       /* overflow: hidden */
.overflow-visible      /* overflow: visible */
.overflow-scroll       /* overflow: scroll */
```

### Horizontal Overflow
```css
.overflow-x-auto       /* overflow-x: auto */
.overflow-x-hidden     /* overflow-x: hidden */
.overflow-x-visible    /* overflow-x: visible */
.overflow-x-scroll     /* overflow-x: scroll */
```

### Vertical Overflow
```css
.overflow-y-auto       /* overflow-y: auto */
.overflow-y-hidden     /* overflow-y: hidden */
.overflow-y-visible    /* overflow-y: visible */
.overflow-y-scroll     /* overflow-y: scroll */
```

### Scrollbar Styling
```css
.scrollbar-thin        /* scrollbar-width: thin; custom webkit scrollbar (6px) */
.scrollbar-none        /* Hide scrollbar completely */
```

## Size Utilities (`10-size.css`)

### Intrinsic Sizing
```css
/* Width */
.w-auto                /* width: auto */
.w-min                 /* width: min-content */
.w-max                 /* width: max-content */
.w-fit                 /* width: fit-content */

/* Height */
.h-auto                /* height: auto */
.h-min                 /* height: min-content */
.h-max                 /* height: max-content */
.h-fit                 /* height: fit-content */
```

### Full Dimensions
```css
.w-full                /* width: 100% */
.h-full                /* height: 100% */
.w-screen              /* width: 100vw */
.h-screen              /* height: 100vh */
```

### Semantic Sizes
```css
/* Width */
.w-xs                  /* width: var(--space-12) (48px) */
.w-s                   /* width: var(--space-16) (64px) */
.w-m                   /* width: var(--space-20) (80px) */
.w-l                   /* width: var(--space-24) (96px) */
.w-xl                  /* width: var(--space-32) (128px) */
.w-xxl                 /* width: 192px */
.w-3xl                 /* width: 256px */

/* Height follows same pattern */
.h-xs - .h-3xl
```

### Width Fractions
```css
.w-1\/2                /* width: 50% */
.w-1\/3                /* width: 33.333333% */
.w-2\/3                /* width: 66.666667% */
.w-1\/4                /* width: 25% */
.w-3\/4                /* width: 75% */
.w-1\/5                /* width: 20% */
.w-2\/5                /* width: 40% */
.w-3\/5                /* width: 60% */
.w-4\/5                /* width: 80% */
.w-1\/6                /* width: 16.666667% */
.w-5\/6                /* width: 83.333333% */
.w-1\/12               /* width: 8.333333% */
.w-5\/12               /* width: 41.666667% */
.w-7\/12               /* width: 58.333333% */
.w-11\/12              /* width: 91.666667% */
```

### Width Percentages
```css
.w-0 - .w-100          /* width: 0% - 100% (increments of 5) */
/* Example: .w-25, .w-50, .w-75, .w-100 */
```

### Height Fractions
```css
.h-1\/2                /* height: 50% */
.h-1\/3 - .h-2\/3      /* thirds */
.h-1\/4 - .h-3\/4      /* quarters */
.h-1\/5 - .h-4\/5      /* fifths */
.h-1\/6 - .h-5\/6      /* sixths */
```

### Height Percentages
```css
.h-0 - .h-100          /* height: 0% - 100% (increments of 5) */
```

### Min Width
```css
.min-w-0               /* min-width: 0 */
.min-w-full            /* min-width: 100% */
.min-w-min             /* min-width: min-content */
.min-w-max             /* min-width: max-content */
.min-w-fit             /* min-width: fit-content */
```

### Max Width
```css
.max-w-0               /* max-width: 0 */
.max-w-xs              /* max-width: 320px */
.max-w-s               /* max-width: 384px */
.max-w-m               /* max-width: 448px */
.max-w-l               /* max-width: 512px */
.max-w-xl              /* max-width: 576px */
.max-w-xxl             /* max-width: 672px */
.max-w-3xl             /* max-width: 768px */
.max-w-4xl             /* max-width: 896px */
.max-w-5xl             /* max-width: 1024px */
.max-w-6xl             /* max-width: 1152px */
.max-w-7xl             /* max-width: 1280px */
.max-w-full            /* max-width: 100% */
.max-w-min             /* max-width: min-content */
.max-w-max             /* max-width: max-content */
.max-w-fit             /* max-width: fit-content */
.max-w-prose           /* max-width: 65ch */
.max-w-screen-s        /* max-width: 640px */
.max-w-screen-m        /* max-width: 768px */
.max-w-screen-l        /* max-width: 1024px */
.max-w-screen-xl       /* max-width: 1280px */
.max-w-screen-xxl      /* max-width: 1536px */
```

### Min Height
```css
.min-h-0               /* min-height: 0 */
.min-h-full            /* min-height: 100% */
.min-h-screen          /* min-height: 100vh */
.min-h-min             /* min-height: min-content */
.min-h-max             /* min-height: max-content */
.min-h-fit             /* min-height: fit-content */
```

### Max Height
```css
.max-h-0               /* max-height: 0 */
.max-h-px              /* max-height: 1px */
.max-h-0.5             /* max-height: 0.125rem */
.max-h-1 - .max-h-96   /* max-height: 0.25rem - 24rem (rem units) */
.max-h-full            /* max-height: 100% */
.max-h-screen          /* max-height: 100vh */
.max-h-min             /* max-height: min-content */
.max-h-max             /* max-height: max-content */
.max-h-fit             /* max-height: fit-content */
```

### Viewport Units
```css
/* Width */
.w-vw-10               /* width: 10vw */
.w-vw-20               /* width: 20vw */
.w-vw-25               /* width: 25vw */
.w-vw-30               /* width: 30vw */
.w-vw-40               /* width: 40vw */
.w-vw-50               /* width: 50vw */
.w-vw-60               /* width: 60vw */
.w-vw-70               /* width: 70vw */
.w-vw-75               /* width: 75vw */
.w-vw-80               /* width: 80vw */
.w-vw-90               /* width: 90vw */
.w-vw-100              /* width: 100vw */

/* Height follows same pattern */
.h-vh-10 - .h-vh-100
```

## Responsive Variants

All layout utilities include responsive variants using the `.x` prefix for mobile (max-width: 639px) and `.d` prefix for desktop (min-width: 640px):

```css
/* Mobile-specific (< 640px) */
.xflex                 /* flex only on mobile */
.xmarg-l               /* large margin only on mobile */
.xw-full               /* full width only on mobile */

/* Desktop-specific (≥ 640px) */
.dflex                 /* flex only on desktop */
.dmarg-l               /* large margin only on desktop */
.dw-1\/2               /* half width only on desktop */
```

## Usage Examples

### Flexbox Layout
```html
<div class="flex justify-between items-center gap">
  <div class="flex-1">Content</div>
  <div class="flex-none">Sidebar</div>
</div>
```

### Grid Layout
```html
<div class="grid grid-cols-3 grid-gap">
  <div class="col-span-2">Main</div>
  <div>Aside</div>
</div>
```

### Centered Container
```html
<div class="container-l padd-v-l">
  <h1 class="marg-b">Title</h1>
  <p>Content</p>
</div>
```

### Absolute Positioning
```html
<div class="pos-relative">
  <div class="pa-tr padd-s">Badge</div>
</div>
```

### Responsive Sizing
```html
<div class="xw-full dw-1/2 h-screen overflow-y-auto">
  Responsive content
</div>
```

## Best Practices

1. **Spacing Scale**: Use the consistent spacing scale (xs, s, default, l, xl) for margins and padding
2. **Responsive Design**: Leverage `.x` and `.d` prefixes for mobile-first responsive layouts
3. **Flexbox First**: Use flexbox for one-dimensional layouts (rows or columns)
4. **Grid for Complex**: Use CSS Grid for two-dimensional layouts with precise control
5. **Containers**: Choose appropriate container types for content (prose for text, card for components)
6. **Positioning**: Use position shortcuts (`.pa-*`, `.pf-*`) for common positioning patterns
7. **Overflow**: Combine overflow utilities with scrollbar styling for better UX
8. **Size Constraints**: Use min/max width/height utilities to maintain responsive boundaries

## Related Resources

- **Spacing Variables**: All spacing utilities use `--space-*` CSS custom properties
- **Breakpoints**: Mobile (< 640px) and Desktop (≥ 640px)
- **Design Tokens**: Layout utilities reference design system tokens for consistency
