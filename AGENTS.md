# Lagunite — agent context (keep lean)

## Identity
- **Lagunite v3** — utility-first CSS, descriptive class names → `dist/lagunite.css` (Vite + PostCSS). v3 = same class API as v2 with the Lagunite 3 skin (depth, glass, display type). Tokens source: `v3/design-system/tokens.json`.
- **Commands:** `npm run dev` · `npm run build` · `npm run docs:generate` (after CSS changes) · `npm run lint:css`
- **Adjacent (separate repo):** `lagunite-web/` — do not treat as part of this project

## Hard rules (always)
1. **Do not invent classes.** Missing → say so + closest utility or `<!-- GAP: … -->`.
2. Class order: **base → `x*` (≤639) → `d*` (≥640)**. Layout → spacing → type/color → deco.
3. Flex gap: `.gap-*` / `xgap*` / `dgap*` only.
4. **`.bg-1`…`.bg-9` are theme accents, not neutral panels.** Surfaces: `.bg` / `.bg-surface` / `.card` / grays. Muted: `.card-text` / `.text-muted` (not `.color-text-alt` — use `.color-on-fill` on primary fills).
5. `.row`/`.col` **start by default**; center with `.flex-center` or `jc-c ai-c`. `.btn` has `margin: 0` — space via parent `gap` / `marg-*`.
6. After CSS edits: `docs:generate`. Don’t hand-edit `docs/asJson` / `asToon`.
7. **Components already carry depth** (highlight, shadow, blur). Don’t stack `.shadow-*` / borders / gradients on `.btn` or `.card`; pick a variant (`.card-featured` once per group, `.btn.soft`, `.glass` only over `.bg-mesh`/`.bg-grid`). Night = tokens via `.night`, never `.bg-gray-*`.

## Skill tree (do NOT preload siblings)
Skills are a **tree**, not a pile. Open **one node**, then at most **one child**.
| Intent | Open |
| --- | --- |
| Unsure / which skill? | `ai/skills/route.md` (root router) |
| Generate screen / POC | `ai/skills/compose.md` only (+ 1 layer skill if stuck) |
| Audit / “validar UI” | `ai/skills/validate.md` → domains it routes |
| Class lookup | **one** file under `ai/skills/` or on-demand quickref |
| Full map / sync | `ai/AGENTS-AND-SKILLS.md` · `npm run ai:sync` · `ai/SKILLS-INDEX.md` |
| **Good prompts (humans)** | `ai/PROMPTING.md` |

**Never** Read/attach the whole `ai/skills/` folder, every validate-* leaf, or `FRAMEWORK-QUICKREF` “just in case”. Sibling skills **override each other** when loaded together (e.g. content `ai-fs` vs tool `ai-s`).

## Process caps (speed)
1. **Generate ≠ audit.** Do not open `validate.md`, spawn UI Validator, or use browser/CDP unless the user asked to audit/verify visually or layout is still wrong after compose.
2. **Target:** simple POC/screen in one pass (compose → write → done). No post-hoc skill tour.
3. **Docs on demand only:** `ToDo-prod.md` · `REVISION-v2.2.md` · `SUPPORT.md` · `FEATURES.md` · `ToDo-ai-first.md` — open only when that work is the task.

## Repo map (v3)
- **Core:** `src/` (CSS + JS). Everything else is tooling.
- **`v3/`** = tools already reviewed and working on v3: `v3/builder/` (Lagunite Builder), `v3/lab/` (MWG recipes), `v3/qa/components.html` (component QA), `v3/design-system/` (Lagunite 3 tokens + brand book). Build new tools here.
- Anything outside `v3/` (`pocs/`, `old/`, …) is **not migrated yet** — don't use it as a reference for v3 markup.

## POC / demo
- `pocs/` or `poc-*.html` → link `src/lagunite.css`; mark `style=""` with `<!-- GAP -->`.
- Full-viewport tools/editors: `minvh100` + `col ai-s flex-nowrap` (bare `.col` shrink-wraps — see `compose.md` tool shell).
