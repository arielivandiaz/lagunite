# Lagunite Decorator Utilities

> Visual and interaction helpers: shadows, opacity, borders, motion, filters, and effects.
> Use when building visual polish, hover interactions, or decorative styling.

**Source files:** `src/css/04-decorators/` (`01-effects.css` through `08-filters.css`)

---

## Responsive pattern

- **`x` prefix** — applies only `max-width: 639px` (mobile).
- **`d` prefix** — applies only `min-width: 640px` (desktop).
- Coverage is **not uniform** — some utilities only expose a subset of `x`/`d` variants. When unsure, check the source file.

## Effects (`01-effects.css`)

- **Appearance:** `.appearance-none`, `.appearance-auto`
- **Resize:** `.resize-none`, `.resize`, `.resize-x`, `.resize-y`
- **Hover scale:** `.hoverable-s`, `.hoverable`, `.hoverable-l`, `.hoverable-xl` (on `:hover` only)
- **Scroll behavior:** `.scroll-smooth`, `.scroll-auto` (use `.scroll-smooth`, not `.scroll-sooth`)
- **Scroll snap:** `.snap-none|x|y|both`, `.snap-mandatory|proximity`, `.snap-start|end|center`, `.snap-normal|always`
- **Backdrop blur:** `.backdrop-blur-none`, `.backdrop-blur-s`, `.backdrop-blur`, `.backdrop-blur-l`, `.backdrop-blur-xl`
- **Touch:** `.touch-auto`, `.touch-none`, `.touch-pan-x`, `.touch-pan-y`, `.touch-manipulation`
- **Will-change:** `.will-change-auto`, `.will-change-scroll`, `.will-change-contents`, `.will-change-transform`
- **Blend modes:** `.mix-blend-*` (many modes), `.bg-blend-*` (subset)
- **Isolation:** `.isolate`, `.isolation-auto`

## Shadows (`02-shadows.css`)

- **Box:** `.shadow-none`, `.shadow-s`, `.shadow`, `.shadow-l`, `.shadow-xl`, `.shadow-inner`
- **Text:** `.text-shadow-s`, `.text-shadow`, `.text-shadow-l`
- **Tinted:** `.shadow-color-primary`, `.shadow-color-black`

## Opacity (`03-opacity.css`)

- `.opacity-0`, `.opacity-5`, `.opacity-10`, `.opacity-20`, `.opacity-25`, `.opacity-30`, `.opacity-40`, `.opacity-50`, `.opacity-60`, `.opacity-70`, `.opacity-75`, `.opacity-80`, `.opacity-90`, `.opacity-100`
- **Hover only:** `.hover-opacity-0`, `.hover-opacity-25`, `.hover-opacity-50`, `.hover-opacity-75`, `.hover-opacity-100`

`x`/`d` variants exist for opacity steps, not for hover-opacity.

## Borders (`04-border.css`)

- **Width (all sides):** `.border-w-0`, `.border-w-1`, `.border-w-2`, `.border-w-4`
- **Style:** `.border-solid`, `.border-dashed`, `.border-dotted`, `.border-double`, `.border-none`, `.border-inset`, `.border-outset`
- **Sides:** Lagunite uses **`lf` / `rg`** for left/right (not `l` / `r`). Shorthand: `.border-t`, `.border-b`, `.border-lf`, `.border-rg`. Per-side widths: `.border-{t,b,lf,rg}-w-0|1|2|4`
- **Radius:** `.border-r-0`, `.border-r-s`, `.border-r`, `.border-r-l`, `.border-r-xl` (1.5rem/24px), `.border-r-full`, `.border-r-circle`
- **Decorative rings:** `.border-circle-s`, `.border-circle`, `.border-circle-l`, `.border-circle-xl` — circular `inline-flex` with primary ring via box-shadow
- **Organic shapes:** `.border-blob-{t,b,lf,rg}-1` through `-4`
- **Shortcuts:** `.border` (1px solid), `.border-light`, `.border-dark`, `.bordered` (border + radius-m)

## Transforms (`05-transforms.css`)

