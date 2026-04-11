---
name: lagunite-compounds
description: >-
  Lagunite compound components: cards and modals. Use when building structured
  surfaces or dialogs from src/css/07-compounds/.
---

# Lagunite compounds

Compounds are self-contained UI blocks built from tokens + atoms + layout. **Use only the classes below** from `src/css/07-compounds/`.

## Cards — `01-cards.css`

### Regions

| Class | Role |
| --- | --- |
| `.card` | Root surface (border, radius, background) |
| `.card-header` | Top region |
| `.card-body` | Main content |
| `.card-footer` | Bottom bar |
| `.card-img-top` | Full-width image (top radii) |
| `.card-img-bottom` | Full-width image (bottom radii) |
| `.card-title` | Title inside body |
| `.card-text` | Muted body text |

### Style modifiers

| Class | Role |
| --- | --- |
| `.card-elevated` | Shadow |
| `.card-flat` | No border, transparent bg |
| `.card-hover` | Lift + shadow on hover |

### Semantic variants (header tinted)

`.card-primary` `.card-success` `.card-warning` `.card-error` — border + header background from semantic colors.

### Layout

| Class | Role |
| --- | --- |
| `.card-horizontal` | Row layout (stacks to column &lt;640px); pair with `.card-img` for the media column in source |
| `.card-group` | Responsive grid of cards (`auto-fill`, minmax 18rem) |

### Night

`.night .card` adjusts background and border.

## Modals — `02-modals.css`

### Structure

```text
.modal-overlay.open
  └── .modal.modal-{s|l|xl|fullscreen?}
        ├── .modal-header
        │     ├── .modal-title
        │     └── button.modal-close
        ├── .modal-body
        └── .modal-footer
```

| Class | Role |
| --- | --- |
| `.modal-overlay` | Full-screen dimmed flex center; hidden until `.open` |
| `.modal-overlay.open` | Visible + interactive |
| `.modal` | Dialog panel (default max-width 32rem) |
| `.modal-header` | Title row + close |
| `.modal-title` | Title text |
| `.modal-close` | Close button |
| `.modal-body` | Scrollable content |
| `.modal-footer` | Right-aligned actions row with gap |

### Sizes

`.modal-s` `.modal-l` `.modal-xl` `.modal-fullscreen` — chained on `.modal` with overlay.

### Night

`.night .modal` uses dark surface colors.

## Behavior note

Modal open state and overlay clicks are **not** defined in CSS alone; wire `.open` with JS as needed.

## Related skills

- **lagunite-molecules** — forms/alerts inside cards or modals.
- **lagunite-flex** / **lagunite-grid** — optional layout inside `.card-body` / `.modal-body`.
- **lagunite-decorators** — extra borders/shadows if needed.
