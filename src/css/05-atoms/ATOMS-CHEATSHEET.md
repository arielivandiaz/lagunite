# Lagunite atoms cheatsheet

Concise reference for **tables**, **lists**, **figures**, **badges**, **avatars**, and **chips** (`05-atoms`). Buttons and inputs live in other atom files.

**Responsive prefixes:** `x` = mobile (max-width: 639px), `d` = desktop (min-width: 640px).

---

## `03-table.css` (#05-03-01 ... #05-03-12)

| ID | Classes / selectors | What it does |
|----|---------------------|--------------|
| #05-03-01 | `table`, `.table` | `border-collapse: collapse`, full width, token-based `th`/`td` padding (`--space-3` / `--space-4`), themed thead/tfoot borders |
| #05-03-02 | `.table.size-s` / `.size-l` / `.size-xl` | Smaller or larger cell padding and font size |
| #05-03-03 | `.table.main` | Primary-tinted thead/tfoot borders; alternating tbody rows use primary RGB tint |
| | `.table.primary` ... `.table.error` | Filled header (+ matching tfoot border) per semantic color; combine `.alt` on `primary`...`error` for transparent header, colored text/border |
| #05-03-04 | `.table.striped` | Zebra rows (primary-tinted odd rows); `.striped.primary` ... `.striped.error` for color-specific tints |
| #05-03-05 | `.table.bordered` | 1px borders on table/cells; add `.primary` ... `.error` for border color |
| #05-03-06 | `.table.hover` | Row hover backgrounds (default primary; pair `.secondary` ... `.error`); `.hover-cell` highlights individual cells (+ scale, bold) |
| #05-03-07 | `.table.card` | Bordered, rounded, shadow; thead uses primary (override with `.secondary` ... `.error`) |
| #05-03-08 | `.table.divided` | Row bottom borders (default or `.primary`...`.error`); `.divided-thick` uses 2px |
| #05-03-09 | `.valign-top` / `.valign-middle` / `.valign-bottom` | On `th`/`td` inside `.table` |
| #05-03-10 | `.table-responsive` | Horizontal scroll; inner `.table` min-width 37.5rem. <=639px: default `.table` cells get tighter padding; `.table.compact` even tighter |
| | `.table.stack-mobile` | <=639px: card-like stacked rows; `td::before` uses `content: attr(data-label)` - set `data-label` on cells |
| #05-03-11 | `tr.selected` / `.disabled` / `.highlighted` | Row states inside `.table tbody` |
| | `tr.success-row` / `.warning-row` / `.error-row` | Semantic row backgrounds |
| #05-03-12 | `th.sortable` | Pointer, sorting hint, and `.sort-asc` / `.sort-desc` arrows |

---

## `04-lists.css` (#05-04-01 ... #05-04-05)

| ID | Classes | What it does |
|----|---------|--------------|
| #05-04-01 | `ul.alt`, `ol.alt` | Zebra rows for list items |
| | `ul.bordered`, `ol.bordered` | Bottom border between items |
| #05-04-02 | `.list-none` | `list-style: none` |
| | `.list-inline` | Horizontal inline list |
| | `.list-spaced` | Vertical gap between items |
| #05-04-03 | `.list-disc` / `.list-circle` / `.list-square` | Unordered marker styles |
| #05-04-04 | `.list-decimal` / `.list-alpha` / `.list-roman` | Ordered marker styles |
| | `.list-inside` / `.list-outside` | Marker position |
| #05-04-05 | `.xlist-none`, `.xlist-inline` | Mobile-only list overrides |
| | `.dlist-none`, `.dlist-inline` | Desktop-only list overrides |

---

## `05-figures.css` (#05-05-01 ... #05-05-05)

| ID | Classes | What it does |
|----|---------|--------------|
| #05-05-01 | `hr.size-s` ... `hr.size-xxl` | Thicker / colored horizontal rules |
| #05-05-02 | `.line-v` | Vertical line with size variants |
| #05-05-03 | `.square`, `.rounded`, `.circle`, `.tear`, `.triangle` | Simple filled primitives |
| #05-05-04 | `.point` | Small filled dot |
| #05-05-05 | `.blob-1` ... `.blob-5` | Organic border-radius presets |

---

## `06-badges.css` (#05-06-01 ... #05-06-15)

| ID | Classes | What it does |
|----|---------|--------------|
| #05-06-01 | `.badge` | Inline-flex badge base |
| #05-06-02 | `.badge-xs` / `.badge-s` / `.badge-l` | Badge size scale |
| #05-06-03 to #05-06-05 | `.badge-primary` ... `.badge-error` | Solid semantic badges |
| #05-06-06 | `.badge-outline` | Outline badge style |
| #05-06-07 | `.badge-pill` | Fully rounded badge |
| #05-06-08 | `.badge-dot` | Leading dot via pseudo-element |
| #05-06-09 | `.badge-icon` | Tighter icon/text pairing |
| #05-06-10 | `.badge-dismissible`, `.badge-close` | Dismissible badge pattern |
| #05-06-11 | `.badge-counter` | Counter badge with numeric width guard |
| #05-06-12 | `.badge-absolute-*` | Corner overlay badge helpers |
| #05-06-13 | `.badge-group`, `.badge-group-compact` | Badge cluster wrappers |
| #05-06-14 | `.badge-*-light` | Soft semantic badge variants |
| #05-06-15 | mobile rules | Slightly smaller badge sizing at small widths |

