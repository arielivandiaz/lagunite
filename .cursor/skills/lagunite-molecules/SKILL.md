---
name: lagunite-molecules
description: >-
  Lagunite molecule components: form groups, alerts, dropdowns, tooltips,
  breadcrumbs. Use when composing atoms (inputs, buttons) into small reusable
  UI blocks from src/css/06-molecules/.
---

# Lagunite molecules

## Layer

Molecules combine **atoms** (e.g. `.input`, `.btn`, native inputs) with structure and state classes. They sit below **compounds** (cards, modals) and **organisms** (navbar, sidebar).

**Only use classes and attributes documented below** (from `src/css/06-molecules/*.css`). Do not invent molecule class names.

## Form groups — `01-form-groups.css`

| Class | Role |
| --- | --- |
| `.form-group` | Vertical stack: label + control + help/error |
| `.form-label` | Label styling |
| `.form-help` | Helper text |
| `.form-error-msg` | Error text |
| `.form-group.has-error` | Error state on supported inputs inside the group |
| `.form-group.has-success` | Success state on supported inputs |
| `.input-group` | Horizontal group of control + addons |
| `.input-group-prepend` | Addon before the field |
| `.input-group-append` | Addon after the field |
| `.form-row` | Flex row with wrap + gap |
| `.xform-row` | Column direction on small screens |
| `.dform-row` | Row direction from 640px up |

Supported controls for states use `:is(.input, textarea, select, input[type=...])` as in the source file.

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
| `.xtoast` | Toast width/position tweaks on small screens |
| `.dtoast` | Toast layout from 640px up |

## Dropdown — `03-dropdown.css`

| Class | Role |
| --- | --- |
| `.dropdown` | Wrapper; add `.open` to show menu |
| `.dropdown-toggle` | Click target |
| `.dropdown-menu` | Absolutely positioned panel (hidden until `.dropdown.open`) |
| `.dropdown-menu-right` | Align menu to the right |
| `.dropdown-item` | Menu row (supports `.active`) |
| `.dropdown-header` | Non-clickable section title |
| `.dropdown-divider` | Horizontal rule between items |

## Tooltip — `04-tooltip.css`

- Set **`data-tooltip="text"`** on the element (required).
- Optional placement classes on the **same element**: `.tooltip-bottom`, `.tooltip-left`, `.tooltip-right` (default bubble is above).

No separate `.tooltip` wrapper class is required for the base behavior.

## Breadcrumb — `05-breadcrumb.css`

| Class | Role |
| --- | --- |
| `.breadcrumb` | Container (typically `<nav>` + list) |
| `.breadcrumb-item` | Each segment; use `.active` on current |
| `.breadcrumb-arrow` | Arrow separators between items |
| `.breadcrumb-dot` | Dot separators |

## Night mode

Several files include `.night …` selectors (alerts, dropdown, breadcrumb, form labels). If the page uses `.night` on a parent, expect inverted or adjusted colors.

## Related skills

- **lagunite-atoms** — buttons, inputs, lists used inside molecules.
- **lagunite-flex** / **lagunite-spacing** — layout around molecules.
