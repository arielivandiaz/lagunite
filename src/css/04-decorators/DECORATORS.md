# Lagunite Decorator Utilities Guide

## Overview
The `04-decorators` folder contains utility classes for visual styling and interactive effects throughout the Lagunite design system. These utilities provide powerful tools for adding shadows, borders, opacity, transforms, transitions, animations, and filters to create polished, dynamic interfaces.

## File Structure & Purpose

### 01-effects.css
**Visual effects and interaction utilities** - Classes for blend modes, backdrop filters, scroll behavior, touch actions, and hoverable transforms.

### 02-shadows.css
**Shadow utilities** - Classes for applying box shadows and text shadows with multiple depth levels and colored shadow effects.

### 03-opacity.css
**Opacity utilities** - Classes for controlling element transparency with fixed opacity values and hover states.

### 04-border.css
**Border utilities** - Classes for border widths, styles, colors, radius, and organic shapes (blobs) with comprehensive side control.

### 05-transforms.css
**Transform utilities** - Classes for scaling, rotating, translating elements and controlling transform origin.

### 06-transitions.css
**Transition utilities** - Classes for smooth property transitions with customizable durations, timing functions, and delays.

### 07-animations.css
**Animation utilities** - Classes for predefined keyframe animations (spin, pulse, bounce, fade, slide) with duration and iteration controls.

### 08-filters.css
**Filter utilities** - Classes for visual filters including blur, brightness, contrast, grayscale, and saturation effects.

## Visual Effects (`01-effects.css`)

### Content Utilities
```css
.content-none          /* content: none */
.content-empty         /* content: '' */
```

### Appearance
```css
.appearance-none       /* appearance: none (remove browser styling) */
.appearance-auto       /* appearance: auto */
```

### Resize
```css
.resize-none           /* resize: none */
.resize                /* resize: both */
.resize-x              /* resize: horizontal */
.resize-y              /* resize: vertical */
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
```

### Mix Blend Mode
```css
.mix-blend-normal      /* mix-blend-mode: normal */
.mix-blend-multiply    /* mix-blend-mode: multiply */
.mix-blend-screen      /* mix-blend-mode: screen */
.mix-blend-overlay     /* mix-blend-mode: overlay */
.mix-blend-darken      /* mix-blend-mode: darken */
.mix-blend-lighten     /* mix-blend-mode: lighten */
.mix-blend-color-dodge /* mix-blend-mode: color-dodge */
.mix-blend-color-burn  /* mix-blend-mode: color-burn */
.mix-blend-hard-light  /* mix-blend-mode: hard-light */
.mix-blend-soft-light  /* mix-blend-mode: soft-light */
.mix-blend-difference  /* mix-blend-mode: difference */
.mix-blend-exclusion   /* mix-blend-mode: exclusion */
```

### Background Blend Mode
```css
.bg-blend-normal       /* background-blend-mode: normal */
.bg-blend-multiply     /* background-blend-mode: multiply */
.bg-blend-screen       /* background-blend-mode: screen */
.bg-blend-overlay      /* background-blend-mode: overlay */
.bg-blend-darken       /* background-blend-mode: darken */
.bg-blend-lighten      /* background-blend-mode: lighten */
```

### Isolation
```css
.isolate               /* isolation: isolate */
.isolation-auto        /* isolation: auto */
```

### Backdrop Filter
```css
.backdrop-blur-none    /* backdrop-filter: blur(0) */
.backdrop-blur-s       /* backdrop-filter: blur(4px) */
.backdrop-blur         /* backdrop-filter: blur(8px) */
.backdrop-blur-l       /* backdrop-filter: blur(16px) */
.backdrop-blur-xl      /* backdrop-filter: blur(32px) */
```

### Box Decoration Break
```css
.box-decoration-clone  /* box-decoration-break: clone */
.box-decoration-slice  /* box-decoration-break: slice */
```

