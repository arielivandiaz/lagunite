---
applyTo: "**/*.html,src/css/**/*.css,lagunite-web/src/**/*.astro"
---

# Lagunite Misc Utilities

Misc utilities live in `src/css/10-misc/`: display and visibility, cursor and interaction, and `::before` / `::after` helpers.

## Responsive pattern

- **No prefix** — applies at all viewport widths.
- **`x` prefix** — mobile only: `max-width: 639px` (e.g. `.xd-none`, `.xcursor-pointer`)
- **`d` prefix** — desktop only: `min-width: 640px` (e.g. `.dd-flex`, `.dselect-none`)

## Display and visibility (`01-display.css`)

### Display
`.d-block`, `.d-inline`, `.d-inline-block`, `.d-flex`, `.d-inline-flex`, `.d-grid`, `.d-none`, `.d-contents`

### Visibility
`.visible`, `.invisible`, `.collapse` — set `visibility` without removing layout (unlike `.d-none`).

### Responsive
Mirror every base utility under `x*` (mobile) and `d*` (desktop).

## Cursor, pointer events, and selection (`02-cursor.css`)

### Cursor
`.cursor-pointer`, `.cursor-not-allowed`, `.cursor-grab`, `.cursor-grabbing`, `.cursor-text`, `.cursor-none`

### Pointer events
- `.pointer-events-none` — clicks pass through
- `.pointer-events-auto` — restores interaction

### User select
`.select-none`, `.select-all`, `.select-text`, `.select-auto`

## Pseudo-elements (`03-pseudo.css`)

### Content utilities
`.content-none`, `.content-empty` — set `content` on the element itself.

### Building `::before` / `::after`
1. **Display** — `.before-block`, `.before-inline`, `.before-inline-block`, `.before-table` (and `.after-*`)
2. **Fill or center** — `.before-absolute` / `.after-absolute` stretch to containing block. `.before-overlay` / `.after-overlay` center content.
3. **Attribute text** — `.before-content` / `.after-content` read `data-before` / `data-after` for `content`.

### Clearfix
`.clearfix` on a float parent — prefer flex/grid for new layouts.

### Responsive pseudo
All major pseudo utilities have `x*` (mobile) and `d*` (desktop) variants.

## Usage notes

- **`.d-none`** removes content from layout and typically from screen-reader flow.
- **`.invisible`** keeps layout but hides visually — use when space must be reserved.
- **Dragging** — use `.cursor-grab` / `.cursor-grabbing` with `pointer-events` and ARIA for draggable regions.
