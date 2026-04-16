# Tailwind → Lagunite Migration Guide

> Reference for translating Tailwind CSS utilities to Lagunite equivalents.
> Lagunite is utility-first but uses **semantic scale names** and **descriptive prefixes** instead of Tailwind-style abbreviations.

---

## Key Conceptual Differences

| Concept | Tailwind | Lagunite |
|---|---|---|
| **Breakpoints** | 5 breakpoints: `sm` `md` `lg` `xl` `2xl` | 2 breakpoints: `x` (mobile ≤639px) `d` (desktop ≥640px) |
| **Responsive prefix** | Before class: `sm:flex` | Merged prefix: `drow` `xcol` |
| **Flex setup** | `flex flex-row` (two classes) | `.row` (sets `display:flex` + defaults in one class) |
| **Spacing scale** | Numeric (1=4px, 2=8px…) | Semantic (`xs`=4px, `s`=12px, base=24px, `l`=48px, `xl`=64px) |
| **Components** | Not included — compose utilities | Pre-built: `.card` `.modal` `.navbar` `.alert` etc. |
| **Dark mode** | `dark:` prefix per utility | `.night` on an ancestor element |
| **Background color** | `bg-*` only sets background | Many `.bg-*` set **both** background AND text color |

---

## Breakpoints

| Tailwind | Lagunite | Notes |
|---|---|---|
| `sm:class` | `dclass` | min-width: 640px |
| `max-sm:class` | `xclass` | max-width: 639px |
| `md:class` | `dclass` | No 768px breakpoint — use `d` |
| `lg:class` | `dclass` | No 1024px breakpoint — use `d` |
| `xl:class` | `dclass` | No 1280px breakpoint — use `d` |

> Lagunite has only 2 breakpoints. Mobile-first patterns with `sm:` map to `d*`. Anything that applies "below sm" maps to `x*`.

---

## Display

| Tailwind | Lagunite |
|---|---|
| `block` | `.d-block` |
| `inline` | `.d-inline` |
| `inline-block` | `.d-inline-block` |
| `flex` | `.d-flex` (but prefer `.row` / `.col` for flex containers) |
| `inline-flex` | `.d-inline-flex` |
| `grid` | `.d-grid` (or `.grid` for full grid container) |
| `hidden` | `.d-none` |
| `invisible` | `.invisible` |
| `contents` | `.d-contents` |

Responsive: prefix with `x` (mobile) or `dd` (desktop):
- `hidden md:block` → `.d-none .dd-block`
- `block sm:hidden` → `.d-block .dd-none`

---

## Flex

> **Important:** `.row` and `.col` already set `display: flex; flex-wrap: wrap; justify-content: center; align-items: center`. Never combine with `d-flex`.

### Direction

| Tailwind | Lagunite |
|---|---|
| `flex flex-row` | `.row` |
| `flex flex-col` | `.col` |
| `flex flex-row-reverse` | `.rowr` |
| `flex flex-col-reverse` | `.colr` |
| `sm:flex-row` (responsive) | `.drow` |
| `sm:flex-col` (responsive) | `.dcol` |
| `max-sm:flex-col` | `.xcol` |

### Justify Content

| Tailwind | Lagunite |
|---|---|
| `justify-center` | `.jc-c` |
| `justify-start` | `.jc-fs` |
| `justify-end` | `.jc-fe` |
| `justify-between` | `.jc-sb` |
| `justify-around` | `.jc-sa` |
| `justify-evenly` | `.jc-se` |

Responsive: `sm:justify-between` → `.djc-sb` / `max-sm:justify-center` → `.xjc-c`

### Align Items

| Tailwind | Lagunite |
|---|---|
| `items-center` | `.ai-c` |
| `items-start` | `.ai-fs` |
| `items-end` | `.ai-fe` |
| `items-stretch` | `.ai-s` |
| `items-baseline` | `.ai-bl` |

Responsive: `sm:items-center` → `.dai-c`

### Align Self

