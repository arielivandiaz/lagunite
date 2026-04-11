# Lagunite atoms cheatsheet

Concise reference for **tables**, **lists**, **figures**, **badges**, and **avatars** (`05-atoms`). Buttons and inputs live in other atom files.

**Responsive prefixes:** `x` = mobile (max-width: 639px), `d` = desktop (min-width: 640px).

---

## `03-table.css` (#05-03-01 … #05-03-12)

| ID | Classes / selectors | What it does |
|----|---------------------|--------------|
| #05-03-01 | `table`, `.table` | `border-collapse: collapse`, full width, token-based `th`/`td` padding (`--space-3` / `--space-4`), themed thead/tfoot borders |
| #05-03-02 | `.table.size-s` / `.size-l` / `.size-xl` | Smaller or larger cell padding and font size |
| #05-03-03 | `.table.main` | Primary-tinted thead/tfoot borders; alternating tbody rows use primary RGB tint |
| | `.table.primary` … `.table.error` | Filled header (+ matching tfoot border) per semantic color; combine `.alt` on `primary`…`error` for transparent header, colored text/border |
| #05-03-04 | `.table.striped` | Zebra rows (primary-tinted odd rows); `.striped.primary` … `.striped.error` for color-specific tints |
| #05-03-05 | `.table.bordered` | 1px borders on table/cells; add `.primary` … `.error` for border color |
| #05-03-06 | `.table.hover` | Row hover backgrounds (default primary; pair `.secondary` … `.error`); `.hover-cell` highlights individual cells (+ scale, bold) |
| #05-03-07 | `.table.card` | Bordered, rounded, shadow; thead uses primary (override with `.secondary` … `.error`) |
| #05-03-08 | `.table.divided` | Row bottom borders (default or `.primary`…`.error`); `.divided-thick` uses 2px |
| #05-03-09 | `.valign-top` / `.valign-middle` / `.valign-bottom` | On `th`/`td` inside `.table` |
| #05-03-10 | `.table-responsive` | Horizontal scroll; inner `.table` min-width 37.5rem. ≤639px: default `.table` cells get tighter padding; `.table.compact` even tighter |
| | `.table.stack-mobile` | ≤639px: card-like stacked rows; `td::before` uses `content: attr(data-label)` — set `data-label` on cells |
| #05-03-11 | `tr.selected` / `.disabled` / `.highlighted` | Row states inside `.table tbody` |
| | `tr.success-row` / `.warning-row` / `.error-row` | Semantic row backgrounds |
| #05-03-12 | `th.sortable` | Pointer, ⇅ hint; `.sort-asc` / `.sort-desc` show ↑ / ↓ |

---

## `04-lists.css` (#05-04-01 … #05-04-05)

| ID | Classes | What it does |
|----|---------|--------------|
| #05-04-01 | `ul.alt`, `ol.alt` | Zebra: even `li` get primary RGB tint |
| | `ul.bordered`, `ol.bordered` | Bottom border between items (`--color-primary`) |
| #05-04-02 | `.list-none` | `list-style: none` |
| | `.list-inline` | No bullets; `li` displayed inline |
| | `.list-spaced` | Vertical gap between items (`li + li` margin-top) |
| #05-04-03 | `.list-disc` / `.list-circle` / `.list-square` | Unordered marker types |
| #05-04-04 | `.list-decimal` / `.list-alpha` / `.list-roman` | Ordered marker types (decimal, lower-alpha, lower-roman) |
| | `.list-inside` / `.list-outside` | Marker position |
| #05-04-05 | `.xlist-none`, `.xlist-inline` | Apply at ≤639px |
| | `.dlist-none`, `.dlist-inline` | Apply at ≥640px |

---

## `05-figures.css` (#05-05-01 … #05-05-05)

| ID | Classes | What it does |
|----|---------|--------------|
| #05-05-01 | `hr.size-s` … `hr.size-xxl` | Thicker / colored rules (`size-s` tints border with `--color-primary-light`; larger sizes increase `border-width`) |
| #05-05-02 | `.line-v` | Vertical line (2px left border, primary); `.size-s` … `.size-xxl` narrow or widen |
| #05-05-03 | `.square`, `.rounded`, `.circle`, `.tear`, `.triangle` | Filled primitives (primary bg, centered content except triangle); default 50×50px; `.size-s` / `.size-l` scale. `.tear` uses asymmetric radius. Triangle is CSS borders (no inner text layout) |
| #05-05-04 | `.point` | Small filled dot; `.size-s` / `.size-l` |
| #05-05-05 | `.blob-1` … `.blob-5` | Organic `border-radius` presets (combine with a sized box / background) |

