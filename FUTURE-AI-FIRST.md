# Lagunite — Redefinición AI-first

> **Estado:** documento de trabajo (v0.2)  
> **Fecha:** 2026-09-14  
> **Propósito:** norte de producto + plan para convertirlo en realidad en este repo.  
> **Track de ejecución:** [`ToDo-ai-first.md`](./ToDo-ai-first.md)  
> **Copy / pitch:** [`LANDING-AI-FIRST-COPY.md`](./LANDING-AI-FIRST-COPY.md)  
> **Runtime CSS (paralelo):** [`ToDo-prod.md`](./ToDo-prod.md)

---

## 1. Veredicto corto

Competir como “otro utility framework que los humanos deben memorizar” ya no es diferencial. La IA escribe CSS/Tailwind; el mercado no quiere aprender vocabulario nuevo.

El activo real de Lagunite ya está a medio construir:

1. Vocabulario cerrado y validable (no inventar clases).
2. Design system estratificado (tokens → organisms).
3. Artefactos machine-readable (`docs/asJson`, `docs/asToon`, skills).
4. Reglas de generación (orden de clases, contraste, gaps explícitos).

**Apuesta:** dejar de vender “aprendé Lagunite” y vender **“describí UI en schema/JSON; Lagunite (y la IA) la materializan de forma consistente”**.

**Frase de producto (oficial v0.2):**

> **Lagunite es un design system compilable: describís UI en JSON (o se la pedís a una IA); el framework valida y genera HTML/CSS consistente.**

Corta:

> **Dejá de aprender clases. Describí la UI. Lagunite la materializa.**

---

## 2. Diagnóstico del estado actual

### Posicionamiento actual (README)

- “CSS framework for enterprise teams who value readable code over brief code.”
- Público implícito: **humanos que escriben class strings**.

### Infra AI latente (repo hoy)

| Activo | Qué es | Gap |
| --- | --- | --- |
| `ai/skills/*.md` | Skills por capa | Orientadas a “generá clases”, no a schema |
| `docs/PROMPT_GUIDE.md` | Prompt starters | Sin contrato formal JSON |
| `docs/asJson/` + `docs/asToon/` | Catálogo desde CSS | Solo docs outbound; **no hay JSON → UI** |
| `docs:generate` / `docs:merge` | Pipeline CSS → JSON | Falta el camino inverso |
| Capas atoms→organisms | Design system real | Se consume como CSS + HTML manual |
| Contrast skill + `contrast:update` | Pairing WCAG | Ideal como regla de validator |
| Cursor / Claude rules | DX de contribuidores | No es SDK/producto para el usuario final |

### Dos tracks (no pelearlos)

| Track | Doc | Objetivo |
| --- | --- | --- |
| **Runtime CSS** | `ToDo-prod.md` | Release NPM estable del CSS |
| **AI-first** | `ToDo-ai-first.md` | Schema + validate + compile |

El CSS sigue siendo el **runtime**. AI-first es la **API de authoring**. Se pueden paralelizar: RTP no bloquea AIF-1 (spike); AIF no exige esperar v2.1 para el spike.

---

## 3. Tesis

1. Aprender classnames nuevos es costo hundido; la IA ya genera Tailwind/CSS.
2. El valor se mueve a un **contrato estable que la IA no puede romper**.
3. Un DS gana si es compilable, validable y versionable.
4. JSON/schema es mejor interfaz humano↔IA↔runtime que miles de clases.

**Norte:** AI-first design system runtime — no “Tailwind legible”.

**Matiz:** no tiramos el CSS. Tokens, componentes, theming (`.night`), a11y y consistencia siguen siendo el producto. Lo que cae es la exigencia de que humanos memoricen utilidades.

---

## 4. Opciones de producto (resumen)

| Opción | Idea | Estado |
| --- | --- | --- |
| **A** Utility AI-contract | Skills + allowlist + validate sobre clases | **Puente** (Fase AIF-1/2 parcial) |
| **B** Schema UI → HTML | JSON intent/componentes → HTML Lagunite | **Norte oficial** |
| **C** Solo semantic components | Achicar utilities | No ahora |
| **D** Tooling-only | MCP genérico sin CSS propio | No (pierde identidad) |
| **E** Status quo | Readable utilities | No como estrategia principal |

Detalle de pros/contras: ver historial v0.1 en git si hace falta. La decisión está tomada (sección 13).

---

## 5. Norte oficial: B con puente A

### Por qué

1. Ya existe **CSS → JSON**; el movimiento natural es **schema → UI**.
2. El usuario habla en intención (`card`, `padding: m`, `tone: primary`), no en `.padd` / `.bg-1`.
3. La IA genera mejor estructuras tipadas que classnames de un corpus chico.
4. El CSS permanece como runtime estable.
5. Salimos del head-to-head “somos Tailwind pero más legible”.

