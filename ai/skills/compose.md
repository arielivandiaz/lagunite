# Lagunite Compose (UI craft)

> **Use this skill whenever you generate a screen, section, or multi-element UI** — not for a single utility question.
> Cheatsheets answer “what class exists?”. This skill answers “how do I assemble a coherent UI?”.
> Always pair with `validate.md` and `contrast.md` before finishing.

**Load with:** `compose.md` when generating screens. The **UI Validator** also runs **`anti-slop.md`** (taste filter adapted from [anti-slop](https://github.com/miqdadbadjuber/anti-slop)).

---

## 0. Non-negotiables (Lagunite-specific)

1. **`.row` / `.col` / `.rowr` / `.colr` start-aligned by default** (anti-slop P0).  
   Content UI usually needs no extra alignment classes. Use `.flex-center` or `jc-c ai-c` only for heroes, empty states, and icon+label chips.
2. **`.bg-1` … `.bg-9` are theme accent fills, NOT neutral panels.**  
   Surfaces: `.bg`, `.bg-surface`, `.bg-surface-raised`, `.card`, gray neutrals. Accents = CTAs / brand strips only.
3. **Do not invent classnames** (`btn-primary`, `btn-ghost`, `d-flex`, `mx-auto`, Tailwind names).  
   Buttons: `.btn` · `.btn.alt` · `.btn.secondary` · `.btn.ghost` (chained classes, not `btn-ghost`).  
   `.btn` has `margin: 0` — space with parent `gap` / `marg-*`.
4. **One spacing rhythm per section.** Prefer a single gap scale (`gap-s` or `gap`) + matching padd (`padd` / `padd-m`). Do not mix `gap-xs` + `gap-xl` + random `marg-*` in the same block.
5. **Prefer molecules/compounds over utility soup** when they exist: `.form-group`, `.card` + regions, `.alert`, `.stat-card`, `.sidebar`.
6. **Muted copy:** `.text-muted` or `.card-text` — never `.color-text-alt` as subtitle. On fills: `.color-on-fill`.

---

## 1. Compose in this order (always)

```
1. Page shell     → container / dashboard-shell / sidebar+main
2. Sections       → vertical stack (col jc-fs ai-fs / gap)
3. Clusters       → card | form-group | grid of equals
4. Clusters’ guts → row/col with explicit alignment + gap
5. Chrome         → type scale, color-text / color-on-fill / text-muted, borders/shadows last
```

If you start with colors or shadows, stop and restart from layout.

---

## 2. Alignment cheat sheet (intent → classes)

| Intent | Classes |
| --- | --- |
| Content column / form / article | `col jc-fs ai-fs gap-s` (or `gap`) |
| Toolbar / header bar | `row jc-sb ai-c gap-s` |
| Actions at end of form | `row jc-fe ai-c gap-s` **or** one `.btn.size-l.marg-0.wp100` + text link (prefer this in auth cards) |
| Equal cards | `grid xgrid-cols-1 dgrid-cols-3 gap` |
| Sidebar + main | organism `.sidebar` + `main.flex-1` (see patterns) — not a centered `.row` of everything |
| True center (hero/empty) | `.flex-center` or `jc-c ai-c` — only here |

**Default mistake:** forcing `jc-c ai-c` on forms/settings so “everything floats in the middle”.

---

## 3. Surface & color recipe

| Role | Prefer | Avoid |
| --- | --- | --- |
| Page background | `.bg` | `.bg-1`, full-page `bgg-*` |
| Panel / card | `.card` (flat by default) / `.bg-surface` | Nested `.card` inside `.card` without reason · default `.card-elevated` everywhere |
| Primary CTA fill | `.btn` | inventing `btn-primary` |
| Secondary CTA | `.btn.alt` or text link | twin full-width `.btn` + `.btn.alt` in auth |
| Body text | `.color-text` (or inherit from `.bg`) | `.color-text-alt` on light panels |
| Muted / help | `.text-muted` or `.card-text` | `.color-text-alt` (`#fff`) · bare `.color-gray-600` in night |
| On-fill text | `.color-on-fill` | using `.color-text-alt` as the “muted” name |
| Night panels | `.bg-gray-800` / `.bg-gray-900` inside `.night` | `.bg-1`…`.bg-9` as “dark mode” |

Read `contrast.md` before any custom `bg-*` + `color-*` pair.

---

## 4. Typography rhythm (keep it boring)

Per view, aim for **three levels max**:

1. Page/section title — `font-xl` or `font-l` + `bold`
2. Body — default / `font-s` + `lh`
3. Meta/help — `font-s` + `.text-muted` or `.card-text` (never `.color-text-alt` on light UI)

Do not stack `font-xxl` + `font-xl` + `font-l` + `font-m` in one card.

---

## 5. Spacing rhythm

- Section vertical: `padd-v-l` or `padd-v-m` on the section/container — not margin on every child.
- Inside a card: `card-body` already pads; extra `padd` only if needed once.
- Sibling groups: one `gap-s` or `gap` on the parent flex/grid.
- Separate blocks: `marg-b` / `marg-b-m` sparingly — prefer parent `gap`.

**Smell test:** if a single component has 6+ different spacing classes, simplify.

---

## 6. Responsive defaults

- Stack on mobile, split on desktop: `col-row gap` or `grid xgrid-cols-1 dgrid-cols-2 gap`
- Class order: **base → `x*` → `d*`**
- Don’t hide critical actions only on `d*`; don’t force `drow` without a mobile story

---

## 7. Anti-patterns → fix

| Anti-pattern | Fix |
| --- | --- |
| Page is one big centered `.row` | Outer `col jc-fs ai-fs` + container; center only hero |
| `.bg-2` / `.bg-1` as card background | `.card` or `.bg` / gray neutrals |
| `class="btn btn-primary"` | `class="btn"` |
| `class="btn btn-ghost"` | `class="btn ghost"` |
| Every block is a `.card` | One card for the interactive unit; rest is plain stack |
| Grid without gap | Always set `gap` / `gap-s` |
| Form fields without `.form-group` | label + input + help inside `.form-group` |
| Inputs without `placeholder` expecting native green/red | Add `placeholder` **or** use `.has-error` / `.has-success` — empty fields must stay neutral |
| Sidebar built from random flex | Use `.sidebar` organism markup |
| `.color-text-alt` as “muted” on cards | `.text-muted` / `.card-text` — on fills use `.color-on-fill` |
| Full-viewport center with `minhp100` | Use **`minvh100`** (viewport), not `%` of parent |
| Inline `style=""` for layout | Utilities or `<!-- GAP: … -->` |

---

## 8. Mini recipes (copy structure, swap copy)

### Auth card
```html
<div class="bg minvh100 row jc-c ai-c padd">
  <div class="container-card">
    <div class="card">
      <div class="card-body col jc-fs ai-s gap-s">
        <h1 class="font-l bold color-text">Sign in</h1>
        <p class="font-s card-text">Welcome back.</p>
        <form class="col jc-fs ai-s gap-s">
          <div class="form-group">
            <label class="form-label" for="email">Email</label>
            <input class="input" id="email" type="email" autocomplete="email" />
          </div>
          <div class="form-group">
            <label class="form-label" for="pwd">Password</label>
            <input class="input" id="pwd" type="password" autocomplete="current-password" />
          </div>
          <div class="row jc-fe ai-c gap-s marg-t">
            <button type="button" class="btn alt">Cancel</button>
            <button type="submit" class="btn">Continue</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
```

### Settings stack
```html
<div class="container-s padd-v-l">
  <h1 class="font-xl bold color-text marg-b">Settings</h1>
  <div class="card marg-b">
    <div class="card-header">Profile</div>
    <div class="card-body col jc-fs ai-s gap">
      <div class="form-group">
        <label class="form-label" for="name">Display name</label>
        <input class="input" id="name" type="text" />
      </div>
      <div class="form-group">
        <label class="form-label" for="bio">Bio</label>
        <textarea class="input" id="bio" rows="3"></textarea>
      </div>
    </div>
    <div class="card-footer row jc-fe gap-s">
      <button type="button" class="btn alt">Cancel</button>
      <button type="submit" class="btn">Save</button>
    </div>
  </div>
</div>
```

### Stats row
```html
<div class="grid xgrid-cols-1 dgrid-cols-3 gap">
  <div class="stat-card"><!-- use molecule markup from molecules skill --></div>
  <div class="stat-card"></div>
  <div class="stat-card"></div>
</div>
```

---

## 9. Pre-flight (before you output HTML)

- [ ] Outer layout uses `jc-fs ai-fs` unless this is intentionally centered
- [ ] No `.bg-1`…`.bg-9` as neutral surfaces
- [ ] Buttons use real Lagunite chains (`.btn`, `.btn.alt`, `.btn.ghost`…)
- [ ] One gap scale in the main cluster
- [ ] ≤3 type levels
- [ ] Forms use `.form-group` + `.form-label` + `.input`
- [ ] Cards use `.card` / `.card-header` / `.card-body` / `.card-footer` when structured
- [ ] Muted copy uses `.text-muted` or `.card-text` (not `.color-text-alt` on light surfaces)
- [ ] Full-bleed centered shells use `minvh100`, not `minhp100`
- [ ] Ran mental pass of `contrast.md` for bg/text
- [ ] No invented / Tailwind classes

---

## 10. One-line reminder

> **Layout first, align explicitly (`jc-fs ai-fs`), surfaces semantic, one rhythm, real Lagunite components — then decorate.**
