# Lagunite Compounds

> Cards and modals. Use when building structured content surfaces or dialogs.

**Source files:** `src/css/07-compounds/` (`01-cards.css`, `02-modals.css`, `03-bottom-sheet.css`, `04-empty-state.css`)

**Use only the classes below.** Do not invent compound class names.

---

## Cards (`01-cards.css`)

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

`.card-primary` `.card-success` `.card-warning` `.card-error`

### Layout

| Class | Role |
| --- | --- |
| `.card-horizontal` | Row layout (stacks to column <640px) |
| `.card-group` | Responsive grid of cards (`auto-fill`, minmax 18rem) |

### Night mode

`.night .card` adjusts background and border automatically.

## Modals (`02-modals.css`)

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

### Sizes (chain on `.modal`)

`.modal-s` `.modal-l` `.modal-xl` `.modal-fullscreen`

### Night mode

`.night .modal` uses dark surface colors.

## Behavior note

Modal open state and overlay clicks are **not** defined in CSS alone — wire `.open` class with JS.

## Related skills

- **molecules** — forms/alerts inside cards or modals
- **flex** / **grid** — layout inside `.card-body` / `.modal-body`
- **decorators** — extra borders/shadows if needed