### Qué NO implica

- No borrar utilities mañana.
- No ocultar el HTML (sigue auditable).
- No abandonar el release NPM del CSS.

### Heurística de ejecución

1. **Puente A:** allowlist + validate de clases (reusa `asJson`).
2. **Norte B:** schema L1+L2 → compiler → HTML.
3. Skills/MCP hablan schema; el compiler emite clases.

---

## 6. Feature: JSON → HTML/CSS

### Pipeline

```
[Autor / IA]
    ↓  UI Document (JSON/YAML)
[Schema + Validator]  ← asJson, tokens, contrast
    ↓
[Compiler]
    ↓
[HTML + class string Lagunite]  y/o  [CSS subset]
    ↓
[Runtime: dist/lagunite.css]
```

### Niveles de JSON

| Nivel | Nombre | Ejemplo | MVP |
| --- | --- | --- | --- |
| L0 | Class list | `{ "class": ["row", "gap"] }` | No (poco valor) |
| L1 | Utility intent | `{ "layout": "row", "gap": "m", "p": "s" }` | **Sí** |
| L2 | Semantic UI | `{ "component": "card", "variant": "elevated" }` | **Sí** |
| L3 | Page composition | sections + organisms + content | Después |

### Ejemplo conceptual (L2 + L1)

```json
{
  "component": "card",
  "variant": "default",
  "children": [
    { "type": "heading", "level": 2, "text": "Bienvenido", "tone": "primary" },
    { "type": "text", "text": "Descripción corta.", "tone": "muted" },
    {
      "type": "row",
      "gap": "s",
      "children": [
        { "component": "button", "label": "Continuar", "intent": "primary" },
        { "component": "button", "label": "Cancelar", "intent": "alt" }
      ]
    }
  ]
}
```

### Entregables del producto (orden)

1. JSON Schema (o Zod) — nodos L1/L2 allowlisted.
2. CLI — `lagunite compile` / `lagunite validate`.
3. Validator — props desconocidas + warnings de contraste.
4. Skill / MCP — `compile_ui` / `validate_ui`.
5. Playground — en `lagunite-web` (proyecto hermano).
6. Docs authoring — intención primero; cheatsheet de clases como referencia secundaria.

### Relación con lo existente

| Hoy | Mañana |
| --- | --- |
| `docs/asJson` | Fuente de allowlists + generación de schema |
| Skills “generá clases” | Skills “emití JSON válido / usá compiler” |
| `validate.md` checklist | Código (`validate`) + skill corta |
| `contrast.md` | Reglas del validator |

---

## 7. De idea a realidad — mapa de ejecución

> Checklist detallado: [`ToDo-ai-first.md`](./ToDo-ai-first.md)

| Fase | Meta | Repo | Dependencia con ToDo-prod |
| --- | --- | --- | --- |
| **AIF-0** | Decisiones cerradas + frase de producto | Docs | Ninguna |
| **AIF-1** | Spike: 1 `ui.json` → HTML (card + button + row) | `packages/` o `src/compiler/` | Ninguna |
| **AIF-2** | Schema L1+L2 MVP (10–15 intents + 3–5 components) | schema generado desde asJson donde se pueda | Docs generate estable ayuda |
| **AIF-3** | CLI `compile` + `validate` | scripts / bin | Lint/build CSS no bloquean |
| **AIF-4** | Fixtures + golden HTML + test en CI | `fixtures/ui/` | — |
| **AIF-5** | Skills + PROMPT_GUIDE reorientados a JSON | `ai/`, `docs/` | — |
| **AIF-6** | Narrativa README (borrador; publicar cuando MVP demoable) | README | Coordinar con RTP-4 |
| **AIF-7** | Playground mínimo | `lagunite-web` (separado) | Build `dist/` actualizado |
| **AIF-8** | MCP / skill pack empaquetable | paquete npm opcional | Post-MVP |

**Criterio de “tesis demostrada”:** spike AIF-1 funciona en demo de 2 minutos (JSON → preview HTML con `lagunite.css`).

**Criterio de “MVP interno usable”:** AIF-1…AIF-5 cerrados; un agente puede emitir JSON y el CLI lo valida/compila.

---

## 8. Decisiones (cerradas y pendientes)

### Cerradas (2026-09-14)

