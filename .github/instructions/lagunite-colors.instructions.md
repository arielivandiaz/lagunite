---
applyTo: "**/*.html,src/css/**/*.css,lagunite-web/src/**/*.astro"
---

# Lagunite colors

## Source of truth

Only use classes from:

- `src/css/02-colors/02-text.css` — `color-*` (foreground)
- `src/css/02-colors/01-background.css` — `bg*`, `bgg*`
- `src/css/02-colors/03-border.css` — `border-color-*`

**If a class is not listed here or produced by an allowed pattern below, do not invent it.**

Many **background** utilities set both `background` and `color` for contrast. Avoid stacking a conflicting `.color-*` on the same element unless intentional.

## Semantic text colors (`01-text.css`)

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

`.color-{family}-{step}` where **step** is one of:  
`50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950`.

Example: `.color-gray-500`, `.color-blue-700`.

## Semantic backgrounds (`02-background.css`)

| Class | Notes |
| --- | --- |
| `.bg` | page bg + base text color |
| `.bg-alt` | alt bg + alt text color |
| `.bg-1` … `.bg-9` | numbered brand / secondary / tertiary surfaces (each sets text color) |
| `.bg-black` | #000 + alt text |
| `.bg-ablack` | almost black + alt text |
| `.bg-white` | #fff + base text |
| `.bg-awhite` | almost white + base text |
| `.bg-success` | success light bg + success text color |
| `.bg-warning` | warning light bg + warning text color |
| `.bg-error` | error light bg + error text color |

## Named gradients (`bgg-*`)

| Class | Notes |
| --- | --- |
| `.bgg-success` | horizontal success gradient + alt text |
| `.bgg-1` … `.bgg-8` | theme gradients (`var(--bg-gradient-1)` … `8`) |

Directional primary blends (each sets `color: var(--color-text-alt)` except where noted in source):

- **Left:** `.bgg-lf-1` `.bgg-lf-2` `.bgg-lf-3` `.bgg-lf-4`
- **Right:** `.bgg-rg-1` `.bgg-rg-2` `.bgg-rg-3` `.bgg-rg-4`
- **Top:** `.bgg-t-1` `.bgg-t-2` `.bgg-t-3` `.bgg-t-4`
- **Bottom:** `.bgg-b-1` `.bgg-b-2` `.bgg-b-3` `.bgg-b-4`
- **Diagonal:** `.bgg-tl-1`…`4`, `.bgg-tr-1`…`4`, `.bgg-bl-1`…`4`, `.bgg-br-1`…`4`

## Palette backgrounds (pattern)

Same families and steps as text:

`.bg-{gray|blue|green|yellow|red}-{50|100|…|950}`

These set **background only** (no paired text color in the scale rules).

## Semantic border colors (`03-border.css`)

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

## Combinators in source

`.bg-success.border`, `.bg-warning.border`, `.bg-error.border` align border-color with the state (used with border width/style utilities from decorators).

## Related skills

- **lagunite-tokens** — `--color-*`, palette variables.
- **lagunite-decorators** — `.border`, `.border-w-*`, `.border-r-*`, styles.
- **lagunite-typography** — text styling after color is set.
