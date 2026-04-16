# Lagunite Organisms

> Navbar, sidebar, footer, and topbar. Use when building app chrome or marketing site shells.

**Source files:** `src/css/08-organisms/` (`01-navbar.css`, `02-sidebar.css`, `03-footer.css`, `04-dashboard-shell.css`, `05-dashboard-alt-shell.css`, `06-topbar.css`, `09-dnd-canvas.css`)

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