| Tailwind | Lagunite |
|---|---|
| `self-center` | `.as-c` |
| `self-start` | `.as-fs` |
| `self-end` | `.as-fe` |
| `self-stretch` | `.as-s` |

### Flex Items

| Tailwind | Lagunite |
|---|---|
| `flex-1` | `.flex-1` |
| `flex-auto` | `.flex-auto` |
| `flex-initial` | `.flex-initial` |
| `flex-none` | `.flex-none` |
| `grow` | `.flex-grow` |
| `grow-0` | `.flex-grow-0` |
| `shrink` | `.flex-shrink` |
| `shrink-0` | `.flex-shrink-0` |
| `flex-wrap` | `.flex-wrap` |
| `flex-nowrap` | `.flex-nowrap` |

### Order

| Tailwind | Lagunite |
|---|---|
| `order-first` | `.order-first` |
| `order-last` | `.order-last` |
| `order-none` | `.order-none` |
| `order-1` … `order-5` | `.order-1` … `.order-5` |

### Shortcuts

| Tailwind | Lagunite |
|---|---|
| `flex items-center justify-center` | `.flex-center` |
| `flex justify-center` | `.flex-center-h` |
| `flex items-center` | `.flex-center-v` |

---

## Grid

| Tailwind | Lagunite |
|---|---|
| `grid` | `.grid` |
| `grid-cols-1` … `grid-cols-12` | `.grid-cols-1` … `.grid-cols-12` |
| `col-span-1` … `col-span-12` | `.col-span-1` … `.col-span-12` |
| `col-span-full` | `.col-span-full` |
| `row-span-1` … `row-span-6` | `.row-span-1` … `.row-span-6` |
| `col-start-1` … `col-start-6` | `.col-start-1` … `.col-start-6` |
| `col-end-1` … `col-end-7` | `.col-end-1` … `.col-end-7` |
| `grid-rows-1` … `grid-rows-6` | `.grid-rows-1` … `.grid-rows-6` |
| `grid-flow-row` | `.grid-flow-row` |
| `grid-flow-col` | `.grid-flow-col` |
| `grid-flow-dense` | `.grid-flow-dense` |

Responsive: `sm:grid-cols-3` → `.dgrid-cols-3` / `max-sm:grid-cols-1` → `.xgrid-cols-1`

### Gap (same class names work for both flex and grid)

| Tailwind | Lagunite | Approx. px |
|---|---|---|
| `gap-1` | `.gap-xs` or `.gap-1` | 4px |
| `gap-3` | `.gap-s` or `.gap-3` | 12px |
| `gap-6` | `.gap` or `.gap-6` | 24px |
| `gap-12` | `.gap-l` or `.gap-12` | 48px |
| `gap-16` | `.gap-xl` or `.gap-16` | 64px |
| `gap-x-4` | `.gap-h-4` | column-gap |
| `gap-y-4` | `.gap-v-4` | row-gap |

---

## Spacing

### Scale mapping

| Tailwind | Lagunite name | px |
|---|---|---|
| `1` (4px) | `xs` | 4px |
| `3` (12px) | `s` | 12px |
| `6` (24px) | *(base)* | 24px |
| `12` (48px) | `l` | 48px |
| `16` (64px) | `xl` | 64px |

### Margin

| Tailwind | Lagunite |
|---|---|
| `m-auto` | `.marg-auto` |
| `m-0` | `.marg-0` |
| `m-1` | `.marg-xs` |
| `m-3` | `.marg-s` |
| `m-6` | `.marg` |
| `m-12` | `.marg-l` |
| `m-16` | `.marg-xl` |
| `mx-*` | `.marg-h-*` |
| `my-*` | `.marg-v-*` |
| `mt-*` | `.marg-t-*` |
| `mb-*` | `.marg-b-*` |
| `ml-*` | `.marg-lf-*` |
| `mr-*` | `.marg-rg-*` |
| `mt-0` | `.marg-t-0` |

### Padding

