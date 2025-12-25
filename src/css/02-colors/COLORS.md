# Lagunite Color Utilities Guide

## Overview
The `02-colors` folder contains utility classes for applying colors throughout the Lagunite design system. These utilities provide consistent color application for text, backgrounds, and borders.

## File Structure & Purpose

### 01-text.css
**Text color utilities** - Classes for applying colors to text elements using the design system's color tokens.

### 02-background.css  
**Background color utilities** - Classes for applying background colors and gradients with appropriate contrasting text colors.

### 03-border.css
**Border color utilities** - Classes for applying border colors that match background utilities for consistent theming.

## Text Color Utilities (`01-text.css`)

### Basic Text Colors
```css
.color-text         /* Default text color: var(--color-text-base) */
.color-text-alt     /* Alternative text color: var(--color-text-alt) */
```

### Brand Colors
```css
/* Primary brand colors */
.color-primary           /* Main brand color */
.color-primary-light     /* Lighter variant */
.color-primary-dark      /* Darker variant */

/* Secondary brand colors */
.color-secondary         /* Secondary brand color */
.color-secondary-light   /* Lighter variant */
.color-secondary-dark    /* Darker variant */

/* Tertiary accent colors */
.color-tertiary          /* Accent color */
.color-tertiary-light    /* Lighter variant */  
.color-tertiary-dark     /* Darker variant */
```

### Semantic Colors
```css
.color-almost-black     /* Near black for high contrast text */
.color-almost-white     /* Near white for dark backgrounds */

/* State colors */
.color-success          /* Success state color */
.color-warning          /* Warning state color */
.color-error            /* Error state color */
```

### Palette Scale Colors (50-950)
Each color family includes the full scale from lightest (50) to darkest (950):

```css
/* Gray scale */
.color-gray-50          /* Lightest gray */
.color-gray-100
.color-gray-200
/* ... continues through ... */
.color-gray-900
.color-gray-950         /* Darkest gray */

/* Blue scale */
.color-blue-50          /* Lightest blue */
.color-blue-500         /* Medium blue */
.color-blue-950         /* Darkest blue */

/* Green scale */
.color-green-50         /* Lightest green */
.color-green-500        /* Medium green */
.color-green-950        /* Darkest green */

/* Yellow scale */
.color-yellow-50        /* Lightest yellow */
.color-yellow-500       /* Medium yellow */
.color-yellow-950       /* Darkest yellow */

/* Red scale */
.color-red-50           /* Lightest red */
.color-red-500          /* Medium red */
.color-red-950          /* Darkest red */
```

## Background Color Utilities (`02-background.css`)

### Basic Backgrounds
```css
.bg                     /* Default background with base text */
.bg-alt                 /* Alternative background with alt text */
```

### Gradient Backgrounds
```css
.bg-1                   /* Primary gradient background */
.bg-2                   /* Secondary gradient background */  
.bg-3                   /* Tertiary gradient background */
```

### Absolute Colors
```css
.bg-black               /* Pure black background */
.bg-ablack              /* Almost black background */
.bg-white               /* Pure white background */
.bg-awhite              /* Almost white background */
```

### Numbered Brand Backgrounds
```css
/* Primary variations */
.bg-1                  /* Primary color background */
.bg-2                  /* Primary light background */
.bg-3                  /* Primary dark background */

/* Secondary variations */
.bg-4                  /* Secondary color background */
.bg-5                  /* Secondary light background */
.bg-6                  /* Secondary dark background */

/* Tertiary variations */
.bg-7                  /* Tertiary color background */
.bg-8                  /* Tertiary light background */
.bg-9                  /* Tertiary dark background */
```

### State Backgrounds
```css
.bg-success             /* Success state background (light with dark text) */
.bg-warning             /* Warning state background (light with dark text) */
.bg-error               /* Error state background (light with dark text) */
```

### Advanced Gradients
```css
.bgg-1                  /* Gradient variant 1 */
.bgg-2                  /* Gradient variant 2 */
.bgg-3                  /* Gradient variant 3 */
.bgg-4                  /* Gradient variant 4 */
.bgg-5                  /* Gradient variant 5 */
.bgg-6                  /* Gradient variant 6 */
.bgg-7                  /* Gradient variant 7 */
.bgg-8                  /* Gradient variant 8 */
```

### Palette Scale Backgrounds (50-950)
All color families include background utilities:

```css
/* Gray backgrounds */
.bg-gray-50             /* Lightest gray background */
.bg-gray-500            /* Medium gray background */
.bg-gray-950            /* Darkest gray background */

/* Blue backgrounds */
.bg-blue-50             /* Lightest blue background */
.bg-blue-500            /* Medium blue background */
.bg-blue-950            /* Darkest blue background */

/* Green, Yellow, Red follow the same pattern */
.bg-green-[50-950]
.bg-yellow-[50-950] 
.bg-red-[50-950]
```

## Border Color Utilities (`03-border.css`)

### State-Matched Borders
These utilities automatically match border colors to their corresponding background utilities:

```css
.bg-success.border      /* Success border color matching success background */
.bg-warning.border      /* Warning border color matching warning background */
.bg-error.border        /* Error border color matching error background */
```

## Usage Examples

### Text Color Application
```html
<!-- Basic text colors -->
<p class="color-text">Default text color</p>
<p class="color-text-alt">Alternative text color</p>

<!-- Brand colors -->
<h1 class="color-primary">Primary heading</h1>
<h2 class="color-secondary-light">Secondary light heading</h2>

<!-- State colors -->
<span class="color-success">Success message</span>
<span class="color-warning">Warning message</span>
<span class="color-error">Error message</span>

<!-- Scale colors -->
<p class="color-gray-600">Medium gray text</p>
<p class="color-blue-500">Medium blue text</p>
```

### Background Application
```html
<!-- Basic backgrounds -->
<div class="bg">Default background</div>
<div class="bg-alt">Alternative background</div>

<!-- Brand backgrounds -->
<button class="bg-1">Primary button</button>
<button class="bg-4">Secondary button</button>

<!-- State backgrounds -->
<div class="bg-success">Success notification</div>
<div class="bg-warning">Warning notification</div>

<!-- Gradient backgrounds -->
<header class="bgg-1">Gradient header</header>

<!-- Scale backgrounds -->
<card class="bg-gray-100">Light gray card</card>
<sidebar class="bg-gray-800">Dark gray sidebar</sidebar>
```

### Combined Usage with Borders
```html
<!-- State elements with matching borders -->
<div class="bg-success border">Success message with border</div>
<div class="bg-warning border">Warning message with border</div>
<div class="bg-error border">Error message with border</div>
```

## Color Scale Reference

### Scale Meaning
| Value | Lightness | Usage |
|-------|-----------|--------|
| `50` | 95-96% | Very light tints, subtle backgrounds |
| `100` | 90% | Light backgrounds, hover states |
| `200` | 80% | Subtle borders, dividers |
| `300` | 70% | Disabled states, placeholders |
| `400` | 60% | Secondary text, icons |
| `500` | 50% | Primary color, main elements |
| `600` | 40% | Hover states, active elements |
| `700` | 30% | Dark text, headers |
| `800` | 20-25% | Very dark text |
| `900` | 10-20% | High contrast text |
| `950` | 5-15% | Maximum contrast, borders |

## Best Practices

### Text Colors
```css
/* ✅ Good - Use semantic colors for meaning */
.success-message { @apply color-success; }
.error-text { @apply color-error; }

/* ✅ Good - Use scale colors for hierarchy */
.primary-heading { @apply color-gray-900; }
.secondary-text { @apply color-gray-600; }
.muted-text { @apply color-gray-400; }
```

### Background Colors
```css
/* ✅ Good - Background utilities include appropriate text color */
.notification { @apply bg-success; } /* Automatically gets proper text color */

/* ✅ Good - Use gradients for emphasis */
.hero-section { @apply bgg-4; }

/* ✅ Good - Use scale backgrounds for subtle variations */
.card { @apply bg-gray-50; }
.sidebar { @apply bg-gray-100; }
```

### Accessibility Considerations
- Background utilities automatically pair with contrasting text colors
- Use higher contrast colors (700-950) for important text
- Test color combinations for WCAG compliance
- Consider dark mode alternatives using `.night` modifier

### Dark Mode Support
All utilities work with the dark mode system. When `body.night` is applied:
- Semantic colors automatically adjust
- Scale colors maintain their relative contrast
- Background utilities maintain proper text contrast

### Color Combination Guidelines
```html
<!-- ✅ Good - Semantic color matching -->
<div class="bg-success color-success">Success state</div>

<!-- ✅ Good - Appropriate contrast -->
<div class="bg-gray-900 color-gray-100">Dark background, light text</div>

<!-- ❌ Avoid - Poor contrast -->
<div class="bg-yellow-200 color-yellow-300">Low contrast combination</div>
```

## Integration with Design System
These color utilities integrate seamlessly with:
- Typography utilities for consistent text styling
- Layout utilities for spacing and positioning  
- Component classes for complex UI elements
- Theme variables for easy customization