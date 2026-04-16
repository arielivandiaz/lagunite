# Lagunite organisms cheatsheet

Concise reference for large page-level structures in `08-organisms`.

Organisms usually define shell structure, while spacing, grid, and flex alignment still come from `03-layout` utilities.

---

## `01-navbar.css`

| Classes | What it does |
|---------|--------------|
| `.navbar` | Base navbar shell. |
| `.navbar-brand` | Brand/logo row. |
| `.navbar-nav` | Link list. On mobile, becomes a drawer controlled by `.navbar.open`. |
| `.navbar-link` / `.navbar-link.active` | Nav link and current-page state. |
| `.navbar-burger` | Mobile toggle button. |
| `.navbar-primary` / `.navbar-transparent` / `.navbar-sticky` | Common navbar variants. |

## `02-sidebar.css`

| Classes | What it does |
|---------|--------------|
| `.sidebar` | Standard 16rem vertical app sidebar. On mobile it becomes an off-canvas drawer. |
| `.sidebar.open` | Reveals the mobile drawer. |
| `.sidebar-header` / `.sidebar-nav` / `.sidebar-footer` | Main regions. |
| `.sidebar-section` / `.sidebar-section-title` | Grouping blocks. Titles also support native `details` disclosure. |
| `.sidebar-list` / `.sidebar-sublist` | Nested nav list resets. |
| `.sidebar-link` / `.sidebar-link.active` | Sidebar nav links and current-page state. |
| `.sidebar-compact` | Icon-only narrow version. Child `span` labels are hidden. |
| `.sidebar-dark` | Explicit dark theme variant. |

**Usage note**

- For collapsible groups, use `.sidebar-section > details > .sidebar-section-title` and let the built-in arrow rotate via `[open]`.

## `03-footer.css`

| Classes | What it does |
|---------|--------------|
| `.footer` | Standard footer wrapper. |
| `.footer-grid` | Auto-fit footer columns. |
| `.footer-title` / `.footer-links` / `.footer-link` | Footer content primitives. |
| `.footer-bottom` | Bottom meta row. |
| `.footer-dark` / `.footer-minimal` | Footer variants. |

## `06-topbar.css`

| Classes | What it does |
|---------|--------------|
| `.topbar` | Generic top horizontal bar for app headers. |
| `.topbar-left` / `.topbar-center` / `.topbar-right` | Three-slot layout regions with flexible spacing. |
| `.topbar-brand` | Brand/product link style. |
| `.topbar-title` / `.topbar-subtitle` | Heading and contextual subtitle text. |
| `.topbar-divider` | Vertical separator between grouped elements. |
| `.topbar-search` | Search field container (full width with max limit). |
| `.topbar-action` | Action button/link surface with hover/focus states. |
| `.topbar-badge` | Notification counter badge. |
| `.topbar-avatar` | Avatar slot (image or initials). |
| `.topbar-sticky` / `.topbar-elevated` | Sticky and elevated variants. |
| `.topbar-primary` / `.topbar-compact` | Color variant and compact density variant. |
| `.topbar-hide-mobile` | Utility class to hide selected nodes on mobile. |

---

## `04-dashboard-shell.css`

Classic dashboard app shell with sticky top bar and slide-in sidebar.

| Classes | What it does |
|---------|--------------|
| `.dashboard-shell` | Main app shell below the navbar. |
| `.dashboard-navbar` / `.dashboard-navbar-inner` | Sticky top navigation wrapper and inner row. |
| `.dashboard-navbar-left` | Left cluster for toggle, brand, and title. |
| `.dashboard-brand` / `.dashboard-title` | Brand and current-page title. |
| `.dashboard-top-nav` | Desktop-only top link group. |
| `.dashboard-menu-toggle` | Mobile hamburger. Hidden from `900px` up. |
| `.dashboard-sidebar` / `.dashboard-sidebar.is-open` | Fixed-width sidebar; becomes off-canvas below `900px`. |
| `.dashboard-sidebar-header`, `.dashboard-sidebar-kicker`, `.dashboard-sidebar-list`, `.dashboard-sidebar-link`, `.dashboard-sidebar-footer` | Sidebar internals. |
| `.dashboard-main` | Main content area. |
| `.dashboard-overlay.is-visible` | Mobile backdrop behind the open sidebar. |

**Responsive rule**

- Breakpoint is `900px`, separate from Lagunite `x`/`d` utility breakpoints.

---

## `05-dashboard-alt-shell.css`

Glass dashboard shell with vertical rail, floating nav, and mobile dock.

| Classes | What it does |
|---------|--------------|
| `.page-dashboard-alt` | Theme root with dashboard safe-area custom properties. |
| `.dashboard-alt-shell` | Full-page shell wrapper. |
| `.dashboard-content` | Main content padding that accounts for rail and floating controls. |
| `.sidebar-rail` | Fixed left floating rail for desktop. |
| `.sidebar-brand-top` / `.sidebar-avatar-bottom` | Top brand button and bottom user avatar entry. |
| `.dashboard-sidebar__nav` | Vertical list region inside the rail. |
| `.dashboard-sidebar__link` / `.dashboard-sidebar__link-surface` | Rotating pill link interaction. |
| `.dashboard-sidebar__label` | Hidden label that expands on hover/focus. |
| `.sidebar-nav-icon--rail` / `.sidebar-nav-icon__inner` | Icon wrapper and counter-rotation helper. |
| `.sidebar-mobile` / `.sidebar-mobile__nav` / `.sidebar-mobile__link` | Bottom mobile dock version shown below `960px`. |
| `.dashboard-floating-nav` and `__*` classes | Top-right floating toolbar, avatar, burger, and mobile panel pieces. |
| `.dashboard-header-bar` and `__*` classes | Floating header chip with title/subtitle. |

**Usage note**

- This organism assumes dark glass visuals and works especially well with `.dashboard-main-alt` and `.dashboard-panel-alt` from molecules.

---

## `09-dnd-canvas.css`

Spatial canvas organism for drag-and-drop flows.

| Classes | What it does |
|---------|--------------|
| `.dnd-canvas` | Relative positioning context with dot-grid background and focus ring. |
| `.dnd-canvas-stage` | Absolute transform target for nodes and wires. |
| `.dnd-wire-layer` | SVG layer for connections. |
| `.wire` / `.wire:hover` | Committed connection stroke. |
| `.wire-ghost` | Dashed preview wire while connecting. |
| `.dnd-canvas.fullscreen` | Fixed full-viewport canvas mode. |
| `.dnd-canvas.height-xs` ... `.height-xl` | Height presets for embedded canvases. |

**Pair with**

- `.dnd-node`, `.dnd-node-header`, `.node-handle` from `06-molecules/08-draggable-node.css`.

**Example**

```html
<section class="dnd-canvas height-m">
  <div class="dnd-canvas-stage">
    <article class="dnd-node" style="left: 120px; top: 80px;">
      <header class="dnd-node-header">Source</header>
      <div class="dnd-node-body">Drag me</div>
      <button class="node-handle" data-port="right" aria-label="Connect"></button>
    </article>
  </div>
</section>
```