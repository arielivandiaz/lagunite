# Lagunite — how to write a good prompt

> Guía rápida para **vos**: cómo hablarle a Cursor, Copilot o Claude y obtener buen HTML Lagunite.  
> Más detalle técnico: [`ai/PROMPTING.md`](./ai/PROMPTING.md) · Guía amigable en el root: [`../README-PROMPTS.md`](../README-PROMPTS.md)

---

## 1. Formula (use this shape)

```text
[ACTION] + [ARTIFACT] + [INTENT / LAYOUT] + [CONSTRAINTS] + [OUT OF SCOPE]
```

| Part | Ask yourself | Example |
| --- | --- | --- |
| **Action** | generate / rewrite / fix / audit / migrate | `Creá` · `Reescribí` · `Auditar` |
| **Artifact** | path + format | `pocs/foo.html` · section in `lab/…` |
| **Intent** | what the UI *is* (tool, form, landing…) | `tool full-viewport editor` |
| **Constraints** | Lagunite-only, reuse X, language | `solo clases Lagunite` · `reutilizá md-to-lagunite` |
| **Out of scope** | stop the agent from over-doing | `sin browser` · `sin UI Validator` |

**One job per prompt.** “Generate + audit + redesign + docs” → split into turns.

---

## 2. Do / Don’t

| Do | Don’t |
| --- | --- |
| Name the **page type** (tool shell, auth form, dashboard, landing) | “Usá todas las skills de `ai/` y `.cursor`” |
| Point to **one** skill if you care (`compose` / `validate`) | `@ai/skills` folder or whole `FRAMEWORK-QUICKREF` |
| Say **outcome** (“ocupá el viewport”, “drag + paste .md”) | Dump every molecule you remember |
| Cap process: `sin browser` / `sin auditar` when you want speed | Assume generate implies full Validator + screenshots |
| Reuse existing code paths (`md-to-lagunite`, a recipe) | Ask to invent new CSS utilities in the same pass |
| Spanish or English — pick one for copy | Mix unexplained brand voice mid-prompt |

---

## 3. Templates (copy / adapt)

### A. New POC / screen (generate)

```text
Creá pocs/<nombre>.html con Lagunite (link a ../src/lagunite.css).

Qué es: [tool full-viewport | form page | landing section | dashboard strip].
Debe: [2–4 bullets de comportamiento].
Reutilizá: [archivo/módulo existente o “nada”].
Constraints: solo clases Lagunite; inventada → GAP comment; no editar framework CSS.
Proceso: compose only — no UI Validator, no browser, no tour de skills.
```

**Ejemplo (como el md-drop):**

```text
Creá pocs/md-drop-upload.html: tool full-viewport para subir .md
(drag, file picker o pegar en textarea) y preview con md-to-lagunite.
Shell: minvh100 + col ai-s flex-nowrap (no stack angosto tipo settings).
Solo Lagunite; proceso: compose only, sin browser ni Validator.
```

### B. Fix layout / broken UI

```text
En [path]: el layout [síntoma: shrink-wrap / vacío a la derecha / no ocupa alto].
Intent: [tool shell | content column].
Arreglá con utilidades Lagunite (¿ai-s / minvh100 / container-wide?).
No reescribas el JS salvo que haga falta. Sin auditar el repo entero.
```

### C. Audit (only when you want a report)

```text
Corré Lagunite UI Validator / validate.md sobre [path].
Modes: light | night | both.
Reportá el formato del orquestador; arreglá FAIL seguros en el HTML.
No regeneres la pantalla desde cero.
```

### D. Class lookup (one layer)

```text
¿Qué clase Lagunite uso para [necesidad]?
Abrí solo [flex | containers | molecules | …]; no cargues compose ni validate.
```

### E. Tailwind → Lagunite

```text
Migrá este markup Tailwind a Lagunite (skill tailwind-migration).
Pegá el HTML abajo. No inventes utilidades; GAP si falta.
```

---

## 4. Magic words (trigger the right node)

| If you say… | Agent should open |
| --- | --- |
| crear / generar / POC / pantalla / section | `compose` |
| tool / editor / full-viewport / ocupar pantalla | `compose` (+ tool shell) |
| auditar / validar / Validator / revisar UI | `validate` / UI Validator |
| ¿qué skill? / no sé cuál abrir | `route` |
| form-group / alert / empty-state | that **one** layer skill |
| anti-slop / se ve AI / taste | `anti-slop` |
| sin browser / sin Validator / compose only | process cap (honor it) |

Ambiguous prompts (“mejorá esto con las skills”) → agent may load everything. Be explicit.

---

## 5. Attachments (`@`)

| Attach | When |
| --- | --- |
| The target HTML/CSS file | Almost always |
| `ai/skills/compose.md` | Only if you want to force craft path |
| `ai/skills/route.md` | If the agent keeps loading junk |
| One layer skill | When the task is that layer only |
| Sample / converter JS | When behavior must reuse it |

| Avoid attaching | Why |
| --- | --- |
| Whole `ai/skills/` | Token burn + colliding rules |
| `FRAMEWORK-QUICKREF` “por las dudas” | Encyclopedia, not craft |
| `ToDo-prod` / `REVISION-*` | Unless that doc *is* the task |

`AGENTS.md` is already in context for many agents — don’t paste it again unless the tool ignores it.

---

## 6. Quality checklist (before you send)

- [ ] One primary action
- [ ] Path or clear artifact name
- [ ] Page type / layout intent named
- [ ] Lagunite-only (or explicit CSS change request)
- [ ] Process caps if you want speed (`compose only`, `sin browser`)
- [ ] No “use all skills”

---

## 7. After a bad first answer

Don’t restart with “use more skills”. Narrow:

```text
El layout sigue [síntoma].
Reescribí solo el shell: minvh100 + col ai-s flex-nowrap + paneles flex-1.
No toques [JS / copy / night toggle]. Compose only.
```

Or switch mode:

```text
Ahora sí: auditar [path] con UI Validator; reportá FAIL/WARN.
```

---

## Related

| Doc | Role |
| --- | --- |
| [`../AGENTS.md`](../AGENTS.md) | Hard rules + process caps |
| [`skills/route.md`](./skills/route.md) | Skill tree router |
| [`CONTEXT-HYGIENE.md`](./CONTEXT-HYGIENE.md) | Token hygiene |
| [`AGENTS-AND-SKILLS.md`](./AGENTS-AND-SKILLS.md) | Surfaces Cursor / Copilot / Claude |
