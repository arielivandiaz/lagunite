# Lagunite molecules cheatsheet

Concise reference for reusable mid-level UI clusters in `06-molecules`.

Responsive note: unless a class says otherwise, molecule classes are breakpoint-agnostic and are usually composed with layout utilities from `03-layout`.

---

## `01-form-groups.css`

| Classes | What it does |
|---------|--------------|
| `.form-group` | Vertical stack for label, control, help, and validation text. |
| `.form-label` / `.form-help` / `.form-error-msg` | Label and helper/error text styling. |
| `.form-group.has-error` / `.has-success` | Validation state styling on the group root. |
| `.input-group`, `.input-group-prepend`, `.input-group-append` | Inline control with leading/trailing addons. |
| `.form-row` | Flexible row wrapper for multiple form groups. |

## `02-alerts.css`

| Classes | What it does |
|---------|--------------|
| `.alert` | Base alert container. |
| `.alert-success` / `.alert-warning` / `.alert-error` / `.alert-info` | Semantic alert variants. |
| `.alert-dismissible` / `.alert-close` | Extra padding and positioned dismiss control. |
| `.toast` | Fixed-position toast shell. |
| `.snackbar` / `.open` | Bottom-centered transient feedback shell and visible state. |
| `.snackbar-message` | Main text block inside the snackbar. |
| `.snackbar-action` / `.snackbar-close` | Inline action and dismiss controls. |
| `.snackbar-success` / `.snackbar-warning` / `.snackbar-error` / `.snackbar-info` | Semantic snackbar variants. |

## `03-dropdown.css`

| Classes | What it does |
|---------|--------------|
| `.dropdown` | Root wrapper. Add `.open` to reveal the menu. |
| `.dropdown-toggle` | Trigger button/link. |
| `.dropdown-menu` / `.dropdown-menu-right` | Floating panel, optionally right-aligned. |
| `.dropdown-item` / `.active` | Clickable menu rows. |
| `.dropdown-header` / `.dropdown-divider` | Section labels and separators. |

## `04-tooltip.css`

| Classes / attrs | What it does |
|-----------------|--------------|
| `data-tooltip="..."` | Required text source for tooltip content. |
| `.tooltip-bottom` / `.tooltip-left` / `.tooltip-right` | Optional placement overrides. Default is above. |

## `05-breadcrumb.css`

| Classes | What it does |
|---------|--------------|
| `.breadcrumb` | Breadcrumb container. |
| `.breadcrumb-item` / `.active` | Segments and current-page state. |
| `.breadcrumb-arrow` / `.breadcrumb-dot` | Alternate separator styles. |

## `10-tabs.css`

| Classes | What it does |
|---------|--------------|
| `.tabs` | Root wrapper for the whole tabs UI. |
| `.tab-list` | Trigger row/column. Use it with buttons, links, or tab-like controls. |
| `.tab-button` / `.active` | Tab trigger. Active state can also be driven by `aria-selected="true"`. |
| `.tab-panel` / `.active` | Content panel. Only the active panel is shown. |
| `.tab-list-pills` | Rounded pill navigation variant. |
| `.tab-list-equal` | Makes all triggers distribute evenly. |
| `.tabs-vertical` | Side-by-side vertical layout that collapses to stacked on mobile. |

## `09-segmented-control.css`

| Classes | What it does |
|---------|--------------|
| `.segmented-control` | Container for segmented control options. |
| `.segmented-option` | Individual option/button. Active state via `.active` or `:checked` on adjacent radio. |
| `.segmented-control-equal` | Distribute options evenly (flex: 1). |
| `.segmented-control-fullwidth` | Stretch control to 100% width. |
| `.segmented-control-outline` | Border-only variant with transparent background. |
| `.segmented-control-subtle` | Underline variant (bottom border activation). |
| `.segmented-control-vertical` | Stack options vertically. |
| `.segmented-control-stack-mobile` | Switch to vertical on mobile. |
| `.segmented-option-icon` | Helper class for icon + text alignment. |

