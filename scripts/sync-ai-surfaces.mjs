/**
 * Sync IDE discovery surfaces from canonical ai/ content.
 *
 * Canonical: ai/skills/ and ai/agents/
 * Generated: .cursor / .github / .claude skills + agents (+ GitHub instructions)
 *
 * Usage: node scripts/sync-ai-surfaces.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repo = path.resolve(__dirname, '..');

const SKILLS = [
  ['lagunite-compose', 'compose.md', 'Compose Lagunite screens and sections: hierarchy, spacing, responsive, anti-patterns.'],
  ['lagunite-anti-slop', 'anti-slop.md', 'Filter generic AI UI/copy; Lagunite-mapped anti-slop checks for screens and audits.'],
  ['lagunite-tokens', 'tokens.md', 'Lagunite design tokens and CSS variables (--space-*, --color-*, radii, motion).'],
  ['lagunite-typography', 'typography.md', 'Lagunite typography utilities: size, weight, line-height, align.'],
  ['lagunite-colors', 'colors.md', 'Lagunite color utilities: text, backgrounds, surfaces, on-fill, borders.'],
  ['lagunite-spacing', 'spacing.md', 'Lagunite spacing and sizing: margin, padding, position, width, height.'],
  ['lagunite-flex', 'flex.md', 'Lagunite flex layout: row/col defaults, gap, alignment, flex-center.'],
  ['lagunite-grid', 'grid.md', 'Lagunite grid layout: columns, gaps, placement, responsive prefixes.'],
  ['lagunite-containers', 'containers.md', 'Lagunite containers, page width, hero and prose width helpers.'],
  ['lagunite-decorators', 'decorators.md', 'Lagunite decorators: shadows, borders, motion, filters, surface-glass.'],
  ['lagunite-atoms', 'atoms.md', 'Lagunite atoms: buttons notes, inputs, table, lists, badges, avatars, chips, tags.'],
  ['lagunite-molecules', 'molecules.md', 'Lagunite molecules: form-groups, alerts, tabs, picker-wheel, selectable-option, and more.'],
  ['lagunite-compounds', 'compounds.md', 'Lagunite compounds: cards, modals, bottom-sheet, empty-state.'],
  ['lagunite-organisms', 'organisms.md', 'Lagunite organisms: navbar, sidebar, footer, dashboard shells, topbar.'],
  ['lagunite-patterns', 'patterns.md', 'Lagunite page patterns: landing, dashboard, forms, auth starting points.'],
  ['lagunite-misc', 'misc.md', 'Lagunite misc utilities: display, cursor, pseudo helpers.'],
  ['lagunite-tailwind-migration', 'tailwind-migration.md', 'Migrate Tailwind class patterns to Lagunite utilities.'],
  ['lagunite-validate', 'validate.md', 'Lagunite UI Validator orchestrator: route domain skills and emit structured report.'],
  ['lagunite-validate-structure', 'validate-structure.md', 'Validate Lagunite classnames, order, and layer structure.'],
  ['lagunite-validate-forms', 'validate-forms.md', 'Validate Lagunite forms: form-group, labels, inputs, native valid/invalid.'],
  ['lagunite-validate-night', 'validate-night.md', 'Validate Lagunite .night surfaces, muted text, and accent fills.'],
  ['lagunite-validate-a11y', 'validate-a11y.md', 'Validate Lagunite light a11y: labels, focus, headings, icon-only controls.'],
  ['lagunite-contrast', 'contrast.md', 'Lagunite contrast and safe bg/text pairs (WCAG-oriented notes).'],
];

const APPLY_TO = '**/*.html,src/css/**/*.css,pocs/**/*.html,demos/**/*.html';

