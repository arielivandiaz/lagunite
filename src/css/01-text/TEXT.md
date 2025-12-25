# Lagunite Typography Utilities Guide

## Overview
The `01-text` folder contains typography utilities for the Lagunite design system. These utilities provide comprehensive text styling including fonts, sizes, weights, transforms, spacing, and alignment controls.

## File Structure & Purpose

### 01-fonts.css
**Font utilities** - Heading styles, font families, font sizes, font weights, and fluid typography.

### 02-typography.css  
**Text formatting utilities** - Text transforms, letter spacing, line height, and text alignment with responsive variants.

## Heading Styles (`01-fonts.css`)

### Default Heading Behavior
All headings use consistent styling with responsive sizing:

```css
h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-headers);     /* PT Sans by default */
    font-weight: var(--font-weight-bold); /* Bold weight */
    line-height: var(--line-height-tight); /* Tight line height */
    overflow-wrap: break-word;            /* Prevent overflow */
}
```

### Responsive Heading Sizes
Headings use `clamp()` for fluid sizing with breakpoint overrides:

```css
h1: clamp(2.5rem, 5vw, 5rem)    /* 40px - 80px, 80px at 640px+ */
h2: clamp(2rem, 4vw, 3rem)      /* 32px - 48px, 48px at 640px+ */
h3: clamp(1.5rem, 3vw, 2rem)    /* 24px - 32px, 32px at 640px+ */
h4: clamp(1.2rem, 2.5vw, 1.5rem) /* 19px - 24px, 24px at 640px+ */
h5: clamp(1rem, 2vw, 1.2rem)    /* 16px - 19px, 19px at 640px+ */
h6: var(--font-size-base)       /* 16px fixed */
```

## Font Family Utilities

### Available Font Families
```css
.font-text          /* Body text: "Zen Kaku Gothic Antique" */
.font-headers       /* Headings: "PT Sans" */
.font-sans          /* System sans: "Inter", system fonts */
.font-mono          /* Monospace: "JetBrains Mono", "Fira Code" */
```

### Usage Examples
```html
<p class="font-text">Body text with Zen Kaku Gothic</p>
<h2 class="font-headers">Heading with PT Sans</h2>
<code class="font-mono">Monospace code text</code>
<div class="font-sans">System sans-serif text</div>
```

## Font Size Utilities

### Percentage-Based Sizes
```css
.font-xs            /* 70% of current size */
.font-s             /* 85% of current size */
.font-l           /* 115% of current size */
.font-xl            /* 130% of current size */
.font-xxl           /* 200% of current size */
```

### Large Percentage Sizes
```css
.font-250           /* 250% of current size */
.font-300           /* 300% of current size */
.font-400           /* 400% of current size */
.font-500           /* 500% of current size */
```

### Fluid Typography
Responsive sizes that scale with viewport:

```css
.font-fluid-xs      /* clamp(0.5rem, 1vh, 0.75rem) - 8px to 12px */
.font-fluid-s       /* clamp(0.75rem, 1.5vh, 1rem) - 12px to 16px */
.font-fluid         /* clamp(1rem, 2vh, 1.5rem) - 16px to 24px */
.font-fluid-l       /* clamp(1.25rem, 3vh, 1.5rem) - 20px to 24px */
.font-fluid-xl      /* clamp(1.5rem, 5vh, 2rem) - 24px to 32px */
```

## Font Weight Utilities

### Weight Classes
```css
.font-weight-0      /* Light: var(--font-weight-light) - 300 */
.font-weight-1      /* Normal: var(--font-weight-normal) - 400 */
.font-weight-2      /* Medium: var(--font-weight-medium) - 500 */
.font-weight-3      /* Bold: var(--font-weight-bold) - 700 */
```

### Style Utilities
```css
.bold               /* font-weight: bold */
.italic             /* font-style: italic */
```

## Text Transform Utilities (`02-typography.css`)

### Text Case
```css
.uppercase          /* TEXT TRANSFORM TO UPPERCASE */
.lowercase          /* text transform to lowercase */
.capitalize         /* Text Transform To Title Case */
```

### Usage Examples
```html
<h3 class="uppercase">Section Header</h3>
<p class="capitalize">capitalize each word</p>
<span class="lowercase">CONVERT TO LOWERCASE</span>
```

## Letter Spacing Utilities

### Spacing Scale
```css
.letter-spacing-xs  /* -0.1rem - Tight spacing */
.letter-spacing-s   /* -0.05rem - Slightly tight */
.letter-spacing     /* 0.05rem - Normal spacing */
.letter-spacing-l   /* 0.1em - Loose spacing */
.letter-spacing-xl  /* 0.2em - Extra loose */
.letter-spacing-xxl /* 0.4rem - Maximum spacing */
```

### Usage Examples
```html
<h1 class="letter-spacing-xl uppercase">SPACED HEADING</h1>
<p class="letter-spacing-s">Tight letter spacing for readability</p>
<span class="letter-spacing-xxl uppercase">W I D E</span>
```

## Line Height Utilities

### Line Height Scale
```css
.lh-xs              /* 0.85 - Very tight (for headings) */
.lh-s               /* 0.95 - Tight */
.lh                 /* 1.5 - Normal (default) */
.lh-l               /* 1.7 - Loose (for readability) */
.lh-xl              /* 2.0 - Extra loose */
.lh-xxl             /* 2.5 - Maximum spacing */
```

