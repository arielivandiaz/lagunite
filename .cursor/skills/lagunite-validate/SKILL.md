---
name: lagunite-validate
description: >-
  Orchestrates Lagunite UI audit: routes domain skills and emits the Validator report. Use when the user asks to validate, audit, auditar, or review Lagunite HTML. Do not open after every generate.
---

# Lagunite validate (Cursor)

**First action:** Read [`ai/skills/validate.md`](../../../ai/skills/validate.md) and follow the orchestrator.

## Caps (do not skip)
- **Audit only** — do not run after a plain generate unless the user asked to validate/auditar.
- Load domain leaves **as validate.md routes** (skip forms/night when N/A).
- Prefer the **Lagunite UI Validator** agent for full audits.
- End with the structured Validator report (includes Anti-Slop).

Canonical: [`ai/skills/validate.md`](../../../ai/skills/validate.md).