| # | Decisión | Valor |
| --- | --- | --- |
| D1 | Norte de producto | **B** (Schema → UI), puente **A** |
| D2 | Frase de producto | Ver sección 1 |
| D3 | MVP schema | **L1 + L2**; no L0; L3 después |
| D4 | Target compile inicial | **HTML estático** (React/Astro después) |
| D5 | Ubicación del spike | **Este repo** (`src/compiler/` o `packages/compiler/`) |
| D6 | Relación con release 2.1 | **Paralelizar** — no bloquear RTP ni AIF spike |
| D7 | Usuario primario v1 | **Dev con IA** (agente en IDE); enterprise como narrativa de venta |
| D8 | JSON en repos | **Source of truth opcional**; HTML commitado OK al inicio. Schema es el contrato. |
| D9 | Nombres descriptivos | Valor **secundario** (HTML auditable); no el pitch principal |
| D10 | Español / LATAM | Locale de docs/authoring; no posicionamiento “vs Tailwind en español” |

### Abiertas (resolver en AIF-0 / spike)

| # | Pregunta | Default propuesto |
| --- | --- | --- |
| Q1 | ¿Zod, JSON Schema, o ambos? | Zod en runtime + export JSON Schema |
| Q2 | ¿Allowlist L1 grande o vocabulario reducido? | **Reducido** (spacing, layout, tone, radius) — expandir con demanda |
| Q3 | ¿Nombre del bin? | `lagunite` (subcommand) vs `lagunite-compile` |
| Q4 | ¿Publicar `@lagunite/compiler` separado desde el día 1? | **No** — monorepo/carpeta interna hasta que el spike estabilice |
| Q5 | ¿Cuántos componentes L2 en MVP? | **5:** button, alert, card, badge, input (text) |

---

## 9. Implicaciones por área

| Área | Acción |
| --- | --- |
| README | Cuando AIF-1+ demoable: reescribir valor a AI-first DS runtime |
| Skills | De “generá clases” → “generá JSON / compile” |
| CSS | Estabilidad de API de clases = contrato del compiler; congelar breakings |
| Naming utilities | Congelar renames cosméticos salvo bugs |
| `ToDo-prod` | Sigue; runtime de calidad |
| `lagunite-web` | Playground JSON→HTML (AIF-7) |

---

## 10. Riesgos y mitigaciones

| Riesgo | Mitigación |
| --- | --- |
| Schema incompleto → escape a `style=""` | Gaps explícitos + backlog de nodos; no fingir cobertura total |
| JSON más difícil que HTML | Schema obvio; ejemplos > abstracción |
| Doble mantenimiento CSS + schema | Generar allowlist/schema **desde** `asJson` |
| Confusión “¿CSS o compiler?” | Mensaje: **runtime CSS + authoring AI** |
| Competencia (Panda, Mist, shadcn+AI) | Estrechos: Lagunite runtime + validate + ES docs |

---

## 11. Scoring de decisión (referencia)

Criterios 1–5 usados en v0.1; resultado orientativo para norte B:

| Criterio | Score B | Nota |
| --- | --- | --- |
| Diferenciación vs Tailwind + Cursor | 5 | Categoría propia |
| Curva cero (sin memorizar clases) | 5 | Intent schema |
| AI-native | 5 | JSON/skills primarios |
| Validabilidad | 5 | Reject inválido |
| Compatibilidad CSS v2 | 4 | Compiler emite clases actuales |
| Story en una frase | 5 | Ya escrita |
| Monetización / adopción | 4 | CLI, MCP, playground |
| Mantenimiento | 3–4 | OK si schema se genera |
| ES / LATAM | 3 | Locale, no moat único |
| Horizonte MVP | 4 | Semanas si se prioriza |

---

## 12. Material relacionado

| Doc | Rol |
| --- | --- |
| [`ToDo-ai-first.md`](./ToDo-ai-first.md) | Tareas ejecutables del track AI-first |
| [`LANDING-AI-FIRST-COPY.md`](./LANDING-AI-FIRST-COPY.md) | Pitch / landing / deck |
| [`ToDo-prod.md`](./ToDo-prod.md) | Release NPM del runtime CSS |
| `ai/SKILLS-INDEX.md` | Skills actuales (a reorientar en AIF-5) |
| `docs/asJson/`, `docs/asToon/` | Catálogo machine-readable |
| `docs/PROMPT_GUIDE.md` | Prompting actual |

---

## 13. Log de decisiones

| Fecha | Decisión | Notas |
| --- | --- | --- |
| 2026-08-24 | Documento creado (v0.1) | Opinión inicial: norte B, puente A |
| 2026-09-14 | v0.2 — norte oficializado | D1–D10 cerradas; Q1–Q5 con defaults; track `ToDo-ai-first.md` creado |

---

## 14. Notas de contexto

- NPM: `lagunite` v2.0.x — Vite + PostCSS → `dist/lagunite.css`
- Capas: tokens → typography/colors → spacing/layout → decorators → atoms → molecules → compounds → organisms → patterns
- Breakpoints: base / `x` (≤639) / `d` (≥640)
- Proyecto hermano docs site: `lagunite-web/` (repo separado)
