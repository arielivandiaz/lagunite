---
description: Lagunite CSS misc utilities — display, visibility, cursor, pointer-events, user-select, and pseudo-element helpers. Use when controlling element display, interaction behavior, or pseudo-element content.
globs: ["src/css/10-misc/**/*.css", "**/*.html"]
---

# Lagunite Misc Utilities

Misc utilities live in `src/css/10-misc/`: display and visibility, cursor and interaction, and `::before` / `::after` helpers. See `MISC-CHEATSHEET.md` in the same folder for tables and IDs.

## Responsive pattern

- **No prefix** — applies at all viewport widths.
- **`x` prefix** — mobile only: `max-width: 639px` (e.g. `.xd-none`, `.xcursor-pointer`, `.xbefore-block`).
- **`d` prefix** — desktop only: `min-width: 640px` (e.g. `.dd-flex`, `.dselect-none`, `.dbefore-overlay`).

Stack base + responsive classes when behavior should differ by breakpoint (e.g. hide on mobile, show on desktop).

## Display and visibility (`01-display.css`)

### Display

Use `.d-block`, `.d-inline`, `.d-inline-block`, `.d-flex`, `.d-inline-flex`, `.d-grid`, `.d-none`, `.d-contents` for `display`. Prefer layout modules (flex/grid utilities) for structure; use these when you only need the raw display value or to toggle visibility via `display: none`.

### Visibility

`.visible`, `.invisible`, and `.collapse` set `visibility` without removing layout (unlike `.d-none`). Use for accessible off-screen patterns or table row/column collapse semantics.

### Responsive display and visibility

Mirror every base utility under `@media (max-width: 639px)` with `xd-*` / `xvisible` / `xinvisible` / `xcollapse`, and under `@media (min-width: 640px)` with `dd-*` / `dvisible` / `dinvisible` / `dcollapse`.

## Cursor, pointer events, and selection (`02-cursor.css`)

### Cursor

`.cursor-pointer` and `.cursor-not-allowed` are the most common for interactive UI. Use `.cursor-grab` / `.cursor-grabbing` for draggable surfaces, `.cursor-text` for explicit text fields, `.cursor-none` when the cursor should disappear over a custom-drawn control.

### Pointer events

`.pointer-events-none` lets clicks pass through an element (overlays, decorative layers). `.pointer-events-auto` restores interaction. Pair with positioning/z-index when layering.

### User select

`.select-none` avoids accidental selection on controls and labels; `.select-all` helps copy-friendly blocks. `.select-text` and `.select-auto` reset or defer to the browser.

### Responsive interaction

Mobile and desktop variants exist for a **subset** of cursor, pointer-events, and user-select utilities (see cheatsheet). There is no responsive mirror for every global cursor keyword (e.g. `cursor-help` / `cursor-crosshair` are global only).

## Pseudo-elements (`03-pseudo.css`)

### Content utilities

`.content-none` and `.content-empty` set `content` on the element itself; useful with other rules or overrides.

### Building `::before` / `::after`

1. **Display** — `.before-block`, `.before-inline`, `.before-inline-block`, `.before-table` (and `.after-*`) add empty content and the right `display`. Use when the pseudo is a layout participant.
2. **Fill or center** — `.before-absolute` / `.after-absolute` stretch the pseudo to the **containing block** (parent needs `position: relative` or similar). `.before-overlay` / `.after-overlay` center content; add size/background on the pseudo or children as needed.
3. **Attribute text** — `.before-content` / `.after-content` read `data-before` / `data-after` for `content`.

### Clearfix

`.clearfix` on a float parent uses a `::after` table + `clear: both`. Prefer flex/grid for new layouts; keep clearfix for legacy float columns.

### Empty-state hooks

`.empty-block` and `.empty-inline` shape an empty `::before` for placeholders or sizing; combine with your own backgrounds or text in layered markup.

### Responsive pseudo

All major pseudo utilities have `x*` (mobile) and `d*` (desktop) variants so overlays, clearfix, and content helpers can apply only on certain breakpoints.

## Usage notes

- **Positioning** — absolute/overlay pseudos need a positioned ancestor; otherwise they position against the viewport or a distant ancestor.
- **Accessibility** — hiding with `.d-none` removes content from layout and typically from screen-reader flow in many patterns; `.invisible` keeps layout but hides visually—choose based on whether space must be reserved.
- **Dragging** — use `cursor-grab` / `grabbing` with appropriate JS `pointer-events` and ARIA for draggable regions.