const AGENT_CANON = `# Lagunite UI Validator Agent

You are the **Lagunite UI Validator**. Your job is to audit (and usually fix) Lagunite markup using a **family of skills**, not a single checklist.

## Instructions

1. Open and follow [\`ai/skills/validate.md\`](../skills/validate.md) as the orchestrator.
2. Load domain skills as routed:
   - [\`validate-structure.md\`](../skills/validate-structure.md)
   - [\`validate-forms.md\`](../skills/validate-forms.md)
   - [\`validate-night.md\`](../skills/validate-night.md)
   - [\`validate-a11y.md\`](../skills/validate-a11y.md)
   - [\`compose.md\`](../skills/compose.md)
   - [\`contrast.md\`](../skills/contrast.md)
   - [\`anti-slop.md\`](../skills/anti-slop.md)
3. Prefer fixing HTML in-repo when safe; escalate framework CSS bugs explicitly.
4. Always end with the structured **Lagunite UI Validator report** (includes **Anti-Slop** block).

## Map

Full inventory and maintenance: [\`ai/AGENTS-AND-SKILLS.md\`](../AGENTS-AND-SKILLS.md).

## Do not

- Invent Lagunite classnames
- Use \`.color-text-alt\` as muted text on light/dark cards
- Treat \`.bg-1\`…\`.bg-9\` as neutral panels
- Skip night checks when a theme toggle or \`.night\` is in play
- Ship default AI-slop chrome (purple gradients, glow-everywhere, fake social proof) — see \`anti-slop.md\`
`;

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true });
}

function write(file, body) {
  ensureDir(path.dirname(file));
  fs.writeFileSync(file, body);
  console.log('wrote', path.relative(repo, file).replace(/\\/g, '/'));
}

function skillWrapper(id, file, desc) {
  return `---
name: ${id}
description: >-
  ${desc}
---

Use the canonical skill: [\`ai/skills/${file}\`](../../../ai/skills/${file}).
`;
}

function uiValidatorSkill(label) {
  return `---
name: lagunite-ui-validator
description: >-
  Orchestrates Lagunite UI validation across multiple domain skills (structure,
  forms, night, a11y, compose, contrast, anti-slop). Use when auditing or fixing
  Lagunite HTML, refining POCs, or after generating screens/forms/dashboards.
---

# Lagunite UI Validator (${label})

Follow the orchestrator protocol in:

→ [\`ai/skills/validate.md\`](../../../ai/skills/validate.md)

## Domain skills (read as routed)

| Skill | Path |
| --- | --- |
| Structure | [\`ai/skills/validate-structure.md\`](../../../ai/skills/validate-structure.md) |
| Forms | [\`ai/skills/validate-forms.md\`](../../../ai/skills/validate-forms.md) |
| Night | [\`ai/skills/validate-night.md\`](../../../ai/skills/validate-night.md) |
| A11y | [\`ai/skills/validate-a11y.md\`](../../../ai/skills/validate-a11y.md) |
| Compose | [\`ai/skills/compose.md\`](../../../ai/skills/compose.md) |
| Contrast | [\`ai/skills/contrast.md\`](../../../ai/skills/contrast.md) |
| Anti-Slop | [\`ai/skills/anti-slop.md\`](../../../ai/skills/anti-slop.md) |

Return the **Lagunite UI Validator report** format defined in the orchestrator.

Map: [\`ai/AGENTS-AND-SKILLS.md\`](../../../ai/AGENTS-AND-SKILLS.md).
`;
}

function writeSkillSurfaces() {
  const surfaces = [
    ['.cursor/skills', 'Cursor skill'],
    ['.github/skills', 'GitHub Copilot skill'],
    ['.claude/skills', 'Claude Code skill'],
  ];

  for (const [rel, label] of surfaces) {
    for (const [id, file, desc] of SKILLS) {
      write(path.join(repo, rel, id, 'SKILL.md'), skillWrapper(id, file, desc));
    }
    write(path.join(repo, rel, 'lagunite-ui-validator', 'SKILL.md'), uiValidatorSkill(label));
  }
}

function writeCanonicalAgent() {
  const body = `---
name: Lagunite UI Validator
description: >-
  Multi-skill agent that validates and fixes Lagunite HTML using compose,
  structure, forms, night, a11y, contrast, and anti-slop domain skills. Use for
  UI audits, POC refinement, and post-generation review.
---

${AGENT_CANON}`;
  write(path.join(repo, 'ai/agents/lagunite-ui-validator.md'), body);
}

