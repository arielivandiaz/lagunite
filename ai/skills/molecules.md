# Lagunite Molecules

> Form groups, alerts, dropdowns, tooltips, breadcrumbs, and other small reusable UI blocks.
> Use when composing atoms (inputs, buttons) into structured molecule components.

**Source files:** `src/css/06-molecules/` (`01-form-groups.css` … `15-selectable-option.css`)

**Only use classes and attributes documented below.** Do not invent molecule class names.

---

## Layer context

Molecules combine **atoms** (`.input`, `.btn`) with structure and state. They sit below **compounds** (cards, modals) and **organisms** (navbar, sidebar).

## Form groups (`01-form-groups.css`)

| Class | Role |
| --- | --- |
| `.form-group` | Vertical stack: label + control + help/error |
| `.form-label` | Label styling |
| `.form-help` | Helper text |
| `.form-error-msg` | Error text |
| `.form-group.has-error` | Error state on inputs inside the group |
| `.form-group.has-success` | Success state |
| `.input-group` | Horizontal group of control + addons |
| `.input-group-prepend` | Addon before the field |
| `.input-group-append` | Addon after the field |
| `.form-row` | Flex row with wrap + gap |
| `.xform-row` | Column direction on small screens |
| `.dform-row` | Row direction from 640px up |

## Alerts and toasts (`02-alerts.css`)

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
| `.xtoast` | Toast tweaks on small screens |
| `.dtoast` | Toast layout from 640px up |

## Dropdown (`03-dropdown.css`)

| Class | Role |
| --- | --- |
| `.dropdown` | Wrapper; add `.open` to show menu |
| `.dropdown-toggle` | Click target |
| `.dropdown-menu` | Absolutely positioned panel (hidden until `.dropdown.open`) |
| `.dropdown-menu-right` | Align menu to the right |
| `.dropdown-item` | Menu row (supports `.active`) |
| `.dropdown-header` | Non-clickable section title |
| `.dropdown-divider` | Horizontal rule between items |

## Tooltip (`04-tooltip.css`)

- Set **`data-tooltip="text"`** on the element (required).
- Optional placement on the **same element**: `.tooltip-bottom`, `.tooltip-left`, `.tooltip-right` (default: above).
- No separate `.tooltip` wrapper class needed.

## Breadcrumb (`05-breadcrumb.css`)

| Class | Role |
| --- | --- |
| `.breadcrumb` | Container (typically `<nav>` + list) |
| `.breadcrumb-item` | Each segment; use `.active` on current |
| `.breadcrumb-arrow` | Arrow separators |
| `.breadcrumb-dot` | Dot separators |

## Picker wheel (`14-picker-wheel.css` + JS)

Requires `src/js/06-molecules/14-picker-wheel.js` (auto-init via `lagunite.js`, or `new PickerWheel(el)` / `initPickerWheels()`).

| Class / attr | Role |
| --- | --- |
| `.picker-wheel` | Root; set `data-values="a,b,c"` and optional `data-value` |
| `.picker-wheel-v` | Vertical orientation |
| `.picker-wheel-track` | Items container (JS fills buttons) |
| `.picker-wheel-item` | Value button (`.active` / `.near` / `.far` / `.is-empty`) |
| `.picker-wheel-indicator` | Optional triangle under horizontal track |
| `.picker-wheel-row` | Horizontal row when using prev/next arrows |
| `.picker-wheel-btn` | Arrow chrome |
| `.picker-wheel-prev` / `.picker-wheel-next` | Decrement / increment controls |
| `data-aria-label` | Optional accessible name (maps to `aria-label`) |

Emits `change` with `detail: { value, index }`. Keyboard: arrows + Home/End. Disable auto-init with `LAGUNITE_NO_AUTO_INIT`.

POC: `pocs/poc-picker-wheel.html`

## Selectable option (`15-selectable-option.css`)

CSS-only (`:checked`). No JS.

| Class | Role |
| --- | --- |
| `.selectable-option` | `<label>` wrapping checkbox/radio + label + indicator |
| `.selectable-option-label` | Text |
| `.selectable-option-indicator` | Circle checkmark |
| `.selectable-option.size-s` / `.size-l` | Density |
| `:has(input:checked)` | Selected (do not invent a `.selected` class) |
| `:has(input:disabled)` | Disabled |

POC: `pocs/mobile/poc-goal-selector.html`

## Night mode

Several files include `.night` selectors (alerts, dropdown, breadcrumb, form labels, picker, selectable). Add `.night` on a parent for automatic dark color adjustments.

## Related skills

- **atoms** — buttons, inputs used inside molecules
- **flex** / **spacing** — layout around molecules
