# Lagunite Design Tokens

> CSS variables (`--space-*`, `--radius-*`, `--color-*`, `--font-*`) and how they map to utility classes.
> Use before inventing inline styles or arbitrary px values; prefer utilities that consume these tokens.

**Source files:**
- `src/css/00-config/01-pallete.css` — raw palette scales (`--gray-*`, `--blue-*`, etc.)
- `src/css/00-config/02-typography.css` — `--font-*`, `--font-size-*`, `--font-weight-*`
- `src/css/00-config/03-theme.css` — semantic `--color-*`, surfaces, RGB companions
- `src/css/00-config/04-measures.css` — `--space-*`, `--radius-*`, breakpoint names

**Do not invent CSS variables.** Use only tokens present in those files.

---

## Spacing (`--space-*`)

| Token (examples) | Typical utilities |
| --- | --- |
| `--space-1` … `--space-32`, `--space-px` | Margin: `.marg-*`, `.marg-h-*`, `.marg-v-*` (+ `x`/`d`). Padding: `.padd-*`, `.padd-h-*`, `.padd-v-*`. Gap: `.gap-*`, `.gap-h-*`, `.gap-v-*` (+ `x`/`d`). Numeric gaps `.gap-1` … `.gap-16` map to `--space-N`. |

Details: skill **spacing** (`src/css/03-layout/04-margin.css`, `05-padding.css`, `01-flex.css`).

## Radius (`--radius-*`)

| Token | Utility (border-radius) |
| --- | --- |
| `--radius-s` | `.border-r-s` (+ `.xborder-r-s`, `.dborder-r-s`) |
| `--radius-m` | `.border-r` (default/medium; + responsive `x`/`d`) |
| `--radius-l` | `.border-r-l` |
| `--radius-xl` | `.border-r-xl` |
| `--radius-full` | `.border-r-full` |
| n/a (circle) | `.border-r-circle` |

Defined in `src/css/04-decorators/04-border.css`. See skill **decorators**.

## Semantic colors (`--color-*`, `--gray-*`, etc.)

Use skill **colors** for utilities (`.color-*`, `.bg-*`, `.border-color-*`). Tokens are the backing values in `03-theme.css` and `01-pallete.css`.

## Typography tokens

`--font-text`, `--font-headers`, `--font-sans`, `--font-mono`, `--font-size-xs` … `--font-size-3xl`, `--font-weight-light` … `--font-weight-bold` map to heading defaults and to utilities in skill **typography** (`.font-*`, `.font-weight-*`).

## Breakpoints in utilities

- **`x` prefix:** `max-width: 639px`
- **`d` prefix:** `min-width: 640px`

There is **no** utility prefix for 768px, 1024px, etc. — those tokens are documentary.

## Rule of thumb

1. Prefer a **utility class** over `style=""`.
2. Prefer a **semantic token path** (theme + utility) over raw hex in custom CSS.
3. If unsure whether a utility exists, check the relevant skill or `src/css` — **do not guess class names.**

---

## v3 tokens (Lagunite 3)

Source of truth: `design/lagunite3/tokens.json` (design system) → `src/css/00-config/`. v2 names remain as aliases.

| Token | Use |
| --- | --- |
| `--color-primary` `#2476ff` | Brand blue (accents, gradients, focus) |
| `--color-primary-fill` / `-fill-end` | Button gradient stops; white text ≥ 4.75:1 |
| `--color-primary-text` | Blue text/links (AA in both themes) |
| `--color-primary-soft` | Tinted backgrounds (soft buttons, active nav, badges) |
| `--color-text-muted` / `--color-text-subtle` | Secondary text / placeholders only |
| `--color-surface`, `--color-surface-raised`, `--color-surface-muted` | Bands, cards, wells |
| `--color-glass`, `--color-highlight`, `--color-overlay` | Glass fill, 1px top highlight, scrims |
| `--color-border` / `--color-border-strong` / `--input-border` | Hairlines / control outlines / 3:1 input boundary |
| `--slate-*` | Neutral ramp (`--gray-*` aliases it) |
| `--radius-xs…2xl` | 6 · 8 · 10 · 14 · 20 · 28px (`--radius-s/m/l` alias sm/md/lg) |
| `--shadow-xs…xl`, `--shadow-primary(-hover)`, `--shadow-focus` | Layered shadows, blue lift, focus ring |
| `--blur-sm/md/lg`, `--ease-out`, `--ease-spring`, `--dur-fast/--dur/--dur-slow` | Effects and motion |
| `--gradient-primary`, `--gradient-text`, `--gradient-border` | Button fill, headline word, featured border |

Night: `.night` (any element) or `[data-theme="dark"]` redefines the tokens; `<html>` follows `body.night`.
