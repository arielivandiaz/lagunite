---
applyTo: "**/*.html,src/css/**/*.css,lagunite-web/src/**/*.astro"
---

# Lagunite molecules

## Layer

Molecules combine **atoms** (e.g. `.input`, `.btn`) with structure and state classes. They sit below **compounds** (cards, modals) and **organisms** (navbar, sidebar).

**Only use classes and attributes documented below** (from `src/css/06-molecules/*.css`). Do not invent molecule class names.

## Form groups — `01-form-groups.css`

| Class | Role |
| --- | --- |
| `.form-group` | Vertical stack: label + control + help/error |
| `.form-label` | Label styling |
| `.form-help` | Helper text |
| `.form-error-msg` | Error text |
| `.form-group.has-error` | Error state |
| `.form-group.has-success` | Success state |
| `.input-group` | Horizontal group of control + addons |
| `.input-group-prepend` | Addon before the field |
| `.input-group-append` | Addon after the field |
| `.form-row` | Flex row with wrap + gap |
| `.xform-row` | Column direction on small screens |
| `.dform-row` | Row direction from 640px up |

## Alerts and toasts — `02-alerts.css`

| Class | Role |
| --- | --- |
| `.alert` | Base alert box |
| `.alert-success` | Success variant |
| `.alert-warning` | Warning variant |
| `.alert-error` | Error variant |
| `.alert-info` | Info variant |
| `.alert-dismissible` | Extra right padding for close control |
| `.alert-close` | Absolutely positioned close button |
| `.toast` | Fixed toast shell (bottom-right) |
| `.snackbar` | Bottom-centered transient feedback shell |
| `.snackbar.open` | Visible state |
| `.snackbar-message` | Main text block |
| `.snackbar-action` | Inline action button |
| `.snackbar-close` | Close button |
| `.snackbar-success` / `.snackbar-warning` / `.snackbar-error` / `.snackbar-info` | Semantic snackbar variants |

## Dropdown — `03-dropdown.css`

| Class | Role |
| --- | --- |
| `.dropdown` | Wrapper; add `.open` to show menu |
| `.dropdown-toggle` | Click target |
| `.dropdown-menu` | Absolutely positioned panel |
| `.dropdown-menu-right` | Align menu to the right |
| `.dropdown-item` | Menu row (supports `.active`) |
| `.dropdown-header` | Non-clickable section title |
| `.dropdown-divider` | Horizontal rule between items |

## Tooltip — `04-tooltip.css`

- Set **`data-tooltip="text"`** on the element (required).
- Optional placement on the **same element**: `.tooltip-bottom`, `.tooltip-left`, `.tooltip-right` (default is above).

## Breadcrumb — `05-breadcrumb.css`

| Class | Role |
| --- | --- |
| `.breadcrumb` | Container |
| `.breadcrumb-item` | Each segment; use `.active` on current |
| `.breadcrumb-arrow` | Arrow separators |
| `.breadcrumb-dot` | Dot separators |

## Segmented control — `09-segmented-control.css`

| Class | Role |
| --- | --- |
| `.segmented-control` | Container for segmented control options |
| `.segmented-option` | Individual option button/label. Active state via `.active` or `input:checked +` |
| `.segmented-control-equal` | Distribute options evenly (each flex: 1) |
| `.segmented-control-fullwidth` | Stretch to 100% width |
| `.segmented-control-outline` | Border-only variant with transparent background |
| `.segmented-control-subtle` | Underline variant (bottom border activation) |
| `.segmented-control-vertical` | Stack options vertically |
| `.segmented-control-stack-mobile` | Auto-switch to vertical on mobile |
| `.segmented-option-icon` | Helper for icon + text alignment inside option |

**Patterns**: Use `<input type="radio">` + `<label class="segmented-option">` for semantic radio pattern, or `<button class="segmented-option">` for button-only pattern. Active state via `:checked` or `.active` class.

## List item — `10-list-item.css`

| Class | Role |
| --- | --- |
| `.list-item` | Base row: flex container with avatar + content + actions |
| `.list-item-avatar` | Leading avatar/icon slot (2.5rem circle) |
| `.list-item-content` | Text content flex container |
| `.list-item-text` | Primary text (title) with ellipsis |
| `.list-item-meta` | Secondary text (subtitle/timestamp) with soft color |
| `.list-item-actions` | Trailing action buttons container |
| `.list-item-action` | Icon button for inline actions (favorite, delete, more) |
| `.list-item-interactive` | Hover state for clickable rows |
| `.list-item-link` | Semantic `<a>` wrapper with flex layout and focus styles |
| `.list-item-checkbox` | Checkbox input inside list item |
| `.list-item-with-checkbox` | Container modifier for checkbox layout |
| `.list-item-selected` | Visual state for selected/active rows |
| `.list-item-disabled` | Disabled state (reduced opacity, no interactions) |
| `.list-item-badge` | Base badge styling |
| `.list-item-badge-success` / `-warning` / `-error` / `-info` | Semantic badge variants |
| `.list-item-status` | Circular status indicator (6–8px) |
| `.list-item-status-online` / `-away` / `-offline` | Status colors |
| `.list-container` | Wrapper with border, rounded corners, background |
| `.list-container-compact` | Compact padding (var(--space-2)) |
| `.list-container-spacious` | Spacious padding (var(--space-4)) |
| `.list-container-divider` | Thicker dividers between items |

**Patterns**:
- Use `.list-item` for simple rows + `.list-container` wrapper.
- Optional leading avatar via `.list-item-avatar`.
- Text content in `.list-item-content` (flex: 1 for fill).
- Trailing actions in `.list-item-actions` with `.list-item-action` buttons.
- For selectable rows: wrap checkbox in `.list-item-with-checkbox` and add `.list-item-selected` class to the row.
- For links: use `.list-item-link` `<a>` instead of `.list-item` `<div>`.
- Night mode via `.night …` prefix on classes.

## Tabs — `10-tabs.css`

| Class | Role |
| --- | --- |
| `.tabs` | Root wrapper for the tabs component |
| `.tab-list` | Row or column of tab triggers |
| `.tab-button` | Click target for each tab; use `.active` or `aria-selected="true"` |
| `.tab-panel` | Content panel; use `.active` on the visible panel |
| `.tab-list-pills` | Pill-style trigger variant |
| `.tab-list-equal` | Makes each tab trigger share width equally |
| `.tabs-vertical` | Switches layout to side tabs |

## Skeleton — `11-skeleton.css`

| Class | Role |
| --- | --- |
| `.skeleton` | Base skeleton surface |
| `.skeleton-line` / `.skeleton-block` / `.skeleton-circle` | Primitive skeleton shapes |
| `.skeleton-text-group` | Stacked text-like line placeholders |
| `.skeleton-button` / `.skeleton-input` / `.skeleton-chip` / `.skeleton-badge` / `.skeleton-avatar` | UI-control placeholders |
| `.skeleton-card` / `.skeleton-list-item` / `.skeleton-table-row` / `.skeleton-media-object` / `.skeleton-article` | Content layout placeholders |
| `.skeleton-inline` / `.skeleton-full-width` / `.skeleton-grid` | Skeleton layout helpers |
| `.skeleton-shimmer` | Optional moving shimmer overlay |

## Night mode

Several files include `.night …` selectors (alerts, dropdown, breadcrumb, form labels, tabs).

## Related skills

- **lagunite-atoms** — buttons, inputs used inside molecules.
- **lagunite-flex** / **lagunite-spacing** — layout around molecules.
