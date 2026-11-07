# Agent context hygiene (Lagunite)

How to keep Cursor/Claude tokens low in this repo.

## What burns tokens
1. **Always-on rules** that force tools or huge dumps every turn.
2. **`@` attaching** big files (`ToDo-prod.md`, `FUTURE-*.md`, whole `ai/skills/`, `FRAMEWORK-QUICKREF`).
3. **Reading every skill** when only one layer is needed — siblings **collide** (content `ai-fs` vs tool `ai-s`).
4. **Chaining generate → full UI Validator → browser** when the user only asked for a POC.
5. **Long chat history** with many HTML pastes — start a fresh thread for a new screen.

## Repo defaults (after cleanup)
| File | Role |
| --- | --- |
| `AGENTS.md` | **Lean** always-ish identity + hard rules + process caps |
| `ai/skills/route.md` | **Root router** — pick one tree node; do not preload siblings |
| `ai/AGENTS-AND-SKILLS.md` | **On demand** map of agent + skills + Cursor/GitHub/Claude |
| `ai/SKILLS-INDEX.md` | Catalog — open one skill, not all |
| `ai/skills/*.md` | **Canonical** skill content (edit here) |
| `ai/agents/*.md` | **Canonical** agent persona |
| `.cursor` / `.github` / `.claude` skills | Generated wrappers — `npm run ai:sync` |
| `.claude/FRAMEWORK-QUICKREF.md` | **On demand** class encyclopedia |
| `.cursor/rules/lagunite-ai.mdc` | Short rules **only** on HTML/CSS globs |
| `FEATURES.md` | Shipped CSS features (not a checklist) |
| `ToDo-prod.md` | Pending release work only |

## Habits that help
- Ask: “edit `pocs/…/b-01-auth.html` — use compose” instead of `@ai/skills` folder.
- Unsure which skill? Open [`route.md`](./skills/route.md), not the whole index.
- For audits: “run UI Validator on this file” (agent opens `validate.md` + only needed domains).
- Prefer [`AGENTS-AND-SKILLS.md`](./AGENTS-AND-SKILLS.md) when unsure which agent surface to use.
- Don’t `@ToDo-prod` unless working the release checklist.
- Prefer a **new chat** when switching from strategy docs → pixel fixes.
- Generate POCs: compose → write → done. No browser/validator unless asked.
- Writing the human prompt: [`PROMPTING.md`](./PROMPTING.md).

## Optional later
- Publish `@lagunite/ai` (skills + MCP) — see AI-first plan AIF-P.
- **Recipes as skilllets** (`ai/recipes/*.md`) — short When/Do/Markup; don’t preload lab HTML — [`ToDo-modern-platform.md`](../ToDo-modern-platform.md).
- Split `contrast.md` into a short “safe pairs” skill + generated full tables on demand.
