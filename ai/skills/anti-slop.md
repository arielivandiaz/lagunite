# Lagunite Anti-Slop (filter)

> **Adapted from** [anti-slop](https://github.com/miqdadbadjuber/anti-slop) (MIT) by miqdadbadjuber — ideas & structure; rewritten for **Lagunite v2**.  
> This is a **filter**, not a Lagunite style guide and not a replacement for `compose` / `validate-*` / `contrast`.
>
> **Job:** stop generic “AI slop” UI/copy **while** staying inside Lagunite’s real utilities and components.

**Attribution:** concepts adapted from [anti-slop](https://github.com/miqdadbadjuber/anti-slop) (MIT). CSS defaults that prevent slop (flex-start, btn margin 0, surfaces, on-fill) are shipped — see [`FEATURES.md`](../FEATURES.md). Remaining guidance lives here; checklist history in [`ToDo-prod.md`](../ToDo-prod.md).

---

## What this is / isn’t

| Is | Isn’t |
| --- | --- |
| Purpose test + ban on *default* slop patterns | Prescribed colors/fonts/layouts beyond Lagunite tokens |
| Liveliness check (alive ≠ sterile) | A beautifier that invents brand |
| Delivery checklist block for the UI Validator | Duplicate of structure/forms/night class rules |

**Direction** comes from the product brief / brand / optional `DESIGN.md`. Without direction, label output *"draft without direction"* — filter alone ≠ good design.

---

## Modes (ask once per task)

1. **During** — apply while generating; end with Anti-Slop block in the Validator report.  
2. **After** — audit only: numbered findings (cite L-XX below); wait for user approval before fixing.

---

## Core test

> If we swapped the logo and product name, would this still feel generic “AI template”?

If **yes** → fail Anti-Slop. Rebuild hierarchy around real content (C-3).

**Purpose test:** before gradients, glass, glow, badges, emoji, fake stats, bento mosaics — write *what it serves*. If the only answer is “looks fancy/AI-safe” → remove or rework.

---

## L-rules (Lagunite-mapped)

Hard Gate = absolute for Lagunite agents. Purpose-Gate = allowed only with a one-line reason in the report.

### Hard Gate

| ID | Rule | Lagunite translation |
| --- | --- | --- |
| **L-01** | No default AI palette | Don’t lead with purple/indigo gradients, neon orbs, rainbow `bgg-*` as the page identity. Use theme tokens / semantic `.bg` / brand. Gradients only with purpose (hierarchy/brand). |
| **L-02** | No invented / Tailwind classes | Same as `validate-structure`. |
| **L-03** | No `.bg-1`…`.bg-9` as neutral panels | Accents only; panels = `.bg` / `.card` / `.bg-surface` / `.bg-surface-raised` / gray neutrals (`validate-night` / `compose`). |
| **L-04** | No `.color-text-alt` as muted copy | Use `.text-muted` or `.card-text`. On fills use `.color-on-fill` (`.color-text-alt` is legacy on-fill white). |
| **L-05** | No fake content as if real | No invented logos, testimonials, “Trusted by”, metrics, or terminal demos unless labeled placeholder / `[demo]`. |
| **L-06** | Interactive = real or honest | Buttons/links either work, go somewhere, or are clearly disabled / “Coming soon” — not dead chrome. |
| **L-07** | Empty / loading / error must inform | Empty states explain *why* + one next action (prefer `.empty-state` compound when applicable). |
| **L-08** | Don’t ship emoji as UI iconography | Prefer real icons or none; copy carries meaning. |

### Purpose-Gate (technique OK, reason required)

| ID | Pattern | Lagunite note |
| --- | --- | --- |
| **L-10** | Gradients (`bgg-*`) | One hierarchy job max unless brand demands more. |
| **L-11** | Glass / backdrop-blur | ≤1–2 surfaces. Prefer opt-in `.surface-glass` (or compose blur + translucent bg). Not every card/sidebar/modal. |
| **L-12** | Elevation (`.card-elevated`, heavy shadows) | Default `.card` is flat; ≤1 elevated per view unless floating job. |
| **L-13** | Glow / pulse / endless motion | Only via explicit `.animate-*`; rare; `prefers-reduced-motion` kills loops. |
| **L-14** | Uniform feature-card grids | Vary hierarchy; not every feature needs identical `.card` + icon. |
| **L-15** | Bento / mosaic dashboards | Only if content sizes truly differ; else simple `grid` + `gap`. |
| **L-16** | Pill-everything radius | Use token radii deliberately; don’t pill inputs+cards+buttons identically without reason. |
| **L-17** | Accent everywhere (primary on all chrome) | One accent moment (primary CTA); body stays semantic text/surfaces. In forms: one `.btn` (often `.size-l.marg-0.wp100`); secondary actions as text link or `.btn.ghost` — not a second full-width `.btn.alt`. |
| **L-18** | Decorative left stripes / status dots | Only for real state (active/warn/new), not “looks designed”. |
| **L-19** | Dark-by-default | `.night` is a product choice or toggle — not “tech aesthetic” alone. |

### Quality locks (Lagunite craft)

| ID | Rule |
| --- | --- |
| **L-20** | Content layouts stay start-aligned | `.row`/`.col` already default to flex-start. Don’t add `jc-c ai-c` / `.flex-center` on forms, settings, lists. Center only heroes / empty / icon chips. |
| **L-21** | One spacing rhythm per cluster (`gap` / `gap-s`) |
| **L-22** | ≤3 type levels per view |
| **L-23** | Full-viewport shells: `minvh100` not `minhp100` |
| **L-24** | Forms: `.form-group` + placeholders for native valid/invalid chrome |
| **L-25** | Copy: no empty buzz (“seamless”, “next-gen”, “unlock”, “AI-powered” as decoration) |

---

## Liveliness (short)

After removing slop, avoid the sterile void:

- **ENERGY** — clear focal CTA / hierarchy (not flat gray soup)  
- **RHYTHM** — section spacing/structure varies with content, not one cloned block  
- **MOTION** — only if it aids UX; dial 1 = hover only  

If ENERGY/RHYTHM are both minimal and there is no `DESIGN.md`/brief → mark *"draft without direction"*.

---

## Anti-Slop block (for UI Validator report)

```markdown
### Anti-Slop
- Mode: During | After
- Status: PASS | FAIL | WARN
- Hard Gate: …
- Purpose-Gate (technique → reason): …
- Liveliness: ENERGY _ / RHYTHM _ / MOTION _ (1–3)
- Findings (L-XX): …
- Fixes applied / suggested: …
```

**FAIL** if any Hard Gate fails or the “swap the logo” test fails.

---

## Routing

| Symptom | Also open |
| --- | --- |
| Purple glow / gradient hero soup | L-01, L-10, `contrast` |
| Everything is a card | L-14, `compose` |
| White/tiny muted text | L-04, `validate-night` |
| Dead buttons / fake stats | L-05, L-06 |
| Centered floating form mess | L-20, `compose` |

---

## Attribution

Upstream concepts: Hard/Purpose/Quality tiers, Delivery Gate, liveliness dials, Tell/Why/Fix pattern — [anti-slop](https://github.com/miqdadbadjuber/anti-slop).  
Lagunite-specific class rules and validator wiring are original to this repo.
