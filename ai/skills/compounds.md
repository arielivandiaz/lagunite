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
| `.card-text` | Muted body text (`--color-text-muted`, follows Night) — or use `.text-muted` |

### Style modifiers

| Class | Role |
| --- | --- |
| `.card-elevated` | Larger shadow for floating jobs — default `.card` is already subtly raised (highlight + `shadow-s`) |
| `.card-featured` | v3: gradient blue border + colored lift — **one per group** (recommended plan) |
| `.card-glass` | v3: glass surface — only over `.bg-mesh` / `.bg-grid` / images |
| `.card-sunken` | v3: recessed secondary group inside another surface |
| `.icon-tile` / `.icon-tile-solid` | v3: icon in a soft (or primary gradient) square for feature cards |
| `.card-flat` | No border, transparent bg |
| `.card-hover` | Lift + shadow on hover (respects `prefers-reduced-motion`) |
| `.card-state` | Opt-in `:has(:focus-within)` / `:has(input:checked)` chrome. Recipe: `child-state-based-styling` |
| `.card-media` | Content-based flex: row when direct `img` / `.card-img` present; `.has-image` fallback. Recipe: `content-based-styling` |
| `.card-media-body` | Flex child for text next to media |

### Semantic variants (header tinted)

`.card-primary` `.card-success` `.card-warning` `.card-error`

### Layout

| Class | Role |
| --- | --- |
| `.card-horizontal` | Row layout (stacks to column <640px) |
| `.card-group` | Responsive grid of cards (`auto-fill`, minmax 18rem) |

### Night mode

Night: all card surfaces follow tokens (`.night` on `body`); no `.night .card` overrides needed. `.card-accent-*` draws a 3px top line (v3; was a thick left border).

## Modals (`02-modals.css`)

### Structure (legacy overlay)

```text
.modal-overlay.open
  └── .modal.modal-{s|l|xl|fullscreen?}
        ├── .modal-header
        │     ├── .modal-title
        │     └── button.modal-close
        ├── .modal-body
        └── .modal-footer
```

### Structure (preferred native)

```text
dialog.modal.modal-{s|?}  [closedby="any"?]
  ├── .modal-header …
  ├── .modal-body
  └── .modal-footer
```

Open with `showModal()` (or Invoker `command="show-modal"`). See Lab recipes:
`declarative-dialog-popover-control`, `light-dismiss-a-dialog`, `animate-to-from-top-layer`.

`dialog.modal` includes progressive enter/exit (`@starting-style`, `overlay`, backdrop fade). Respects `prefers-reduced-motion`.

| Class | Role |
| --- | --- |
| `.modal-overlay` | Full-screen dimmed flex center; hidden until `.open` (legacy) |
| `.modal-overlay.open` | Visible + interactive |
| `.modal` | Dialog panel (default max-width 32rem); also on `dialog.modal` |
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

- **Prefer** native `<dialog class="modal">` + `showModal()` / Invoker Commands / `closedby="any"`.
- Legacy: `.modal-overlay.open` still works via app JS class toggle.
- **Popover (until a dedicated surface ships):** `[popover]` + Lagunite chrome:
  ```html
  <div popover class="card padd marg-s shadow-s">…</div>
  ```
  - `.card` / `.padd` — surface
  - `.marg-s` — inset from viewport edges (UA default can sit flush top/left)
  - `.shadow-s` — subtle lift in the top layer (prefer over `.card-elevated` here)
  - Recipe: `lab/recipes/declarative-dialog-popover-control` · web: `/lab/recipes/declarative-dialog-popover-control`
  - `<!-- GAP: dedicated .popover surface / max-width / placement -->`

## Related skills

- **molecules** — forms/alerts inside cards or modals
- **flex** / **grid** — layout inside `.card-body` / `.modal-body`
- **decorators** — `.shadow-s` / `.shadow` if you need more elevation on popovers or cards
- **validate-a11y** — dialog labels, focus, light-dismiss