| Tailwind | Lagunite |
|---|---|
| `p-0` | `.padd-0` |
| `p-1` | `.padd-xs` |
| `p-3` | `.padd-s` |
| `p-6` | `.padd` |
| `p-12` | `.padd-l` |
| `p-16` | `.padd-xl` |
| `px-*` | `.padd-h-*` |
| `py-*` | `.padd-v-*` |
| `pt-*` | `.padd-t-*` |
| `pb-*` | `.padd-b-*` |
| `pl-*` | `.padd-lf-*` |
| `pr-*` | `.padd-rg-*` |

---

## Typography

| Tailwind | Lagunite |
|---|---|
| `text-xs` | `.font-xs` |
| `text-sm` | `.font-s` |
| `text-base` | *(default)* |
| `text-lg` | `.font-l` |
| `text-xl` | `.font-xl` |
| `text-2xl` | `.font-xxl` |
| `text-3xl` | `.font-3xl` |
| `font-light` | `.font-weight-0` |
| `font-normal` | `.font-weight-1` |
| `font-medium` | `.font-weight-2` |
| `font-bold` | `.bold` or `.font-weight-3` |
| `italic` | `.italic` |
| `uppercase` | `.uppercase` |
| `lowercase` | `.lowercase` |
| `capitalize` | `.capitalize` |
| `text-center` | `.ta-c` |
| `text-left` | `.ta-lf` |
| `text-right` | `.ta-rg` |
| `text-justify` | `.ta-j` |
| `leading-tight` | `.lh-xs` |
| `leading-snug` | `.lh-s` |
| `leading-normal` | `.lh` |
| `leading-relaxed` | `.lh-l` |
| `leading-loose` | `.lh-xl` |
| `tracking-tight` | `.letter-spacing-xs` |
| `tracking-normal` | `.letter-spacing` |
| `tracking-wide` | `.letter-spacing-l` |
| `tracking-widest` | `.letter-spacing-xxl` |
| `font-sans` | `.font-sans` |
| `font-mono` | `.font-mono` |

---

## Colors

### Text colors

| Tailwind | Lagunite |
|---|---|
| `text-gray-500` | `.color-gray-500` |
| `text-blue-600` | `.color-blue-600` |
| `text-green-500` | `.color-success` |
| `text-red-500` | `.color-error` |
| `text-yellow-500` | `.color-warning` |
| `text-white` | `.color-almost-white` |
| `text-black` | `.color-almost-black` |

### Backgrounds

> **Warning:** Many `.bg-*` utilities in Lagunite set both background AND foreground color. Do not stack conflicting `.color-*` on the same element.

| Tailwind | Lagunite |
|---|---|
| `bg-white` | `.bg-white` |
| `bg-black` | `.bg-black` |
| `bg-gray-50` | `.bg-gray-50` |
| `bg-gray-100` | `.bg-1` or `.bg-gray-100` |
| `bg-blue-500` | `.bg-blue-500` |
| `bg-green-500` | `.bg-success` |
| `bg-red-500` | `.bg-error` |
| `bg-yellow-500` | `.bg-warning` |

---

## Borders

| Tailwind | Lagunite |
|---|---|
| `border` | `.border` |
| `border-0` | `.border-w-0` |
| `border-2` | `.border-w-2` |
| `border-4` | `.border-w-4` |
| `border-t` | `.border-w-t-1` |
| `border-b` | `.border-w-b-1` |
| `border-l` | `.border-w-lf-1` |
| `border-r` | `.border-w-rg-1` |
| `border-solid` | `.border-solid` |
| `border-dashed` | `.border-dashed` |
| `border-dotted` | `.border-dotted` |
| `border-none` | `.border-none` |
| `border-gray-200` | `.border-color-gray-200` |
| `border-blue-500` | `.border-color-blue-500` |

### Border Radius

| Tailwind | Lagunite |
|---|---|
| `rounded-sm` | `.border-r-s` |
| `rounded` | `.border-r` |
| `rounded-lg` | `.border-r-l` |
| `rounded-xl` | `.border-r-xl` |
| `rounded-full` | `.border-r-full` |
| `rounded-none` | `.border-r-0` |

