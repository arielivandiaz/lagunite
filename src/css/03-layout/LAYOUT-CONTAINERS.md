# Lagunite Containers — Reference

## Quick start

Wrap content in a container for centering and max-width control:

```html
<div class="container container-l">    <!-- 1024px centered, padded -->
  <p>Content here</p>
</div>

<div class="container-hero">           <!-- 1200px hero wrapper -->
  <h1>Landing title</h1>
</div>
```

---

## 1. Base containers

| Class | Behavior |
|-------|----------|
| `.container` | 100% width, centered (`margin: auto`), padding `--space-4` (16px) |
| `.container-fluid` | 100% width, padding scales with breakpoints (16px → 24px → 32px) |

`.container` provides basic centering + horizontal padding.  
`.container-fluid` adapts its padding across 3 breakpoints (base, 640px, 1024px).

---

## 2. Container size scale

Combine with `.container` for padding, or use standalone for max-width only.

| Class | max-width | Use case |
|-------|-----------|----------|
| `.container-xs` | 480px | Tiny forms, login boxes |
| `.container-s` | 640px | Small content areas |
| `.container-m` | 768px | Medium content, tablet-optimized |
| `.container-l` | 1024px | Standard page content |
| `.container-xl` | 1280px | Wide page content |
| `.container-xxl` | 1536px | Extra wide content |

```html
<div class="container container-m">  <!-- 768px max, centered, padded -->
  <form>...</form>
</div>
```

---

## 3. Semantic containers

Purpose-driven containers with opinionated max-widths:

| Class | max-width | Use case |
|-------|-----------|----------|
| `.container-prose` | 65ch | Long-form text (articles, blog posts). Includes padding. |
| `.container-card` | 400px | Single card or login form |
| `.container-sidebar` | 320px | Sidebar panel |
| `.container-modal` | 600px | Dialog or modal content |
| `.container-hero` | 1200px | Landing page hero sections. Includes padding. |
| `.container-narrow` | 540px | Narrow content (signup, onboarding) |
| `.container-wide` | 1440px | Extra wide layouts |

---

## 4. Section containers

Full-width sections with vertical + horizontal padding:

| Class | max-width | Padding |
|-------|-----------|---------|
| `.section-container` | 100% | `--space-12` vertical, `--space-4` horizontal |
| `.section-container-s` | 768px | `--space-8` vertical, `--space-4` horizontal |
| `.section-container-l` | 1200px | `--space-16` vertical, `--space-6` horizontal |

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

---

## 5. Convenience combos

Pre-composed containers with text alignment:

| Class | Combines |
|-------|----------|
| `.container-card-center` | `.container-card` + `text-align: center` |
| `.container-prose-justify` | `.container-prose` + `text-align: justify` |
| `.container-hero-center` | `.container-hero` + `text-align: center` + vertical padding |

---

## 6. Constrain utilities

Limit an element's max-width (useful inside larger containers):

| Class | max-width |
|-------|-----------|
| `.constrain-xs` | 8rem (128px) |
| `.constrain-s` | 10rem (160px) |
| `.constrain-m` | 12rem (192px) |
| `.constrain-l` | 14rem (224px) |
| `.constrain-xl` | 16rem (256px) |

```html
<div class="container">
  <img class="constrain-m" src="logo.png" alt="Logo" />
</div>
```

---

## 7. Object fit

Control how replaced elements (images, videos) fit their container:

| Class | CSS |
|-------|-----|
| `.object-contain` | `object-fit: contain` |
| `.object-cover` | `object-fit: cover` |
| `.object-fill` | `object-fit: fill` |
| `.object-none` | `object-fit: none` |
| `.object-scale-down` | `object-fit: scale-down` |

Responsive: `.xobject-cover` (mobile), `.dobject-cover` (desktop).

---

## 8. Responsive containers

### Mobile (max 639px)

| Class | Behavior |
|-------|----------|
| `.xcontainer` | 100% width, padding `--space-3` |
| `.xcontainer-xs` | 100% width, padding `--space-2` |
| `.xcontainer-prose` | 100% width, padding `--space-3` |
| `.xcontainer-card` | 100% width, padding `--space-4` |

### Desktop (min 640px)

| Class | Behavior |
|-------|----------|
| `.dcontainer` | 100% width, padding `--space-6` |
| `.dcontainer-xs` … `.dcontainer-xxl` | Same as base size scale |
| `.dcontainer-hero` | 1200px, padding `--space-8` |
| `.dcontainer-prose` | 65ch, centered |

---

## 9. Debug helper

Add `.container-debug` to visualize any container's boundaries during development:

```html
<div class="container container-l container-debug">
  Content with visible outline and class label
</div>
```

Shows a dashed primary-color outline and a label with the element's classes.

---

## Common patterns (copy-paste)

### Landing hero (2 columns)

```html
<section class="bgg-4">
  <div class="container-hero dcontainer-hero">
    <div class="grid dgrid-cols-2 gap-l">
      <div>
        <h1>Hero Title</h1>
        <p>Subtitle text</p>
        <a class="btn" href="#">CTA</a>
      </div>
      <div>
        <img class="object-cover" src="hero.jpg" alt="" />
      </div>
    </div>
  </div>
</section>
```

### Centered hero with CTA

```html
<section class="bg-1">
  <div class="container-hero-center">
    <h1>Welcome</h1>
    <p>Subtitle</p>
    <button class="btn">Get started</button>
  </div>
</section>
```

### Blog post

```html
<article class="container-prose">
  <h1>Article Title</h1>
  <p>Long-form content with optimal line length for reading...</p>
</article>
```

### Login card

```html
<div class="container-card-center" style="min-height: 100vh; display: grid; place-items: center;">
  <div class="shadow-m" style="padding: var(--space-8); border-radius: var(--radius-l);">
    <h2>Sign in</h2>
    <form>...</form>
  </div>
</div>
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

### Sidebar + content layout

```html
<div class="container container-xl row gap-4">
  <aside class="container-sidebar flex-shrink-0">Sidebar</aside>
  <main class="flex-1">Content</main>
</div>
```
