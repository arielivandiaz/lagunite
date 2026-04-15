# CHEATSHEET · Lagunite v2

Canonical quick references live next to each framework layer.

## Core rules

- Base classes first, then `x*`, then `d*`.
- `x` means mobile only (`max-width: 639px`). `d` means desktop and up (`min-width: 640px`).
- Prefer the layer-specific cheatsheet below over older examples in random demos.

## Layer index

- Layout: `src/css/03-layout/FLEX-CHEATSHEET.md`
- Layout: `src/css/03-layout/GRID-CHEATSHEET.md`
- Layout: `src/css/03-layout/CONTAINERS-CHEATSHEET.md`
- Layout + spacing + position + size: `src/css/03-layout/LAYOUT-SPACING-CHEATSHEET.md`
- Decorators: `src/css/04-decorators/DECORATORS-CHEATSHEET.md`
- Atoms: `src/css/05-atoms/ATOMS-CHEATSHEET.md`
- Molecules: `src/css/06-molecules/MOLECULES-CHEATSHEET.md`
- Organisms: `src/css/08-organisms/ORGANISMS-CHEATSHEET.md`
- Misc: `src/css/10-misc/MISC-CHEATSHEET.md`

## Recent coverage added

- `chips` atom variants and premium modifiers
- classic and alt `dashboard` molecule patterns
- `stat-*` KPI cards
- `dnd-node` molecule + `dnd-canvas` organism
- standard `sidebar` plus dashboard shell variants

## Important note

If you see examples using old names like `.f-gap`, `.g-gap`, or `.flex1`, treat them as stale docs. Current framework references use `.gap-*`, `.flex-1`, and the active classes documented in the files above.
