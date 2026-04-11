# Decorators Cheatsheet — Lagunite

**Responsive prefixes:** `x` = mobile only (`max-width: 639px`), `d` = desktop only (`min-width: 640px`). Prefix the utility name (e.g. `.xshadow`, `.dtransition`). Not every utility has `x`/`d` variants—see source files when in doubt.

**Relocated utilities:** `content-none` / empty-content helpers live in `10-misc/03-pseudo.css`. `object-fit` / `object-position` live in `03-layout/06-containers.css`—not in `01-effects.css`.

**Typo fix:** use **`scroll-smooth`** (not `scroll-sooth`).

---

## `01-effects.css`

### Appearance & resize

| Class | CSS property |
| --- | --- |
| `.appearance-none` | `appearance: none` |
| `.appearance-auto` | `appearance: auto` |
| `.resize-none` | `resize: none` |
| `.resize` | `resize: both` |
| `.resize-x` | `resize: horizontal` |
| `.resize-y` | `resize: vertical` |

### Mix blend mode

| Class | CSS property |
| --- | --- |
| `.mix-blend-normal` … `.mix-blend-exclusion` | `mix-blend-mode: …` (normal, multiply, screen, overlay, darken, lighten, color-dodge, color-burn, hard-light, soft-light, difference, exclusion) |

### Background blend mode

| Class | CSS property |
| --- | --- |
| `.bg-blend-normal` … `.bg-blend-lighten` | `background-blend-mode: …` (normal, multiply, screen, overlay, darken, lighten) |

### Isolation

| Class | CSS property |
| --- | --- |
| `.isolate` | `isolation: isolate` |
| `.isolation-auto` | `isolation: auto` |

### Backdrop blur

| Class | CSS property |
| --- | --- |
| `.backdrop-blur-none` | `backdrop-filter: blur(0)` |
| `.backdrop-blur-s` | `backdrop-filter: blur(4px)` |
| `.backdrop-blur` | `backdrop-filter: blur(8px)` |
| `.backdrop-blur-l` | `backdrop-filter: blur(16px)` |
| `.backdrop-blur-xl` | `backdrop-filter: blur(32px)` |

*(Same class names also appear in `08-filters.css`.)*

### Box decoration break & break-inside

| Class | CSS property |
| --- | --- |
| `.box-decoration-clone` | `box-decoration-break: clone` |
| `.box-decoration-slice` | `box-decoration-break: slice` |
| `.break-inside-auto` | `break-inside: auto` |
| `.break-inside-avoid` | `break-inside: avoid` |
| `.break-inside-avoid-page` | `break-inside: avoid-page` |
| `.break-inside-avoid-column` | `break-inside: avoid-column` |

### Hoverable (scale on `:hover`)

| Class | CSS property |
| --- | --- |
| `.hoverable-s` | `:hover { transform: scale(1.1) }` |
| `.hoverable` | `:hover { transform: scale(1.2) }` |
| `.hoverable-l` | `:hover { transform: scale(1.5) }` |
| `.hoverable-xl` | `:hover { transform: scale(1.8) }` |

### Touch action

| Class | CSS property |
| --- | --- |
| `.touch-auto` | `touch-action: auto` |
| `.touch-none` | `touch-action: none` |
| `.touch-pan-x` / `.touch-pan-y` | `pan-x` / `pan-y` |
| `.touch-manipulation` | `touch-action: manipulation` |

### Will-change

| Class | CSS property |
| --- | --- |
| `.will-change-auto` | `will-change: auto` |
| `.will-change-scroll` | `scroll-position` |
| `.will-change-contents` | `contents` |
| `.will-change-transform` | `transform` |

### Scroll behavior

| Class | CSS property |
| --- | --- |
| `.scroll-smooth` | `scroll-behavior: smooth` |
| `.scroll-auto` | `scroll-behavior: auto` |

### Scroll snap

| Class | CSS property / notes |
| --- | --- |
| `.snap-none` | `scroll-snap-type: none` |
| `.snap-x` / `.snap-y` / `.snap-both` | axis + `var(--snap-strictness, mandatory)` |
| `.snap-mandatory` / `.snap-proximity` | sets `--snap-strictness` |
| `.snap-start` / `.snap-end` / `.snap-center` | `scroll-snap-align` |
| `.snap-normal` / `.snap-always` | `scroll-snap-stop` |

### Caret & accent

| Class | CSS property |
| --- | --- |
| `.caret-transparent` / `.caret-current` | `caret-color` |
| `.accent-auto` / `.accent-current` | `accent-color` |

---

## `02-shadows.css`

### Box shadow