function writeIdeAgents() {
  // Cursor — relative links from .cursor/agents/
  write(
    path.join(repo, '.cursor/agents/lagunite-ui-validator.md'),
    `---
name: Lagunite UI Validator
description: >-
  Multi-skill agent that validates and fixes Lagunite HTML using compose,
  structure, forms, night, a11y, contrast, and anti-slop domain skills. Use for
  UI audits, POC refinement, and post-generation review.
---

# Lagunite UI Validator Agent

You are the **Lagunite UI Validator**. Your job is to audit (and usually fix) Lagunite markup using a **family of skills**, not a single checklist.

## Instructions

1. Open and follow [\`ai/skills/validate.md\`](../../ai/skills/validate.md) as the orchestrator.
2. Load domain skills as routed:
   - [\`validate-structure.md\`](../../ai/skills/validate-structure.md)
   - [\`validate-forms.md\`](../../ai/skills/validate-forms.md)
   - [\`validate-night.md\`](../../ai/skills/validate-night.md)
   - [\`validate-a11y.md\`](../../ai/skills/validate-a11y.md)
   - [\`compose.md\`](../../ai/skills/compose.md)
   - [\`contrast.md\`](../../ai/skills/contrast.md)
   - [\`anti-slop.md\`](../../ai/skills/anti-slop.md)
3. Prefer fixing HTML in-repo when safe; escalate framework CSS bugs explicitly.
4. Always end with the structured **Lagunite UI Validator report** (includes **Anti-Slop** block).

## Map

Canonical agent: [\`ai/agents/lagunite-ui-validator.md\`](../../ai/agents/lagunite-ui-validator.md)  
Inventory: [\`ai/AGENTS-AND-SKILLS.md\`](../../ai/AGENTS-AND-SKILLS.md).

## Do not

- Invent Lagunite classnames
- Use \`.color-text-alt\` as muted text on light/dark cards
- Treat \`.bg-1\`…\`.bg-9\` as neutral panels
- Skip night checks when a theme toggle or \`.night\` is in play
- Ship default AI-slop chrome (purple gradients, glow-everywhere, fake social proof) — see \`anti-slop.md\`
`
  );

  // GitHub Copilot agent
  write(
    path.join(repo, '.github/agents/lagunite-ui-validator.agent.md'),
    `---
name: Lagunite UI Validator
description: 'Audit and fix Lagunite HTML using structure, forms, night mode, accessibility, composition, contrast, and anti-slop checks. Use for UI reviews, generated screens, forms, dashboards, and POC refinement.'
tools: [read, search, edit, execute]
user-invocable: true
---

You are the Lagunite UI Validator. Audit and, when safe, fix Lagunite markup using the routed family of skills rather than a single checklist.

## Workflow

1. Follow [ai/skills/validate.md](../../ai/skills/validate.md) as the orchestrator.
2. Load only the domain skills routed by that orchestrator:
   - [validate-structure](../../ai/skills/validate-structure.md)
   - [validate-forms](../../ai/skills/validate-forms.md)
   - [validate-night](../../ai/skills/validate-night.md)
   - [validate-a11y](../../ai/skills/validate-a11y.md)
   - [compose](../../ai/skills/compose.md)
   - [contrast](../../ai/skills/contrast.md)
   - [anti-slop](../../ai/skills/anti-slop.md)
3. Prefer safe in-repo fixes; escalate framework CSS bugs explicitly.
4. End with the structured Lagunite UI Validator report, including the Anti-Slop block.

Canonical: [ai/agents/lagunite-ui-validator.md](../../ai/agents/lagunite-ui-validator.md)  
Map: [ai/AGENTS-AND-SKILLS.md](../../ai/AGENTS-AND-SKILLS.md).

## Hard Constraints

- Do not invent Lagunite class names.
- Do not use \`.color-text-alt\` as muted copy.
- Do not use \`.bg-1\` through \`.bg-9\` as neutral panels.
- Do not skip \`.night\` checks when night mode is present.
- Do not ship default AI-slop chrome such as purple gradients, glow everywhere, or fake social proof.
`
  );

  // Claude Code agent
  write(
    path.join(repo, '.claude/agents/lagunite-ui-validator.md'),
    `---
name: Lagunite UI Validator
description: >-
  Multi-skill agent that validates and fixes Lagunite HTML using compose,
  structure, forms, night, a11y, contrast, and anti-slop. Use for UI audits and
  POC refinement in Claude Code.
---

# Lagunite UI Validator Agent (Claude Code)

You are the **Lagunite UI Validator**. Follow the canonical agent and orchestrator:

→ [\`ai/agents/lagunite-ui-validator.md\`](../../ai/agents/lagunite-ui-validator.md)  
→ [\`ai/skills/validate.md\`](../../ai/skills/validate.md)

Load domain skills from \`ai/skills/\` as routed. End with the **Lagunite UI Validator report**.

Map: [\`ai/AGENTS-AND-SKILLS.md\`](../../ai/AGENTS-AND-SKILLS.md).
`
  );
}

