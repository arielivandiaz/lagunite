# Lagunite UI Validator (orchestrator)

> **This is the agent entrypoint** for validating or refining Lagunite UI.  
> It does **not** replace domain skills — it **routes** to them and merges a single report.
>
> Domain skills live beside this file:
> `validate-structure` · `validate-forms` · `validate-night` · `validate-a11y`  
> Plus craft/color: `compose.md` · `contrast.md`

---

## When to run

- After generating a screen / section / form / dashboard
- When the user asks to “validate”, “auditar”, “revisar UI Lagunite”, or refine broken B/POC HTML
- Before treating a POC as a golden example for skills

---

## Agent protocol (follow in order)

### 0. Scope the target
- Identify files or HTML under review
- Note modes to check: **light** always; **night** if `.night` / theme toggle exists or user cares about dark

### 1. Load skills (read before judging)
| Always | If forms/inputs | If night / toggle | Always for screens | Always for color pairs |
| --- | --- | --- | --- | --- |
| `validate-structure.md` | `validate-forms.md` | `validate-night.md` | `compose.md` | `contrast.md` |
| `validate-a11y.md` | | | | |

Skip a domain only if clearly N/A (e.g. no form → skip forms with Status: SKIP).

### 2. Run each domain checklist
Produce the structured subsection each skill defines (`Structure`, `Forms`, `Night`, `A11y`, plus `Compose` / `Contrast` notes).

### 3. Fix or report
- **Default when editing repo HTML:** apply safe fixes (classnames, `jc-fs`, `card-text`, placeholders, `minvh100`, …)
- **Do not** invent new CSS utilities in the same pass unless the user asked for a framework fix
- If the bug is in framework CSS (like empty inputs turning green), fix CSS + mention in the report

### 4. Final report (required shape)

```markdown
## Lagunite UI Validator report

**Target:** <path or snippet>
**Modes:** light | night | both

### Compose
- Status: PASS | FAIL | WARN | SKIP
- …

### Structure
- Status: …
- …

### Forms
- Status: …
- …

### Night
- Status: …
- …

### A11y
- Status: …
- …

### Contrast
- Status: …
- …

### Summary
- Blockers (FAIL): …
- Warnings: …
- Changes made: …
- Follow-ups (CSS / skills / demos): …
```

Overall gate: **any FAIL in Structure / Forms / Night (when applicable) / Compose blockers → not done.**

---

## Quick routing (cheat)

| Symptom | Open first |
| --- | --- |
| Floated/centered mess, random cards | `compose` + `validate-structure` |
| White/tiny muted text | `validate-night` + `contrast` + `compose` (`.card-text`) |
| Green/red empty inputs | `validate-forms` |
| `btn-primary`, Tailwind names | `validate-structure` |
| Missing labels / focus | `validate-a11y` |

---

## What this agent is not

- Not a full WCAG consultancy
- Not the screenshot auto-refiner (future tooling)
- Not a substitute for `ToDo-prod` CSS release work

---

## One-line invoke

> Run the Lagunite UI Validator: read `ai/skills/validate.md` then domain skills; fix HTML; return the structured report.
