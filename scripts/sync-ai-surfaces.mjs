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
  // [id, canonicalFile, description] — description = WHAT + WHEN (+ NOT when useful). Cursor matches on this.
  [
    'lagunite-route',
    'route.md',
    'Routes which Lagunite skill to open next (compose vs layer vs validate). Use when unsure which skill to load, before generating UI, or to avoid preloading sibling skills. Do not use as a class encyclopedia.',
  ],
  [
    'lagunite-compose',
    'compose.md',
    'Composes Lagunite screens, sections, and POC HTML: layout hierarchy, spacing rhythm, tool shells (ai-s + minvh100), anti-patterns. Use when generating or rewriting multi-element UI, forms, dashboards, or pocs/*.html. Do not use for audits — use lagunite-validate / UI Validator instead.',
  ],
  [
    'lagunite-anti-slop',
    'anti-slop.md',
    'Filters generic AI UI/copy (purple gradients, fake stats, glow, emoji icons) mapped to Lagunite. Use when the user asks for taste polish, anti-slop, or “AI look” cleanup. Not the default path for a plain generate.',
  ],
  [
    'lagunite-tokens',
    'tokens.md',
    'Documents Lagunite CSS variables (--space-*, --color-*, radii, motion). Use when looking up or changing design tokens.',
  ],
  [
    'lagunite-typography',
    'typography.md',
    'Lagunite type utilities: size, weight, line-height, align. Use when choosing or fixing font/type classes.',
  ],
  [
    'lagunite-colors',
    'colors.md',
    'Lagunite color utilities: text, backgrounds, surfaces, on-fill, borders. Use when picking bg/text/border classes (not .bg-1..9 as panels).',
  ],
  [
    'lagunite-spacing',
    'spacing.md',
    'Lagunite spacing and sizing: margin, padding, position, width, height, minvh*. Use when stuck on spacing or viewport height utilities.',
  ],
  [
    'lagunite-flex',
    'flex.md',
    'Lagunite flex: row/col defaults (ai-fs), gap, alignment, flex-1, flex-nowrap. Use when building or fixing flex layouts; remember tools need ai-s not bare col.',
  ],
  [
    'lagunite-grid',
    'grid.md',
    'Lagunite grid: columns, gaps, placement, x*/d* prefixes. Use when building or fixing CSS grid layouts.',
  ],
  [
    'lagunite-containers',
    'containers.md',
    'Lagunite containers and max-widths: container, container-fluid, prose, hero, wide. Use when choosing page width constraints.',
  ],
  [
    'lagunite-decorators',
    'decorators.md',
    'Lagunite decorators: shadows, borders, motion, filters, surface-glass. Use when adding borders, drag highlights, or motion utilities.',
  ],
  [
    'lagunite-atoms',
    'atoms.md',
    'Lagunite atoms: buttons, inputs, table, lists, badges, avatars, chips, tags. Use when looking up atom markup or button/input class chains.',
  ],
  [
    'lagunite-molecules',
    'molecules.md',
    'Lagunite molecules: form-group, alerts, tabs, dropdown, skeleton, and related. Use when building form fields or molecule markup.',
  ],
  [
    'lagunite-compounds',
    'compounds.md',
    'Lagunite compounds: cards, modals, bottom-sheet, empty-state. Use when building cards, dialogs, or dropzone empty-states.',
  ],
  [
    'lagunite-organisms',
    'organisms.md',
    'Lagunite organisms: navbar, sidebar, footer, dashboard shells, topbar. Use when building app chrome or dashboard shells.',
  ],
  [
    'lagunite-patterns',
    'patterns.md',
    'Lagunite page starting points: landing, dashboard, forms, auth. Use when scaffolding a whole page type from a template.',
  ],
  [
    'lagunite-misc',
    'misc.md',
    'Lagunite misc utilities: display, cursor, pseudo helpers. Use when needing d-none, cursor-*, or pseudo utilities.',
  ],
  [
    'lagunite-tailwind-migration',
    'tailwind-migration.md',
    'Maps Tailwind class patterns to Lagunite utilities. Use when migrating Tailwind HTML/CSS to Lagunite.',
  ],
  [
    'lagunite-validate',
    'validate.md',
    'Orchestrates Lagunite UI audit: routes domain skills and emits the Validator report. Use when the user asks to validate, audit, auditar, or review Lagunite HTML. Do not open after every generate.',
  ],
  [
    'lagunite-validate-structure',
    'validate-structure.md',
    'Validates Lagunite classnames, class order, and layer structure. Use as a validate.md domain leaf during audits.',
  ],
  [
    'lagunite-validate-forms',
    'validate-forms.md',
    'Validates Lagunite forms: form-group, labels, inputs, :user-invalid. Use during audits when forms are present.',
  ],
  [
    'lagunite-validate-night',
    'validate-night.md',
    'Validates Lagunite .night surfaces and muted text. Use during audits when night mode or a theme toggle exists.',
  ],
  [
    'lagunite-validate-a11y',
    'validate-a11y.md',
    'Validates light a11y: labels, focus, headings, icon-only controls. Use during Lagunite UI audits.',
  ],
  [
    'lagunite-contrast',
    'contrast.md',
    'Lagunite contrast and safe bg/text pairs (WCAG-oriented). Use when checking color pairs or during audits.',
  ],
];

