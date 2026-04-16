# Lagunite Atom Utilities

> Tables, lists, figures, badges, and avatars. Use when building data display components, lists, geometric shapes, status indicators, or user identity elements.

**Source files:** `src/css/05-atoms/` (`01-buttons.css`, `02-inputs.css`, `03-table.css`, `04-lists.css`, `05-figures.css`, `06-badges.css`, `07-avatars.css`, `08-chips.css`, `09-tags.css`)

**Cheatsheet:** `src/css/05-atoms/ATOMS-CHEATSHEET.md`

---

## Core rules

1. **Tables** use `.table` class. Semantic color by chaining: `.table.primary.striped.bordered`.
2. **Lists** use native `ul`/`ol` modifiers (`ul.alt`, `ol.bordered`) or utility classes on the list element.
3. **Figures** (`hr`, `.line-v`, `.square`, `.triangle`, `.point`, `.blob-*`) are decorative — triangles use border tricks, don't rely on inner flex content.
4. **Badges** are `inline-flex`; combine `.badge`, size, semantic color, and optional modifiers.
5. **Avatars** default to 40px circle; add size/shape classes on the same node.
6. **Responsive:** list utilities use `xlist-*` (mobile) and `dlist-*` (desktop).
7. **Night mode:** add `.night` on an ancestor. Badges and avatars include `.night` overrides.

## Tables

| Pattern | Classes |
|--------|---------|
| Base | `.table` |
| Density | `.size-s`, `.size-l`, `.size-xl` |
| Header/body theme | `.main`, `.primary`, `.secondary`, `.tertiary`, `.success`, `.warning`, `.error` |
| Transparent header | `.primary.alt` (same for other colors) |
| Zebra | `.striped` |
| Grid lines | `.bordered` |
| Interaction | `.hover` (row) or `.hover-cell` |
| Card chrome | `.card` |
| Row separators | `.divided`, `.divided-thick` |
| Cell align | `.valign-top`, `.valign-middle`, `.valign-bottom` on `th`/`td` |
| Overflow | `.table-responsive` wrapper |
| Mobile stack | `.table.stack-mobile` + `data-label` on each `td` |
| Row state | `tr.selected`, `.disabled`, `.highlighted`, `.success-row`, `.warning-row`, `.error-row` |
| Sort | `th.sortable`, `.sort-asc`, `.sort-desc` |

**Do not** forget `data-label` when using `.stack-mobile` — labels read from the attribute.

## Lists

| Goal | Classes |
|------|---------|
| Zebra rows | `ul.alt` / `ol.alt` |
| Separators | `ul.bordered` / `ol.bordered` |
| Unstyled | `.list-none` |
| Horizontal | `.list-inline` |
| Vertical rhythm | `.list-spaced` |
| Markers | `.list-disc`, `.list-circle`, `.list-square`, `.list-decimal`, `.list-alpha`, `.list-roman` |
| Marker position | `.list-inside`, `.list-outside` |
| Mobile-only | `.xlist-none`, `.xlist-inline` |
| Desktop-only | `.dlist-none`, `.dlist-inline` |

## Figures

| Element | Notes |
|---------|--------|
| `hr` | `.size-s` through `.size-xxl` for weight/color |
| `.line-v` | Vertical rule; `.size-s` … `.size-xxl` |
| `.square`, `.rounded`, `.circle`, `.tear` | Default 50×50; `.size-s` / `.size-l`; primary fill |
| `.triangle` | Border-based; `.size-s` / `.size-l` |
| `.point` | Dot; default 10px; `.size-s` / `.size-l` |
| `.blob-1` … `.blob-5` | Border-radius presets for organic shapes |

## Badges

| Layer | Classes |
|-------|---------|
| Base | `.badge` |
| Size | `.badge-xs`, `.badge-s`, `.badge-l` |
| Solid | `.badge-primary`, `.badge-secondary`, `.badge-success`, `.badge-info`, `.badge-warning`, `.badge-error` |
| Soft | `.badge-primary-light`, `.badge-success-light`, `.badge-info-light`, `.badge-warning-light`, `.badge-error-light` |
| Outline | `.badge-outline` alone or combined (e.g. `.badge-primary.badge-outline`) |
| Shape | `.badge-pill` |
| Leading dot | `.badge-dot` |
| Icon | `.badge-icon` + `svg` or `i` |
| Dismissible | `.badge-dismissible` + child `<button class="badge-close">` |
| Numeric | `.badge-counter` |
| Overlay | `.badge-absolute-top-right`, `.badge-absolute-top-left`, `.badge-absolute-bottom-right`, `.badge-absolute-bottom-left`, `.badge-absolute` |
| Toolbar | `.badge-group`, `.badge-group-compact` |

## Avatars

| Layer | Classes |
|-------|---------|
| Base | `.avatar` (+ optional `img`) |
| Size | `.avatar-xs`, `.avatar-s`, `.avatar-l`, `.avatar-xl` |
| Shape | `.avatar-circle`, `.avatar-rounded`, `.avatar-square` |
| Status dot | `.avatar-status` + `.avatar-status-online` / `-busy` / `-away` / `-offline` |
| Placeholder | `.avatar-placeholder` |
| Initials | `.avatar-initials` or `.avatar-initials-secondary` … `-error` |
| Overlap row | `.avatar-group` (+ `.avatar-group-xs` … `-xl`) |
| Deep stack | `.avatar-stack` + `.avatar-stack-counter` (+ size variants) |
| Focus ring | `.avatar-ring`, `.avatar-ring-secondary` … `-error`, `.avatar-ring-thick` |

## Composition patterns

### Data table with actions
```html
<div class="table-responsive">
  <table class="table primary striped hover divided">
    <thead>...</thead>
    <tbody>
      <tr class="selected">...</tr>
    </tbody>
  </table>
</div>
```

### Notification icon + badge
```html
<span style="position:relative;display:inline-block">
  <i class="icon-bell"></i>
  <span class="badge badge-error badge-counter badge-absolute-top-right">9</span>
</span>
```

### User row
```html
<div class="avatar avatar-s avatar-status avatar-status-online avatar-initials">AB</div>
```

## Do not

- Do NOT use `.table.stack-mobile` without `data-label` on cells.
- Do NOT nest `.badge-dismissible` without a `.badge-close` control.
- Do NOT put block content inside `.badge` — `white-space: nowrap` is intentional.
- Do NOT mix `avatar-group` and `avatar-stack` on the same element — wrappers differ.
- Do NOT assume `.triangle` or `.point` behave like flex boxes.
