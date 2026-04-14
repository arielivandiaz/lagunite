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

## Night mode

Several files include `.night …` selectors (alerts, dropdown, breadcrumb, form labels).

## Related skills

- **lagunite-atoms** — buttons, inputs used inside molecules.
- **lagunite-flex** / **lagunite-spacing** — layout around molecules.
