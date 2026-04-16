---
applyTo: "**/*.html,src/css/**/*.css,lagunite-web/src/**/*.astro"
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

### Semantic variants
`.card-primary` `.card-success` `.card-warning` `.card-error` — border + header background from semantic colors.

### Layout

| Class | Role |
| --- | --- |
| `.card-horizontal` | Row layout (stacks to column <640px) |
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
`.modal-s` `.modal-l` `.modal-xl` `.modal-fullscreen` — chained on `.modal`.

### Night
`.night .modal` uses dark surface colors.

## Bottom sheet — `03-bottom-sheet.css`

### Structure

```text
.bottom-sheet-overlay.open
  └── .bottom-sheet.bottom-sheet-snap-{s|m|l}|.bottom-sheet-full
        ├── .bottom-sheet-handle
        ├── .bottom-sheet-header
        │     ├── .bottom-sheet-title
        │     └── button.bottom-sheet-close
        ├── .bottom-sheet-body
        └── .bottom-sheet-footer
```

| Class | Role |
| --- | --- |
| `.bottom-sheet-overlay` | Full-screen dimmed overlay anchored to the bottom; hidden until `.open` |
| `.bottom-sheet` | Sliding panel shell |
| `.bottom-sheet-handle` | Small drag affordance bar at the top |
| `.bottom-sheet-header` | Title row + close |
| `.bottom-sheet-title` | Title text |
| `.bottom-sheet-close` | Close button |
| `.bottom-sheet-body` | Scrollable content region |
| `.bottom-sheet-footer` | Action row |

### Sizes
`.bottom-sheet-snap-s` `.bottom-sheet-snap-m` `.bottom-sheet-snap-l` `.bottom-sheet-full`.

### Night
`.night .bottom-sheet` adjusts surface, handle, and close button colors.

## Empty state — `04-empty-state.css`

### Structure

```text
.empty-state(.empty-state-compact|.empty-state-hero|.empty-state-horizontal?)
  ├── .empty-state-icon or .empty-state-illustration
  ├── .empty-state-title
  ├── .empty-state-text
  ├── .empty-state-actions
  └── .empty-state-meta (optional)
```

| Class | Role |
| --- | --- |
| `.empty-state` | Base empty-state shell with centered layout and dashed border |
| `.empty-state-icon` | Circular icon surface |
| `.empty-state-illustration` | Optional image/illustration block |
| `.empty-state-title` | Main heading |
| `.empty-state-text` | Supporting description |
| `.empty-state-actions` | CTA row (buttons/links) |
| `.empty-state-meta` | Optional helper note |

### Variants
`.empty-state-compact` `.empty-state-hero` `.empty-state-horizontal`

### Semantic styles
`.empty-state-success` `.empty-state-warning` `.empty-state-error` `.empty-state-info`

### Night
`.night .empty-state` adjusts border, text, and icon surfaces for dark backgrounds.

## Behavior note

Modal and bottom-sheet open state plus overlay clicks are **not** defined in CSS alone; wire `.open` with JS as needed.

## Related skills

- **lagunite-molecules** — forms/alerts inside cards or modals.
- **lagunite-flex** / **lagunite-grid** — layout inside `.card-body` / `.modal-body`.
