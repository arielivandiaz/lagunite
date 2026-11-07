# Lagunite Validate — Forms

> Domain skill for the **Lagunite UI Validator** agent.  
> Focus: form markup, inputs, native vs explicit validation states.

**When:** page/section contains forms, inputs, labels, or CTAs tied to fields.  
**Peers:** `validate-structure`, `validate-a11y`, `compose`.  
**Platform guide:** MWG `validate-input-after-interaction` · recipe `lab/recipes/validate-input-after-interaction.html`

---

## Pass / fail checks

### Required molecules
- Each field cluster: `.form-group` → `.form-label` + `.input` (or select/textarea with `.input`)
- Help: `.form-help` · Error copy: `.form-error-msg` inside `.form-group`
- Native post-interact errors: `.form-error-msg.reveal-user-invalid` (hidden until `:user-invalid`)
- Explicit states: `.form-group.has-error` / `.has-success` when the **app** owns validation

### Buttons
- Primary: `.btn`
- Secondary / outline: `.btn.alt` or `.btn.secondary`
- Ghost: `.btn.ghost` (chained) — never `btn-ghost` / `btn-primary`

### Native green / red borders (framework behavior)

Lagunite uses **`:user-invalid` / `:user-valid`** (after blur or submit attempt), not raw `:invalid` / `:valid` on paint.

| State | Expected border |
| --- | --- |
| Load / typing before commit | Neutral (`--input-border`) — **no** red/green yet |
| After interact + invalid | Red (`--color-error`) — **no** `placeholder` required |
| After interact + valid + has content + `[placeholder]` | Green (`--color-success`) |
| Empty after casual blur (optional field) | Neutral if no placeholder / placeholder still shown |
| App-driven | `.has-error` / `.has-success` (ignore native chrome) |

**Agent rules:**
1. Prefer HTML constraints (`required`, `type="email"`, `pattern`, `minlength`) + `:user-*` chrome.
2. Put format hints in `.form-help` **above** or beside the control (not only below) when autocomplete may cover them.
3. For copy that should appear only after interact: `.form-error-msg.reveal-user-invalid` + `aria-errormessage` / `aria-describedby`.
4. For app-driven validation, use `.has-error` / `.has-success` — don’t rely on empty fields looking “success”.
5. **FAIL** if errors or green/red borders show on first paint before any blur/submit (regression to `:invalid`/`:valid` paint).
6. Meaningful `placeholder` still recommended when you want native **success** chrome after a filled valid value.
7. **Required fields:** do not preload `.has-error` on empty required controls — rely on `:user-invalid` + `.reveal-user-invalid` (recipe `required-field-feedback`).
8. **Sign-in autofill:** `autocomplete="username"` + `current-password`, button says “Sign in” (recipe `autofill-sign-in-form`).
9. **Sign-up autofill:** `name` + `email` + `new-password`, button “Create account” (recipe `autofill-sign-up-form`).
10. **Address autofill:** `shipping street-address` textarea + level2/postal/country (recipe `autofill-address-form`).
11. **Parent chrome:** `.form-surface:has(:user-invalid)` and built-in label tint via `:has` (recipe `style-parent-with-has`).
12. **Rich pickers:** prefer `.selectable-option`; progressive `.select-base` (recipe `rich-media-picker`).

### Platform recipes (Lab)

| MWG id | Recipe |
| --- | --- |
| validate-input-after-interaction | `lab/recipes/validate-input-after-interaction.html` |
| required-field-feedback | `lab/recipes/required-field-feedback.html` |
| accessible-error-announcement | `lab/recipes/accessible-error-announcement.html` (also validate-a11y) |
| autofill-sign-in-form | `lab/recipes/autofill-sign-in-form.html` |
| autofill-sign-up-form | `lab/recipes/autofill-sign-up-form.html` |
| autofill-address-form | `lab/recipes/autofill-address-form.html` |
| autofill-highlight-inputs | `lab/recipes/autofill-highlight-inputs.html` |
| form-fields-automatically-fit-contents | `lab/recipes/form-fields-automatically-fit-contents.html` |
| branded-select-styling | `lab/recipes/branded-select-styling.html` |
| rich-media-picker | `lab/recipes/rich-media-picker.html` |
| style-parent-with-has | `lab/recipes/style-parent-with-has.html` |

### Alignment inside forms
- Form stacks: `col jc-fs ai-s gap-s` (or `gap`)
- Actions: `row jc-fe ai-c gap-s` **or** one full-width primary + quiet text link (auth cards)
- Full-width primary: `.btn.size-l.marg-0.wp100` (`.btn` already has `margin: 0`; `.marg-0` is defensive in stacks)
- Avoid stacking `.btn` + `.btn.alt` both `wp100` (generic twin CTAs)
- Labels should not sit optically centered — don’t force `jc-c ai-c` on form parents (flex defaults are start)

---

## Output format

```
### Forms
- Status: PASS | FAIL | WARN
- Findings:
  - …
- Fixes applied / suggested:
  - …
```
