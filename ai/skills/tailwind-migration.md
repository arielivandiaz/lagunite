# Tailwind → Lagunite Migration

> Mapping from Tailwind CSS utilities to Lagunite equivalents.
> Use when migrating Tailwind HTML to Lagunite, or when a user describes what they want in Tailwind terms.

**Full reference:** `docs/tailwind-to-lagunite.md`

---

## Critical rules (read first)

1. **`.row` / `.col` already set `display: flex`**. Never pair them with `d-flex`. They also set `flex-wrap: wrap; justify-content: center; align-items: center` as defaults.
2. **Only 2 breakpoints:** `x` (max-width 639px, mobile) and `d` (min-width 640px, desktop). All of Tailwind's `sm:` `md:` `lg:` `xl:` `2xl:` map to `d*`.
3. **Responsive prefix is merged, not a separate word:** `sm:flex-col` → `dcol`, not `d flex-col`.
4. **Many `.bg-*` also set text color.** Don't stack conflicting `.color-*` on the same element.
5. **Spacing is semantic, not numeric:** xs=4px, s=12px, base=24px, l=48px, xl=64px. Numeric gap classes (`.gap-1` … `.gap-16`) are also available.
6. **Use component classes instead of utility stacks** for cards, alerts, modals, navbars, badges, buttons.
7. **Mark gaps explicitly:** if no Lagunite class exists, use `style=""` and add `<!-- GAP: reason -->`.
8. **Class order:** base utilities → `x*` (mobile) → `d*` (desktop). Within: layout → spacing → typography → colors → borders → effects.

---

## Breakpoints

| Tailwind | Lagunite | Direction |
|---|---|---|
| `sm:foo` `md:foo` `lg:foo` `xl:foo` | `dfoo` | min-width 640px |
| `max-sm:foo` | `xfoo` | max-width 639px |

---

## Display

| Tailwind | Lagunite |
|---|---|
| `block` | `.d-block` |
| `inline-block` | `.d-inline-block` |
| `flex` | `.d-flex` (or `.row` / `.col`) |
| `grid` | `.d-grid` or `.grid` |
| `hidden` | `.d-none` |
| `invisible` | `.invisible` |

---

## Flex

| Tailwind | Lagunite |
|---|---|
| `flex flex-row` | `.row` |
| `flex flex-col` | `.col` |
| `flex flex-row-reverse` | `.rowr` |
| `flex flex-col-reverse` | `.colr` |
| `justify-center` | `.jc-c` |
| `justify-start` | `.jc-fs` |
| `justify-end` | `.jc-fe` |
| `justify-between` | `.jc-sb` |
| `justify-around` | `.jc-sa` |
| `justify-evenly` | `.jc-se` |
| `items-center` | `.ai-c` |
| `items-start` | `.ai-fs` |
| `items-end` | `.ai-fe` |
| `items-stretch` | `.ai-s` |
| `items-baseline` | `.ai-bl` |
| `self-center` | `.as-c` |
| `self-start` | `.as-fs` |
| `self-end` | `.as-fe` |
| `flex-1` | `.flex-1` |
| `flex-none` | `.flex-none` |
| `grow` | `.flex-grow` |
| `shrink-0` | `.flex-shrink-0` |
| `flex-wrap` | `.flex-wrap` |
| `flex-nowrap` | `.flex-nowrap` |
| `flex items-center justify-center` | `.flex-center` |

---

## Grid

| Tailwind | Lagunite |
|---|---|
| `grid` | `.grid` |
| `grid-cols-{n}` | `.grid-cols-{n}` |
| `col-span-{n}` | `.col-span-{n}` |
| `col-span-full` | `.col-span-full` |
| `gap-{n}` | `.gap-{n}` or `.gap-xs/s/l/xl` |
| `gap-x-{n}` | `.gap-h-{n}` |
| `gap-y-{n}` | `.gap-v-{n}` |
| `sm:grid-cols-3` | `.dgrid-cols-3` |

---

## Spacing scale

