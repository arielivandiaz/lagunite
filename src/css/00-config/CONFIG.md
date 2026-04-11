# Lagunite CSS Configuration Guide

## Overview
The `00-config` folder contains the foundational CSS tokens and variables for the Lagunite design system. These files establish the base values that should be used throughout the library.

## File Structure & Purpose

### 01-palette.css
**Raw color options** - The "what we have" colors that should rarely be used directly in components.

### 02-typography.css 
**Typography tokens** - Font families, sizes, weights, and line heights.

### 03-theme.css
**Semantic theme variables** - Assigns meaning to raw palette values. This is what should be used in components and can be overridden for theming.

### 04-measures.css
**Measurement system tokens** - Spacing, sizes, borders, radii, and breakpoints.

### 05-base.css
**Reset and base styles** - Global reset styles and base element styling.

## Color System

### Usage Pattern
```css
/* ❌ Don't use raw palette directly */
color: var(--blue-500);

/* ✅ Use semantic theme variables */
color: var(--color-primary);
background: var(--color-bg);
```

### Color Categories

#### Semantic Colors (Theme)
```css
--color-primary: #2476ff;           /* Main brand color */
--color-primary-light: #5e9aff;     /* Lighter variant */
--color-primary-dark: #0965ff;      /* Darker variant */

--color-secondary: #747474;         /* Secondary brand color */
--color-tertiary: #f97316;          /* Accent color */

--color-almost-black: #333;         /* Near black for text */
--color-almost-white: #fcfcfc;      /* Near white for backgrounds */
```

#### State Colors
```css
--color-success: #009112;           /* Success states */
--color-warning: #ff9017;           /* Warning states */
--color-error: #fa3434;             /* Error states */
```

#### Text & Background
```css
--color-text-base: #333;            /* Default text color */
--color-text-alt: #fff;             /* Alternative text (on dark) */
--color-bg: #eee;                   /* Default background */
--color-bg-alt: #222;               /* Alternative background (dark) */
```

#### Raw Palette (50-950 Scale)
Each color family follows this scale:
- `50` - Lightest tint (96% lightness)
- `100-900` - Progressive steps
- `950` - Darkest shade (5-15% lightness)

```css
/* Gray scale example */
--gray-50: hsl(210, 20%, 95%);     /* Very light */
--gray-500: hsl(210, 9%, 50%);     /* Medium */
--gray-950: hsl(210, 25%, 5%);     /* Very dark */
```

## Typography System

### Font Families
```css
--font-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
--font-mono: "JetBrains Mono", "Fira Code", monospace;
--font-text: "Zen Kaku Gothic Antique", sans-serif;      /* Body text */
--font-headers: "PT Sans", sans-serif;                   /* Headings */
```

### Font Sizes (Scale)
```css
--font-size-xs: 0.75rem;    /* 12px - Extra small */
--font-size-s: 0.875rem;   /* 14px - Small */
--font-size-base: 1rem;     /* 16px - Base/default */
--font-size-l: 1.125rem;   /* 18px - Large */
--font-size-xl: 1.25rem;    /* 20px - Extra large */
--font-size-xxl: 1.5rem;    /* 24px - 2x large */
--font-size-3xl: 2rem;      /* 32px - 3x large */
```

### Font Weights
```css
--font-weight-light: 300;   /* Light */
--font-weight-normal: 400;  /* Normal/regular */
--font-weight-medium: 500;  /* Medium */
--font-weight-bold: 700;    /* Bold */
```

## Spacing & Measurement System

### Spacing Scale (Based on 0.25rem = 4px)
```css
--space-px: 1px;           /* 1px - Hairline */
--space-1: 0.25rem;        /* 4px - Extra tight */
--space-2: 0.5rem;         /* 8px - Tight */
--space-3: 0.75rem;        /* 12px - Snug */
--space-4: 1rem;           /* 16px - Normal */
--space-5: 1.25rem;        /* 20px - Relaxed */
--space-6: 1.5rem;         /* 24px - Loose */
--space-8: 2rem;           /* 32px - Extra loose */
--space-10: 2.5rem;        /* 40px - Very loose */
--space-12: 3rem;          /* 48px - Extremely loose */
--space-16: 4rem;          /* 64px - Maximum */
```

### Default Spacing
```css
--space-x: var(--space-12); /* Horizontal default spacing */
--space-y: var(--space-8);  /* Vertical default spacing */
```

### Border Radius
```css
--radius-s: 0.25rem;      /* Small - 4px */
--radius-m: 0.5rem;       /* Medium - 8px */
--radius-l: 1rem;         /* Large - 16px */
--radius-full: 9999px;     /* Full/pill shape */
```

## Breakpoints & Responsive Design

### Breakpoint Values
```css
--breakpoint-s: 640px;    /* Small devices */
--breakpoint-md: 768px;    /* Medium devices */
--breakpoint-l: 1024px;   /* Large devices */
--breakpoint-xl: 1440px;   /* Extra large devices */
```

### Media Query Usage
```css
/* Mobile first approach */
@media (min-width: 640px) { /* sm */ }
@media (min-width: 768px) { /* md */ }
@media (min-width: 1024px) { /* lg */ }
@media (min-width: 1440px) { /* xl */ }
```

## Shadows
```css
--shadow-s: 0 1px 2px 0 hsla(0, 0%, 0%, 0.05);     /* Subtle */
--shadow-m: 0 4px 6px -1px hsla(0, 0%, 0%, 0.1);   /* Medium */
--shadow-l: 0 10px 15px -3px hsla(0, 0%, 0%, 0.1); /* Large */
--shadow-inner: inset 0 2px 4px 0 hsla(0, 0%, 0%, 0.05); /* Inner */
```

## Dark Mode Support

### Theme Toggle
The system supports dark mode via the `.night` class on the body:

```css
body {
    background: var(--color-bg);
    color: var(--color-text-base);
}

body.night {
    background: var(--color-bg-alt);
    color: var(--color-text-alt);
}
```

### Dark Mode Utilities
```css
/* Apply styles only in dark mode */
.night .color-almost-white {
    color: var(--color-almost-black);
}

.night .color-almost-black {
    color: var(--color-almost-white);
}
```

## Nomenclature Summary

| Prefix | Meaning | Example |
|--------|---------|---------|
| `xs` | Extra Small | `--font-size-xs` (12px) |
| `sm` | Small | `--radius-s` (4px) |
| `md` | Medium | `--shadow-m` |
| `lg` | Large | `--font-size-l` (18px) |
| `xl` | Extra Large | `--font-size-xl` (20px) |
| `xxl`, `3xl` | 2x, 3x Large | `--font-size-xxl` (24px) |
| `50-950` | Color Scale | `--gray-50` (lightest) to `--gray-950` (darkest) |

## Best Practices

1. **Use semantic variables** from `03-theme.css` instead of raw palette values
2. **Follow the spacing scale** for consistent rhythm
3. **Use kebab-case** for CSS custom properties (`--color-text-base`)
4. **Leverage the breakpoint system** for responsive design
5. **Test both light and dark themes** when using theme variables

## Usage Examples

```css
/* ✅ Good - Using semantic tokens */
.card {
    padding: var(--space-6);
    margin-bottom: var(--space-4);
    background: var(--color-bg);
    color: var(--color-text-base);
    border-radius: var(--radius-m);
    box-shadow: var(--shadow-s);
    font-size: var(--font-size-base);
    font-family: var(--font-text);
}

/* ✅ Good - Responsive design */
@media (min-width: 768px) {
    .card {
        padding: var(--space-8);
        font-size: var(--font-size-l);
    }
}