/** Orchestrator ids that get a richer Cursor-only wrapper (progressive disclosure). */
const CURSOR_ORCHESTRATORS = new Set([
  'lagunite-route',
  'lagunite-compose',
  'lagunite-validate',
]);

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

/** Cursor-only: richer body so discovery ≠ empty link. Still MUST Read canonical next. */
function cursorOrchestratorWrapper(id, file, desc) {
  const bodies = {
    'lagunite-route': `# Lagunite route (Cursor)

**First action:** Read [\`ai/skills/route.md\`](../../../ai/skills/route.md) and follow it.

## Caps (do not skip)
- Open **one** child node, then at most **one** leaf — never the whole \`ai/skills/\` folder.
- Generate → \`compose.md\` only. Audit → \`validate.md\` only if the user asked.
- Sibling skills collide (content \`ai-fs\` vs tool \`ai-s\`); task intent wins.

Map: [\`ai/AGENTS-AND-SKILLS.md\`](../../../ai/AGENTS-AND-SKILLS.md).
`,
    'lagunite-compose': `# Lagunite compose (Cursor)

**First action:** Read [\`ai/skills/compose.md\`](../../../ai/skills/compose.md) and follow it.

## Caps (do not skip)
- Layout first. Tools/editors: \`minvh100\` + \`col ai-s flex-nowrap\` (bare \`.col\` shrink-wraps).
- Content/forms: start-aligned (\`ai-fs\` OK). Surfaces: \`.bg\` / \`.card\` — not \`.bg-1..9\` as panels.
- At most **one** extra layer skill if stuck. Do **not** open \`validate.md\` or browser unless asked.
- Mark inventados → closest utility or \`<!-- GAP: … -->\`.

Canonical: [\`ai/skills/compose.md\`](../../../ai/skills/compose.md).
`,
    'lagunite-validate': `# Lagunite validate (Cursor)

**First action:** Read [\`ai/skills/validate.md\`](../../../ai/skills/validate.md) and follow the orchestrator.

## Caps (do not skip)
- **Audit only** — do not run after a plain generate unless the user asked to validate/auditar.
- Load domain leaves **as validate.md routes** (skip forms/night when N/A).
- Prefer the **Lagunite UI Validator** agent for full audits.
- End with the structured Validator report (includes Anti-Slop).

Canonical: [\`ai/skills/validate.md\`](../../../ai/skills/validate.md).
`,
  };

  const body = bodies[id];
  if (!body) return skillWrapper(id, file, desc);

  return `---
name: ${id}
description: >-
  ${desc}
---

${body}`;
}

