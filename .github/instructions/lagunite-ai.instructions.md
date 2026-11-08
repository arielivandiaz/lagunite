---
applyTo: "**/*.html,src/css/**/*.css,pocs/**/*.html,demos/**/*.html"
---

# Lagunite UI (scoped) — GitHub Copilot

Same hard rules as [`.cursor/rules/lagunite-ai.mdc`](../../.cursor/rules/lagunite-ai.mdc). Canonical map: [`ai/AGENTS-AND-SKILLS.md`](../../ai/AGENTS-AND-SKILLS.md).

## Always for these files
- No invented classes; utilities only from skills / `src/css`
- Order: base → `x*` → `d*`; layout before deco; `.gap-*` for flex/grid gap
- Surfaces: `.bg` / `.bg-surface` / `.card` / grays — not `.bg-1..9` as panels
- Muted: `.card-text` / `.text-muted` — never `.color-text-alt` as subtitle (use `.color-on-fill` on fills)
- Flex defaults to start; center with `.flex-center` or `jc-c ai-c`. Tools/editors: `ai-s` + `minvh100`
- Full-width primary CTA: `.btn.size-l.marg-0.wp100` (`.btn` has `margin: 0`)
- CSS change → `npm run docs:generate`

## On demand only (one node — do not preload siblings)
- Router: `ai/skills/route.md`
- Craft / generate: `ai/skills/compose.md` (+ at most one layer skill)
- Audit: `ai/skills/validate.md` — **only if user asked**
- Slop filter: `ai/skills/anti-slop.md` — only if asked / polish
- Map: `ai/AGENTS-AND-SKILLS.md`

Do **not** read every `ai/skills/*.md`, chain validate after every generate, or open browser/CDP unless asked.
