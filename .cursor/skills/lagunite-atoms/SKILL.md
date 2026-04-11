---
description: >-
  Lagunite CSS atom utilities — tables, lists, figures, badges, and avatars.
  Use when building data display components, lists, geometric shapes, status
  indicators, or user identity elements.
globs:
  - src/css/05-atoms/**/*.css
  - "**/*.html"
---

# Lagunite Atom Utilities

Reference implementation: `src/css/05-atoms/` (`03-table.css`, `04-lists.css`, `05-figures.css`, `06-badges.css`, `07-avatars.css`). Cheatsheet: [ATOMS-CHEATSHEET.md](src/css/05-atoms/ATOMS-CHEATSHEET.md).

## Core rules

1. **Tables** use the `.table` class (or bare `table` for base typography). Semantic color is expressed by chaining: `.table.primary.striped.bordered`, not nested BEM.
2. **Lists** use either native `ul`/`ol` modifiers (`ul.alt`, `ol.bordered`) or utility classes on the list element (`.list-inline`, `.list-spaced`, marker classes).
3. **Figures** (`hr`, `.line-v`, `.square`, `.triangle`, `.point`, `.blob-*`) are mostly decorative; triangles use border tricks — do not rely on inner flex content.
4. **Badges** are `inline-flex`; combine `.badge`, size, semantic color, and optional `.badge-outline`, `.badge-pill`, `.badge-dot`, `.badge-icon`, `.badge-dismissible`, `.badge-counter`.
5. **Avatars** default to a 40px circle; add size/shape classes on the same node. Groups/stacks use a wrapper; counter is a sibling with `.avatar-stack-counter` (+ optional `.avatar-stack-counter-s` etc.).
6. **Responsive:** list utilities use `xlist-*` (mobile) and `dlist-*` (desktop). Table stacking uses `.table.stack-mobile` inside a `@media (max-width: 639px)` ruleset in CSS — authors only add the class and `data-label` on cells.
7. **Night mode:** add `.night` on an ancestor. Badges (secondary, outline, light variants) and avatars (base, placeholder, group borders, stack counter) include `.night` overrides.

## Tables — class reference

| Pattern | Classes |
|--------|---------|
| Base | `.table` |
| Density | `.size-s`, `.size-l`, `.size-xl` |
| Header/body theme | `.main`, `.primary`, `.secondary`, `.tertiary`, `.success`, `.warning`, `.error` |
| Transparent header | `.primary.alt` (same for other colors) |
| Zebra | `.striped` (+ optional color) |
| Grid lines | `.bordered` (+ optional color) |
| Interaction | `.hover` (row) or `.hover-cell` (+ optional color) |
| Card chrome | `.card` (+ optional header color) |
| Row separators | `.divided`, `.divided-thick` (+ optional color) |
| Cell align | `.valign-top`, `.valign-middle`, `.valign-bottom` on `th`/`td` |
| Overflow | `.table-responsive` wrapper |
| Mobile stack | `.table.stack-mobile` + `data-label` on each `td` |
| Row state | `tr.selected`, `.disabled`, `.highlighted`, `.success-row`, `.warning-row`, `.error-row` |
| Sort | `th.sortable`, `.sort-asc`, `.sort-desc` |

**Do not** forget `data-label` when using `.stack-mobile` — the label column is hidden and pseudo-content reads the attribute.

## Lists — class reference

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

## Figures — class reference

| Element | Notes |
|---------|--------|
| `hr` | `.size-s` through `.size-xxl` for weight / color |
| `.line-v` | Vertical rule; `.size-s` … `.size-xxl` |
| `.square`, `.rounded`, `.circle`, `.tear` | Default 50×50; `.size-s` / `.size-l`; primary fill, flex-centered |
| `.triangle` | Border-based; `.size-s` / `.size-l` |
| `.point` | Dot; default 10px; `.size-s` / `.size-l` |
| `.blob-1` … `.blob-5` | Border-radius presets for organic shapes |

## Badges — class reference

| Layer | Classes |
|-------|---------|
| Base | `.badge` |
| Size | `.badge-xs`, `.badge-s`, `.badge-l` |
| Solid | `.badge-primary`, `.badge-secondary`, `.badge-success`, `.badge-info`, `.badge-warning`, `.badge-error` |
| Soft | `.badge-primary-light`, `.badge-success-light`, `.badge-info-light`, `.badge-warning-light`, `.badge-error-light` |
| Outline | `.badge-outline` alone or after semantic (e.g. `.badge-primary.badge-outline`) |
| Shape | `.badge-pill` |
| Leading dot | `.badge-dot` |
| Icon | `.badge-icon` + `svg` or `i` |
| Dismissible | `.badge-dismissible` + child `<button class="badge-close">` |
| Numeric | `.badge-counter` |
| Overlay | `.badge-absolute-top-right`, `.badge-absolute-top-left`, `.badge-absolute-bottom-right`, `.badge-absolute-bottom-left`, `.badge-absolute` |
| Toolbar | `.badge-group`, `.badge-group-compact` |

Secondary outline and generic outline pick up `.night` contrast rules.

## Avatars — class reference

| Layer | Classes |
|-------|---------|
| Base | `.avatar` (+ optional `img`) |
| Size | `.avatar-xs`, `.avatar-s`, `.avatar-l`, `.avatar-xl` |
| Shape | `.avatar-circle`, `.avatar-rounded`, `.avatar-square` |
| Status dot | `.avatar-status` + `.avatar-status-online` / `-busy` / `-away` / `-offline` |
| Placeholder | `.avatar-placeholder` |
| Initials | `.avatar-initials` or `.avatar-initials-secondary` … `-error` |
| Overlap row | `.avatar-group` (+ `.avatar-group-xs` … `-xl`) |
| Deep stack | `.avatar-stack` (+ `.avatar-stack-xs` … `-xl`) + `.avatar-stack-counter` (+ `.avatar-stack-counter-xs` … `-xl`) |
| Focus ring | `.avatar-ring`, `.avatar-ring-secondary` … `-error`, `.avatar-ring-thick` |

On small screens, grouped/stacked avatars shrink in CSS — do not duplicate that logic in HTML.

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

### Responsive definition list style (stack on mobile)

Use `.xlist-none` / `.dlist-inline` on a `ul` if the design calls for inline separators on desktop only.

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

- Do NOT use `.table.stack-mobile` without `data-label` on cells — labels will be empty in the stacked layout.
- Do NOT nest `.badge-dismissible` without a `.badge-close` control — users need a focusable target.
- Do NOT put block content inside `.badge` expecting multi-line layout — `white-space: nowrap` is intentional.
- Do NOT mix `avatar-group` and `avatar-stack` semantics on the same element — wrappers differ (overlap and shadow).
- Do NOT assume `.triangle` or `.point` behave like flex boxes for arbitrary children.
- Do NOT forget `.night` on a parent when testing badge/avatar contrast in dark UI.

## Additional resources

- Cheatsheet: [ATOMS-CHEATSHEET.md](src/css/05-atoms/ATOMS-CHEATSHEET.md)
