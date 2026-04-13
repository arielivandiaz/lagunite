# CHEATSHEET · Lagunite v2

## Breakpoints
- Base: no prefix. Mobile: `x` (max-width 639px). Desktop: `d` (min-width 640px).
- Order classes base → `x*` → `d*` when stacking them.

## Layout · Flex
- Direction presets: `.row`, `.rowr`, `.col`, `.colr`, hybrids `.row-col`, `.col-row` (and reverse variants). Responsive `xrow`, `drow`, etc.
- Wrapping + growth: `.f-nowrap`, `.flex1`.
- Gaps (children margin): `.f-gap-xs`, `.f-gap-s`, `.f-gap`, `.f-gap-l`, `.f-gap-xl`; responsive `xf-gap*`, `df-gap*`.

## Layout · Grid
- Containers: `.grid`, `.grid-auto`, `.grid-auto-fill`; responsive `.xgrid`, `.dgrid` variants.
- Columns: `.grid-cols-1..12`; Rows: `.grid-rows-1..6`; responsive `.xgrid-cols-*`, `.dgrid-cols-*` and rows.
- Gaps: `.g-gap-0`, `.g-gap-xs`, `.g-gap-s`, `.g-gap`, `.g-gap-l`, `.g-gap-xl`, `.g-gap-xxl`; column/row gaps `.g-col-gap-*`, `.g-row-gap-*` with `xg-*`/`dg-*` responsive sets.
- Placement: `.col-span-*`, `.row-span-*` for item spanning.

## Spacing
- Margins: `.marg-0`, `.marg-xs`, `.marg-s`, `.marg`, `.marg-l`, `.marg-xl` plus `x`/`d` versions.
- Margin axes: `.marg-h-*` (horizontal), `.marg-v-*` (vertical) with `x`/`d` variants.
- Padding: `.padd-0`, `.padd-xs`, `.padd-s`, `.padd`, `.padd-l`, `.padd-xl` plus `x`/`d` versions.
- Padding axes: `.padd-h-*`, `.padd-v-*` with responsive counterparts.

## Sizing
- Intrinsic: `.w-auto/.h-auto`, `.w-min/.h-min` (min-content), `.w-max/.h-max` (max-content), `.w-fit/.h-fit` (fit-content).
- Full containers: `.w-full`, `.h-full`.
- Viewport: `.w-screen` (vw + dvw), `.h-screen` (vh + dvh); half/quarter screen `.w-half-screen`, `.h-half-screen`, `.w-quarter-screen`, `.h-quarter-screen`.
- Semantic steps: widths `.w1..w14`, heights `.h1..h14` (growing sizes tied to `--space-*`).
- Minimums: `.min-w1..min-w14`, `.min-h1..min-h14`.
- Percent-based min-widths: `.minwp10..minwp100` in 5% steps, with `x`/`d` variants.

## Typography
- Transform: `.uppercase`, `.lowercase`, `.capitalize`.
- Letter spacing: `.letter-spacing-xs`, `.letter-spacing-s`, `.letter-spacing`, `.letter-spacing-l`, `.letter-spacing-xl`, `.letter-spacing-xxl`.
- Line height: `.lh-xs`, `.lh-s`, `.lh`, `.lh-l`, `.lh-xl`, `.lh-xxl`.
- Text align: `.ta-c`, `.ta-lf`, `.ta-rg`, `.ta-j`, `.ta-ja` with responsive `xta-*` and `dta-*`.

## Organisms · Navbar (Important)
- Base shell: `.navbar`.
- Position helpers: `.navbar-sticky`, `.navbar-primary`, `.navbar-transparent`.
- Structure: `.navbar-brand`, `.navbar-nav`, `.navbar-item`, `.navbar-link`, optional `.navbar-burger`.
- Keep navbar spacing scoped to navbar classes. Avoid global `header { ... }` rules.
- If global header spacing is needed, use a safe selector:
	`header:not(.navbar):not(.doc-navbar-overlay)`
- For overlay navbars (icon-only bars), prefer a dedicated class like `.doc-navbar-overlay` and set explicit `position/top/z-index`.

## Quick Usage Patterns
- Centered column: `class="col f-gap padd"` (stacks children, centers, adds gap and padding).
- Responsive grid list: `class="grid xgrid-cols-1 dgrid-cols-3 g-gap"`.
- Hero split layout: `class="grid xgrid-cols-1 dgrid-cols-2 g-gap padd-v-l padd"`.
- Full-bleed banner: `class="w-screen h-quarter-screen row f-gap padd-h"`.

Keep to existing utilities; when in doubt, use the closest matching size or spacing class instead of inventing a new one.
