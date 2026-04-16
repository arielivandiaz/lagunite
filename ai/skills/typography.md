# Lagunite Typography

> Text and font utilities. Use when setting font family, size, weight, line height, letter spacing, text transform, or text alignment.

**Source files:** `src/css/01-text/01-fonts.css`, `src/css/01-text/02-typography.css`

**If a class is not listed below, do not invent it.** (There is no `.font-m`; use `.font-s` or `.font-l`.)

---

## Core rules

1. **`h1`–`h6`** already set heading font family, weight, and fluid sizes from the theme. Add utilities only for overrides.
2. **Responsive typography:** only **text-align** has `x` / `d` variants. Font sizes do not have `xfont-*` / `dfont-*`.
3. Breakpoints: `x` = max-width 639px, `d` = min-width 640px.

## Font family and basic style

| Class | Role |
| --- | --- |
| `.font-text` | `var(--font-text)` |
| `.font-headers` | `var(--font-headers)` |
| `.font-sans` | `var(--font-sans)` |
| `.font-mono` | `var(--font-mono)` |
| `.bold` | bold weight |
| `.italic` | italic style |

## Font size (fixed steps)

| Class | Notes |
| --- | --- |
| `.font-xs` | `var(--font-size-xs)` |
| `.font-s` | `var(--font-size-s)` |
| `.font-l` | `var(--font-size-l)` |
| `.font-xl` | `var(--font-size-xl)` |
| `.font-xxl` | `var(--font-size-xxl)` |
| `.font-3xl` | `var(--font-size-3xl)` |
| `.font-250` | 250% |
| `.font-300` | 300% |
| `.font-400` | 400% |
| `.font-500` | 500% |

## Fluid font sizes

`.font-fluid-xs` `.font-fluid-s` `.font-fluid` `.font-fluid-l` `.font-fluid-xl` — `clamp()`-based sizes.

## Font weight (numeric utilities)

| Class | Maps to token |
| --- | --- |
| `.font-weight-0` | light |
| `.font-weight-1` | normal |
| `.font-weight-2` | medium |
| `.font-weight-3` | bold |

## Text transform

`.uppercase` `.lowercase` `.capitalize`

## Letter spacing

`.letter-spacing-xs` `.letter-spacing-s` `.letter-spacing` `.letter-spacing-l` `.letter-spacing-xl` `.letter-spacing-xxl`

## Line height

`.lh-xs` `.lh-s` `.lh` `.lh-l` `.lh-xl` `.lh-xxl`

## Text align (base)

| Class | Alignment |
| --- | --- |
| `.ta-c` | center |
| `.ta-lf` | left |
| `.ta-rg` | right |
| `.ta-j` | justify |
| `.ta-ja` | justify-all |

## Text align (responsive)

Mobile (`max-width: 639px`): `.xta-c` `.xta-lf` `.xta-rg` `.xta-j` `.xta-ja`

Desktop (`min-width: 640px`): `.dta-c` `.dta-lf` `.dta-rg` `.dta-j` `.dta-ja`

## Composition

Prefer semantic sizes (`.font-s`, `.font-l`) and line-height (`.lh`) on body copy; use `.font-headers` or heading tags for titles. Combine with skill **colors** for `color-*` and layout skills for spacing.