---

## `07-avatars.css` (#05-07-01 ... #05-07-11)

| ID | Classes | What it does |
|----|---------|--------------|
| #05-07-01 | `.avatar` | Base 40px avatar shell |
| #05-07-02 | `.avatar-xs` / `.avatar-s` / `.avatar-l` / `.avatar-xl` | Avatar size scale |
| #05-07-03 | `.avatar-circle` / `.avatar-rounded` / `.avatar-square` | Shape overrides |
| #05-07-04 | `.avatar-status` + state classes | Status indicator dot |
| #05-07-05 | `.avatar-placeholder` | Placeholder visual |
| #05-07-06 | `.avatar-initials*` | Initials-based semantic avatars |
| #05-07-07 | `.avatar-group` | Overlapping avatar row |
| #05-07-08 | `.avatar-stack`, `.avatar-stack-counter` | Denser stacked avatar pattern |
| #05-07-09 | group/stack size variants | Overlap and border tuning |
| #05-07-10 | `.avatar-ring*` | Accent/focus ring variants |
| #05-07-11 | mobile rules | Smaller grouped avatars on mobile |

---

## `08-chips.css` (#05-08-01 ... #05-08-08)

| ID | Classes | What it does |
|----|---------|--------------|
| #05-08-01 | `.chip` | Standalone semantic pill label. Inline-flex, rounded, token-based padding, bold small text, translucent backdrop blur. |
| #05-08-02 | `.chip-success` / `.chip-danger` / `.chip-warning` / `.chip-info` | Semantic glass-style variants using chip tokens from `03-theme.css`. |
| #05-08-03 | `.chip-solid` + semantic class | Switches to filled high-contrast backgrounds per semantic variant. |
| #05-08-04 | `.chip-outline` | Keeps transparent background and relies on colored border/text. Combine with semantic class. |
| #05-08-05 | `.chip-s` / `.chip-l` | Compact or larger chip sizes. |
| #05-08-06 | `.bgg` + semantic class | Gradient background modifier. Works on both base and solid chips. |
| #05-08-07 | `.shadow` + semantic class | Adds colored drop shadow that matches chip hue. Solid chips use a stronger glow. |
| #05-08-08 | `.lit` | Adds inner highlight and inset glow. Combine freely with `.shadow`, `.bgg`, `.chip-solid`. |

**Common combos**

| Goal | Classes |
|------|---------|
| Glass status | `.chip chip-success` |
| Strong pill | `.chip chip-solid chip-danger` |
| Outline tag | `.chip chip-outline chip-info` |
| Premium gradient | `.chip chip-solid bgg lit shadow chip-success` |
| Small filter tag | `.chip chip-s chip-warning` |

## `09-tags.css` (#05-09-01 ... #05-09-06)

| ID | Classes | What it does |
|----|---------|--------------|
| #05-09-01 | `.tag` | Lightweight taxonomy label base. |
| | `.tag-rounded` | Full pill radius variant. |
| #05-09-02 | `.tag-xs` / `.tag-s` / `.tag-l` | Size variants for compact or prominent labels. |
| #05-09-03 | `.tag-primary` / `.tag-secondary` / `.tag-success` / `.tag-info` / `.tag-warning` / `.tag-error` | Semantic color variants. |
| #05-09-04 | `.tag-solid` | Strong filled style. |
| | `.tag-outline` | Transparent outlined style. |
| | `.tag-dot` | Leading status dot indicator. |
| #05-09-05 | `.tag-clickable` | Hover/focus interaction states. |
| | `.tag-removable` + `.tag-remove` | Removable tag pattern with inline close control. |
| #05-09-06 | `.tag-group` | Wrapping group helper for multiple tags. |
| | `.night .tag...` | Night-mode support for all semantic variants. |

## Quick patterns

**Sortable table**

```html
<table class="table primary hover divided">
  <thead><tr><th class="sortable sort-asc">Name</th></tr></thead>
  <tbody>...</tbody>
</table>
```

**Dismissible badge**

```html
<span class="badge badge-primary badge-dismissible">Beta <button type="button" class="badge-close" aria-label="Remove"></button></span>
```

**Avatar stack + counter**

```html
<div class="avatar-stack avatar-stack-s">
  <span class="avatar">...</span>
  <span class="avatar">...</span>
  <span class="avatar-stack-counter avatar-stack-counter-s">+4</span>
</div>
```

**Premium chip**

```html
<span class="chip chip-solid bgg lit shadow chip-success">Paid</span>
<span class="chip chip-outline chip-info">Review</span>
```

Wrap the document root or a section with `.night` to apply night-mode rules for supported atoms.
