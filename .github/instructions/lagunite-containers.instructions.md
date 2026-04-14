---
applyTo: "**/*.html,src/css/**/*.css,lagunite-web/src/**/*.astro"
---

# Lagunite Containers

## Core rules

1. `.container` provides width: 100%, centering, and horizontal padding (`--space-4`). Add a size class (`.container-l`) to cap the max-width.
2. Semantic containers (`.container-hero`, `.container-prose`, etc.) have opinionated max-widths for specific use cases. They center automatically.
3. Responsive prefix `x` = mobile (max-width: 639px), `d` = desktop (min-width: 640px).
4. Gap and alignment come from `01-flex.css` and `02-grid.css`. Containers only handle width, centering, and padding.

## Class reference

### Base containers
- `.container` — 100% width, centered, padding `--space-4` (16px)
- `.container-fluid` — 100% width, padding scales: 16px → 24px (640px+) → 32px (1024px+)

### Size scale
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

### Object fit
- `.object-contain`, `.object-cover`, `.object-fill`, `.object-none`, `.object-scale-down`
- Responsive: `.xobject-*`, `.dobject-*`

### Responsive containers
- Mobile: `.xcontainer`, `.xcontainer-xs`, `.xcontainer-prose`, `.xcontainer-card`
- Desktop: `.dcontainer`, `.dcontainer-xs` through `.dcontainer-xxl`, `.dcontainer-hero`, `.dcontainer-prose`

### Debug
- `.container-debug` — dashed outline + class label (shows all classes on the element)

## Common recipes

### Landing hero
```html
<section class="bgg-4">
  <div class="container-hero dcontainer-hero">
    <div class="grid dgrid-cols-2 gap-l">
      <div>
        <h1>Title</h1>
        <a class="btn" href="#">CTA</a>
      </div>
      <img class="object-cover" src="hero.jpg" alt="" />
    </div>
  </div>
</section>
```

### Responsive container
```html
<!-- Full width on mobile, 1024px cap on desktop -->
<div class="container dcontainer-l">
  <p>Content adapts to screen size</p>
</div>
```
