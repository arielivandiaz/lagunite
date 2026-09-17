# Modern Web Guidance → Lagunite skills

> Análisis de [GoogleChrome/modern-web-guidance](https://github.com/GoogleChrome/modern-web-guidance) y cómo adoptar sus lineamientos **sin** convertir Lagunite en un fork de 108 guías.  
> **Fecha:** 2026-09-17 · **Estado:** propuesta  
> **Backlog ejecutable (135 use-cases):** [`../ToDo-modern-platform.md`](../ToDo-modern-platform.md)  
> **Relacionado:** [`AGENTS-AND-SKILLS.md`](./AGENTS-AND-SKILLS.md) · [`CONTEXT-HYGIENE.md`](./CONTEXT-HYGIENE.md) · [`SKILLS-INDEX.md`](./SKILLS-INDEX.md) · [`../SUPPORT.md`](../SUPPORT.md)

---

## 1. Qué es Modern Web Guidance (MWG)

Skill pack del equipo Chrome/Edge para **agents**: empuja APIs modernas de plataforma, performance y a11y nativa, y saca al modelo de patrones legacy (JS gordo, polyfills pesados, libs donde ya hay primitiva del browser).

### Cómo funciona (arquitectura clave)

1. Skill **delgada** (~234 tokens) → el agent sabe *cuándo* preguntar.
2. CLI local: `modern-web-guidance search "<query>"` → IDs por similitud semántica (offline).
3. `modern-web-guidance retrieve <id>` → guía **token-eficiente** (patrones, gotchas, fallbacks) entra al contexto **bajo demanda**.
4. Evals: demo gold + demo negativa + graders Playwright; miden uplift guided vs unguided.

**Lección #1 para Lagunite:** no precargar enciclopedias. El win de MWG es **retrieve on-demand**, alineado con nuestra [`CONTEXT-HYGIENE.md`](./CONTEXT-HYGIENE.md).

### Qué cubre (útil para nosotros)

| Disciplina MWG | Ejemplos de use-cases | ¿Toca Lagunite? |
| --- | --- | --- |
| Forms | `:user-invalid`, autofill, `accent-color`, select customizable | **Sí** — `validate-forms`, `atoms` |
| Visual / dark | `color-scheme`, `light-dark()`, preferencias | **Sí** — `validate-night`, `colors` |
| UI behaviors | `<dialog>`, Popover, invokers, light-dismiss | **Sí** — `compounds` (modal / sheet) |
| Accessibility | focus, anuncios de error, reduced-motion | **Sí** — `validate-a11y` |
| CSS layout | container queries, subgrid, anchor positioning | **Parcial** — layout skills; muchas features **aún no** son utilities Lagunite |
| Performance / Built-in AI / Passkeys / WebMCP | prefetch, Summarizer, WebAuthn… | **No** (fuera del CSS framework) — opcional en Lab / apps |

---

## 2. Lagunite hoy vs MWG

| | **Lagunite skills** | **Modern Web Guidance** |
| --- | --- | --- |
| Job | Nombrar **clases** y validar HTML Lagunite | Nombrar **APIs de plataforma** y patrones modernos |
| Forma | Capas + checklists PASS/FAIL | Guías por *use case* + search/retrieve |
| Fuente de verdad | `ai/skills/*.md` + CSS en `src/` | npm CLI + guías curadas Baseline-aware |
| Riesgo si mezclamos mal | Agent inventa classes *o* ignora Lagunite | Agent genera UI moderna **sin** nuestro design system |

**Lección #2:** MWG y Lagunite son **complementarios**, no competidores.  
Orden mental correcto:

```text
¿Qué API / HTML nativo?     → MWG (o knowledge moderno)
¿Qué clase Lagunite?        → skills Lagunite (única autoridad de classnames)
¿El HTML pasa el bar?       → UI Validator
```

---

## 3. Estrategias de implementación (recomendadas)

### Opción A — Consumir MWG (sin fork) ★ recomendada como base

Documentar en el mapa de agents:

- Si la tarea es **plataforma web** (dialog nativo, `:user-invalid`, popover, dark `color-scheme`, INP…), el agent **puede** llamar:
  - `npx modern-web-guidance@latest search "…"`
  - `npx modern-web-guidance@latest retrieve <id>`
- Después **mapear** el resultado a classes Lagunite (o marcar `<!-- GAP -->` si el framework no cubre el patrón).

**Pros:** cero mantenimiento de 108 guías; contenido fresco vía npm.  
**Contras:** dependencia externa; telemetría opt-out (`DISABLE_TELEMETRY=1`); no enseña Lagunite solo.

### Opción B — Skill puente `modern-platform` (thin bridge)

Nueva skill canónica `ai/skills/modern-platform.md` (~1 pantalla) que:

1. Lista **10–20** use-cases relevantes al framework.
2. Por cada uno: **MWG guide id** + **clases Lagunite** + fallback / GAP.
3. Instrucción: “si hace falta detalle de API → retrieve MWG; si hace falta classname → skill de capa”.

Sync a Cursor/GitHub/Claude vía `npm run ai:sync`.

### Opción C — Inyectar “preferencias nativas” en skills existentes

Parches cortos (bullets, no essays) en:

| Skill Lagunite | Inyectar de MWG |
| --- | --- |
| `validate-forms.md` | Preferir `:user-invalid` / feedback post-interacción; autofill attrs; no pintar error al load |
| `compounds.md` | Preferir `<dialog>` + light-dismiss (`closedby`) / Popover donde el CSS Lagunite lo permita; JS mínimo |
| `validate-night.md` | Alinear con `color-scheme` / respetar `prefers-color-scheme` cuando el producto lo pida (además de `.night` manual) |
| `validate-a11y.md` | Sync visual invalid ↔ `aria-invalid` solo tras interacción (guide `accessible-error-announcement`) |
| `decorators.md` | View Transitions / entry-exit solo si Baseline OK; always `prefers-reduced-motion` |
| `compose.md` / `anti-slop.md` | “Nativo antes que componente falso” (checkbox real + `accent-color`, no div fingiendo control) |

**Pros:** el Validator ya orquesta esos archivos.  
**Contras:** hay que mantener bullets cortos y Baseline-aware (ver `SUPPORT.md`).

### Opción D — No hacer (anti-patrones)

- ❌ Copiar las 108/135 guías a `ai/skills/`
- ❌ Sustituir Lagunite skills por MWG
- ❌ Pedir polyfills pesados que contradicen size budget (~49 KB gzip)
- ❌ Inventar utilities Lagunite solo porque MWG menciona container queries / anchor — primero GAP o RTP

---

## 4. Mapa concreto: use-case MWG → skill Lagunite

### Alta prioridad (solape fuerte con CSS/HTML que ya shippeamos)

| MWG guide / tema | Acción en Lagunite |
| --- | --- |
| `validate-input-after-interaction` · `required-field-feedback` | Ampliar `validate-forms.md`: FAIL si errores al load; preferir `:user-invalid` + `.form-error-msg` / `.has-error` post-interact |
| `accessible-error-announcement` | Bullet en `validate-a11y.md` + forms |
| `autofill-sign-in-form` / sign-up / payment / address | Checklist opcional en `validate-forms.md` (`autocomplete` correcto) |
| `brand-consistent-forms` (`accent-color`) | Nota en `atoms.md` / tokens: nativo antes que fake control |
| `dark-mode` · `component-specific-light-dark-theme` | `validate-night.md`: `.night` Lagunite **y** `color-scheme` del documento; no forzar night si el producto es system-pref |
| `declarative-dialog-popover-control` · `light-dismiss-a-dialog` | `compounds.md`: markup modal Lagunite sobre `<dialog>` cuando sea posible; documentar si hoy depende de JS/class toggle |
| `improve-text-layout-and-legibility` (`text-wrap: balance/pretty`) | `typography.md`: si existe utility → usarla; si no → GAP + inline solo en Lab con comentario |

### Media prioridad (Lab / v2.2+, no bloquear v2.1)

| Tema MWG | Nota |
| --- | --- |
| Anchor positioning / tooltips | Molécula tooltip Lagunite vs Popover+anchor — auditar Baseline Safari |
| Container queries | Posible capa layout futura; hoy breakpoints `x*`/`d*` |
| View Transitions / scroll-driven | Solo demos Lab; no engordar core sin budget |
| Customizable `<select>` | Interesa vs picker-wheel / selectable-option |
| Navigation drawer | Comparar con `.sidebar` organism |

### Baja / fuera de skills CSS

Performance (INP, speculation rules), Passkeys, Built-in AI, WebMCP, privacy headers → **no** entran a `ai/skills/` de capas. Pueden vivir como posts del [Lab](../LAB-ROADMAP.md) o apps consumidoras.

---

## 5. Plan de adopción por fases

### Fase 0 — Política (½ día)

1. Añadir en `AGENTS-AND-SKILLS.md` la regla de orden: **MWG (plataforma) → Lagunite (clases) → Validator**.
2. Opt-out telemetría documentado para contributors: `DISABLE_TELEMETRY=1`.
3. Decisión explícita: Lagunite **no** redistribuye el contenido MWG; enlaza / CLI.

### Fase 1 — Bridge + 4 parches (2–3 días)

1. Crear `ai/skills/modern-platform.md` (tabla corta id → skill → classes).
2. Parchear: `validate-forms`, `validate-a11y`, `validate-night`, `compounds`.
3. `npm run ai:sync` + fila en `SKILLS-INDEX.md`.
4. Entrada en Validator orchestrator (`validate.md`): “si forms/dialogs/night modernos → consultar bridge / MWG retrieve”.

### Fase 2 — Calibración estilo MWG (opcional, post v2.1)

Inspirados en su eval loop, sin clonar el harness entero:

| Artefacto | Rol |
| --- | --- |
| `demos/` | Gold (ya existe) |
| `pocs/ai-ui-test/b-*.html` | Negativos anti-slop (ya existe) |
| Checklist Validator | “Grader” manual / agent |
| Futuro | 1–2 Playwright specs solo para forms `:user-invalid` + modal focus trap |

### Fase 3 — Lab como vitrina

Cada experimento del Lab puede citar:

- Clases Lagunite usadas
- Guide MWG que inspiró el comportamiento nativo (link o id)
- GAP si la plataforma va más allá del CSS shippeado

Eso **vende** Lagunite como “moderno + opinionado”, no “otro Tailwind de 2019”.

---

## 6. Formato sugerido del bridge (borrador)

Fragmento para `ai/skills/modern-platform.md`:

```markdown
# Lagunite × Modern Web Platform

When the task needs a **browser-native** pattern, search MWG then map to Lagunite.

## Rule
1. `npx modern-web-guidance@latest search "<intent>"`
2. `retrieve` the best guide id
3. Implement with **documented Lagunite classes only**
4. If the guide needs CSS we don't ship → `<!-- GAP: … -->` + closest utility

## Hot map
| Intent | MWG id (start here) | Lagunite |
| --- | --- | --- |
| Validate after blur/submit | validate-input-after-interaction | validate-forms · `.form-error-msg` / `.has-error` |
| Required empty after interact | required-field-feedback | idem |
| Modal open/close | declarative-dialog-popover-control | compounds · `.modal*` + `<dialog>` if possible |
| Light dismiss | light-dismiss-a-dialog | compounds |
| Dark / system theme | dark-mode | validate-night · `.night` + `color-scheme` |
| Native control brand color | brand-consistent-forms | atoms · tokens (`accent-color` if present) |
```

(Mantener la tabla ≤ ~15 filas; el resto es retrieve.)

---

## 7. Conflictos a resolver antes de codear

| Tema | Pregunta | Default propuesto |
| --- | --- | --- |
| `:valid`/`:invalid` vs `:user-invalid` | Lagunite hoy gatea con `[placeholder]`. ¿Migrar selectores CSS a `:user-*`? | Investigar en RTP futuro; en skills ya enseñar feedback post-interact vía `.has-error` |
| `.night` vs `prefers-color-scheme` | ¿Auto night? | Skills: documentar ambos; CSS auto = decisión de producto, no default del framework |
| Modal Lagunite vs `<dialog>` | ¿Refactor markup demos? | Preferir `<dialog>` en Lab/nuevos; no romper class API v2.1 |
| Baseline | `SUPPORT.md` = últimos 2 Chromium/FF/Safari | Bridge solo recomienda APIs que entren en esa matriz; si no, progressive enhancement |

---

## 8. Decisión recomendada (resumen ejecutivo)

1. **No forkear** MWG dentro de Lagunite.  
2. **Sí** adoptar el *modelo mental*: skills delgadas + detalle on-demand + preferir plataforma.  
3. Implementar **Opción A + B + C ligera**: política + bridge `modern-platform` + 4 parches en skills de validación/compounds.  
4. Usar el **Lab** para demostrar el combo (nativo moderno + clases Lagunite).  
5. Dejar performance/passkeys/AI APIs **fuera** del core de skills CSS.

---

## 9. Checklist de arranque (cuando se apruebe)

- [ ] Aprobar ubicación: `ai/skills/modern-platform.md`
- [ ] Redactar hot map (≤15 filas) con IDs verificados vía CLI
- [ ] Parches en `validate-forms` / `validate-a11y` / `validate-night` / `compounds`
- [ ] Mencionar en `validate.md` + `AGENTS-AND-SKILLS.md`
- [ ] `npm run ai:sync`
- [ ] Nota en `SUPPORT.md` o Lab: “agents may use MWG for platform patterns”
- [ ] (Opcional) experimento Lab #1 que cite un guide id MWG
