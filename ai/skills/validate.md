# Lagunite Validate (Meta)

> Checklist for reviewing or generating Lagunite markup. Use whenever producing or auditing HTML/CSS that claims to use Lagunite.

---

## Before you generate

1. **Pick the right skill** for the layer: tokens → typography/colors → spacing/layout → decorators → atoms → molecules → compounds → organisms → patterns.
2. **Do not invent classes.** If a class is not in the relevant skill or `src/css`, say it is missing and suggest the closest documented utility.
3. **Prefer utilities over `style=""` or raw px**, unless the framework truly has no match (then state the gap explicitly with `<!-- GAP: reason -->`).

## Class string hygiene

1. **Order:** base utilities first, then **`x*`** (max-width 639px), then **`d*`** (min-width 640px).
2. **Layout first:** flex/grid/position → margin/padding/gap → typography/colors → borders/shadows/effects.
3. **Gap in grid/flex:** use **`.gap-*`** (and `xgap*` / `dgap*`) — **not** removed legacy names like `g-gap` or `f-gap`.

## Layer sanity

| Layer | Skill | Examples |
| --- | --- | --- |
| Atoms | atoms | `.btn`, `.input`, tables, lists |
| Molecules | molecules | `.form-group`, `.alert`, `.dropdown` |
| Compounds | compounds | `.card`, `.modal` |
| Organisms | organisms | `.navbar`, `.sidebar`, `.footer` |

Do not put organism markup inside a molecule class name; keep DOM structure as in the source CSS files.

## After you generate (quick review)

- Scan for unknown or Tailwind-style abbreviations.
- Check responsive prefixes match intent (`x` = mobile, `d` = desktop).
- **Background + text:** many `.bg-*` utilities set text color; do not stack conflicting `.color-*` without reason.
- **Navbar safety:** never style all `header` tags for spacing. Scope as `header:not(.navbar):not(.doc-navbar-overlay)` if needed.

## Cheatsheets in this repo

- Layout: `src/css/03-layout/FLEX-CHEATSHEET.md`, `GRID-CHEATSHEET.md`, `CONTAINERS-CHEATSHEET.md`, `LAYOUT-SPACING-CHEATSHEET.md`
- Decorators: `src/css/04-decorators/DECORATORS-CHEATSHEET.md`
- Atoms: `src/css/05-atoms/ATOMS-CHEATSHEET.md`

## One-line prompt you can reuse

> "Lagunite v2 only: use skills + `src/css`; base then `x` then `d`; no invented classes; layout utilities before decoration."