### Best Practices
```html
<!-- Tight line height for headings -->
<h1 class="lh-xs">Compact Heading</h1>

<!-- Normal line height for body text -->
<p class="lh">Standard paragraph text with good readability.</p>

<!-- Loose line height for better readability -->
<p class="lh-l">Text that needs extra breathing room for easier reading.</p>
```

## Text Alignment Utilities

### Basic Alignment
```css
.ta-c               /* text-align: center */
.ta-lf              /* text-align: left */
.ta-rg              /* text-align: right */
.ta-j               /* text-align: justify */
.ta-ja              /* text-align: justify-all */
```

### Responsive Alignment
Available with breakpoint prefixes: `xs:`, `sm:`, `md:`

```css
/* Extra Small (max-width: 639px) */
.xs\:ta-c           /* Center on mobile */
.xs\:ta-lf          /* Left on mobile */
.xs\:ta-rg          /* Right on mobile */
.xs\:ta-j           /* Justify on mobile */

/* Small (min-width: 640px) */
.sm\:ta-c           /* Center on small screens and up */
.sm\:ta-lf          /* Left on small screens and up */
.sm\:ta-rg          /* Right on small screens and up */
.sm\:ta-j           /* Justify on small screens and up */

/* Medium (min-width: 1024px) */
.md\:ta-c           /* Center on medium screens and up */
.md\:ta-lf          /* Left on medium screens and up */
.md\:ta-rg          /* Right on medium screens and up */
.md\:ta-j           /* Justify on medium screens and up */
```

## Usage Examples

### Typography Combinations
```html
<!-- Large display heading -->
<h1 class="font-headers font-weight-3 letter-spacing-l ta-c lh-xs">
    Display Headline
</h1>

<!-- Subheading with custom styling -->
<h2 class="font-text font-weight-2 uppercase letter-spacing ta-lf">
    Section Header
</h2>

<!-- Body text with optimal readability -->
<p class="font-text font-weight-1 lh-l ta-j">
    This is body text with justified alignment and loose line height 
    for optimal readability in longer text blocks.
</p>

<!-- Code snippet -->
<code class="font-mono font-s bg-gray-100">
    const example = "monospace text";
</code>
```

### Responsive Typography
```html
<!-- Responsive alignment -->
<h2 class="ta-c sm:ta-lf md:ta-rg">
    Centered on mobile, left on small screens, right on medium+
</h2>

<!-- Fluid sizing with responsive alignment -->
<p class="font-fluid xs:ta-c sm:ta-j">
    Fluid text size, centered on mobile, justified on small screens+
</p>
```

### Component Examples
```html
<!-- Card header -->
<div class="bg-gray-50 p-4">
    <h3 class="font-headers font-weight-2 letter-spacing ta-c color-primary">
        Card Title
    </h3>
    <p class="font-text font-s color-gray-600 ta-c lh">
        Card subtitle
    </p>
</div>

<!-- Article content -->
<article class="font-text lh-l">
    <h1 class="font-headers font-weight-3 font-xxl lh-xs ta-c">
        Article Title
    </h1>
    <p class="font-weight-1 color-gray-700 ta-j">
        Article content with justified text for formal presentation.
    </p>
</article>

<!-- Button text -->
<button class="font-headers font-weight-2 uppercase letter-spacing-s">
    Action Button
</button>
```

## Breakpoint Reference

| Breakpoint | Media Query | Usage |
|------------|-------------|--------|
| `xs` | `max-width: 639px` | Mobile devices only |
| `sm` | `min-width: 640px` | Small screens and up |
| `md` | `min-width: 1024px` | Medium screens and up |
| `lg` | `min-width: 1200px` | Large screens and up |

## Best Practices

### Heading Hierarchy
```css
/* ✅ Good - Maintain visual hierarchy */
h1 { /* Uses default large size */ }
h2 { @apply font-weight-2; } /* Medium weight for distinction */
h3 { @apply font-weight-1 uppercase letter-spacing; } /* Style variation */
```

### Font Pairing
```css
/* ✅ Good - Consistent font pairing */
.hero-title { @apply font-headers font-weight-3 font-fluid-xl; }
.hero-subtitle { @apply font-text font-weight-1 font-fluid; }
.body-text { @apply font-text lh-l; }
```

### Responsive Typography
```css
/* ✅ Good - Mobile-first responsive approach */
.article-title {
    @apply font-headers font-weight-3 ta-c lh-xs;
    @apply sm:ta-lf md:font-xxl;
}
```

### Accessibility Considerations
- Maintain sufficient contrast ratios with color utilities
- Use appropriate line heights for readability (1.4+ for body text)
- Ensure font sizes are not too small (minimum 14px for body text)
- Test with screen readers and zoom levels up to 200%

### Performance Tips
- Font families are loaded via CSS variables for easy swapping
- Fluid typography reduces the need for multiple breakpoint declarations
- Use percentage-based sizes for scalable components

## Integration with Design System

### With Color Utilities
```html
<h1 class="font-headers font-weight-3 color-primary">
    Primary Heading
</h1>
```

### With Spacing Utilities
```html
<div class="p-6">
    <h2 class="font-headers mb-4">Section Title</h2>
    <p class="font-text lh-l">Section content</p>
</div>
```

### With Layout Utilities
```html
<div class="flex items-center">
    <h3 class="font-headers font-weight-2 mr-4">Label:</h3>
    <span class="font-text font-s">Value</span>
</div>
```

This typography system provides comprehensive text styling capabilities while maintaining consistency and accessibility throughout the Lagunite design system.