---

## Shadows

| Tailwind | Lagunite |
|---|---|
| `shadow-none` | `.shadow-none` |
| `shadow-sm` | `.shadow-s` |
| `shadow` | `.shadow` |
| `shadow-lg` | `.shadow-l` |
| `shadow-xl` | `.shadow-xl` |
| `shadow-inner` | `.shadow-inner` |

---

## Position

| Tailwind | Lagunite |
|---|---|
| `static` | `.pos-static` |
| `relative` | `.rel` or `.pos-relative` |
| `absolute` | `.abs` or `.pos-absolute` |
| `fixed` | `.pos-fixed` |
| `sticky` | `.pos-sticky` |
| `inset-0` | `.pa-full` |
| `inset-x-0` | `.pa-h` |
| `inset-y-0` | `.pa-v` |
| `top-0` | `.top-0` |
| `bottom-0` | `.bottom-0` |
| `left-0` | `.left-0` |
| `right-0` | `.right-0` |
| `top-auto` | `.top-auto` |
| `z-0` | `.z0` |
| `z-10` | `.z10` |
| `z-20` | `.z20` |

---

## Width & Height

| Tailwind | Lagunite |
|---|---|
| `w-auto` | `.w-auto` |
| `h-auto` | `.h-auto` |
| `w-full` (100%) | `.wp100` |
| `w-1/2` | `.wp-1\/2` → use `.wp50` |
| `w-1/3` | `.wp-1\/3` |
| `w-2/3` | `.wp-2\/3` |
| `w-screen` | `.w-full-screen` |
| `h-screen` | `.h-full-screen` |
| `min-w-full` | *(use `.wp100`)* |
| `max-w-xs` | `.container-xs` (480px) |
| `max-w-sm` | `.container-s` (640px) |
| `max-w-md` | `.container-m` (768px) |
| `max-w-lg` | `.container-l` (1024px) |
| `max-w-xl` | `.container-xl` (1280px) |
| `max-w-prose` | `.container-prose` (65ch) |

---

## Opacity

| Tailwind | Lagunite |
|---|---|
| `opacity-0` | `.opacity-0` |
| `opacity-25` | `.opacity-25` |
| `opacity-50` | `.opacity-50` |
| `opacity-75` | `.opacity-75` |
| `opacity-100` | `.opacity-100` |

---

## Overflow

| Tailwind | Lagunite |
|---|---|
| `overflow-hidden` | `.overflow-hidden` |
| `overflow-auto` | `.overflow-auto` |
| `overflow-scroll` | *(use `.overflow-auto`)* |

---

## Transforms

| Tailwind | Lagunite |
|---|---|
| `scale-50` | `.scale-50` |
| `scale-100` | `.scale-100` |
| `scale-150` | `.scale-150` |
| `rotate-45` | `.rotate-45` |
| `rotate-90` | `.rotate-90` |
| `rotate-180` | `.rotate-180` |
| `translate-x-*` | `.translate-x-*` |
| `translate-y-*` | `.translate-y-*` |
| `skew-x-*` | `.skew-x-*` |
| `skew-y-*` | `.skew-y-*` |
| `origin-center` | `.origin-center` |

---

## Transitions & Animations

| Tailwind | Lagunite |
|---|---|
| `transition` | `.transition` |
| `transition-none` | `.transition-none` |
| `transition-colors` | `.transition-colors` |
| `transition-opacity` | `.transition-opacity` |
| `transition-transform` | `.transition-transform` |
| `duration-75` | `.duration-75` |
| `duration-100` | `.duration-100` |
| `duration-150` | `.duration-150` |
| `duration-200` | `.duration-200` |
| `duration-300` | `.duration-300` |
| `duration-500` | `.duration-500` |
| `duration-700` | `.duration-700` |
| `duration-1000` | `.duration-1000` |
| `ease-linear` | `.ease-linear` |
| `ease-in` | `.ease-in` |
| `ease-out` | `.ease-out` |
| `ease-in-out` | `.ease-in-out` |
| `delay-75` | `.delay-75` |
| `delay-100` | `.delay-100` |
| `delay-300` | `.delay-300` |
| `animate-spin` | `.animate-spin` |
| `animate-pulse` | `.animate-pulse` |
| `animate-bounce` | `.animate-bounce` |
| `animate-none` | `.animate-none` |