### Break Inside
```css
.break-inside-auto     /* break-inside: auto */
.break-inside-avoid    /* break-inside: avoid */
.break-inside-avoid-page    /* break-inside: avoid-page */
.break-inside-avoid-column  /* break-inside: avoid-column */
```

### Hoverable Transforms
```css
.hoverable-s:hover     /* transform: scale(1.1) */
.hoverable:hover       /* transform: scale(1.2) */
.hoverable-l:hover     /* transform: scale(1.5) */
.hoverable-xl:hover    /* transform: scale(1.8) */
```

### Touch Action
```css
.touch-auto            /* touch-action: auto */
.touch-none            /* touch-action: none */
.touch-pan-x           /* touch-action: pan-x */
.touch-pan-y           /* touch-action: pan-y */
.touch-manipulation    /* touch-action: manipulation */
```

### Will Change
```css
.will-change-auto      /* will-change: auto */
.will-change-scroll    /* will-change: scroll-position */
.will-change-contents  /* will-change: contents */
.will-change-transform /* will-change: transform */
```

### Scroll Behavior
```css
.scroll-sooth         /* scroll-behavior: smooth */
.scroll-auto           /* scroll-behavior: auto */
```

### Scroll Snap
```css
/* Snap Type */
.snap-none             /* scroll-snap-type: none */
.snap-x                /* scroll-snap-type: x mandatory */
.snap-y                /* scroll-snap-type: y mandatory */
.snap-both             /* scroll-snap-type: both mandatory */
.snap-mandatory        /* Sets strictness to mandatory */
.snap-proximity        /* Sets strictness to proximity */

/* Snap Align */
.snap-start            /* scroll-snap-align: start */
.snap-end              /* scroll-snap-align: end */
.snap-center           /* scroll-snap-align: center */

/* Snap Stop */
.snap-normal           /* scroll-snap-stop: normal */
.snap-always           /* scroll-snap-stop: always */
```

### Caret & Accent Color
```css
.caret-transparent     /* caret-color: transparent */
.caret-current         /* caret-color: currentColor */
.accent-auto           /* accent-color: auto */
.accent-current        /* accent-color: currentColor */
```

## Shadows (`02-shadows.css`)

### Box Shadows
```css
.shadow-none           /* box-shadow: none */
.shadow-s              /* box-shadow: var(--shadow-s) */
.shadow                /* box-shadow: var(--shadow-md) */
.shadow-l              /* box-shadow: var(--shadow-l) */
.shadow-xl             /* box-shadow: 20-25px blur (extra large) */
.shadow-inner          /* box-shadow: var(--shadow-inner) (inset) */
```

### Text Shadows
```css
.text-shadow-s         /* text-shadow: 0 1px 2px (small) */
.text-shadow           /* text-shadow: 0 2px 4px (medium) */
.text-shadow-l         /* text-shadow: 0 4px 8px (large) */
```

### Colored Shadows
```css
.shadow-color-primary  /* Blue glow shadow (25px spread) */
.shadow-color-black    /* Strong black shadow (high contrast) */
```

## Opacity (`03-opacity.css`)

### Opacity Levels
```css
.opacity-0             /* opacity: 0 (invisible) */
.opacity-25            /* opacity: 0.25 (25% visible) */
.opacity-50            /* opacity: 0.5 (50% visible) */
.opacity-75            /* opacity: 0.75 (75% visible) */
.opacity-100           /* opacity: 1 (fully visible) */
```

### Hover Opacity
```css
.hover-opacity-75:hover /* opacity: 0.75 on hover */
```

## Borders (`04-border.css`)

### Border Widths
```css
.border-w-0            /* border-width: 0 */
.border-w-1            /* border-width: var(--border-width-s) */
.border-w-2            /* border-width: var(--border-width-md) */
.border-w-4            /* border-width: calc(var(--border-width-md) * 2) */
```

### Border Styles
```css
.border-solid          /* border-style: solid */
.border-dashed         /* border-style: dashed */
.border-dotted         /* border-style: dotted */
.border-double         /* border-style: double */
.border-none           /* border-style: none */
.border-inset          /* border-style: inset */
.border-outset         /* border-style: outset */
```