- **Scale:** `.scale-0`, `.scale-50`, `.scale-75`, `.scale-90`, `.scale-95`, `.scale-100`, `.scale-105`, `.scale-110`, `.scale-125`, `.scale-150`
- **Rotate:** `.rotate-0` … `.rotate-270` and `.-rotate-*` for negatives
- **Translate:** `.translate-x-*` / `.-translate-x-*`, `.translate-y-*` / `.-translate-y-*`
- **Skew:** `.skew-x-*`, `.-skew-x-*`, `.skew-y-*`, `.-skew-y-*`
- **Origin:** `.origin-center`, `.origin-top`, `.origin-top-right`, `.origin-right`, `.origin-bottom-right`, `.origin-bottom`, `.origin-bottom-left`, `.origin-left`, `.origin-top-left`

> **Gotcha:** `transform` is a single property — combining `.scale-*` and `.rotate-*` on the same element will override; use one transform utility or custom CSS.

## Transitions (`06-transitions.css`)

- **Shorthand:** `.transition-none`, `.transition` (`all 0.2s ease-in-out`)
- **Properties:** `.transition-all`, `.transition-colors`, `.transition-opacity`, `.transition-transform`, `.transition-shadow`
- **Duration:** `.duration-0`, `.duration-75`, `.duration-100`, `.duration-150`, `.duration-200`, `.duration-300`, `.duration-500`, `.duration-700`, `.duration-1000`
- **Easing:** `.ease-linear`, `.ease-in`, `.ease-out`, `.ease-in-out`
- **Delay:** `.delay-0`, `.delay-75`, `.delay-100`, `.delay-150`, `.delay-200`, `.delay-300`, `.delay-500`

Stack `.transition-colors` + `.duration-200` + `.ease-out` for typical UI hovers.

## Animations (`07-animations.css`)

- **Continuous:** `.animate-spin`, `.animate-pulse`, `.animate-bounce`
- **One-shot:** `.animate-fade-in`, `.animate-fade-out`, `.animate-slide-in`, `.animate-slide-in-down`, `.animate-slide-out`, `.animate-slide-out-up`, `.animate-shake`
- **Disable:** `.animate-none`
- **Tuning:** `.animate-duration-*`, `.animate-delay-*`, `.animate-once`, `.animate-infinite`, `.animate-fill-*`, `.animate-normal|reverse|alternate`

`@media (prefers-reduced-motion)` forces very short duration for main motion classes.

## Filters (`08-filters.css`)

- **Blur (element):** `.blur-none`, `.blur-s`, `.blur`, `.blur-l`, `.blur-xl`
- **Color filters:** `.brightness-*`, `.contrast-*`, `.grayscale`/`.grayscale-0`, `.saturate-*`, `.invert`/`.invert-0`, `.sepia`/`.sepia-0`, `.hue-rotate-*`
- **Backdrop blur:** same `.backdrop-blur-*` names as `01-effects.css`

> **Gotcha:** Multiple classes each setting `filter: ...` override each other — only one wins. Backdrop blur uses `backdrop-filter`, separate from `filter`.

## Common combinations

- **Glassmorphism bar:** semi-transparent bg + `.backdrop-blur` + `.border-light` + `.shadow-s`
- **Card lift on hover:** `.transition-shadow` + `.duration-200` + `.ease-out`
- **Fade interaction:** `.opacity-75` + `.hover-opacity-100` + `.transition-opacity` + `.duration-150`
- **Snap carousel:** parent `.snap-x` + `.snap-mandatory`, children `.snap-start` or `.snap-center`
- **Loading spinner:** `.animate-spin`

## Quick reference

| Need | Reach for |
| --- | --- |
| Soft elevation | `.shadow`, `.shadow-l`, `.shadow-color-primary` |
| Readable text on busy BG | `.text-shadow`, `.backdrop-blur` on overlay |
| Rounded card frame | `.bordered` or `.border` + `.border-r` / `.border-r-l` |
| Loading spinner | `.animate-spin` |
| Smooth anchor scroll | `.scroll-smooth` on scrolling ancestor |

**Full tables:** `src/css/04-decorators/DECORATORS-CHEATSHEET.md`