function uiValidatorSkill(label) {
  return `---
name: lagunite-ui-validator
description: >-
  Audits and fixes Lagunite HTML via validate.md domains (structure, forms,
  night, a11y, compose, contrast, anti-slop). Use when the user asks to
  validate, audit, auditar, review UI, or fix POC markup quality. Do not invoke
  automatically after every generate.
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
    const isCursor = rel === '.cursor/skills';
    for (const [id, file, desc] of SKILLS) {
      const body =
        isCursor && CURSOR_ORCHESTRATORS.has(id)
          ? cursorOrchestratorWrapper(id, file, desc)
          : skillWrapper(id, file, desc);
      write(path.join(repo, rel, id, 'SKILL.md'), body);
    }
    write(path.join(repo, rel, 'lagunite-ui-validator', 'SKILL.md'), uiValidatorSkill(label));
  }
}

function writeCanonicalAgent() {
  const body = `---
name: Lagunite UI Validator
description: >-
  Multi-skill agent that validates and fixes Lagunite HTML using compose,
  structure, forms, night, a11y, contrast, and anti-slop domain skills. Use when
  the user asks to audit, validate, auditar, or review UI — not after every generate.
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
  structure, forms, night, a11y, contrast, and anti-slop domain skills. Use when
  the user asks to audit, validate, auditar, or review UI — not after every generate.
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
- Flex defaults to start; center with \`.flex-center\` or \`jc-c ai-c\`. Tools/editors: \`ai-s\` + \`minvh100\`
- Full-width primary CTA: \`.btn.size-l.marg-0.wp100\` (\`.btn\` has \`margin: 0\`)
- CSS change → \`npm run docs:generate\`

## On demand only (one node — do not preload siblings)
- Router: \`ai/skills/route.md\`
- Craft / generate: \`ai/skills/compose.md\` (+ at most one layer skill)
- Audit: \`ai/skills/validate.md\` — **only if user asked**
- Slop filter: \`ai/skills/anti-slop.md\` — only if asked / polish
- Map: \`ai/AGENTS-AND-SKILLS.md\`

Do **not** read every \`ai/skills/*.md\`, chain validate after every generate, or open browser/CDP unless asked.
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
| [\`../AGENTS.md\`](../AGENTS.md) | Lean repo identity (root; edit here) |
| [\`CLAUDE.md\`](./CLAUDE.md) | Claude Code pointer → \`../AGENTS.md\` |
| [\`skills/\`](./skills/) | Thin wrappers → \`ai/skills/*.md\` |
| [\`agents/\`](./agents/) | UI Validator agent → \`ai/agents/\` + \`ai/skills/validate.md\` |
| [\`FRAMEWORK-QUICKREF.md\`](./FRAMEWORK-QUICKREF.md) | Optional class encyclopedia (on demand) |

**Edit content in \`ai/skills/\` and \`ai/agents/\`, then re-run the sync script.**  
Do not put long skill prose only under \`.claude/\`. Lean identity: edit root \`AGENTS.md\` only.
`
  );

  write(
    path.join(repo, '.claude/CLAUDE.md'),
    `# Lagunite — Claude Code entry

> **Canonical lean identity lives at repo root:** [\`../AGENTS.md\`](../AGENTS.md)  
> Do not maintain a duplicate checklist here. Edit \`AGENTS.md\`, then keep this pointer.

For skills/agents under this folder, see [\`README.md\`](./README.md) and run \`npm run ai:sync\` from the repo root.
`
  );
}

writeCanonicalAgent();
writeSkillSurfaces();
writeIdeAgents();
writeGithubInstructions();
writeClaudeReadme();

console.log('\nDone. Canonical: ai/skills + ai/agents → .cursor / .github / .claude');
