---
name: lagunite-validate
description: >-
  Checklist for reviewing or generating Lagunite markup: class order, no invented
  utilities, correct UI layer, and pointers to PROMPT_GUIDE and cheatsheets.
  Use whenever producing or auditing HTML/CSS that claims to use Lagunite.
---

# Lagunite validate (meta)

## Before you generate

1. **Pick the right skill** for the layer: tokens → typography/colors → spacing/layout → decorators → atoms → molecules → compounds → organisms → patterns.
2. **Do not invent classes.** If it is not in the relevant skill or `src/css`, say it is missing and suggest the closest documented utility.
3. **Prefer utilities over `style=""` or raw px**, unless the framework truly has no match (then state the gap explicitly).

## Class string hygiene

1. **Order:** base utilities first, then **`x*`** (max-width 639px), then **`d*`** (min-width 640px).
2. **Layout first:** flex/grid/position → margin/padding/gap → typography/colors → borders/shadows/effects.
3. **Gap in grid/flex:** use **`.gap-*`** (and `xgap*` / `dgap*`) from flex/grid skills — **not** removed legacy names like `g-gap` or `f-gap`.

## Layer sanity

| Layer | Skill | Examples |
| --- | --- | --- |
| Atoms | lagunite-atoms | `.btn`, `.input`, tables, lists |
| Molecules | lagunite-molecules | `.form-group`, `.alert`, `.dropdown` |
| Compounds | lagunite-compounds | `.card`, `.modal` |
| Organisms | lagunite-organisms | `.navbar`, `.sidebar`, `.footer` |

Do not put organism markup inside a molecule class name “just because”; keep DOM structure as in the source CSS files.

## After you generate (quick review)

- Scan for unknown or Tailwind-style abbreviations on Lagunite projects.
- Check responsive prefixes match intent (`x` = mobile, `d` = desktop).
- **Background + text:** many `.bg-*` utilities set text color; do not stack conflicting `.color-*` without reason.

## Reference docs in this repo

- [docs/PROMPT_GUIDE.md](docs/PROMPT_GUIDE.md) — prompt starters and rules for assistants.
- Layout cheatsheets: [src/css/03-layout/FLEX-CHEATSHEET.md](src/css/03-layout/FLEX-CHEATSHEET.md), [src/css/03-layout/GRID-CHEATSHEET.md](src/css/03-layout/GRID-CHEATSHEET.md), [src/css/03-layout/CONTAINERS-CHEATSHEET.md](src/css/03-layout/CONTAINERS-CHEATSHEET.md), [src/css/03-layout/LAYOUT-SPACING-CHEATSHEET.md](src/css/03-layout/LAYOUT-SPACING-CHEATSHEET.md), [src/css/03-layout/LAYOUT-FLEX.md](src/css/03-layout/LAYOUT-FLEX.md), [src/css/03-layout/LAYOUT-GRID.md](src/css/03-layout/LAYOUT-GRID.md), [src/css/03-layout/LAYOUT-CONTAINERS.md](src/css/03-layout/LAYOUT-CONTAINERS.md).
- Other cheatsheets: [src/css/04-decorators/DECORATORS-CHEATSHEET.md](src/css/04-decorators/DECORATORS-CHEATSHEET.md), [src/css/05-atoms/ATOMS-CHEATSHEET.md](src/css/05-atoms/ATOMS-CHEATSHEET.md), [src/css/10-misc/MISC-CHEATSHEET.md](src/css/10-misc/MISC-CHEATSHEET.md).

## One-line user prompt you can reuse

“Lagunite v2 only: use skills + `src/css`; base then `x` then `d`; no invented classes; layout utilities before decoration.”