| Class | CSS property |
| --- | --- |
| `.shadow-none` | `box-shadow: none` |
| `.shadow-s` | `var(--shadow-s)` |
| `.shadow` | `var(--shadow-m)` |
| `.shadow-l` | `var(--shadow-l)` |
| `.shadow-xl` | `var(--shadow-xl)` |
| `.shadow-inner` | `var(--shadow-inner)` |

### Text shadow

| Class | CSS property |
| --- | --- |
| `.text-shadow-s` | small rgba shadow |
| `.text-shadow` | medium rgba shadow |
| `.text-shadow-l` | large rgba shadow |

### Colored box shadows

| Class | CSS property |
| --- | --- |
| `.shadow-color-primary` | primary-tinted layered shadow + ring |
| `.shadow-color-black` | black layered shadow + ring |

---

## `03-opacity.css`

### Opacity

| Class | CSS property |
| --- | --- |
| `.opacity-0` | `opacity: 0` |
| `.opacity-5` … `.opacity-90` | `0.05` … `0.9` (steps: 5, 10, 20, 25, 30, 40, 50, 60, 70, 75, 80, 90) |
| `.opacity-100` | `opacity: 1` |

### Hover opacity

| Class | CSS property |
| --- | --- |
| `.hover-opacity-0` | `:hover { opacity: 0 }` |
| `.hover-opacity-25` | `:hover { opacity: 0.25 }` |
| `.hover-opacity-50` | `:hover { opacity: 0.5 }` |
| `.hover-opacity-75` | `:hover { opacity: 0.75 }` |
| `.hover-opacity-100` | `:hover { opacity: 1 }` |

---

## `04-border.css`

### Border width (all sides)

| Class | CSS property |
| --- | --- |
| `.border-w-0` | `border-width: 0` |
| `.border-w-1` | `var(--border-width-s)` |
| `.border-w-2` | `var(--border-width-md)` |
| `.border-w-4` | `calc(var(--border-width-md) * 2)` |

### Border style

| Class | CSS property |
| --- | --- |
| `.border-solid` / `.border-dashed` / `.border-dotted` / `.border-double` | matching `border-style` |
| `.border-none` | `border-style: none` |
| `.border-inset` / `.border-outset` | `inset` / `outset` |

### Border color

| Class | Notes |
| --- | --- |
| `.border-color-primary` (+ `-light` / `-dark`) | theme primary |
| `.border-color-secondary` | secondary |
| `.border-color-success` (+ `-alt`) | success / success-light |
| `.border-color-warning` (+ `-alt`) | warning / warning-light |
| `.border-color-error` (+ `-alt`) | error / error-light |
| `.border-color-black` / `.border-color-white` | almost-black / almost-white tokens |
| `.border-color-transparent` | `transparent` |

### Side borders (shorthand)

| Class | CSS property |
| --- | --- |
| `.border-t` / `.border-b` / `.border-lf` / `.border-rg` | `border-*: var(--border)` |

### Per-side width

| Class pattern | CSS property |
| --- | --- |
| `.border-{t,b,lf,rg}-w-0` / `-w-1` / `-w-2` / `-w-4` | `border-*-width: …` |

### Radius

| Class | CSS property |
| --- | --- |
| `.border-r-0` | `border-radius: 0` |
| `.border-r-s` | `var(--radius-s)` |
| `.border-r` | `var(--radius-m)` |
| `.border-r-l` | `var(--radius-l)` |
| `.border-r-xl` | `var(--radius-xl)` (**1.5rem / 24px**) |
| `.border-r-full` | `var(--radius-full)` |
| `.border-r-circle` | `50%` |

### Border circles (ring avatars / badges)

| Class | Role |
| --- | --- |
| `.border-circle-s` / `.border-circle` / `.border-circle-l` / `.border-circle-xl` | `inline-flex`, centered, `border-radius: 50%`, transparent border + `box-shadow` ring (1 / 3 / 5 / 10 px primary ring); `.border-circle` + `.color-*` for success, warning, error, black, white |

### Border blobs (organic radii)

| Class | Shape |
| --- | --- |
| `.border-blob-{t,b,lf,rg}-1` … `-4` | asymmetric `%` radii per edge (see CSS for exact values) |

### Shortcuts

| Class | CSS property |
| --- | --- |
| `.border` | `border: var(--border)` |
| `.border-light` | `var(--border-light)` |
| `.border-dark` | `var(--border-dark)` |
| `.bordered` | `border: var(--border)` + `border-radius: var(--radius-m)` |

---

## `05-transforms.css`

### Scale

| Class | CSS property |
| --- | --- |
| `.scale-0` / `.scale-50` / `.scale-75` / `.scale-90` / `.scale-95` | `scale(0)` … `scale(0.95)` |
| `.scale-100` … `.scale-150` | `scale(1)` … `scale(1.5)` |

