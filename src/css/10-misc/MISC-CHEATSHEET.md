# Lagunite misc utilities — cheatsheet

**Responsive prefix:** `x` = mobile (`max-width: 639px`), `d` = desktop (`min-width: 640px`). Prefix the base class name (e.g. `.xd-none`, `.xcursor-pointer`, `.xbefore-block`).

---

## `01-display.css` — IDs `#10-01-01` … `#10-01-04`

### Display (`#10-01-01`)

| Class | Effect |
|-------|--------|
| `.d-block` | `display: block` |
| `.d-inline` | `display: inline` |
| `.d-inline-block` | `display: inline-block` |
| `.d-flex` | `display: flex` |
| `.d-inline-flex` | `display: inline-flex` |
| `.d-grid` | `display: grid` |
| `.d-none` | `display: none` |
| `.d-contents` | `display: contents` |

### Visibility (`#10-01-02`)

| Class | Effect |
|-------|--------|
| `.visible` | `visibility: visible` |
| `.invisible` | `visibility: hidden` |
| `.collapse` | `visibility: collapse` |

### Responsive display — mobile `x` (`#10-01-03`)

| Class | Matches |
|-------|---------|
| `.xd-block` | `.d-block` (≤639px) |
| `.xd-inline` | `.d-inline` |
| `.xd-inline-block` | `.d-inline-block` |
| `.xd-flex` | `.d-flex` |
| `.xd-inline-flex` | `.d-inline-flex` |
| `.xd-grid` | `.d-grid` |
| `.xd-none` | `.d-none` |
| `.xd-contents` | `.d-contents` |

### Responsive visibility — mobile `x` (`#10-01-03`)

| Class | Matches |
|-------|---------|
| `.xvisible` | `.visible` (≤639px) |
| `.xinvisible` | `.invisible` |
| `.xcollapse` | `.collapse` |

### Responsive display — desktop `d` (`#10-01-04`)

| Class | Matches |
|-------|---------|
| `.dd-block` | `.d-block` (≥640px) |
| `.dd-inline` | `.d-inline` |
| `.dd-inline-block` | `.d-inline-block` |
| `.dd-flex` | `.d-flex` |
| `.dd-inline-flex` | `.d-inline-flex` |
| `.dd-grid` | `.d-grid` |
| `.dd-none` | `.d-none` |
| `.dd-contents` | `.d-contents` |

### Responsive visibility — desktop `d` (`#10-01-04`)

| Class | Matches |
|-------|---------|
| `.dvisible` | `.visible` (≥640px) |
| `.dinvisible` | `.invisible` |
| `.dcollapse` | `.collapse` |

---

## `02-cursor.css` — IDs `#10-02-01` … `#10-02-05`

### Cursor (`#10-02-01`)

| Class | Effect |
|-------|--------|
| `.cursor-auto` | `cursor: auto` |
| `.cursor-default` | `cursor: default` |
| `.cursor-pointer` | `cursor: pointer` |
| `.cursor-not-allowed` | `cursor: not-allowed` |
| `.cursor-text` | `cursor: text` |
| `.cursor-move` | `cursor: move` |
| `.cursor-grab` | `cursor: grab` |
| `.cursor-grabbing` | `cursor: grabbing` |
| `.cursor-wait` | `cursor: wait` |
| `.cursor-help` | `cursor: help` |
| `.cursor-crosshair` | `cursor: crosshair` |
| `.cursor-none` | `cursor: none` |

### Pointer events (`#10-02-02`)

| Class | Effect |
|-------|--------|
| `.pointer-events-none` | `pointer-events: none` |
| `.pointer-events-auto` | `pointer-events: auto` |

### User select (`#10-02-03`)

| Class | Effect |
|-------|--------|
| `.select-none` | `user-select: none` |
| `.select-text` | `user-select: text` |
| `.select-all` | `user-select: all` |
| `.select-auto` | `user-select: auto` |

### Responsive — mobile `x` (`#10-02-04`)

| Group | Classes |
|-------|---------|
| Cursor | `.xcursor-auto`, `.xcursor-pointer`, `.xcursor-not-allowed`, `.xcursor-text`, `.xcursor-move`, `.xcursor-grab`, `.xcursor-grabbing` |
| Pointer events | `.xpointer-events-none`, `.xpointer-events-auto` |
| User select | `.xselect-none`, `.xselect-text`, `.xselect-all` |

### Responsive — desktop `d` (`#10-02-05`)

| Group | Classes |
|-------|---------|
| Cursor | `.dcursor-auto`, `.dcursor-pointer`, `.dcursor-not-allowed`, `.dcursor-text`, `.dcursor-move`, `.dcursor-grab`, `.dcursor-grabbing` |
| Pointer events | `.dpointer-events-none`, `.dpointer-events-auto` |
| User select | `.dselect-none`, `.dselect-text`, `.dselect-all` |

---

## `03-pseudo.css` — IDs `#10-03-01` … `#10-03-09`

### Content (`#10-03-01`)

| Class | Effect |
|-------|--------|
| `.content-none` | `content: none` |
| `.content-empty` | `content: ''` |

### Before / after display (`#10-03-02`)

| Class | Target | Notes |
|-------|--------|--------|
| `.before-block` | `::before` | `content: ''`, `display: block` |
| `.before-inline` | `::before` | `display: inline` |
| `.before-inline-block` | `::before` | `display: inline-block` |
| `.before-table` | `::before` | `display: table` |
| `.after-block` | `::after` | same pattern as `before-*` |
| `.after-inline` | `::after` | |
| `.after-inline-block` | `::after` | |
| `.after-table` | `::after` | |

### Before / after positioning (`#10-03-03`, `#10-03-04`)

| Class | Effect |
|-------|--------|
| `.before-absolute` | `::before` fills parent (`position: absolute`, inset 0, 100% × 100%) — parent should be positioned |
| `.after-absolute` | same for `::after` |
| `.before-overlay` | `::before` centered (`top/left 50%`, `translate(-50%, -50%)`) |
| `.after-overlay` | same for `::after` |

### Clearfix (`#10-03-05`)

| Class | Effect |
|-------|--------|
| `.clearfix` | `::after` with `display: table`, `clear: both` |

### Content from attribute (`#10-03-06`)

| Class | Effect |
|-------|--------|
| `.before-content` | `::before { content: attr(data-before); }` |
| `.after-content` | `::after { content: attr(data-after); }` |

### Empty state (`#10-03-07`)

| Class | Effect |
|-------|--------|
| `.empty-block` | `::before` block, `width/height: 100%` |
| `.empty-inline` | `::before` `inline-block` |

### Responsive pseudo — mobile `x` (`#10-03-08`)

Prefix each base utility with `x` (e.g. `.xcontent-empty`, `.xbefore-block`, `.xafter-overlay`, `.xclearfix`, `.xbefore-content`).

### Responsive pseudo — desktop `d` (`#10-03-09`)

Prefix each base utility with `d` (e.g. `.dcontent-none`, `.dbefore-absolute`, `.dafter-content`, `.dclearfix`).
