# Lagunite Organisms

> Navbar, sidebar, footer, and topbar. Use when building app chrome or marketing site shells.

**Source files:** `src/css/08-organisms/` (`01-navbar.css`, `02-sidebar.css`, `03-footer.css`, `04-dashboard-shell.css`, `05-dashboard-alt-shell.css`, `06-topbar.css`, `09-dnd-canvas.css`)

**Numbering note (won’t renumber in v2.1):** files jump `06` → `09`. Slots `07`/`08` are unused — keep IDs stable; do not invent `07-*` / `08-*` organism files without a product decision.

**Only the classes below exist.** Do not invent organism class names.

---

## Navbar (`01-navbar.css`)

| Class | Element | Role |
| --- | --- | --- |
| `.navbar` | `<header>` / `<nav>` | Flex bar, bottom border |
| `.navbar-brand` | `<a>` | Logo/title row |
| `.navbar-nav` | `<ul>` | Link list (row desktop, drawer mobile) |
| `.navbar-link` | `<a>` inside items | Pill link |
| `.navbar-link.active` | | Current page |
| `.navbar-burger` | `<button>` | Mobile toggle (hidden desktop) |

### Variants

`.navbar-primary` — primary background, alt text color on brand/links.
`.navbar-transparent` — transparent bg, no border.
`.navbar-sticky` — `position: sticky; top: 0`.

### Scrollspy

`.scrollspy` — `scroll-target-group: auto` on a nav of fragment links. Active link via `:is(:target-current, .scrollspy-current)` (bold + underline + tint). Sync `aria-current` in script; IO fallback toggles `.scrollspy-current`. Recipe: `lab/recipes/scrollspy.html`.

### Mobile drawer

On small screens, `.navbar-nav` is hidden until **`.navbar.open`** (toggle with JS). Burger visible only ≤639px.

### Night mode

`.night .navbar` — dark surface.

> **Important:** Never style all `header` tags for spacing. Scope as `header:not(.navbar):not(.doc-navbar-overlay)` if needed.

## Sidebar (`02-sidebar.css`)

| Class | Role |
| --- | --- |
| `.sidebar` | Fixed width column (16rem), full height, border-right |
| `.sidebar-header` | Top block |
| `.sidebar-nav` | Scrollable middle |
| `.sidebar-section` | Grouping |
| `.sidebar-section-title` | Uppercase section label |
| `.sidebar-link` | Row link (supports `.active`) |
| `.sidebar-footer` | Bottom block |
| `.sidebar-compact` | Narrow (4rem); link text hidden via `span` rule |
| `.sidebar-dark` | Dark theme |

### Mobile drawer

`.sidebar` slides off-screen; add **`.sidebar.open`** to show (JS required).

### Forced overlay drawer (any viewport)

| Class | Role |
| --- | --- |
| `.sidebar.sidebar-drawer` | Always off-canvas; `.open` slides in |
| `.sidebar-backdrop` / `.open` | Dimmed light-dismiss layer |

Recipe: `lab/recipes/navigation-drawer.html`. Prefer `<details>` for searchable section groups (`search-hidden-content`).

### Night mode

`.night .sidebar` — dark surface.

## Footer (`03-footer.css`)

| Class | Role |
| --- | --- |
| `.footer` | Outer padding + light gray background |
| `.footer-grid` | Auto-fit column grid (single column ≤639px) |
| `.footer-title` | Column heading |
| `.footer-links` | Vertical link list |
| `.footer-link` | Muted link |
| `.footer-bottom` | Copyright / meta row |
| `.footer-dark` | Dark background and adjusted text |
| `.footer-minimal` | Compact centered variant |

### Night mode

`.night .footer` — dark surface.

## Layout composition

Organisms do not replace layout utilities:

- Wrap page content with **containers** (`.container`, `.container-fluid`, …).
- Use **flex** / **grid** for main content beside `.sidebar` (e.g. `col-row`, `flex-1` on main).

## Related skills

- **molecules** — dropdowns in navbars
- **compounds** — cards in main areas
