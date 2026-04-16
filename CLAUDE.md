# Lagunite — Claude context

## Project identity

- **Framework:** Lagunite v2 — utility-first CSS with descriptive class names
- **NPM:** `lagunite` (v2.0.17)
- **Build:** Vite + PostCSS → `dist/lagunite.css`
- **Key commands:**
  - `npm run dev` — dev server (Vite, hot reload)
  - `npm run build` — production build (increments version)
  - `npm run docs:generate` — regenerate `docs/asJson/` from CSS comments (**run after any CSS change**)
  - `npm run docs:merge` — merge generated docs
  - `npm run lint:css` — Stylelint

## Adjacent project: lagunite-web

`lagunite-web/` is a **completely separate project** (its own git repo) that lives next to this one only for practical development convenience. It is an Astro 5 site that consumes the compiled output of this framework:
- Imports `../../../dist/lagunite.css` (from its `Layout.astro`)
- Runs its own `npm run docs:sync` to pull `docs/asJson/` from this project

Do not treat `lagunite-web/` as part of this repo or assume changes here affect it automatically.

**When you also need to update lagunite-web after a CSS change:**
1. Edit `src/css/<layer>/<file>.css`
2. `npm run build` in lagunite/
3. `npm run docs:generate` in lagunite/
4. `npm run docs:sync` in lagunite-web/ (separate step, separate project)
5. Update the relevant `.cursor/skills/*/SKILL.md`

## Validate rules (always apply)

### Before generating HTML/CSS
1. **Pick the right layer** — tokens → typography/colors → spacing/layout → decorators → atoms → molecules → compounds → organisms → patterns.
2. **Do not invent classes.** If a class is not in a skill or `src/css/`, say it is missing and suggest the closest documented utility.
3. **Prefer utilities** over `style=""` or raw px. If no match exists, state the gap explicitly with `<!-- GAP: reason -->`.

### Class string order
1. **Base utilities** first, then **`x*`** (max-width 639px), then **`d*`** (min-width 640px).
2. **Layout first:** flex/grid/position → margin/padding/gap → typography/colors → borders/shadows/effects.
3. **Gap in grid/flex:** use `.gap-*` (and `xgap*` / `dgap*`) — NOT removed names like `g-gap` or `f-gap`.

### Layer sanity
| Layer | Skill | Examples |
| --- | --- | --- |
| Atoms | lagunite-atoms | `.btn`, `.input`, tables, lists |
| Molecules | lagunite-molecules | `.form-group`, `.alert`, `.dropdown` |
| Compounds | lagunite-compounds | `.card`, `.modal` |
| Organisms | lagunite-organisms | `.navbar`, `.sidebar`, `.footer` |

### After generating — quick review
- Scan for unknown or Tailwind-style abbreviations.
- Check responsive prefixes match intent (`x` = mobile, `d` = desktop).
- **Background + text:** many `.bg-*` utilities set text color; do not stack conflicting `.color-*` without reason.
- Navbar safety: never style all `header` tags for spacing. Scope as `header:not(.navbar):not(.doc-navbar-overlay)` if needed.

## Framework quick reference

@.claude/FRAMEWORK-QUICKREF.md

## Full skill files (read on demand)

When a task requires depth on a specific area, read the relevant skill file.
Index: `ai/SKILLS-INDEX.md`

| Skill | Path |
| --- | --- |
| Tokens (CSS vars) | `ai/skills/tokens.md` |
| Typography | `ai/skills/typography.md` |
| Colors | `ai/skills/colors.md` |
| Spacing & sizing | `ai/skills/spacing.md` |
| Flex layout | `ai/skills/flex.md` |
| Grid layout | `ai/skills/grid.md` |
| Containers | `ai/skills/containers.md` |
| Decorators | `ai/skills/decorators.md` |
| Atoms | `ai/skills/atoms.md` |
| Molecules | `ai/skills/molecules.md` |
| Compounds | `ai/skills/compounds.md` |
| Organisms | `ai/skills/organisms.md` |
| Patterns | `ai/skills/patterns.md` |
| Misc | `ai/skills/misc.md` |
| Validate (meta) | `ai/skills/validate.md` |
| Tailwind migration | `ai/skills/tailwind-migration.md` |

In-repo cheatsheets: `src/css/03-layout/FLEX-CHEATSHEET.md`, `GRID-CHEATSHEET.md`, `CONTAINERS-CHEATSHEET.md`, `LAYOUT-SPACING-CHEATSHEET.md`. Decorators: `src/css/04-decorators/DECORATORS-CHEATSHEET.md`. Atoms: `src/css/05-atoms/ATOMS-CHEATSHEET.md`.

## HTML POC workflow

- **File naming:** `poc-{topic}.html` (in-progress POCs), `demo-{topic}.html` (stable demos) — in repo root.
- **POC files** link to `./src/lagunite.css` or `./dist/lagunite.css` and hot-reload with `npm run dev`.
- **Mark every `style=""`** with `<!-- GAP: needs .utility-name -->`.
- After visual sign-off: move gaps to `src/css/<layer>/<file>.css` → build → docs:generate → update skill.