## `11-skeleton.css`

| Classes | What it does |
|---------|--------------|
| `.skeleton` | Base placeholder surface. |
| `.skeleton-line` / `.skeleton-block` / `.skeleton-circle` | Primitive line, block, and circular shapes. |
| `.skeleton-text-group` | Vertical stack of lines with varied widths for text simulation. |
| `.skeleton-button` / `.skeleton-input` / `.skeleton-chip` / `.skeleton-badge` / `.skeleton-avatar` | Common control placeholders. |
| `.skeleton-card` / `.skeleton-list-item` / `.skeleton-table-row` / `.skeleton-media-object` / `.skeleton-article` | Composed content placeholders. |
| `.skeleton-inline` / `.skeleton-full-width` / `.skeleton-grid` | Layout helpers for inline, full-width, and grid loading states. |
| `.skeleton-shimmer` | Animated shimmer overlay. |

## `10-list-item.css`

| Classes | What it does |
|---------|--------------|
| `.list-item` | Base list item row with flex layout (avatar + content + actions). |
| `.list-item-avatar` | Optional leading avatar/icon slot (2.5rem circle). |
| `.list-item-content` | Text content container with flexible flex-grow. |
| `.list-item-text` | Primary text (title) with ellipsis truncation. |
| `.list-item-meta` | Secondary text (subtitle/timestamp) with reduced font and soft color. |
| `.list-item-actions` | Trailing action buttons container. |
| `.list-item-action` | Icon button for inline actions (favorite, delete, more, etc.). |
| `.list-item-interactive` | Hover state styling for clickable list items. |
| `.list-item-link` | Semantic link wrapper (flex display, no underline, focus styles). |
| `.list-item-checkbox` | Checkbox input inside list item. |
| `.list-item-with-checkbox` | Container modifier to accommodate checkbox layout. |
| `.list-item-selected` | Visual state for selected/active rows. |
| `.list-item-disabled` | Disabled state with reduced opacity and no interactivity. |
| `.list-item-badge` / `.list-item-badge-success` / `.list-item-badge-warning` / `.list-item-badge-error` / `.list-item-badge-info` | Status badges with semantic colors. |
| `.list-item-status` / `.list-item-status-online` / `.list-item-status-away` / `.list-item-status-offline` | Small circular status indicators. |
| `.list-container` | Wrapper with border, rounded corners, and background. |
| `.list-container-compact` | Reduced padding variant (var(--space-2)). |
| `.list-container-spacious` | Increased padding variant (var(--space-4)). |
| `.list-container-divider` | Thicker border between items. |

---

## `06-dashboard-panels.css`

Classic dashboard content blocks.

| Classes | What it does |
|---------|--------------|
| `.dashboard-page-head` | Page heading block above KPIs/panels. |
| `.dashboard-kpi-grid` | KPI card grid. 4 cols desktop, 2 cols medium, 1 col mobile. |
| `.dashboard-kpi-card` | Classic white KPI card shell. Use `p` for label, `h2` for primary value. |
| `.dashboard-kpi-meta` | Styled KPI meta text. Also the direct `span` child pattern of `.dashboard-kpi-card` is supported, excluding `.badge` and `.chip`. |
| `.dashboard-panels-grid` | Two-column content grid (`1.7fr / 1fr`) collapsing to one column below `1140px`. |
| `.dashboard-panel` | Standard content panel with title and body text. |

**Recommended pattern**

```html
<div class="dashboard-kpi-grid">
  <article class="dashboard-kpi-card">
    <p>Revenue</p>
    <h2>$18,340</h2>
    <span class="dashboard-kpi-meta">+12.3% this quarter</span>
  </article>
</div>
```

---

## `07-dashboard-alt-panels.css`

Glass dashboard content region for the alt shell.

