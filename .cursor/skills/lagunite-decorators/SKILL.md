---
description: Lagunite CSS decorator utilities — effects, shadows, opacity, borders, transforms, transitions, animations, and filters. Use when building visual effects, interactions, or decorative styling with Lagunite classes.
globs: ["src/css/04-decorators/**/*.css", "**/*.html"]
---

# Lagunite Decorator Utilities

Decorator utilities live in `src/css/04-decorators/`. They are visual and interaction helpers: shadows, opacity, borders, motion, and filters. Pair them with layout (`03-layout`), typography, and color tokens from the rest of the framework.

## Responsive pattern

- **`x` prefix** — applies only inside **`max-width: 639px`** (mobile).
- **`d` prefix** — applies only inside **`min-width: 640px`** (desktop).
- Concatenate directly: `.xshadow`, `.dtransition`, `.xbackdrop-blur`, `.dborder-r-l`.
- Coverage is **not uniform** across files (e.g. some border utilities only expose a subset of `x`/`d` variants). When unsure, prefer the base class or check `04-decorators/*.css`.

## Utilities moved out of decorators

- **`content-none` / empty-content pseudo helpers** → `10-misc/03-pseudo.css`.
- **`object-fit` / `object-position`** → `03-layout/06-containers.css`.

Do not invent decorator classes for those behaviors.

## File map and class families

### `01-effects.css`

- **Appearance:** `.appearance-none`, `.appearance-auto`.
- **Resize:** `.resize-none`, `.resize`, `.resize-x`, `.resize-y`.
- **Blend:** `.mix-blend-*` (many modes through `exclusion`), `.bg-blend-*` (subset: normal through lighten).
- **Isolation:** `.isolate`, `.isolation-auto`.
- **Backdrop blur:** `.backdrop-blur-none`, `.backdrop-blur-s`, `.backdrop-blur`, `.backdrop-blur-l`, `.backdrop-blur-xl` (duplicated in `08-filters.css` with the same names).
- **Fragmentation:** `.box-decoration-clone|slice`, `.break-inside-auto|avoid|avoid-page|avoid-column`.
- **Hover scale:** `.hoverable-s`, `.hoverable`, `.hoverable-l`, `.hoverable-xl` (each only on `:hover`; uses `transform: scale(...)`).
- **Touch:** `.touch-auto`, `.touch-none`, `.touch-pan-x`, `.touch-pan-y`, `.touch-manipulation`.
- **Will-change:** `.will-change-auto`, `.will-change-scroll`, `.will-change-contents`, `.will-change-transform`.
- **Scroll behavior:** `.scroll-smooth`, `.scroll-auto` — use **`scroll-smooth`** (not `scroll-sooth`).
- **Scroll snap:** `.snap-none|x|y|both`, `.snap-mandatory|proximity` (sets `--snap-strictness`), `.snap-start|end|center`, `.snap-normal|always`.
- **Caret / accent:** `.caret-transparent|current`, `.accent-auto|current`.

### `02-shadows.css`

- **Box:** `.shadow-none`, `.shadow-s`, `.shadow` (medium), `.shadow-l`, `.shadow-xl`, `.shadow-inner` — values use `--shadow-*` variables.
- **Text:** `.text-shadow-s`, `.text-shadow`, `.text-shadow-l`.
- **Tinted box shadows:** `.shadow-color-primary`, `.shadow-color-black`.

### `03-opacity.css`

- **Opacity:** `.opacity-0`, `.opacity-5`, `.opacity-10`, `.opacity-20`, `.opacity-25`, `.opacity-30`, `.opacity-40`, `.opacity-50`, `.opacity-60`, `.opacity-70`, `.opacity-75`, `.opacity-80`, `.opacity-90`, `.opacity-100`.
- **Hover only:** `.hover-opacity-0`, `.hover-opacity-25`, `.hover-opacity-50`, `.hover-opacity-75`, `.hover-opacity-100`.

`x`/`d` exist for opacity steps, not for hover-opacity.

### `04-border.css`

- **Width (all sides):** `.border-w-0`, `.border-w-1`, `.border-w-2`, `.border-w-4`.
- **Style:** `.border-solid`, `.border-dashed`, `.border-dotted`, `.border-double`, `.border-none`, `.border-inset`, `.border-outset`.
- **Color:** `.border-color-primary` (+ `-light`, `-dark`), `.border-color-secondary`, `.border-color-success` (+ `-alt`), `.border-color-warning` (+ `-alt`), `.border-color-error` (+ `-alt`), `.border-color-black`, `.border-color-white`, `.border-color-transparent`.
- **Sides:** Lagunite uses **`lf` / `rg`** for left/right (not `l` / `r`). Shorthand: `.border-t`, `.border-b`, `.border-lf`, `.border-rg`. Per-side widths: `.border-{t,b,lf,rg}-w-0|1|2|4`.
- **Radius:** `.border-r-0`, `.border-r-s`, `.border-r`, `.border-r-l`, `.border-r-xl` — **`.border-r-xl` uses `var(--radius-xl)` (1.5rem / 24px)**. Also `.border-r-full`, `.border-r-circle`.
- **Decorative rings:** `.border-circle-s`, `.border-circle`, `.border-circle-l`, `.border-circle-xl` — circular `inline-flex` with primary ring via `box-shadow`; combine `.border-circle` with `.color-primary|success|warning|error|black|white` for icon/badge rings.
- **Organic shapes:** `.border-blob-{t,b,lf,rg}-1` through `-4`.
- **Shortcuts:** `.border`, `.border-light`, `.border-dark`, `.bordered` (border + `border-radius: var(--radius-m)`).

