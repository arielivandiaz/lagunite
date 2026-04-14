---
applyTo: "**/*.html,src/css/**/*.css,lagunite-web/src/**/*.astro"
---

# Lagunite Decorator Utilities

Decorator utilities live in `src/css/04-decorators/`. They are visual and interaction helpers: shadows, opacity, borders, motion, and filters. Pair them with layout, typography, and color tokens.

## Responsive pattern

- **`x` prefix** — applies only inside **`max-width: 639px`** (mobile).
- **`d` prefix** — applies only inside **`min-width: 640px`** (desktop).
- Coverage is **not uniform** — some border utilities only expose a subset of `x`/`d` variants.

## `01-effects.css`

- **Appearance:** `.appearance-none`, `.appearance-auto`
- **Resize:** `.resize-none`, `.resize`, `.resize-x`, `.resize-y`
- **Blend:** `.mix-blend-*`, `.bg-blend-*` (subset)
- **Backdrop blur:** `.backdrop-blur-none`, `.backdrop-blur-s`, `.backdrop-blur`, `.backdrop-blur-l`, `.backdrop-blur-xl`
- **Hover scale:** `.hoverable-s`, `.hoverable`, `.hoverable-l`, `.hoverable-xl`
- **Touch:** `.touch-auto`, `.touch-none`, `.touch-pan-x`, `.touch-pan-y`, `.touch-manipulation`
- **Will-change:** `.will-change-auto`, `.will-change-scroll`, `.will-change-contents`, `.will-change-transform`
- **Scroll behavior:** `.scroll-smooth`, `.scroll-auto`
- **Scroll snap:** `.snap-none|x|y|both`, `.snap-mandatory|proximity`, `.snap-start|end|center`, `.snap-normal|always`

## `02-shadows.css`

- **Box:** `.shadow-none`, `.shadow-s`, `.shadow` (medium), `.shadow-l`, `.shadow-xl`, `.shadow-inner`
- **Text:** `.text-shadow-s`, `.text-shadow`, `.text-shadow-l`
- **Tinted:** `.shadow-color-primary`, `.shadow-color-black`

## `03-opacity.css`

- `.opacity-0` `.opacity-5` `.opacity-10` `.opacity-20` `.opacity-25` `.opacity-30` `.opacity-40` `.opacity-50` `.opacity-60` `.opacity-70` `.opacity-75` `.opacity-80` `.opacity-90` `.opacity-100`
- **Hover only:** `.hover-opacity-0`, `.hover-opacity-25`, `.hover-opacity-50`, `.hover-opacity-75`, `.hover-opacity-100`

## `04-border.css`

- **Width:** `.border-w-0`, `.border-w-1`, `.border-w-2`, `.border-w-4`
- **Style:** `.border-solid`, `.border-dashed`, `.border-dotted`, `.border-double`, `.border-none`, `.border-inset`, `.border-outset`
- **Sides:** **`lf` / `rg`** for left/right (not `l` / `r`). Shorthand: `.border-t`, `.border-b`, `.border-lf`, `.border-rg`
- **Radius:** `.border-r-0`, `.border-r-s`, `.border-r`, `.border-r-l`, `.border-r-xl`, `.border-r-full`, `.border-r-circle`
- **Shortcuts:** `.border`, `.border-light`, `.border-dark`, `.bordered` (border + radius-m)
- **Organic shapes:** `.border-blob-{t,b,lf,rg}-1` through `-4`

## `05-transforms.css`

- **Scale:** `.scale-0` `.scale-50` `.scale-75` `.scale-90` `.scale-95` `.scale-100` `.scale-105` `.scale-110` `.scale-125` `.scale-150`
- **Rotate:** `.rotate-0` … `.rotate-270` and `.-rotate-*` for negatives
- **Translate:** `.translate-x-*` / `.-translate-x-*`, `.translate-y-*` / `.-translate-y-*`
- **Origin:** `.origin-center`, `.origin-top`, `.origin-right`, `.origin-bottom`, `.origin-left` etc.

> **Gotcha:** `transform` is a single property — combining `.scale-*` and `.rotate-*` on the same element without a composition layer will override.

## `06-transitions.css`

- **Shorthand:** `.transition-none`, `.transition`
- **Properties:** `.transition-all`, `.transition-colors`, `.transition-opacity`, `.transition-transform`, `.transition-shadow`
- **Duration:** `.duration-0` `.duration-75` `.duration-100` `.duration-150` `.duration-200` `.duration-300` `.duration-500` `.duration-700` `.duration-1000`
- **Easing:** `.ease-linear`, `.ease-in`, `.ease-out`, `.ease-in-out`
- **Delay:** `.delay-0` `.delay-75` `.delay-100` `.delay-150` `.delay-200` `.delay-300` `.delay-500`

## `07-animations.css`

- **Infinite:** `.animate-spin`, `.animate-pulse`, `.animate-bounce`
- **One-shot / entrance:** `.animate-fade-in`, `.animate-fade-out`, `.animate-slide-in`, `.animate-slide-in-down`, `.animate-slide-out`, `.animate-slide-out-up`, `.animate-shake`
- **`.animate-none`** — disable
- **Tuning:** `.animate-duration-*`, `.animate-delay-*`, `.animate-once`, `.animate-infinite`, `.animate-fill-*`

## `08-filters.css`

- **Blur:** `.blur-none`, `.blur-s`, `.blur`, `.blur-l`, `.blur-xl`
- **Color filters:** `.brightness-*`, `.contrast-*`, `.grayscale` / `.grayscale-0`, `.saturate-*`, `.invert` / `.invert-0`, `.sepia` / `.sepia-0`, `.hue-rotate-*`

## Common combinations

- **Glassmorphism bar:** semi-transparent bg + `.backdrop-blur` + `.border-light` + `.shadow-s`
- **Card lift on hover:** `.transition-shadow` + `.duration-200` + `.ease-out`
- **Fade interaction:** `.opacity-75` + `.hover-opacity-100` + `.transition-opacity` + `.duration-150`
- **Snap carousel:** parent `.snap-x` + `.snap-mandatory`, children `.snap-start`
