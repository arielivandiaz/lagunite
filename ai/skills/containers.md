# Lagunite Containers

> Width-constraining and centering utilities for page layouts, hero sections, blog posts, modals, and sidebars.

**Source file:** `src/css/03-layout/06-containers.css`

---

## Core rules

1. `.container` provides width: 100%, centering, and horizontal padding. Add a size class to cap max-width.
2. Semantic containers (`.container-hero`, `.container-prose`, etc.) have opinionated max-widths for specific use cases. They center automatically.
3. Responsive prefix `x` = mobile (max-width: 639px), `d` = desktop (min-width: 640px).
4. Gap and alignment come from flex/grid skills. Containers only handle width, centering, and padding.
5. `.container-debug` shows a visual outline during development.

## Base containers

- `.container` — 100% width, centered, padding `--space-4` (16px)
- `.container-fluid` — 100% width, padding scales: 16px → 24px (640px+) → 32px (1024px+)

## Size scale (add to `.container` or use standalone)

- `.container-xs` (480px), `.container-s` (640px), `.container-m` (768px)
- `.container-l` (1024px), `.container-xl` (1280px), `.container-xxl` (1536px)

## Semantic containers

- `.container-prose` — 65ch, padded (articles, blog posts)
- `.container-card` — 400px (single card, login form)
- `.container-sidebar` — 320px (sidebar panel)
- `.container-modal` — 600px (dialog content)
- `.container-hero` — 1200px, padded (landing hero sections)
- `.container-narrow` — 540px (signup, onboarding flows)
- `.container-wide` — 1440px (extra wide layouts)

## Section containers (include vertical padding)

- `.section-container` — 100%, padding `--space-12` top/bottom
- `.section-container-s` — 768px, padding `--space-8` top/bottom
- `.section-container-l` — 1200px, padding `--space-16` top/bottom

## Convenience combos

- `.container-card-center` — card + text-align: center
- `.container-prose-justify` — prose + text-align: justify
- `.container-hero-center` — hero + centered + large vertical padding

## Constrain utilities

`.constrain-xs` (128px), `.constrain-s` (160px), `.constrain-m` (192px), `.constrain-l` (224px), `.constrain-xl` (256px)

Use inside larger containers to limit an element's width (logos, icons, thumbnails).

## Object fit

`.object-contain`, `.object-cover`, `.object-fill`, `.object-none`, `.object-scale-down`

Responsive: `.xobject-*`, `.dobject-*`

## Responsive containers

- Mobile: `.xcontainer`, `.xcontainer-xs`, `.xcontainer-prose`, `.xcontainer-card`
- Desktop: `.dcontainer`, `.dcontainer-xs` through `.dcontainer-xxl`, `.dcontainer-hero`, `.dcontainer-prose`

## Composition examples

```html
<!-- Max-width page section -->
<div class="container container-l">
  <div class="grid dgrid-cols-3 gap-s">...</div>
</div>

<!-- Full width mobile, 1024px cap desktop -->
<div class="container dcontainer-l">Content</div>

<!-- Blog post -->
<article class="container-prose">
  <h1>Article Title</h1>
  <p>Long-form text...</p>
</article>

<!-- Centered hero -->
<section class="bg-1">
  <div class="container-hero-center">
    <h1>Welcome</h1>
    <button class="btn">Get started</button>
  </div>
</section>

<!-- Feature section -->
<section class="section-container-l">
  <div class="grid dgrid-cols-3 gap-s">...</div>
</section>
```

## Do not

- Do NOT add `margin: 0 auto` manually when a container class already centers.
- Do NOT use `.container` without a size class if you want a max-width — `.container` alone is 100% wide.
- Do NOT nest containers of the same type — one container wrapper per section.
- Do NOT use `.constrain-*` for page-level widths — they are for small elements only.

**Cheatsheet:** `src/css/03-layout/CONTAINERS-CHEATSHEET.md`
