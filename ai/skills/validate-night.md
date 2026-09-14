# Lagunite Validate — Night mode

> Domain skill for the **Lagunite UI Validator** agent.  
> Focus: `.night` surfaces, text, and contrast traps.

**When:** page supports theme toggle, ships with `.night`, or claims dark UI.  
**Peers:** `contrast.md`, `validate-a11y`, `compose`.

---

## Pass / fail checks

### How night is activated
- Prefer `class="night"` on `body` (or a documented ancestor). Toggle should flip that class.

### Surfaces
| Role | Prefer in night | Avoid |
| --- | --- | --- |
| Page | `.bg` (token swaps) | `.bg-1`…`.bg-9` as “dark panels” |
| Card / panel | `.card` (`.night .card` → gray-800) | Random dark hex / utility soup |
| Extra dark panel | `.bg-gray-800` / `.bg-gray-900` | `.bg-alt` without checking text |

### Text
| Role | Prefer | Avoid |
| --- | --- | --- |
| Body / titles | `.color-text` or inherit from `.bg` | `.color-gray-800` / dark grays on dark bg |
| Muted / help | **`.card-text`** (night override → gray-400) | `.color-text-alt` (`#fff` — on-fill only) · bare `.color-gray-600` on dark cards |

### Critical token reminder
- `.color-text-alt` = **white** (`--color-text-alt`). For text **on** primary/dark fills — **not** muted subtitles.
- `.bg-alt` in night can flip to a light strip — don’t assume it’s a dark panel.

### Demo / POC expectation
Screens used to judge night should include a **Night/Day toggle** so both modes are checkable.

---

## Output format

```
### Night
- Status: PASS | FAIL | WARN | SKIP (no night surface)
- Findings:
  - …
- Fixes applied / suggested:
  - …
```
