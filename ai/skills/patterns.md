# Lagunite Page Patterns

> Copy-paste HTML starting points for common page types: landing, dashboard, form page, blog.
> Use as starting points; extend with flex, grid, containers, typography, colors, molecules, compounds, organisms skills.

These snippets use **only** documented Lagunite classes. Adjust copy and add JS where noted (`.open` toggles).

---

## 1. Landing (hero + feature grid + CTA)

```html
<!-- Skills: containers, grid, typography, colors, atoms · anti-slop: no full-page bgg -->
<section class="container-fluid padd-v-l bg">
  <div class="container-l">
    <div class="grid xgrid-cols-1 dgrid-cols-2 gap-l ai-c">
      <div class="col gap-s">
        <h1 class="font-xxl bold color-text">Product headline</h1>
        <p class="font-l lh text-muted">Short value proposition for visitors.</p>
        <div class="row gap-s">
          <a class="btn" href="#">Primary</a>
          <a class="btn alt" href="#">Secondary</a>
        </div>
      </div>
      <div class="card padd">
        <p class="font-s text-muted">Hero panel or illustration area.</p>
      </div>
    </div>
  </div>
</section>

<section class="container padd-v-l">
  <h2 class="font-xl bold color-text marg-b ta-c">Features</h2>
  <div class="grid xgrid-cols-1 dgrid-cols-3 gap">
    <div class="card padd">
      <h3 class="font-l bold marg-b-s">Readable</h3>
      <p class="font-s lh text-muted">Descriptive utility classes.</p>
    </div>
    <div class="card padd">
      <h3 class="font-l bold marg-b-s">Flexible</h3>
      <p class="font-s lh text-muted">Compose with grid and gap.</p>
    </div>
    <div class="card padd">
      <h3 class="font-l bold marg-b-s">Enterprise</h3>
      <p class="font-s lh text-muted">Tokens and semantic colors.</p>
    </div>
  </div>
</section>
```

Optional accent strip (purpose-gate, not page identity): `<div class="bgg-2 padd-v">…</div>` once.
---

## 2. Dashboard (sidebar + main)

```html
<!-- Skills: organisms, flex, spacing -->
<!-- Toggle .open on .sidebar and .navbar with JS on small screens. -->
<div class="row col-row jc-fs ai-stretch">
  <aside class="sidebar flex-shrink-0">
    <div class="sidebar-header">
      <span class="font-l bold color-primary">App</span>
    </div>
    <nav class="sidebar-nav">
      <div class="sidebar-section">
        <div class="sidebar-section-title">Main</div>
        <a class="sidebar-link active" href="#"><span>Dashboard</span></a>
        <a class="sidebar-link" href="#"><span>Reports</span></a>
      </div>
    </nav>
  </aside>
  <main class="flex-1 padd bg">
    <h1 class="font-xl bold marg-b">Dashboard</h1>
    <div class="grid grid-auto gap">
      <div class="card padd"><p class="font-s">Widget A</p></div>
      <div class="card padd"><p class="font-s">Widget B</p></div>
      <div class="card padd"><p class="font-s">Widget C</p></div>
    </div>
  </main>
</div>
```

---

## 3. Form page (alert + form groups + row)

```html
<!-- Skills: molecules, atoms, typography, containers -->
<div class="container-s padd-v-l">
  <div class="alert alert-info marg-b" role="status">Please review the fields below.</div>
  <form class="bg padd bordered border-color-gray-200">
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
    <div class="row gap-s jc-fe marg-t">
      <button type="button" class="btn alt">Cancel</button>
      <button type="submit" class="btn">Save</button>
    </div>
  </form>
</div>
```

---

## 4. Blog listing (container + typography + list)

```html
<!-- Skills: containers, typography, colors, atoms -->
<article class="container-prose padd-v-l">
  <header class="marg-b-l">
    <p class="font-s color-gray-500 marg-b-s">2026-04-16</p>
    <h1 class="font-xxl bold lh">Blog post title</h1>
    <p class="font-l lh-l color-gray-600">Subtitle or deck goes here.</p>
  </header>
  <div class="font-s lh color-text marg-b">
    <p class="marg-b">First paragraph of the article body.</p>
    <p class="marg-b">Second paragraph with more detail.</p>
  </div>
  <section>
    <h2 class="font-l bold marg-b-s">Key takeaways</h2>
    <ul class="list-disc list-inside font-s lh color-text">
      <li class="marg-b-s">Point one</li>
      <li class="marg-b-s">Point two</li>
      <li>Point three</li>
    </ul>
  </section>
</article>
```

---

## 5. Auth card (golden — compose + anti-slop)

```html
<!-- Skills: compose, anti-slop, containers, compounds, molecules, atoms
     L-17: one full-width primary; secondary = text link
     L-12: at most one card-elevated -->
<div class="bg minvh100 row flex-center padd">
  <div class="container-card col gap">
    <header class="col gap-s">
      <h1 class="font-l bold color-text">Sign in</h1>
      <p class="font-s text-muted">Use your work email to continue.</p>
    </header>
    <div class="card card-elevated">
      <div class="card-body">
        <form class="col gap">
          <div class="form-group">
            <label class="form-label" for="auth-email">Email</label>
            <input class="input" id="auth-email" type="email" autocomplete="email" placeholder="you@company.com" />
          </div>
          <div class="form-group">
            <label class="form-label" for="auth-pwd">Password</label>
            <input class="input" id="auth-pwd" type="password" autocomplete="current-password" placeholder="••••••••" />
          </div>
          <div class="col gap-s marg-t">
            <button type="submit" class="btn size-l marg-0 wp100">Sign in</button>
            <p class="ta-c marg-0">
              <a class="font-s color-primary" href="#">Forgot password?</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
```

> Wizard footers (Back + Continue) may use `row gap-s` + two `.btn.flex-1` — that is not the auth “twin chrome” anti-pattern.

---

## 6. Settings section (golden)

```html
<!-- Skills: compose, containers, compounds, molecules -->
<div class="container-s padd-v-l">
  <header class="marg-b">
    <h1 class="font-xl bold color-text marg-b-s">Settings</h1>
    <p class="font-s card-text">Profile details used across the product.</p>
  </header>
  <div class="card">
    <div class="card-header">Profile</div>
    <div class="card-body col jc-fs ai-s gap">
      <div class="form-group">
        <label class="form-label" for="set-name">Display name</label>
        <input class="input" id="set-name" type="text" autocomplete="nickname" />
      </div>
      <div class="form-group">
        <label class="form-label" for="set-bio">Bio</label>
        <textarea class="input" id="set-bio" rows="3"></textarea>
        <p class="form-help">Short public blurb.</p>
      </div>
    </div>
    <div class="card-footer row jc-fe ai-c gap-s">
      <button type="button" class="btn alt">Cancel</button>
      <button type="submit" class="btn">Save changes</button>
    </div>
  </div>
</div>
```
