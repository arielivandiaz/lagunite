# Lagunite Validate — Structure

> Domain skill for the **Lagunite UI Validator** agent.  
> Focus: real classnames, class order, layers, no invented/Tailwind junk.

**When:** every generation or audit.  
**Peers:** `validate-forms`, `validate-night`, `validate-a11y`, `compose`, `contrast`.

---

## Pass / fail checks

### Invented or foreign classes (FAIL if found)
- Tailwind-ish: `d-flex`, `mx-auto`, `text-center`, `bg-blue-500`, `rounded-lg`, …
- Fake Lagunite: `btn-primary`, `btn-ghost`, `btn-secondary` as single tokens  
  → use `.btn` · `.btn.alt` · `.btn.secondary` · `.btn.ghost` (chained)
- Unknown utilities not in skills / `src/css` → report + closest match or `<!-- GAP -->`

### Class string order
1. Base utilities  
2. Then **`x*`** (≤639px)  
3. Then **`d*`** (≥640px)

### Layout before chrome
flex/grid/position → margin/padding/gap → typography/colors → borders/shadows/effects

### Gap
Use `.gap-*` / `xgap*` / `dgap*` — never legacy `g-gap` / `f-gap`

### Layer / DOM sanity
| Need | Prefer |
| --- | --- |
| Button / input / table | atoms |
| Form field stack | `.form-group` (molecule) |
| Panel | `.card` + regions (compound) |
| App chrome | `.navbar` / `.sidebar` / `.footer` (organism) |

Do not invent organism-looking classnames from utilities alone when the organism exists.

### Navbar safety
Never style all `header` tags for spacing. Scope: `header:not(.navbar):not(.doc-navbar-overlay)`.

---

## Output format (for the orchestrator)

```
### Structure
- Status: PASS | FAIL | WARN
- Findings:
  - …
- Fixes applied / suggested:
  - …
```
