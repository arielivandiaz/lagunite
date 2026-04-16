# Lagunite AI Skills Index

Vendor-neutral skill files for any AI assistant or IDE.
All files are plain Markdown — no proprietary frontmatter.

## Skills

| Skill | File | Use when |
| --- | --- | --- |
| **Tokens** | [skills/tokens.md](skills/tokens.md) | Working with CSS variables (`--space-*`, `--color-*`, `--radius-*`, `--font-*`) |
| **Typography** | [skills/typography.md](skills/typography.md) | Setting font size, weight, line height, letter spacing, text align |
| **Colors** | [skills/colors.md](skills/colors.md) | Text color, backgrounds, gradients, border colors |
| **Spacing & Sizing** | [skills/spacing.md](skills/spacing.md) | Margin, padding, position, width, height, overflow |
| **Flex** | [skills/flex.md](skills/flex.md) | Flex containers, direction, alignment, gap, order |
| **Grid** | [skills/grid.md](skills/grid.md) | Grid containers, columns, rows, span, placement |
| **Containers** | [skills/containers.md](skills/containers.md) | Page-level width constraints, hero, prose, section wrappers |
| **Decorators** | [skills/decorators.md](skills/decorators.md) | Shadows, borders, radius, transforms, transitions, animations, filters |
| **Atoms** | [skills/atoms.md](skills/atoms.md) | Tables, lists, figures, badges, avatars |
| **Molecules** | [skills/molecules.md](skills/molecules.md) | Form groups, alerts, dropdowns, tooltips, breadcrumbs |
| **Compounds** | [skills/compounds.md](skills/compounds.md) | Cards, modals |
| **Organisms** | [skills/organisms.md](skills/organisms.md) | Navbar, sidebar, footer |
| **Patterns** | [skills/patterns.md](skills/patterns.md) | Full-page HTML starting points (landing, dashboard, form, blog) |
| **Misc** | [skills/misc.md](skills/misc.md) | Display, visibility, cursor, pseudo-elements |
| **Validate** | [skills/validate.md](skills/validate.md) | Checklist before/after generating Lagunite HTML |
| **Tailwind Migration** | [skills/tailwind-migration.md](skills/tailwind-migration.md) | Translating Tailwind utilities to Lagunite equivalents |

## Layer order

```
tokens → typography/colors → spacing/layout → decorators
  → atoms → molecules → compounds → organisms → patterns
```

Pick the skill for the layer you're working in. Always validate with the **validate** skill before finalizing output.

## How to load in your AI tool

| Tool | How |
| --- | --- |
| **Claude Code** | `@./ai/skills/skill-name.md` in CLAUDE.md or in prompt |
| **Cursor** | Reference path in `.cursor/rules/*.mdc` |
| **GitHub Copilot** | Include in `.github/copilot-instructions.md` |
| **Windsurf** | Reference in `.windsurfrules` |
| **Any chat AI** | Paste the file content directly |