| Tailwind px | Lagunite name |
|---|---|
| 4px (1) | `xs` |
| 12px (3) | `s` |
| 24px (6) | *(none / base)* |
| 48px (12) | `l` |
| 64px (16) | `xl` |

### Margin / Padding pattern

`m-6` → `.marg` | `mx-3` → `.marg-h-s` | `py-1` → `.padd-v-xs` | `pl-6` → `.padd-lf`
`mt-auto` → `.marg-t-auto` | `m-auto` → `.marg-auto`

---

## Typography

| Tailwind | Lagunite |
|---|---|
| `text-xs/sm/lg/xl/2xl/3xl` | `.font-xs/s/l/xl/xxl/3xl` |
| `font-light/normal/medium/bold` | `.font-weight-0/1/2/3` (bold = `.bold`) |
| `italic` | `.italic` |
| `uppercase/lowercase/capitalize` | same |
| `text-center/left/right/justify` | `.ta-c/.ta-lf/.ta-rg/.ta-j` |
| `leading-tight/normal/loose` | `.lh-xs/.lh/.lh-xl` |
| `tracking-wide` | `.letter-spacing-l` |
| `font-mono` | `.font-mono` |

---

## Colors

| Tailwind | Lagunite |
|---|---|
| `text-{color}-{shade}` | `.color-{color}-{shade}` |
| `bg-{color}-{shade}` | `.bg-{color}-{shade}` |
| `border-{color}-{shade}` | `.border-color-{color}-{shade}` |
| `text-green-*` (success) | `.color-success` |
| `text-red-*` (error) | `.color-error` |
| `text-yellow-*` (warning) | `.color-warning` |

---

## Borders & Radius

| Tailwind | Lagunite |
|---|---|
| `border` | `.border` |
| `border-2/4` | `.border-w-2/4` |
| `border-dashed/dotted` | same |
| `rounded-sm/lg/xl/full` | `.border-r-s/l/xl/full` |
| `rounded` | `.border-r` |
| `rounded-none` | `.border-r-0` |

---

## Shadows

| Tailwind | Lagunite |
|---|---|
| `shadow-sm/lg/xl` | `.shadow-s/l/xl` |
| `shadow` | `.shadow` |
| `shadow-none` | `.shadow-none` |
| `shadow-inner` | `.shadow-inner` |

---

## Position

| Tailwind | Lagunite |
|---|---|
| `relative` | `.rel` |
| `absolute` | `.abs` |
| `fixed` | `.pos-fixed` |
| `sticky` | `.pos-sticky` |
| `inset-0` | `.pa-full` |
| `top-0/bottom-0/left-0/right-0` | `.top-0/.bottom-0/.left-0/.right-0` |
| `z-10/20` | `.z10/.z20` |

---

## Width / Height

| Tailwind | Lagunite |
|---|---|
| `w-full` | `.wp100` |
| `w-1/2` | `.wp50` |
| `w-screen` | `.w-full-screen` |
| `h-screen` | `.h-full-screen` |
| `max-w-prose` | `.container-prose` |
| `max-w-sm/md/lg/xl` | `.container-s/m/l/xl` |

---

## Components (replace utility stacks)

| Need | Lagunite component |
|---|---|
| Button | `.btn` + `.btn-primary/.btn-secondary/.btn-ghost` |
| Card | `.card > .card-header + .card-body + .card-footer` |
| Alert | `.alert.alert-success/warning/error/info` |
| Badge | `.badge.badge-primary/success/…` + `.badge-pill/.badge-outline` |
| Modal | `.modal-overlay.open > .modal > .modal-header + .modal-body + .modal-footer` |
| Navbar | `.navbar > .navbar-brand + .navbar-nav > .navbar-link` |
| Tooltip | `data-tooltip="text"` on element |

---

## Dark mode

| Tailwind | Lagunite |
|---|---|
| `dark:bg-gray-900` per element | `.night` on ancestor |

---

## Not supported in Lagunite

- `@container` queries
- `peer-*` / `group-*` selectors
- `has-*` selector variants
- Arbitrary values: `w-[200px]` `text-[#hex]`
- More than 2 breakpoints — sm/md/lg/xl/2xl all collapse to `d*`
