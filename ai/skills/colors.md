# Lagunite Colors

> Text, background, and border color utilities. Use when setting foreground color, backgrounds, gradients, or border-color.

**Source files:**
- `src/css/02-colors/02-text.css` — `color-*` (foreground)
- `src/css/02-colors/01-background.css` — `bg*`, `bgg*`
- `src/css/02-colors/03-border.css` — `border-color-*`

**If a class is not listed here or produced by an allowed pattern below, do not invent it.**

> **Warning:** Many **background** utilities set both `background` and `color` for contrast. Avoid stacking a conflicting `.color-*` on the same element unless intentional.

---

## Semantic text colors

| Class | Purpose |
| --- | --- |
| `.color-text` | `var(--color-text-base)` |
| `.color-text-alt` | `var(--color-text-alt)` |
| `.color-primary` | primary |
| `.color-primary-light` | primary light |
| `.color-primary-dark` | primary dark |
| `.color-secondary` | secondary |
| `.color-secondary-light` | secondary light |
| `.color-secondary-dark` | secondary dark |
| `.color-tertiary` | tertiary |
| `.color-tertiary-light` | tertiary light |
| `.color-tertiary-dark` | tertiary dark |
| `.color-almost-black` | almost black |
| `.color-almost-white` | almost white |
| `.color-success` | success |
| `.color-warning` | warning |
| `.color-error` | error |

## Palette text colors (pattern)

For each family **`gray`**, **`blue`**, **`green`**, **`yellow`**, **`red`**, valid classes are:

`.color-{family}-{step}` where **step** is one of: `50 100 200 300 400 500 600 700 800 900 950`

Example: `.color-gray-500`, `.color-blue-700`

## Semantic backgrounds

| Class | Notes |
| --- | --- |
| `.bg` | page bg + base text color |
| `.bg-alt` | alt bg + alt text color |
| `.bg-1` … `.bg-9` | numbered surfaces (each sets text color) |
| `.bg-black` | #000 + alt text |
| `.bg-ablack` | almost black + alt text |
| `.bg-white` | #fff + base text |
| `.bg-awhite` | almost white + base text |
| `.bg-success` | success light bg + success text |
| `.bg-warning` | warning light bg + warning text |
| `.bg-error` | error light bg + error text |

## Named gradients (`bgg-*`)

| Class | Notes |
| --- | --- |
| `.bgg-success` | horizontal success gradient + alt text |
| `.bgg-1` … `.bgg-8` | theme gradients |

Directional primary blends:
- **Left:** `.bgg-lf-1` `.bgg-lf-2` `.bgg-lf-3` `.bgg-lf-4`
- **Right:** `.bgg-rg-1` `.bgg-rg-2` `.bgg-rg-3` `.bgg-rg-4`
- **Top:** `.bgg-t-1` `.bgg-t-2` `.bgg-t-3` `.bgg-t-4`
- **Bottom:** `.bgg-b-1` `.bgg-b-2` `.bgg-b-3` `.bgg-b-4`
- **Diagonal:** `.bgg-tl-1`…`4`, `.bgg-tr-1`…`4`, `.bgg-bl-1`…`4`, `.bgg-br-1`…`4`

## Palette backgrounds (pattern)

`.bg-{gray|blue|green|yellow|red}-{50|100|…|950}` — sets **background only** (no paired text color).

## Semantic border colors

Brand / neutrals / state:

`.border-color-primary` (+ `-light`, `-dark`)
`.border-color-secondary` (+ `-light`, `-dark`)
`.border-color-tertiary` (+ `-light`, `-dark`)
`.border-color-black` `.border-color-ablack` `.border-color-white` `.border-color-awhite` `.border-color-transparent`
`.border-color-success` `.border-color-success-light`
`.border-color-warning` `.border-color-warning-light`
`.border-color-error` `.border-color-error-light`

## Palette border colors (pattern)

`.border-color-{gray|blue|green|yellow|red}-{50|100|…|950}`

## Related skills

- **tokens** — `--color-*`, palette variables
- **decorators** — `.border`, `.border-w-*`, `.border-r-*`, styles
- **typography** — text styling after color is set
