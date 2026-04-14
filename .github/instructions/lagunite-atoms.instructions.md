---
applyTo: "**/*.html,src/css/**/*.css,lagunite-web/src/**/*.astro"
---

# Lagunite Atom Utilities

Reference implementation: `src/css/05-atoms/` (`03-table.css`, `04-lists.css`, `05-figures.css`, `06-badges.css`, `07-avatars.css`). Cheatsheet: [ATOMS-CHEATSHEET.md](src/css/05-atoms/ATOMS-CHEATSHEET.md).

## Core rules

1. **Tables** use the `.table` class. Semantic color is expressed by chaining: `.table.primary.striped.bordered`.
2. **Lists** use either native `ul`/`ol` modifiers (`ul.alt`, `ol.bordered`) or utility classes (`.list-inline`, `.list-spaced`).
3. **Figures** (`hr`, `.line-v`, `.square`, `.triangle`, `.point`, `.blob-*`) are mostly decorative.
4. **Badges** are `inline-flex`; combine `.badge`, size, semantic color, and optional `.badge-outline`, `.badge-pill`, `.badge-dot`, `.badge-icon`.
5. **Avatars** default to a 40px circle; add size/shape classes on the same node.
6. **Responsive:** list utilities use `xlist-*` (mobile) and `dlist-*` (desktop).
7. **Night mode:** add `.night` on an ancestor.

## Tables — class reference

| Pattern | Classes |
|--------|---------|
| Base | `.table` |
| Density | `.size-s`, `.size-l`, `.size-xl` |
| Header/body theme | `.main`, `.primary`, `.secondary`, `.tertiary`, `.success`, `.warning`, `.error` |
| Zebra | `.striped` |
| Grid lines | `.bordered` |
| Interaction | `.hover` (row), `.hover-cell` |
| Card chrome | `.card` |
| Row separators | `.divided`, `.divided-thick` |
| Overflow | `.table-responsive` wrapper |
| Mobile stack | `.table.stack-mobile` + `data-label` on each `td` |
| Row state | `tr.selected`, `.disabled`, `.highlighted`, `.success-row`, `.warning-row`, `.error-row` |
| Sort | `th.sortable`, `.sort-asc`, `.sort-desc` |

**Do not** forget `data-label` when using `.stack-mobile`.

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

## Badges — class reference

| Layer | Classes |
|-------|---------|
| Base | `.badge` |
| Size | `.badge-xs`, `.badge-s`, `.badge-l` |
| Solid | `.badge-primary`, `.badge-secondary`, `.badge-success`, `.badge-info`, `.badge-warning`, `.badge-error` |
| Soft | `.badge-primary-light`, `.badge-success-light`, `.badge-info-light`, `.badge-warning-light`, `.badge-error-light` |
| Outline | `.badge-outline` alone or after semantic |
| Shape | `.badge-pill` |
| Leading dot | `.badge-dot` |
| Dismissible | `.badge-dismissible` + child `<button class="badge-close">` |
| Numeric | `.badge-counter` |
| Overlay | `.badge-absolute-top-right`, `.badge-absolute-top-left`, `.badge-absolute-bottom-right`, `.badge-absolute-bottom-left` |
| Toolbar | `.badge-group`, `.badge-group-compact` |

## Avatars — class reference

| Layer | Classes |
|-------|---------|
| Base | `.avatar` |
| Size | `.avatar-xs`, `.avatar-s`, `.avatar-l`, `.avatar-xl` |
| Shape | `.avatar-circle`, `.avatar-rounded`, `.avatar-square` |
| Status dot | `.avatar-status` + `.avatar-status-online` / `-busy` / `-away` / `-offline` |
| Placeholder | `.avatar-placeholder` |
| Initials | `.avatar-initials` or `.avatar-initials-secondary` … `-error` |
| Overlap row | `.avatar-group` (+ `.avatar-group-xs` … `-xl`) |
| Deep stack | `.avatar-stack` + `.avatar-stack-counter` |
| Focus ring | `.avatar-ring`, `.avatar-ring-secondary` … `-error`, `.avatar-ring-thick` |
