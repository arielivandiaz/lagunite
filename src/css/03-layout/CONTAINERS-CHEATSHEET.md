# Containers Cheatsheet — Lagunite

## Base
```
.container        100%, centered, padding --space-4
.container-fluid  100%, padding scales (16→24→32px)
```

## Size scale
```
.container-xs   480px    .container-l    1024px
.container-s    640px    .container-xl   1280px
.container-m    768px    .container-xxl  1536px
```

## Semantic
```
.container-prose     65ch     articles/blog
.container-card      400px    login/card
.container-sidebar   320px    sidebar panel
.container-modal     600px    dialog
.container-hero      1200px   landing hero (padded)
.container-narrow    540px    signup/onboarding
.container-wide      1440px   extra wide
```

## Section containers
```
.section-container     100%, padding 48px 16px
.section-container-s   768px, padding 32px 16px
.section-container-l   1200px, padding 64px 24px
```

## Combos
```
.container-card-center    card + text-align: center
.container-prose-justify  prose + text-align: justify
.container-hero-center    hero + centered + vertical padding
```

## Constrain
```
.constrain-xs  128px    .constrain-l   224px
.constrain-s   160px    .constrain-xl  256px
.constrain-m   192px
```

## Object fit
```
.object-contain  .object-cover  .object-fill  .object-none  .object-scale-down
```

## Responsive (x = mobile, d = desktop)
```
Mobile:   .xcontainer  .xcontainer-xs  .xcontainer-prose  .xcontainer-card
Desktop:  .dcontainer  .dcontainer-xs…xxl  .dcontainer-hero  .dcontainer-prose
Object:   .xobject-*  .dobject-*
```

## Debug
```
.container-debug   dashed outline + class label (dev only)
```

## Recipes

```html
<!-- Landing hero -->
<div class="container-hero dcontainer-hero">
  <div class="grid dgrid-cols-2 gap-l">...</div>
</div>

<!-- Blog post -->
<article class="container-prose">...</article>

<!-- Feature section -->
<section class="section-container-l">
  <div class="grid dgrid-cols-3 gap-s">...</div>
</section>

<!-- Centered hero -->
<div class="container-hero-center">
  <h1>Title</h1>
  <button class="btn">CTA</button>
</div>
```
