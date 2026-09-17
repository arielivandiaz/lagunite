# Lagunite Validate — Forms

> Domain skill for the **Lagunite UI Validator** agent.  
> Focus: form markup, inputs, native vs explicit validation states.

**When:** page/section contains forms, inputs, labels, or CTAs tied to fields.  
**Peers:** `validate-structure`, `validate-a11y`, `compose`.

---

## Pass / fail checks

### Required molecules
- Each field cluster: `.form-group` → `.form-label` + `.input` (or select/textarea with `.input`)
- Help: `.form-help` · Error copy: `.form-error-msg` inside `.form-group.has-error`
- Explicit states: `.form-group.has-error` / `.has-success` when the **app** owns validation

### Buttons
- Primary: `.btn`
- Secondary / outline: `.btn.alt` or `.btn.secondary`
- Ghost: `.btn.ghost` (chained) — never `btn-ghost` / `btn-primary`

### Native green / red borders (framework behavior)
Lagunite paints `:valid` / `:invalid` **only if the control has a `placeholder`**:

| State | Expected border |
| --- | --- |
| Empty (with or without placeholder) | Neutral (`--input-border`) |
| Filled + valid + `[placeholder]` | Green (success) |
| Filled + invalid + `[placeholder]` | Red (error) |
| No `placeholder` | Always neutral for native `:valid`/`:invalid` chrome |

**Agent rules:**
1. Prefer adding meaningful `placeholder` when using native HTML validation UX.
2. For app-driven validation, use `.has-error` / `.has-success` — don’t rely on empty fields looking “success”.
3. FAIL if empty inputs show green/red without user content (regression of the old selector bug).

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
