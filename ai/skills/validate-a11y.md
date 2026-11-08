# Lagunite Validate — Accessibility (light)

> Domain skill for the **Lagunite UI Validator** agent.  
> Focus: practical a11y gates for Lagunite HTML (not a full WCAG audit).

**When:** any interactive UI, forms, nav, dialogs.  
**Peers:** `validate-forms`, `validate-night`, `contrast.md`.

---

## Pass / fail checks

### Semantics
- Inputs have associated `<label for="…">` (or wrapping label with clear text)
- Buttons/links have discernible text (or `aria-label` if icon-only)
- Headings in logical order (don’t skip h1→h3 without reason)
- `role` / `aria-*` only when the organism needs it (modal, alert, menu) — don’t sprinkle randomly

### Keyboard / focus
- Interactive atoms must remain focusable (don’t remove outline without a visible `:focus-visible` replacement)
- Icon-only controls need `aria-label`

### Motion
- Prefer respecting `prefers-reduced-motion` when using animation utilities (framework animations already guard many cases)

### Contrast (delegate detail)
- Run mental / skill pass of `contrast.md`
- FAIL obvious light-on-light or dark-on-dark (e.g. `.card-text` without night override was a known trap — fixed in CSS; still watch bare gray utilities)

### Forms a11y
- Error text tied to the field (`.form-error-msg` in the same `.form-group`)
- Don’t use color alone for errors (keep the message)
- Prefer showing native errors only after interaction (`:user-invalid` / `.reveal-user-invalid`)
- Sync `aria-invalid` to match `:user-invalid` on blur/focus/input — **never** `aria-invalid="true"` on load for empty required fields (recipe `accessible-error-announcement`)
- Prefer `aria-errormessage` (+ `aria-describedby` for broader AT) pointing at the error node

### Dialogs
- Prefer native `<dialog class="modal">` with accessible name (`aria-labelledby` / `aria-label`)
- Light-dismiss: `closedby="any"` + `showModal()` (fallback click on dialog target if unsupported)
- Invoker Commands: `command` / `commandfor` when available; provide showModal/close fallback

---

## Output format

```
### A11y
- Status: PASS | FAIL | WARN
- Findings:
  - …
- Fixes applied / suggested:
  - …
```
