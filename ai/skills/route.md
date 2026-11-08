# Lagunite skill router (root node)

> **Read this first when unsure which skill to open.**  
> Do **not** preload the whole tree. Open **one** child node, then at most **one** leaf.
> Sibling skills are alternatives or deeper detail — they do not all apply at once.

**Why:** loading many skills at once burns tokens and makes rules collide (e.g. “content `ai-fs`” vs “tool shell `ai-s`”).

---

## Tree (nodes → children)

```text
route.md                          ← YOU ARE HERE (router only)
├── compose.md                    ← GENERATE screens / POCs / multi-element UI
│   ├── patterns.md               ← page starting points (landing, dash, auth)
│   ├── flex.md | containers.md | spacing.md | grid.md   ← only if stuck on layout
│   ├── molecules.md | compounds.md | organisms.md       ← only if needing that layer’s markup
│   └── anti-slop.md              ← only if user asks taste / “AI look” / polish
│
├── <layer>.md                    ← CLASS LOOKUP (one encyclopedia at a time)
│   tokens · typography · colors · atoms · misc · decorators · …
│
└── validate.md                   ← AUDIT only (user asked validate / auditar / fix review)
    ├── validate-structure.md
    ├── validate-forms.md         ← skip if no forms
    ├── validate-night.md         ← skip if no .night / toggle
    ├── validate-a11y.md
    ├── contrast.md
    └── anti-slop.md
```

**Orchestrators (load children as they say — never dump all leaves up front):**

| Node | Job |
| --- | --- |
| `route.md` | Pick the branch |
| `compose.md` | Craft UI while generating |
| `validate.md` | Audit/fix after user asks |

---

## Route by intent (pick one)

| User intent | Open next | Stop after |
| --- | --- | --- |
| New screen / section / POC HTML | `compose.md` | Ship HTML; optional **one** layer skill if a class is missing |
| “How do I use X class / molecule?” | that **one** layer skill | Answer; no compose dump |
| Tailwind → Lagunite | `tailwind-migration.md` | Done |
| Audit / validate / fix UI quality | `validate.md` (orchestrator) | Report; domains only as validate routes |
| Taste / anti-slop only | `anti-slop.md` | Done |
| Unsure | Stay on this file → choose row above | Do not open SKILLS-INDEX wholesale |

---

## Hard caps (generation)

1. **Default path:** `compose.md` only (+ AGENTS.md hard rules already in context).
2. **Max extra reads while generating:** **1** layer/layout skill. Need a second? Finish first, then open.
3. **Never** open `validate.md` / spawn UI Validator / run browser unless the user asked to audit, verify visually, or you hit a layout bug you cannot resolve from compose.
4. **Never** `@` or Read the whole `ai/skills/` folder or `FRAMEWORK-QUICKREF` “just in case”.
5. If two skills disagree: **task intent wins** (tool/editor → stretch/`ai-s`; form/article → start/`ai-fs`). Note the choice; don’t load a third skill to “tie-break”.

---

## POC / tool reminder (from compose)

Full-viewport editors/tools need **`minvh100` + `col ai-s flex-nowrap`**, not bare `.col` (defaults to `align-items: flex-start` → shrink-wrap). Details live in `compose.md` § tool shell — open compose, not every layout skill.
