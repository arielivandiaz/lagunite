# Claude Code surface (Lagunite)

Generated / maintained by `node scripts/sync-ai-surfaces.mjs`.

| Path | Role |
| --- | --- |
| [`../AGENTS.md`](../AGENTS.md) | Lean repo identity (root; edit here) |
| [`CLAUDE.md`](./CLAUDE.md) | Claude Code pointer → `../AGENTS.md` |
| [`skills/`](./skills/) | Thin wrappers → `ai/skills/*.md` |
| [`agents/`](./agents/) | UI Validator agent → `ai/agents/` + `ai/skills/validate.md` |
| [`FRAMEWORK-QUICKREF.md`](./FRAMEWORK-QUICKREF.md) | Optional class encyclopedia (on demand) |

**Edit content in `ai/skills/` and `ai/agents/`, then re-run the sync script.**  
Do not put long skill prose only under `.claude/`. Lean identity: edit root `AGENTS.md` only.
