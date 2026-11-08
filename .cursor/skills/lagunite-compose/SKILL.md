---
name: lagunite-compose
description: >-
  Composes Lagunite screens, sections, and POC HTML: layout hierarchy, spacing rhythm, tool shells (ai-s + minvh100), anti-patterns. Use when generating or rewriting multi-element UI, forms, dashboards, or pocs/*.html. Do not use for audits — use lagunite-validate / UI Validator instead.
---

# Lagunite compose (Cursor)

**First action:** Read [`ai/skills/compose.md`](../../../ai/skills/compose.md) and follow it.

## Caps (do not skip)
- Layout first. Tools/editors: `minvh100` + `col ai-s flex-nowrap` (bare `.col` shrink-wraps).
- Content/forms: start-aligned (`ai-fs` OK). Surfaces: `.bg` / `.card` — not `.bg-1..9` as panels.
- At most **one** extra layer skill if stuck. Do **not** open `validate.md` or browser unless asked.
- Mark inventados → closest utility or `<!-- GAP: … -->`.

Canonical: [`ai/skills/compose.md`](../../../ai/skills/compose.md).
