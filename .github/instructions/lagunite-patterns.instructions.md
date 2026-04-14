---
applyTo: "**/*.html,lagunite-web/src/**/*.astro"
---

# Lagunite page patterns

These snippets use **only** Lagunite classes documented in framework skills. Adjust copy and add JS where noted (`.open` toggles).

Expand layout: **lagunite-grid**, **lagunite-flex**, **lagunite-spacing**, **lagunite-containers**. Visuals: **lagunite-colors**, **lagunite-typography**, **lagunite-decorators**.

---

## 1. Landing (hero + feature grid + CTA)

```html
<section class="container-fluid padd-v-l bgg-2">
  <div class="container-l">
    <div class="grid xgrid-cols-1 dgrid-cols-2 gap-l ai-c">
      <div class="col padd-v-m">
        <h1 class="font-xxl font-bold color-text marg-b-s">Product headline</h1>
        <p class="font-l lh color-text marg-b-m">Short value proposition.</p>
        <div class="row gap-s">
          <a class="btn std" href="#">Primary</a>
          <a class="btn secondary std" href="#">Secondary</a>
        </div>
      </div>
      <div class="card card-elevated padd-m">
        <p class="font-s color-text">Hero panel or illustration.</p>
      </div>
    </div>
  </div>
</section>
<section class="container padd-v-l">
  <h2 class="font-xl font-bold color-text marg-b-m ta-c">Features</h2>
  <div class="grid xgrid-cols-1 dgrid-cols-3 gap-m">
    <div class="card padd-m">
      <h3 class="font-l font-bold marg-b-s">Readable</h3>
      <p class="font-s lh color-gray-600">Descriptive utility classes.</p>
    </div>
    <div class="card padd-m">
      <h3 class="font-l font-bold marg-b-s">Flexible</h3>
      <p class="font-s lh color-gray-600">Compose with grid and gap.</p>
    </div>
    <div class="card padd-m">
      <h3 class="font-l font-bold marg-b-s">Enterprise</h3>
      <p class="font-s lh color-gray-600">Tokens and semantic colors.</p>
    </div>
  </div>
</section>
```

---

## 2. Dashboard (sidebar + main)

```html
<!-- Toggle .open on .sidebar and .navbar with JS on small screens. -->
<div class="row col-row jc-fs ai-stretch">
  <aside class="sidebar flex-shrink-0">
    <div class="sidebar-header">
      <span class="font-l font-bold color-primary">App</span>
    </div>
    <nav class="sidebar-nav">
      <div class="sidebar-section">
        <div class="sidebar-section-title">Main</div>
        <a class="sidebar-link active" href="#"><span>Dashboard</span></a>
        <a class="sidebar-link" href="#"><span>Reports</span></a>
      </div>
    </nav>
  </aside>
  <main class="flex-1 padd-m bg">
    <h1 class="font-xl font-bold marg-b-m">Dashboard</h1>
    <div class="grid grid-auto gap-m">
      <div class="card padd-m"><p class="font-s">Widget A</p></div>
      <div class="card padd-m"><p class="font-s">Widget B</p></div>
      <div class="card padd-m"><p class="font-s">Widget C</p></div>
    </div>
  </main>
</div>
```

---

## 3. Form page (alert + form groups + row)

```html
<div class="container-s padd-v-l">
  <div class="alert alert-info marg-b-m" role="status">Please review the fields below.</div>
  <form class="bg padd-m bordered border-color-gray-200">
    <div class="form-row">
      <div class="form-group flex-1">
        <label class="form-label" for="email">Email</label>
        <input class="input" id="email" name="email" type="email" autocomplete="email" />
        <p class="form-help">We will never share your email.</p>
      </div>
      <div class="form-group flex-1">
        <label class="form-label" for="name">Name</label>
        <input class="input" id="name" name="name" type="text" autocomplete="name" />
      </div>
    </div>
    <div class="form-group has-error">
      <label class="form-label" for="pwd">Password</label>
      <input class="input" id="pwd" name="pwd" type="password" autocomplete="new-password" />
      <p class="form-error-msg">Password is required.</p>
    </div>
    <div class="row gap-s jc-fe marg-t-m">
      <button type="button" class="btn secondary std">Cancel</button>
      <button type="submit" class="btn std">Save</button>
    </div>
  </form>
</div>
```