---

## Filters

| Tailwind | Lagunite |
|---|---|
| `blur-sm` | `.blur-s` |
| `blur` | `.blur` |
| `blur-lg` | `.blur-l` |
| `grayscale` | `.grayscale` |
| `invert` | `.invert` |
| `sepia` | `.sepia` |
| `brightness-50` | `.brightness-50` |
| `contrast-*` | `.contrast-*` |
| `saturate-*` | `.saturate-*` |
| `backdrop-blur-sm` | `.backdrop-blur-s` |
| `backdrop-blur` | `.backdrop-blur` |
| `backdrop-blur-lg` | `.backdrop-blur-l` |

---

## Cursor & Interaction

| Tailwind | Lagunite |
|---|---|
| `cursor-pointer` | `.cursor-pointer` |
| `cursor-not-allowed` | `.cursor-not-allowed` |
| `cursor-grab` | `.cursor-grab` |
| `cursor-grabbing` | `.cursor-grabbing` |
| `cursor-text` | `.cursor-text` |
| `cursor-none` | `.cursor-none` |
| `pointer-events-none` | `.pointer-events-none` |
| `pointer-events-auto` | `.pointer-events-auto` |
| `select-none` | `.select-none` |
| `select-all` | `.select-all` |
| `select-text` | `.select-text` |

---

## No Direct Equivalent (Gaps)

These Tailwind patterns have no 1:1 class in Lagunite — use inline `style` and mark with `<!-- GAP: ... -->`:

| Tailwind | Lagunite workaround |
|---|---|
| `text-{color}/{opacity}` | `.color-*` + `.opacity-*` (separate) |
| `bg-{color}/{opacity}` | `.bg-*` + `.opacity-*` |
| `w-{arbitrary}` | `style="width: Xpx"` → `<!-- GAP: needs .w-{n} -->` |
| `h-{arbitrary}` | `style="height: Xpx"` → `<!-- GAP: needs .h-{n} -->` |
| `grid-cols-[repeat(auto-fill,minmax(200px,1fr))]` | `.grid-auto-fill` (closest) |
| `@container` | Not supported |
| `peer-*` `group-*` | Not supported |
| `has-*` | Not supported |
| `sm:` / `md:` / `lg:` / `xl:` / `2xl:` (all 5) | Map to `d*` — only 2 breakpoints |

---

## Components: Lagunite vs Tailwind Pattern

Lagunite provides pre-built component classes. These replace large utility stacks in Tailwind:

| Pattern | Tailwind | Lagunite |
|---|---|---|
| Card | `bg-white rounded-lg shadow p-4` | `.card > .card-body` |
| Alert | `flex items-center gap-3 p-4 bg-green-50 rounded border border-green-200` | `.alert.alert-success` |
| Button | `px-4 py-2 bg-blue-600 text-white rounded font-medium hover:bg-blue-700` | `.btn` |
| Badge | `inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-blue-100 text-blue-800` | `.badge.badge-primary` |
| Modal | *(many divs with backdrop + centered container)* | `.modal-overlay.open > .modal` |
| Navbar | *(flex + sticky + shadow + padding + z-index)* | `.navbar` |

---

## Dark Mode

| Pattern | Tailwind | Lagunite |
|---|---|---|
| Dark container | `dark:bg-gray-900 dark:text-white` per element | `.night` on ancestor |
| Dark card | `dark:bg-gray-800 dark:border-gray-700` | `.night .card` — handled automatically |
