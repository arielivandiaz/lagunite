# Lagunite Misc Utilities

> Display, visibility, cursor, pointer-events, user-select, and pseudo-element helpers.
> Use when controlling element display, interaction behavior, or pseudo-element content.

**Source files:** `src/css/10-misc/` (`01-display.css`, `02-cursor.css`, `03-pseudo.css`)

---

## Responsive pattern

- **No prefix** — applies at all viewport widths.
- **`x` prefix** — mobile only: `max-width: 639px` (e.g. `.xd-none`, `.xcursor-pointer`)
- **`d` prefix** — desktop only: `min-width: 640px` (e.g. `.dd-flex`, `.dselect-none`)

Stack base + responsive classes for breakpoint-specific behavior (e.g. hide on mobile, show on desktop).

## Display (`01-display.css`)

### Display utilities

`.d-block` `.d-inline` `.d-inline-block` `.d-flex` `.d-inline-flex` `.d-grid` `.d-none` `.d-contents`

Prefer flex/grid layout modules for structure; use these when toggling via `display: none` or needing raw display value.

### Visibility utilities

`.visible` `.invisible` `.collapse`

- `.invisible` keeps layout (unlike `.d-none` which removes element from flow). Use for accessible off-screen patterns.

### Responsive display

All base utilities mirror under `xd-*` (mobile) and `dd-*` (desktop). Same for visibility: `xvisible`/`xhidden`, `dvisible`/`dhidden`.

## Cursor, pointer events, selection (`02-cursor.css`)

### Cursor

`.cursor-pointer` `.cursor-not-allowed` `.cursor-grab` `.cursor-grabbing` `.cursor-text` `.cursor-none`

### Pointer events

`.pointer-events-none` — lets clicks pass through (overlays, decorative layers).
`.pointer-events-auto` — restores interaction.

### User select

`.select-none` `.select-all` `.select-text` `.select-auto`

### Responsive interaction

Mobile and desktop variants exist for a subset of cursor, pointer-events, and select utilities.

## Pseudo-elements (`03-pseudo.css`)

### Content utilities

`.content-none` `.content-empty` — set `content` on the element itself.

### Building `::before` / `::after`

1. **Display** — `.before-block`, `.before-inline`, `.before-inline-block`, `.before-table` (and `.after-*`) — adds empty content and correct `display`.
2. **Fill or center** — `.before-absolute` / `.after-absolute` — stretch pseudo to containing block (parent needs `position: relative`). `.before-overlay` / `.after-overlay` — center content.
3. **Attribute text** — `.before-content` / `.after-content` — reads `data-before` / `data-after` for `content`.

### Clearfix

`.clearfix` on a float parent uses a `::after` table + `clear: both`. Prefer flex/grid for new layouts.

### Responsive pseudo

All major pseudo utilities have `x*` (mobile) and `d*` (desktop) variants.

## Usage notes

- **Positioning** — absolute/overlay pseudos need a positioned ancestor.
- **Accessibility** — `.d-none` removes from layout and typically screen-reader flow. `.invisible` keeps layout but hides visually — choose based on whether space must be reserved.
- **Dragging** — use `cursor-grab` / `cursor-grabbing` with appropriate JS and ARIA.