### Rotate

| Class | CSS property |
| --- | --- |
| `.rotate-0` … `.rotate-270` | degrees (0, 1, 2, 3, 6, 12, 45, 90, 180, 270) |
| `.-rotate-*` | negative degrees (1, 2, 3, 6, 12, 45, 90, 180) |

### Translate

| Class | CSS property |
| --- | --- |
| `.translate-x-0` … `.translate-x-full` | `translateX` (0, `--space-*`, 50%, 100%) |
| `.-translate-x-*` | negative X |
| `.translate-y-0` … `.translate-y-full` | `translateY` (same pattern) |
| `.-translate-y-*` | negative Y |

### Skew

| Class | CSS property |
| --- | --- |
| `.skew-x-1` … `.skew-x-12` / `.-skew-x-*` | `skewX(±deg)` |
| `.skew-y-1` … `.skew-y-6` / `.-skew-y-*` | `skewY(±deg)` |

### Transform origin

| Class | CSS property |
| --- | --- |
| `.origin-center` / `.origin-top` / `.origin-right` / `.origin-bottom` / `.origin-left` | keyword origins |
| `.origin-top-right` / `.origin-top-left` / `.origin-bottom-right` / `.origin-bottom-left` | corner origins |

---

## `06-transitions.css`

| Class | CSS property |
| --- | --- |
| `.transition-none` | `transition-property: none` |
| `.transition` | `transition: all 0.2s ease-in-out` |
| `.transition-all` | `transition-property: all` |
| `.transition-colors` | color, background-color, border-color, text-decoration-color, fill, stroke |
| `.transition-opacity` | `opacity` |
| `.transition-transform` | `transform` |
| `.transition-shadow` | `box-shadow` |
| `.duration-0` … `.duration-1000` | `transition-duration` (0, 75, 100, 150, 200, 300, 500, 700, 1000 ms) |
| `.ease-linear` / `.ease-in` / `.ease-out` / `.ease-in-out` | `transition-timing-function` |
| `.delay-0` … `.delay-500` | `transition-delay` (0, 75, 100, 150, 200, 300, 500 ms) |

---

## `07-animations.css`

### Keyframes (names used by utilities)

| Name | Behavior (summary) |
| --- | --- |
| `spin` | 360° rotation |
| `pulse` | scale + opacity pulse |
| `bounce` | vertical bounce |
| `fade-in` / `fade-out` | opacity 0 ↔ 1 |
| `slide-in-up` / `slide-in-down` | translateY + fade in |
| `slide-out-up` / `slide-out-down` | translateY + fade out |
| `shake` | horizontal jitter |

### Animation classes

| Class | Typical use |
| --- | --- |
| `.animate-none` | `animation: none` |
| `.animate-spin` / `.animate-pulse` / `.animate-bounce` | infinite loops |
| `.animate-fade-in` / `.animate-fade-out` | 0.5s opacity |
| `.animate-slide-in` | `slide-in-up` |
| `.animate-slide-in-down` | `slide-in-down` |
| `.animate-slide-out` | `slide-out-down` |
| `.animate-slide-out-up` | `slide-out-up` |
| `.animate-shake` | one-shot shake |

### Helpers

| Class | CSS property |
| --- | --- |
| `.animate-duration-75` … `.animate-duration-2000` | `animation-duration` |
| `.animate-delay-75` … `.animate-delay-500` | `animation-delay` |
| `.animate-once` / `.animate-infinite` | `animation-iteration-count` |
| `.animate-fill-none` / `forwards` / `backwards` / `both` | `animation-fill-mode` |
| `.animate-normal` / `.animate-reverse` / `.animate-alternate` | `animation-direction` |

`prefers-reduced-motion: reduce` shortens/disables motion for listed `.animate-*` classes.

---

## `08-filters.css`

Applies **`filter`** unless noted.

| Class | CSS property |
| --- | --- |
| `.blur-none` / `.blur-s` / `.blur` / `.blur-l` / `.blur-xl` | `blur(0|4|8|16|32px)` |
| `.brightness-0` … `.brightness-200` | brightness stops |
| `.contrast-0` … `.contrast-150` | contrast stops |
| `.grayscale-0` / `.grayscale` | `grayscale(0|1)` |
| `.saturate-0` … `.saturate-200` | saturate stops |
| `.invert-0` / `.invert` | `invert(0|1)` |
| `.sepia-0` / `.sepia` | `sepia(0|1)` |
| `.hue-rotate-0` … `.hue-rotate-180` | `hue-rotate(deg)` |
| `.backdrop-blur-*` | `backdrop-filter: blur(...)` (same scale as effects) |

Multiple `filter:*` utilities on one element do not combine in CSS—use one class or custom CSS.