| Classes | What it does |
|---------|--------------|
| `.dashboard-main-alt` | White-text dashboard content root for the glass variant. |
| `.dashboard-panel-alt` | Glass panel with blur, rounded border, and soft shadow. |
| `.dashboard-panel-alt__title` | Left-aligned panel heading. |
| `.dashboard-links-alt` | Wrapping inline link cluster. |
| `.dashboard-link-alt` | Glass pill-style dashboard action link. |
| `.dashboard-table-wrap-alt` | Scroll wrapper for wide dark tables inside alt panels. |

---

## `08-draggable-node.css`

Node molecule meant to live inside `.dnd-canvas`.

| Classes / attrs | What it does |
|-----------------|--------------|
| `.dnd-node` | Absolute-positioned draggable node with accent token `--dnd-node-accent`. |
| `.dnd-node.is-dragging` | Dragging state: stronger shadow, accent border, slight scale-up. |
| `.dnd-node-header` | Upper header strip with accent left border. |
| `.dnd-node-body` | Main content area. |
| `.dnd-node-status` | Footer/status line. |
| `.node-handle` | Circular connection port. Use `data-port="top|right|bottom|left"`. |
| `.node-handle.active` | Active/hovered port state. |

**Usage notes**

- Set `style="--dnd-node-accent: var(--color-tertiary); left: ...; top: ...;"` per node when needed.
- `.night` has dedicated dark-surface styling for nodes and handles.

---

## `09-stat-cards.css`

Modern KPI/stat system for dashboards and finance panels.

| Classes | What it does |
|---------|--------------|
| `.stat-surface` | Glass presentation surface, dark by default. Supports `data-mode="dark|light"`. |
| `.stat-surface-light` | Explicit light variant without relying on `data-mode`. |
| `.stat-grid` | Responsive KPI grid: 4 columns, then 2, then 1. |
| `.stat-card` | Stat card shell with blur, radius, and tokenized theme variables. |
| `.stat-label` | Upper micro-label. |
| `.stat-value` / `.stat-value-s` | Main KPI value, large display numerals via `--font-display`. |
| `.stat-sub` / `.stat-meta` | Supporting text and compact numeric metadata. |
| `.stat-trend-up` / `.stat-trend-down` / `.stat-trend-compact` | Positive/negative movement indicators. |
| `.stat-progress`, `.stat-progress-fill`, `.stat-progress-fill-alt` | Thin progress bars using `--stat-fill`. |
| `.stat-score`, `.stat-score-fill`, `.stat-score-range` | Score meter and range labels. |
| `.stat-dot-*` | Semantic status dot (`success`, `warning`, `danger`). |
| `.stat-tone-success` / `.stat-tone-warning` / `.stat-tone-danger` | Semantic text colors for values. |
| `.stat-row` | Inline row helper for mixed metadata/progress layouts. |
| `.stat-icon` | Large decorative icon anchored bottom-right in the card. |
| `.stat-divider` | Surface divider line. |
| `.stat-compare`, `.stat-compare-label`, `.stat-compare-value` | Before/after KPI comparison row. |
| `.stat-split`, `.stat-split-value`, `.stat-split-label` | Two-way KPI split block. |

**Common patterns**

| Goal | Classes |
|------|---------|
| Trend KPI | `.stat-card` + `.stat-label` + `.stat-value` + `.stat-trend-up/down` |
| Score card | `.stat-card` + `.stat-score` + `.stat-score-fill` + `.stat-score-range` |
| Split metric | `.stat-card` + `.stat-split` |
| Light glass surface | `.stat-surface data-mode="light"` or `.stat-surface-light` |

**Example**

```html
<section class="stat-surface" data-mode="dark">
  <div class="stat-grid">
    <article class="stat-card">
      <div class="stat-label">Collection goal</div>
      <div class="stat-value">68%</div>
      <div class="stat-progress">
        <div class="stat-progress-fill stat-progress-fill-alt" style="--stat-fill: 68%;"></div>
      </div>
    </article>
  </div>
</section>
```