function writeGithubInstructions() {
  // Hard rules — mirror .cursor/rules/lagunite-ai.mdc
  write(
    path.join(repo, '.github/instructions/lagunite-ai.instructions.md'),
    `---
applyTo: "${APPLY_TO}"
---

# Lagunite UI (scoped) — GitHub Copilot

Same hard rules as [\`.cursor/rules/lagunite-ai.mdc\`](../../.cursor/rules/lagunite-ai.mdc). Canonical map: [\`ai/AGENTS-AND-SKILLS.md\`](../../ai/AGENTS-AND-SKILLS.md).

## Always for these files
- No invented classes; utilities only from skills / \`src/css\`
- Order: base → \`x*\` → \`d*\`; layout before deco; \`.gap-*\` for flex/grid gap
- Surfaces: \`.bg\` / \`.bg-surface\` / \`.card\` / grays — not \`.bg-1..9\` as panels
- Muted: \`.card-text\` / \`.text-muted\` — never \`.color-text-alt\` as subtitle (use \`.color-on-fill\` on fills)
- Flex defaults to start; center with \`.flex-center\` or \`jc-c ai-c\`
- Full-width primary CTA: \`.btn.size-l.marg-0.wp100\` (\`.btn\` has \`margin: 0\`)
- CSS change → \`npm run docs:generate\`

## On demand only
- Map: \`ai/AGENTS-AND-SKILLS.md\`
- Craft: \`ai/skills/compose.md\`
- Audit: \`ai/skills/validate.md\`
- Slop filter: \`ai/skills/anti-slop.md\`
- Index: \`ai/SKILLS-INDEX.md\`

Do **not** read every \`ai/skills/*.md\` unless the task needs that layer.
`
  );

  // Layer / domain instructions → thin pointers (stop duplicating skill bodies)
  const instructionSkills = [
    ...SKILLS,
    ['lagunite-ui-validator', 'validate.md', 'UI Validator orchestrator'],
  ];

  for (const [id, file] of instructionSkills) {
    const name = id.replace(/^lagunite-/, '');
    write(
      path.join(repo, `.github/instructions/lagunite-${name}.instructions.md`),
      `---
applyTo: "${APPLY_TO}"
---

# ${id}

Canonical content (do not duplicate here):

→ [\`ai/skills/${file}\`](../../ai/skills/${file})

Discovery skill: [\`.github/skills/${id}/SKILL.md\`](../skills/${id}/SKILL.md)  
Map: [\`ai/AGENTS-AND-SKILLS.md\`](../../ai/AGENTS-AND-SKILLS.md).
`
    );
  }
}

function writeClaudeReadme() {
  write(
    path.join(repo, '.claude/README.md'),
    `# Claude Code surface (Lagunite)

Generated / maintained by \`node scripts/sync-ai-surfaces.mjs\`.

| Path | Role |
| --- | --- |
| [\`../CLAUDE.md\`](../CLAUDE.md) | Lean repo identity (root) |
| [\`skills/\`](./skills/) | Thin wrappers → \`ai/skills/*.md\` |
| [\`agents/\`](./agents/) | UI Validator agent → \`ai/agents/\` + \`ai/skills/validate.md\` |
| [\`FRAMEWORK-QUICKREF.md\`](./FRAMEWORK-QUICKREF.md) | Optional class encyclopedia (on demand) |

**Edit content in \`ai/skills/\` and \`ai/agents/\`, then re-run the sync script.**  
Do not put long skill prose only under \`.claude/\`.
`
  );
}

writeCanonicalAgent();
writeSkillSurfaces();
writeIdeAgents();
writeGithubInstructions();
writeClaudeReadme();

console.log('\nDone. Canonical: ai/skills + ai/agents → .cursor / .github / .claude');
