# Lagunite — agent context (keep lean)

## Identity
- **Lagunite v2** — utility-first CSS, descriptive class names → `dist/lagunite.css` (Vite + PostCSS)
- **Commands:** `npm run dev` · `npm run build` · `npm run docs:generate` (after CSS changes) · `npm run lint:css`
- **Adjacent (separate repo):** `lagunite-web/` — do not treat as part of this project

## Hard rules (always)
1. **Do not invent classes.** Missing → say so + closest utility or `<!-- GAP: … -->`.
2. Class order: **base → `x*` (≤639) → `d*` (≥640)**. Layout → spacing → type/color → deco.
3. Flex gap: `.gap-*` / `xgap*` / `dgap*` only.
4. **`.bg-1`…`.bg-9` are theme accents, not neutral panels.** Surfaces: `.bg` / `.bg-surface` / `.card` / grays. Muted: `.card-text` / `.text-muted` (not `.color-text-alt` — use `.color-on-fill` on primary fills).
5. `.row`/`.col` **start by default**; center with `.flex-center` or `jc-c ai-c`. `.btn` has `margin: 0` — space via parent `gap` / `marg-*`.
6. After CSS edits: `docs:generate`. Don’t hand-edit `docs/asJson` / `asToon`.

## Load on demand (do NOT preload)
| Need | Open |
| --- | --- |
| **Agents & skills map** | `ai/AGENTS-AND-SKILLS.md` |
| Sync IDE wrappers | `npm run ai:sync` |
| Skill index | `ai/SKILLS-INDEX.md` |
| Screen / form UI | `ai/skills/compose.md` → then UI Validator `ai/skills/validate.md` |
| Taste / AI-slop filter | `ai/skills/anti-slop.md` |
| Class encyclopedia | `.claude/FRAMEWORK-QUICKREF.md` or layer skill under `ai/skills/` |
| CSS release checklist (RTP historial) | `ToDo-prod.md` |
| **Revisión personal pre-publish** | `REVISION-v2.1.md` |
| Support / browsers / size | `SUPPORT.md` |
| Shipped features | `FEATURES.md` |
| AI-first / JSON→HTML | `ToDo-ai-first.md` (paused until CSS gate) |

## POC / demo
- `pocs/` or `poc-*.html` → link `src/lagunite.css`; mark `style=""` with `<!-- GAP -->`.
