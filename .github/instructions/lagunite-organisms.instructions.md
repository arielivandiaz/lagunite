---
applyTo: "**/*.html,src/css/**/*.css,lagunite-web/src/**/*.astro"
---

# Lagunite organisms

Large, landmark regions of a page. **Only the classes below** exist in `src/css/08-organisms/`. Do not invent organism class names.

## Navbar — `01-navbar.css`

| Class | Element | Role |
| --- | --- | --- |
| `.navbar` | `<header>` / `<nav>` | Flex bar, bottom border |
| `.navbar-brand` | `<a>` | Logo/title row |
| `.navbar-nav` | `<ul>` | Link list (row desktop, drawer mobile) |
| `.navbar-link` | `<a>` inside items | Pill link |
| `.navbar-link.active` | | Current page |
| `.navbar-burger` | `<button>` | Mobile toggle (hidden desktop) |

### Variants
`.navbar-primary` — primary background; brand/links switch to alt text color.  
`.navbar-transparent` — transparent bg, no border.  
`.navbar-sticky` — `position: sticky; top: 0`.

### Mobile drawer
On small screens, `.navbar-nav` is hidden until **`.navbar.open`** (toggle with JS on the `.navbar` element). Burger is visible only <=639px.

### Night
`.night .navbar` — dark surface.

## Sidebar — `02-sidebar.css`

| Class | Role |
| --- | --- |
| `.sidebar` | Fixed width column (16rem), full height, border-right |
| `.sidebar-header` | Top block |
| `.sidebar-nav` | Scrollable middle |
| `.sidebar-section` | Grouping |
| `.sidebar-section-title` | Uppercase section label |
| `.sidebar-link` | Row link (supports `.active`) |
| `.sidebar-footer` | Bottom block |
| `.sidebar-compact` | Narrow (4rem); link text hidden via `span` rule in source |
| `.sidebar-dark` | Dark theme |

### Mobile drawer
`.sidebar` slides off-screen; add **`.sidebar.open`** to show (transform). JS required.

### Night
`.night .sidebar` — dark surface.

## Footer — `03-footer.css`

| Class | Role |
| --- | --- |
| `.footer` | Outer padding + light gray background |
| `.footer-grid` | Auto-fit column grid (single column <=639px) |
| `.footer-title` | Column heading |
| `.footer-links` | Vertical link list |
| `.footer-link` | Muted link |
| `.footer-bottom` | Copyright / meta row |
| `.footer-dark` | Dark background and adjusted text |
| `.footer-minimal` | Compact centered variant |

### Night
`.night .footer` — dark surface.

## Topbar — `06-topbar.css`

| Class | Role |
| --- | --- |
| `.topbar` | Generic top horizontal bar with left/center/right regions |
| `.topbar-left` / `.topbar-center` / `.topbar-right` | Internal regions with flexible alignment |
| `.topbar-brand` | Brand or product link |
| `.topbar-title` / `.topbar-subtitle` | Main and secondary text |
| `.topbar-divider` | Vertical separator between groups |
| `.topbar-search` | Search input wrapper (full-width up to max width) |
| `.topbar-action` | Action button/link surface |
| `.topbar-badge` | Small notification counter badge |
| `.topbar-avatar` | Avatar slot (image/initials) |
| `.topbar-sticky` | Sticky behavior (`top: 0`) |
| `.topbar-elevated` | Adds subtle shadow |
| `.topbar-primary` | Primary background style variant |
| `.topbar-compact` | Reduced-height compact toolbar |
| `.topbar-hide-mobile` | Hide selected elements at <=639px |

### Mobile behavior
- `.topbar-hide-mobile` allows selective collapse at <=639px.
- `.topbar-center` aligns left on small screens for denser layouts.

### Night
`.night .topbar` — dark surface and adjusted action/label contrast.

## Layout composition

Organisms do not replace layout utilities:

- Wrap page content with **lagunite-containers** (`.container`, `.container-fluid`, …).
- Use **lagunite-flex** / **lagunite-grid** for main content beside `.sidebar` (e.g. `row col-row`, `flex-1` on main).

## Related skills

- **lagunite-molecules** — dropdowns in navbars.
- **lagunite-compounds** — cards in main areas.