*Also defined for shared figure styling: `.drounded`, `.xrounded` (grouped with primitives in source).*

---

## `06-badges.css` (#05-06-01 … #05-06-15)

| ID | Classes | What it does |
|----|---------|--------------|
| #05-06-01 | `.badge` | Inline-flex pill base (gray fill, xs typography, radius) |
| #05-06-02 | `.badge-xs` / `.badge-s` / `.badge-l` | Size scale |
| #05-06-03–05 | `.badge-primary` … `.badge-error` | Solid semantic fills; pair `.badge-outline` for transparent + border (per color) |
| #05-06-06 | `.badge-outline` | Neutral outline; `.night` tweaks |
| | `.night .badge-secondary` | Darker secondary fill / outline text |
| #05-06-07 | `.badge-pill` | Full radius; padding adjusts per size |
| #05-06-08 | `.badge-dot` | Leading dot via `::before` |
| #05-06-09 | `.badge-icon` | Tighter gap; sizes `svg` / `i` |
| #05-06-10 | `.badge-dismissible`, `.badge-close` | Close control (`×`); nest `.badge-close` inside badge |
| #05-06-11 | `.badge-counter` | Tabular nums, min-width for counts |
| #05-06-12 | `.badge-absolute`, `.badge-absolute-top-right` … `-bottom-left` | Corner offsets for overlays |
| #05-06-13 | `.badge-group`, `.badge-group-compact` | Inline flex row of badges with gap |
| #05-06-14 | `.badge-primary-light`, `.badge-success-light`, `.badge-info-light`, `.badge-warning-light`, `.badge-error-light` | Soft fills; `.night` inverts to dark surfaces |
| #05-06-15 | `@media (max-width: 639px)` | Slightly smaller badge font sizes |

**Combos:** semantic + `.badge-outline` + `.badge-pill` + `.badge-dot` as needed.

---

## `07-avatars.css` (#05-07-01 … #05-07-11)

| ID | Classes | What it does |
|----|---------|--------------|
| #05-07-01 | `.avatar` | 40px (`--space-10`) circle, neutral surface; `img` cover |
| | `.night .avatar` | Dark theme surface/text |
| #05-07-02 | `.avatar-xs` (24px), `.avatar-s` (32px), `.avatar-l` (48px), `.avatar-xl` (64px) | Size scale |
| #05-07-03 | `.avatar-circle`, `.avatar-rounded`, `.avatar-square` | Shape overrides |
| #05-07-04 | `.avatar-status` | Corner dot; `.avatar-status-online` / `-busy` / `-away` / `-offline` colors |
| #05-07-05 | `.avatar-placeholder` | Gradient placeholder; optional `svg`/`i` at 50% size |
| #05-07-06 | `.avatar-initials` | Primary gradient + inverse text |
| | `.avatar-initials-secondary` … `-error` | Semantic gradient variants |
| #05-07-07 | `.avatar-group` | Overlapping row (reverse order); border matches surface; hover lift |
| #05-07-08 | `.avatar-stack` | Stronger overlap + shadow; `.avatar-stack-counter` for “+N” |
| #05-07-09 | `.avatar-group-xs` … `-xl`, `.avatar-stack-xs` … `-xl` | Border width + overlap tuning |
| | `.avatar-stack-counter-xs` … `-xl` | Counter chip dimensions (use with matching stack) |
| #05-07-10 | `.avatar-ring`, `.avatar-ring-secondary` … `-error`, `.avatar-ring-thick` | Outer ring (border + padding trick) |
| #05-07-11 | ≤639px | Groups/stacks shrink avatars to 32px, tighten overlap; smaller status dot |

---

## Quick patterns

**Sortable table**

```html
<table class="table primary hover divided">
  <thead><tr><th class="sortable sort-asc">Name</th></tr></thead>
  <tbody>...</tbody>
</table>
```

**Stacked mobile table**

```html
<td data-label="Email">user@example.com</td>
```

**Dismissible badge**

```html
<span class="badge badge-primary badge-dismissible">Beta <button type="button" class="badge-close" aria-label="Remove"></button></span>
```

**Avatar stack + counter**

```html
<div class="avatar-stack avatar-stack-s">
  <span class="avatar">…</span>
  <span class="avatar">…</span>
  <span class="avatar-stack-counter avatar-stack-counter-s">+4</span>
</div>
```

Wrap the document root or a section with `.night` to apply night-mode rules for badges and avatars.