### Border Colors
```css
.border-color-primary       /* border-color: var(--color-primary) */
.border-color-primary-light /* border-color: var(--color-primary-light) */
.border-color-primary-dark  /* border-color: var(--color-primary-dark) */
.border-color-secondary     /* border-color: var(--color-secondary) */
.border-color-success       /* border-color: var(--color-success) */
.border-color-warning       /* border-color: var(--color-warning) */
.border-color-error         /* border-color: var(--color-error) */
.border-color-black         /* border-color: var(--color-almost-black) */
.border-color-white         /* border-color: var(--color-almost-white) */
.border-color-transparent   /* border-color: transparent */
```

### Border Sides
```css
/* Side Borders */
.border-t              /* border-top: var(--border) */
.border-b              /* border-bottom: var(--border) */
.border-lf             /* border-left: var(--border) */
.border-rg             /* border-right: var(--border) */

/* Side Border Widths */
.border-t-w-0          /* border-top-width: 0 */
.border-t-w-1          /* border-top-width: var(--border-width-s) */
.border-t-w-2          /* border-top-width: var(--border-width-md) */
.border-t-w-4          /* border-top-width: calc(var(--border-width-md) * 2) */

/* Similar pattern for -b-, -lf-, -rg- sides */
```

### Border Radius
```css
.border-r-0            /* border-radius: 0 */
.border-r-s            /* border-radius: var(--radius-s) */
.border-r              /* border-radius: var(--radius-md) */
.border-r-l            /* border-radius: var(--radius-l) */
.border-r-xl           /* border-radius: var(--radius-l) */
.border-r-full         /* border-radius: var(--radius-full) (pill shape) */
.border-r-circle       /* border-radius: 50% (perfect circle) */
```

### Border Circles (Stacked)
```css
.border-circle-s       /* Small circle border (width + padding + radius) */
.border-circle         /* Medium circle border */
.border-circle-l       /* Large circle border */
.border-circle-xl      /* Extra large circle border */

/* Works with color classes */
.border-circle.color-primary
.border-circle.color-success
.border-circle.color-warning
.border-circle.color-error
```

### Border Blobs (Organic Shapes)
```css
/* Top Blobs */
.border-blob-t-1       /* border-radius: 25% 25% 0 0 */
.border-blob-t-2       /* border-radius: 50% 50% 0 0 */
.border-blob-t-3       /* border-radius: 75% 75% 0 0 / 50% 50% 0 0 */
.border-blob-t-4       /* border-radius: 100% 100% 0 0 / 10% 90% 0 0 */

/* Bottom Blobs */
.border-blob-b-1       /* border-radius: 0 0 25% 25% */
.border-blob-b-2       /* border-radius: 0 0 50% 50% */
.border-blob-b-3       /* border-radius: 0 0 75% 75% / 0 0 50% 50% */
.border-blob-b-4       /* border-radius: 0 0 100% 100% / 0 0 10% 90% */

/* Left Blobs */
.border-blob-lf-1      /* border-radius: 25% 0 0 25% */
.border-blob-lf-2      /* border-radius: 50% 0 0 50% */
.border-blob-lf-3      /* border-radius: 75% 0 0 75% / 50% 0 0 50% */
.border-blob-lf-4      /* border-radius: 100% 0 0 100% / 10% 0 0 90% */

/* Right Blobs */
.border-blob-rg-1      /* border-radius: 0 25% 25% 0 */
.border-blob-rg-2      /* border-radius: 0 50% 50% 0 */
.border-blob-rg-3      /* border-radius: 0 75% 75% 0 / 0 50% 50% 0 */
.border-blob-rg-4      /* border-radius: 0 100% 100% 0 / 0 10% 90% 0 */
```

### Border Shortcuts
```css
.border                /* border: var(--border) */
.border-s              /* border: var(--border-s) */
.border-l              /* border: var(--border-l) */
.bordered              /* Standard border with color */
```

