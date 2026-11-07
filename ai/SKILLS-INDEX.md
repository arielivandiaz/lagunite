# Lagunite AI Skills Index

Vendor-neutral skill files for any AI assistant or IDE.
Canonical content lives in [`skills/*.md`](./skills/) — plain Markdown.

> **Router (start here if unsure):** [`skills/route.md`](skills/route.md) — tree nodes; open **one** child, not all.  
> **Map (agent + skills + Cursor / GitHub / Claude):** [`AGENTS-AND-SKILLS.md`](./AGENTS-AND-SKILLS.md)  
> **Token hygiene:** [`CONTEXT-HYGIENE.md`](./CONTEXT-HYGIENE.md) — no precargar este índice entero ni todas las skills.  
> **Sync IDE wrappers:** `npm run ai:sync`  
> **Track AI-first:** [`../ToDo-ai-first.md`](../ToDo-ai-first.md) (después del gate CSS / revisión v2.1).

## Skill tree (summary)

```text
route.md → compose.md (generate) | <layer>.md (lookup) | validate.md (audit only)
```

Do **not** open validate-* leaves, anti-slop, contrast, and every layer skill in the same turn as a generate.

## UI Validator (multi-skill agent — audit branch)

| Role | File | Use when |
| --- | --- | --- |
| **Orchestrator** | [skills/validate.md](skills/validate.md) | Entry: audit / fix Lagunite HTML; returns structured report |
| Structure | [skills/validate-structure.md](skills/validate-structure.md) | Classnames, order, layers |
| Forms | [skills/validate-forms.md](skills/validate-forms.md) | form-group, inputs, native valid/invalid |
| Night | [skills/validate-night.md](skills/validate-night.md) | `.night` surfaces & muted text |
| A11y | [skills/validate-a11y.md](skills/validate-a11y.md) | Labels, focus, light a11y gates |
| Compose | [skills/compose.md](skills/compose.md) | UI craft — alignment, rhythm, anti-patterns |
| Contrast | [skills/contrast.md](skills/contrast.md) | bg/text pairing, WCAG notes |
| **Anti-Slop** | [skills/anti-slop.md](skills/anti-slop.md) | Filter generic AI UI/copy; Lagunite-mapped |

**Cursor:** agent [`.cursor/agents/lagunite-ui-validator.md`](../.cursor/agents/lagunite-ui-validator.md) · skill `lagunite-ui-validator` · wrappers in [`.cursor/skills/`](../.cursor/skills/).

## Orchestrators & router

| Skill | File | Use when |
| --- | --- | --- |
| **Route** | [skills/route.md](skills/route.md) | Which node to open; avoid loading sibling skills |
| **Compose** | [skills/compose.md](skills/compose.md) | Generate screens / POCs |
| **Validate** | [skills/validate.md](skills/validate.md) | Audit only |

## Layer skills

| Skill | File | Use when |
| --- | --- | --- |
| **Tokens** | [skills/tokens.md](skills/tokens.md) | CSS variables (`--space-*`, `--color-*`, …) |
| **Typography** | [skills/typography.md](skills/typography.md) | Font size, weight, line height, align |
| **Colors** | [skills/colors.md](skills/colors.md) | Text, backgrounds, gradients, borders |
| **Spacing & Sizing** | [skills/spacing.md](skills/spacing.md) | Margin, padding, position, width, height |
| **Flex** | [skills/flex.md](skills/flex.md) | Flex containers, alignment, gap |
| **Grid** | [skills/grid.md](skills/grid.md) | Grid containers, columns, placement |
| **Containers** | [skills/containers.md](skills/containers.md) | Page width constraints, hero, prose |
| **Decorators** | [skills/decorators.md](skills/decorators.md) | Shadows, borders, motion, filters, `.surface-glass` |
| **Atoms** | [skills/atoms.md](skills/atoms.md) | Tables, lists, figures, badges, avatars, inputs notes |
| **Molecules** | [skills/molecules.md](skills/molecules.md) | Form groups, alerts, dropdowns, picker, selectable, … |
| **Compounds** | [skills/compounds.md](skills/compounds.md) | Cards, modals |
| **Organisms** | [skills/organisms.md](skills/organisms.md) | Navbar, sidebar, footer |
| **Patterns** | [skills/patterns.md](skills/patterns.md) | Page starting points |
| **Misc** | [skills/misc.md](skills/misc.md) | Display, cursor, pseudo |
| **Tailwind Migration** | [skills/tailwind-migration.md](skills/tailwind-migration.md) | Tailwind → Lagunite |

## Recommended flow

```
unsure → route.md (pick one branch)
generate screen → compose only (+ 1 layer skill if stuck)
              → STOP (no auto-validate, no browser)
audit (user asked) → validate.md → only routed domains → report
```

```
tokens → typography/colors → spacing/layout → decorators
  → atoms → molecules → compounds → organisms → patterns
(↑ class-lookup ladder — open ONE rung, not the whole ladder)
```

## How to load

| Tool | How |
| --- | --- |
| **Cursor** | Agent `Lagunite UI Validator` or skill `lagunite-ui-validator`; rules `.cursor/rules/lagunite-ai.mdc` |
| **GitHub Copilot** | `.github/agents/` + `.github/skills/` + `.github/instructions/` (synced) |
| **Claude Code** | `.claude/agents/` + `.claude/skills/`; lean [`AGENTS.md`](../AGENTS.md) (+ [`.claude/CLAUDE.md`](../.claude/CLAUDE.md) pointer); or `@ai/skills/validate.md` |
| **Any chat AI** | Paste orchestrator + needed domain skills from `ai/skills/` |

## Maintain wrappers

```bash
npm run ai:sync
```

Then update this index + `AGENTS-AND-SKILLS.md` if the catalog changed.
