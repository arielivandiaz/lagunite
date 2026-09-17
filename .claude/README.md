# Claude Code surface (Lagunite)

Generated / maintained by `node scripts/sync-ai-surfaces.mjs`.

| Path | Role |
| --- | --- |
| [`../CLAUDE.md`](../CLAUDE.md) | Lean repo identity (root) |
| [`skills/`](./skills/) | Thin wrappers → `ai/skills/*.md` |
| [`agents/`](./agents/) | UI Validator agent → `ai/agents/` + `ai/skills/validate.md` |
| [`FRAMEWORK-QUICKREF.md`](./FRAMEWORK-QUICKREF.md) | Optional class encyclopedia (on demand) |

**Edit content in `ai/skills/` and `ai/agents/`, then re-run the sync script.**  
Do not put long skill prose only under `.claude/`.
