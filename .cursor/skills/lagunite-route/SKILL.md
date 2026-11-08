---
name: lagunite-route
description: >-
  Routes which Lagunite skill to open next (compose vs layer vs validate). Use when unsure which skill to load, before generating UI, or to avoid preloading sibling skills. Do not use as a class encyclopedia.
---

# Lagunite route (Cursor)

**First action:** Read [`ai/skills/route.md`](../../../ai/skills/route.md) and follow it.

## Caps (do not skip)
- Open **one** child node, then at most **one** leaf — never the whole `ai/skills/` folder.
- Generate → `compose.md` only. Audit → `validate.md` only if the user asked.
- Sibling skills collide (content `ai-fs` vs tool `ai-s`); task intent wins.

Map: [`ai/AGENTS-AND-SKILLS.md`](../../../ai/AGENTS-AND-SKILLS.md).
