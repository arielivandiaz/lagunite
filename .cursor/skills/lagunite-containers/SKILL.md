---
name: lagunite-containers
description: >-
  Build page layouts with Lagunite container utilities. Use when creating page
  wrappers, hero sections, landing pages, blog layouts, modals, sidebars, or
  any width-constrained content using classes from 03-layout/06-containers.css.
---

# Lagunite Containers

## Core rules

1. `.container` provides width: 100%, centering, and horizontal padding (`--space-4`). Add a size class (`.container-l`) to cap the max-width.
2. Semantic containers (`.container-hero`, `.container-prose`, etc.) have opinionated max-widths for specific use cases. They center automatically.
3. Responsive prefix `x` = mobile (max-width: 639px), `d` = desktop (min-width: 640px).
4. Gap and alignment come from `01-flex.css` and `02-grid.css`. Containers only handle width, centering, and padding.
5. `.container-debug` shows a visual outline — add it during development to see container boundaries.

## Class reference

### Base containers
- `.container` — 100% width, centered, padding `--space-4` (16px)
- `.container-fluid` — 100% width, padding scales: 16px → 24px (640px+) → 32px (1024px+)

### Size scale (add to `.container` or use standalone)
- `.container-xs` (480px), `.container-s` (640px), `.container-m` (768px)
- `.container-l` (1024px), `.container-xl` (1280px), `.container-xxl` (1536px)

### Semantic containers
- `.container-prose` — 65ch, padded (articles, blog posts)
- `.container-card` — 400px (single card, login form)
- `.container-sidebar` — 320px (sidebar panel)
- `.container-modal` — 600px (dialog content)
- `.container-hero` — 1200px, padded (landing hero sections)
- `.container-narrow` — 540px (signup, onboarding flows)
- `.container-wide` — 1440px (extra wide layouts)

### Section containers (include vertical padding)
- `.section-container` — 100%, padding `--space-12` top/bottom
- `.section-container-s` — 768px, padding `--space-8` top/bottom
- `.section-container-l` — 1200px, padding `--space-16` top/bottom

### Convenience combos
- `.container-card-center` — card + text-align: center
- `.container-prose-justify` — prose + text-align: justify
- `.container-hero-center` — hero + centered + large vertical padding

### Constrain utilities
- `.constrain-xs` (128px), `.constrain-s` (160px), `.constrain-m` (192px), `.constrain-l` (224px), `.constrain-xl` (256px)
- Use inside larger containers to limit an element's width (e.g., logos, icons)

### Object fit
- `.object-contain`, `.object-cover`, `.object-fill`, `.object-none`, `.object-scale-down`
- Responsive: `.xobject-*`, `.dobject-*`

### Responsive containers
- Mobile: `.xcontainer`, `.xcontainer-xs`, `.xcontainer-prose`, `.xcontainer-card`
- Desktop: `.dcontainer`, `.dcontainer-xs` through `.dcontainer-xxl`, `.dcontainer-hero`, `.dcontainer-prose`

### Debug
- `.container-debug` — dashed outline + class label (shows all classes on the element)

## How to compose

Containers set the width constraint. Combine with flex/grid for internal layout:

```html
<div class="container container-l">
  <div class="grid dgrid-cols-3 gap-s">
    <div>Col 1</div>
    <div>Col 2</div>
    <div>Col 3</div>
  </div>
</div>
```

### Responsive pattern

Use responsive variants to adapt container behavior:

```html
<!-- Full width on mobile, 1024px cap on desktop -->
<div class="container dcontainer-l">
  <p>Content adapts to screen size</p>
</div>

<!-- Hero with more padding on desktop -->
<div class="container-hero dcontainer-hero">
  <h1>Landing Page</h1>
</div>
```

## Common recipes

### Landing hero (2 columns)
```html
<section class="bgg-4">
  <div class="container-hero dcontainer-hero">
    <div class="grid dgrid-cols-2 gap-l">
      <div>
        <h1>Title</h1>
        <p>Subtitle</p>
        <a class="btn" href="#">CTA</a>
      </div>
      <div>
        <img class="object-cover" src="hero.jpg" alt="" />
      </div>
    </div>
  </div>
</section>
```

### Centered hero
```html
<section class="bg-1">
  <div class="container-hero-center">
    <h1>Welcome</h1>
    <p>Subtitle text</p>
    <button class="btn">Get started</button>
  </div>
</section>
```

### Blog post
```html
<article class="container-prose">
  <h1>Article Title</h1>
  <p>Long-form text with optimal line length...</p>
</article>
```

### Feature section
```html
<section class="section-container-l">
  <h2>Features</h2>
  <div class="grid dgrid-cols-3 gap-s">
    <div>Feature 1</div>
    <div>Feature 2</div>
    <div>Feature 3</div>
  </div>
</section>
```

### Login card
```html
<div class="grid-center" style="min-height:100vh">
  <div class="container-card-center shadow-m" style="padding: var(--space-8); border-radius: var(--radius-l);">
    <h2>Sign in</h2>
    <form>...</form>
  </div>
</div>
```

## Do not

- Do NOT add `margin: 0 auto` manually when a container class already centers.
- Do NOT use `.container` without a size class if you want a max-width — `.container` alone is 100% wide.
- Do NOT nest containers of the same type — one container wrapper per section is enough.
- Do NOT use `.constrain-*` for page-level widths — they are for small elements (logos, icons, thumbnails).
- Do NOT forget `.dcontainer-hero` for desktop padding upgrade on hero sections.

## Additional resources

- Full class reference: see [LAYOUT-CONTAINERS.md](src/css/03-layout/LAYOUT-CONTAINERS.md)
- Cheatsheet: see [CONTAINERS-CHEATSHEET.md](src/css/03-layout/CONTAINERS-CHEATSHEET.md)
