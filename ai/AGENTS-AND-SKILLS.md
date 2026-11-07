# Lagunite — Agents & Skills map

> **Audience:** contributors using Cursor, GitHub Copilot, or Claude Code.  
> **Canonical content:** [`ai/skills/`](./skills/) + [`ai/agents/`](./agents/)  
> **IDE surfaces (generated):** `.cursor/` · `.github/` · `.claude/` — thin wrappers only  
> **Index:** [`SKILLS-INDEX.md`](./SKILLS-INDEX.md) · **Hygiene:** [`CONTEXT-HYGIENE.md`](./CONTEXT-HYGIENE.md)  
> **Sync:** `npm run ai:sync` → [`scripts/sync-ai-surfaces.mjs`](../scripts/sync-ai-surfaces.mjs)

---

## 0. Important clarification

| Myth | Reality |
| --- | --- |
| “The real skills live in `.cursor/`” | **No.** Long prose lives in **`ai/skills/`**. `.cursor/skills/*/SKILL.md` are short discovery wrappers (YAML + link). |
| “Copy skill bodies into every IDE folder” | **No.** That drifts. Edit once in `ai/`, then `npm run ai:sync`. |

Cursor was the **first polished discovery surface**; GitHub and Claude now mirror the **same** wrappers + agent.

---

## 1. Architecture

```text
ai/skills/*.md              ← EDIT skill content here
ai/agents/*.md              ← EDIT agent persona here
        │
        │  npm run ai:sync
        ▼
.cursor/skills + agents     Cursor
.github/skills + agents
             + instructions GitHub Copilot
.claude/skills + agents     Claude Code
AGENTS.md (root)            Lean identity (manual; keep short) — all agents
.claude/CLAUDE.md           Claude Code pointer → AGENTS.md
.cursor/rules/lagunite-ai.mdc   Cursor hard rules (manual; mirrored into .github/instructions/lagunite-ai)
```

**Rule:** never put long checklists only under `.cursor/`, `.github/`, or `.claude/`.

---

## 2. Inventory

### Skill tree (nodes — do not load siblings together)

```text
route.md                 root router — pick one branch
├── compose.md           GENERATE (optional: 1 layer / patterns / anti-slop)
├── <layer>.md           CLASS LOOKUP (one file)
└── validate.md          AUDIT only → domain leaves as routed
```

Canonical router: [`ai/skills/route.md`](./skills/route.md). Caps also live in root [`AGENTS.md`](../AGENTS.md).

### Layers

| Layer | Where | Role |
| --- | --- | --- |
| Hard rules | `.cursor/rules/lagunite-ai.mdc` + `.github/instructions/lagunite-ai.instructions.md` | Non-negotiables on HTML/CSS globs |
| Lean identity | [`AGENTS.md`](../AGENTS.md) | Always-ish context + process caps |
| Router skill | [`ai/skills/route.md`](./skills/route.md) | Which node to open next |
| Agent | [`ai/agents/lagunite-ui-validator.md`](./agents/lagunite-ui-validator.md) | Auditor/fixer persona (**audit only**) |
| Orchestrator (audit) | [`ai/skills/validate.md`](./skills/validate.md) | Protocol + report |
| Orchestrator (craft) | [`ai/skills/compose.md`](./skills/compose.md) | Generate screens |
| Domain / layer skills | `ai/skills/*` | Checklists + class encyclopedias |
| IDE wrappers | `.cursor` / `.github` / `.claude` `skills/` | Discovery only |

**Cursor note:** orchestrator wrappers (`lagunite-route`, `lagunite-compose`, `lagunite-validate`, `lagunite-ui-validator`) include short **Caps** + “Read canonical next”. Layer skills stay one-line pointers. Descriptions use WHAT + WHEN (+ NOT). Re-run `npm run ai:sync` after editing descriptions in `scripts/sync-ai-surfaces.mjs`.

### Agent: Lagunite UI Validator

| Surface | Path |
| --- | --- |
| Canonical | [`ai/agents/lagunite-ui-validator.md`](./agents/lagunite-ui-validator.md) |
| Cursor | [`.cursor/agents/lagunite-ui-validator.md`](../.cursor/agents/lagunite-ui-validator.md) |
| GitHub Copilot | [`.github/agents/lagunite-ui-validator.agent.md`](../.github/agents/lagunite-ui-validator.agent.md) |
| Claude Code | [`.claude/agents/lagunite-ui-validator.md`](../.claude/agents/lagunite-ui-validator.md) |

---

## 3. Playbook (any IDE)

1. Hard rules apply on HTML/CSS (Cursor rules / Copilot instructions / [`AGENTS.md`](../AGENTS.md)).
2. Unsure which skill? → [`route.md`](./skills/route.md). Else generate → **`compose` only** (+ at most one layer skill / `patterns`).
3. Audit **only when asked** → **Lagunite UI Validator** / [`validate.md`](./skills/validate.md). Do not chain validate after every generate.
4. Framework CSS change → `npm run docs:generate`.

---

## 4. Skill catalog

Same Cursor skill ids on all three surfaces (`lagunite-compose`, `lagunite-validate`, …). Full table: [`SKILLS-INDEX.md`](./SKILLS-INDEX.md).

---

## 5. Maintain

```bash
# After editing ai/skills or the skill list in the script:
npm run ai:sync
```

1. Edit `ai/skills/<name>.md` (and/or add row in `scripts/sync-ai-surfaces.mjs` `SKILLS` array).
2. Run `npm run ai:sync`.
3. Update this map + `SKILLS-INDEX.md` if the catalog changed.
4. If the **agent** persona changes, edit `ai/agents/…` then re-run sync (script regenerates IDE agent files).

Manual (not overwritten by sync body for rules file location): keep [`.cursor/rules/lagunite-ai.mdc`](../.cursor/rules/lagunite-ai.mdc) in sync with the hard-rules block — sync regenerates `.github/instructions/lagunite-ai.instructions.md` from the same text inside the script.

---

## 6. Backlog

| ID | Item | Status |
| --- | --- | --- |
| S1 | Homogenize `.cursor` / `.github` / `.claude` wrappers | Done — `ai:sync` |
| S2 | `.surface-glass` in `decorators.md` | Done |
| S3 | `FRAMEWORK-QUICKREF` muted / `.bg-1` warnings | Medium |
| S6 | npm `@lagunite/ai` + MCP | Post CSS gate — AIF-P |
| S7 | **Recipes as skilllets** (`ai/recipes/*.md`) — AI instructions; HTML lab stays fixture | Important — [`ToDo-modern-platform.md`](../ToDo-modern-platform.md) § skilllets |
| S8 | **Skill tree / router** (`route.md`) — stop loading sibling skills that collide | Done — `ai/skills/route.md` + `AGENTS.md` caps |

---

## 7. Related

| Doc | Role |
| --- | --- |
| [`.claude/README.md`](../.claude/README.md) | Claude surface readme |
| [`PROMPTING.md`](./PROMPTING.md) | How to write good Lagunite prompts (humans) |
| [`demos/README.md`](../demos/README.md) | Visual quality bar |
| [`ToDo-ai-first.md`](../ToDo-ai-first.md) | Compiler / pack track |