Some `x`/`d` border rules omit certain widths or corners; verify before relying on responsive border-only changes.

### `05-transforms.css`

- **Scale:** `.scale-0`, `.scale-50`, `.scale-75`, `.scale-90`, `.scale-95`, `.scale-100`, `.scale-105`, `.scale-110`, `.scale-125`, `.scale-150`.
- **Rotate:** `.rotate-0` … `.rotate-270` and `.-rotate-*` for negatives (subset on `x`/`d`).
- **Translate:** `.translate-x-*` / `.-translate-x-*`, `.translate-y-*` / `.-translate-y-*` using `--space-*` or `%` / `full` (responsive set is smaller than base).
- **Skew:** `.skew-x-*`, `.-skew-x-*`, `.skew-y-*`, `.-skew-y-*` (no `x`/`d` in source).
- **Origin:** `.origin-center`, `.origin-top`, `.origin-top-right`, `.origin-right`, `.origin-bottom-right`, `.origin-bottom`, `.origin-bottom-left`, `.origin-left`, `.origin-top-left` (responsive subset: center, top, bottom, left, right).

**Gotcha:** `transform` is a single property — combining `.scale-*` and `.rotate-*` on the same element without a composition layer will override; use one transform utility or custom CSS.

### `06-transitions.css`

- **Shorthand:** `.transition-none`, `.transition` (`all 0.2s ease-in-out`).
- **Properties:** `.transition-all`, `.transition-colors`, `.transition-opacity`, `.transition-transform`, `.transition-shadow`.
- **Duration:** `.duration-0`, `.duration-75`, `.duration-100`, `.duration-150`, `.duration-200`, `.duration-300`, `.duration-500`, `.duration-700`, `.duration-1000`.
- **Easing:** `.ease-linear`, `.ease-in`, `.ease-out`, `.ease-in-out`.
- **Delay:** `.delay-0`, `.delay-75`, `.delay-100`, `.delay-150`, `.delay-200`, `.delay-300`, `.delay-500`.

Stack `.transition-colors` + `.duration-200` + `.ease-out` for typical UI hovers.

### `07-animations.css`

- **Named animations:** `.animate-spin`, `.animate-pulse`, `.animate-bounce` (infinite by default where specified).
- **One-shot / entrance:** `.animate-fade-in`, `.animate-fade-out`, `.animate-slide-in` (up), `.animate-slide-in-down`, `.animate-slide-out` (down), `.animate-slide-out-up`, `.animate-shake`.
- **`.animate-none`** — disable.
- **Tuning:** `.animate-duration-*`, `.animate-delay-*`, `.animate-once`, `.animate-infinite`, `.animate-fill-*`, `.animate-normal|reverse|alternate`.

`@media (prefers-reduced-motion: reduce)` forces very short duration and single iteration for the main motion classes.

### `08-filters.css`

- **Blur (element):** `.blur-none`, `.blur-s`, `.blur`, `.blur-l`, `.blur-xl`.
- **Color filters:** `.brightness-*`, `.contrast-*`, `.grayscale` / `.grayscale-0`, `.saturate-*`, `.invert` / `.invert-0`, `.sepia` / `.sepia-0`, `.hue-rotate-*`.
- **Backdrop blur:** same `.backdrop-blur-*` names as `01-effects.css`.

**Gotcha:** Multiple classes each setting `filter: ...` override each other — only one winning declaration. Backdrop blur uses `backdrop-filter`, separate from `filter`.

## Common combinations

- **Glassmorphism-style bar:** semi-transparent background (from theme/atoms) + `.backdrop-blur` or `.backdrop-blur-l` + `.border-light` + `.shadow-s`.
- **Card lift on hover:** `.transition-shadow` + `.duration-200` + `.ease-out` and swap from `.shadow-s` to `.shadow` / `.shadow-l` via state (or pair with `.hoverable` for scale-only lift).
- **Subtle text on dark:** `.text-shadow-s` or `.text-shadow`.
- **Fade interaction:** base `.opacity-75` + `.hover-opacity-100` + `.transition-opacity` + `.duration-150`.
- **Snap carousel:** parent `.snap-x` (or `snap-y`) + `.snap-mandatory` or `.snap-proximity`, children `.snap-start` or `.snap-center`; scroll container may need `.scroll-smooth`.

## Quick reference

| Need | Reach for |
| --- | --- |
| Soft elevation | `.shadow`, `.shadow-l`, `.shadow-color-primary` |
| Readable text on busy BG | `.text-shadow`, `.backdrop-blur` on overlay |
| Rounded card frame | `.bordered` or `.border` + `.border-r` / `.border-r-l` |
| Loading spinner | `.animate-spin` |
| Respect motion prefs | Prefer transitions; animations already reduced in media query |
| Smooth anchor scroll | `.scroll-smooth` on scrolling ancestor |

For full tables, see `src/css/04-decorators/DECORATORS-CHEATSHEET.md`.
