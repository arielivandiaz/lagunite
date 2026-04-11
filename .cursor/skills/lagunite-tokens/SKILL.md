---
name: lagunite-tokens
description: >-
  Lagunite design tokens (--space-*, --radius-*, --color-*, --font-*) and how
  they map to utility classes. Use before inventing inline styles or arbitrary
  px values; prefer utilities that consume these tokens.
---

# Lagunite design tokens (for AI)

## Source files

- `src/css/00-config/01-pallete.css` — raw palette scales (`--gray-*`, `--blue-*`, etc.)
- `src/css/00-config/02-typography.css` — `--font-*`, `--font-size-*`, `--font-weight-*`
- `src/css/00-config/03-theme.css` — semantic `--color-*`, surfaces, RGB companions
- `src/css/00-config/04-measures.css` — `--space-*`, `--radius-*`, breakpoint **names** (640px = `--breakpoint-s`; media queries in utilities use literals)

**Do not invent CSS variables.** Use only tokens present in those files.

## Spacing (`--space-*`)

| Token (examples) | Typical utilities |
| --- | --- |
| `--space-1` … `--space-32`, `--space-px` | Margin: `.marg-*`, `.marg-h-*`, `.marg-v-*` (+ `x`/`d`). Padding: `.padd-*`, `.padd-h-*`, `.padd-v-*`. Gap: `.gap-*`, `.gap-h-*`, `.gap-v-*` (+ `x`/`d`). Numeric gaps `.gap-1` … `.gap-16` map to `--space-N`. |

Details: skill **lagunite-spacing** (`src/css/03-layout/04-margin.css`, `05-padding.css`, `01-flex.css`).

## Radius (`--radius-*`)

| Token | Utility (border-radius) |
| --- | --- |
| `--radius-s` | `.border-r-s` (+ `.xborder-r-s`, `.dborder-r-s`) |
| `--radius-m` | `.border-r` (default/medium; + responsive `x`/`d`) |
| `--radius-l` | `.border-r-l` |
| `--radius-xl` | `.border-r-xl` (+ `dborder-r-xl`; mobile subset in `x*`) |
| `--radius-full` | `.border-r-full` |
| n/a (circle) | `.border-r-circle` |

Defined in `src/css/04-decorators/04-border.css`. Skill **lagunite-decorators**.

## Semantic colors (`--color-*`, `--gray-*`, etc.)

Use **lagunite-colors** for utilities (`.color-*`, `.bg-*`, `.border-color-*`). Tokens are the backing values in `03-theme.css` and `01-pallete.css`.

## Typography tokens

`--font-text`, `--font-headers`, `--font-sans`, `--font-mono`, `--font-size-xs` … `--font-size-3xl`, `--font-weight-light` … `--font-weight-bold` map to heading defaults and to utilities in **lagunite-typography** (`.font-*`, `.font-weight-*`).

## Breakpoints in utilities

- **`x` prefix:** `max-width: 639px`
- **`d` prefix:** `min-width: 640px`

There is **no** utility prefix for every token breakpoint (`768px`, `1024px`, etc.); those tokens are mainly documentary unless other CSS uses them.

## Rule of thumb for AI output

1. Prefer a **utility class** over `style=""`.
2. Prefer a **semantic token path** (theme + utility) over raw hex in custom CSS.
3. If unsure whether a utility exists, check the relevant skill or `src/css` — **do not guess class names.**