## Transforms (`05-transforms.css`)

### Scale
```css
.scale-0               /* transform: scale(0) */
.scale-50              /* transform: scale(0.5) */
.scale-75              /* transform: scale(0.75) */
.scale-100             /* transform: scale(1) */
.scale-125             /* transform: scale(1.25) */
.scale-150             /* transform: scale(1.5) */
```

### Rotate
```css
.rotate-0              /* transform: rotate(0deg) */
.rotate-45             /* transform: rotate(45deg) */
.rotate-90             /* transform: rotate(90deg) */
.rotate-180            /* transform: rotate(180deg) */
.rotate-270            /* transform: rotate(270deg) */
```

### Translate
```css
.translate-x-0         /* transform: translateX(0) */
.translate-x-full      /* transform: translateX(100%) */
.translate-y-0         /* transform: translateY(0) */
.translate-y-full      /* transform: translateY(100%) */
```

### Transform Origin
```css
.origin-center         /* transform-origin: center */
.origin-top            /* transform-origin: top */
.origin-bottom         /* transform-origin: bottom */
```

## Transitions (`06-transitions.css`)

### Transition Properties
```css
.transition-all        /* transition-property: all */
.transition-colors     /* transition-property: color, background-color, border-color, etc. */
.transition-opacity    /* transition-property: opacity */
.transition-transform  /* transition-property: transform */
```

### Transition Durations
```css
.duration-75           /* transition-duration: 75ms */
.duration-100          /* transition-duration: 100ms */
.duration-150          /* transition-duration: 150ms */
.duration-200          /* transition-duration: 200ms */
.duration-300          /* transition-duration: 300ms */
.duration-500          /* transition-duration: 500ms */
```

### Transition Timing Functions
```css
.ease-linear           /* transition-timing-function: linear */
.ease-in               /* transition-timing-function: cubic-bezier(0.4, 0, 1, 1) */
.ease-out              /* transition-timing-function: cubic-bezier(0, 0, 0.2, 1) */
.ease-in-out           /* transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1) */
```

### Transition Delays
```css
.delay-75              /* transition-delay: 75ms */
.delay-100             /* transition-delay: 100ms */
.delay-150             /* transition-delay: 150ms */
```

## Animations (`07-animations.css`)

### Keyframes Available
- **spin**: Continuous 360° rotation
- **pulse**: Scale and opacity pulsing effect
- **bounce**: Vertical bouncing motion
- **fade-in**: Fade from invisible to visible
- **fade-out**: Fade from visible to invisible
- **slide-in**: Slide up with fade in
- **slide-out**: Slide down with fade out

### Animation Classes
```css
.animate-spin          /* Continuous spinning animation (1s, infinite, linear) */
.animate-pulse         /* Pulsing animation (1.5s, infinite, ease-in-out) */
.animate-bounce        /* Bouncing animation (1s, infinite, ease-in-out) */
```

### Animation Duration Helpers
```css
.animate-duration-1s   /* animation-duration: 1s */
.animate-duration-2s   /* animation-duration: 2s */
```

### Animation Iteration Helpers
```css
.animate-once          /* animation-iteration-count: 1 */
.animate-infinite      /* animation-iteration-count: infinite */
```

## Filters (`08-filters.css`)

### Blur
```css
.blur-none             /* filter: blur(0) */
.blur-s                /* filter: blur(4px) */
.blur                  /* filter: blur(8px) */
.blur-l                /* filter: blur(16px) */
.blur-xl               /* filter: blur(32px) */
```

### Brightness
```css
.brightness-0          /* filter: brightness(0) (black) */
.brightness-50         /* filter: brightness(0.5) (darkened) */
.brightness-100        /* filter: brightness(1) (normal) */
.brightness-150        /* filter: brightness(1.5) (brightened) */
```

### Contrast
```css
.contrast-0            /* filter: contrast(0) (gray) */
.contrast-50           /* filter: contrast(0.5) (low contrast) */
.contrast-100          /* filter: contrast(1) (normal) */
.contrast-150          /* filter: contrast(1.5) (high contrast) */
```

### Grayscale
```css
.grayscale-0           /* filter: grayscale(0) (full color) */
.grayscale             /* filter: grayscale(1) (fully grayscale) */
.grayscale-100         /* filter: grayscale(1) (fully grayscale) */
```

### Saturate
```css
.saturate-0            /* filter: saturate(0) (desaturated) */
.saturate-100          /* filter: saturate(1) (normal) */
.saturate-150          /* filter: saturate(1.5) (oversaturated) */
```

## Responsive Variants

All decorator utilities include responsive variants using the `.x` prefix for mobile (max-width: 639px) and `.d` prefix for desktop (min-width: 640px):

```css
/* Mobile-specific (< 640px) */
.xshadow-l             /* Large shadow only on mobile */
.xopacity-50           /* 50% opacity only on mobile */
.xanimate-spin         /* Spin animation only on mobile */

/* Desktop-specific (≥ 640px) */
.dshadow-l             /* Large shadow only on desktop */
.dopacity-50           /* 50% opacity only on desktop */
.danimate-spin         /* Spin animation only on desktop */
```

## Usage Examples

### Glassmorphism Effect
```html
<div class="backdrop-blur-l bg-white opacity-75 border-r shadow-l">
  Frosted glass card
</div>
```

### Interactive Button
```html
<button class="shadow hoverable-s transition-all duration-300 ease-out border-r">
  Hover Me
</button>
```

### Animated Loading Spinner
```html
<div class="animate-spin animate-infinite border-w-2 border-color-primary border-r-circle">
  Loading...
</div>
```

### Smooth Scroll Carousel
```html
<div class="snap-x scroll-sooth overflow-x-auto">
  <div class="snap-center">Item 1</div>
  <div class="snap-center">Item 2</div>
  <div class="snap-center">Item 3</div>
</div>
```

### Image Hover Effect
```html
<img class="grayscale-100 hover-opacity-75 transition-all duration-300 scale-100 hoverable-s" src="image.jpg">
```

### Organic Shape Card
```html
<div class="border-blob-t-3 shadow-l padd-l bg-gradient">
  Organic shaped content
</div>
```

### Text with Glow
```html
<h1 class="text-shadow-l shadow-color-primary color-primary">
  Glowing Title
</h1>
```

### Transform on Hover
```html
<div class="rotate-0 scale-100 transition-transform duration-300 hover:rotate-45 hover:scale-125">
  Rotate and Scale on Hover
</div>
```

## Best Practices

1. **Performance**: Use `will-change-*` utilities sparingly on elements that will animate to optimize performance
2. **Shadows**: Start with subtle shadows (`.shadow-s`) and increase only for emphasis
3. **Transitions**: Combine `transition-*`, `duration-*`, and `ease-*` for smooth interactions
4. **Animations**: Use `.animate-once` for entrance animations, `.animate-infinite` for loaders
5. **Filters**: Be cautious with filter combinations as they can impact performance
6. **Blend Modes**: Use `.isolate` to prevent blend modes from affecting unintended elements
7. **Backdrop Blur**: Ensure adequate color contrast when using glassmorphism effects
8. **Touch Actions**: Use `.touch-manipulation` on interactive elements for better mobile UX
9. **Scroll Snap**: Combine `.snap-x`/`.snap-y` with `.snap-center`/`.snap-start` for controlled scrolling
10. **Border Radius**: Use semantic sizes (`.border-r-s`, `.border-r-l`) for consistency

## Related Resources

- **Design Tokens**: Decorator utilities reference `--shadow-*`, `--border-*`, and `--radius-*` variables
- **Breakpoints**: Mobile (< 640px) and Desktop (≥ 640px)
- **Layering**: Combine decorators with layout and color utilities for complete components
- **Demo Files**: See `web/demo/04/` for interactive examples of all decorator utilities
