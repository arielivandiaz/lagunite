# Lagunite — ToDo AI-First

> **Fecha:** 2026-09-14 · **Versión doc:** 0.1  
> **Norte:** Schema/JSON → HTML/CSS validado + runtime Lagunite ([`FUTURE-AI-FIRST.md`](./FUTURE-AI-FIRST.md))  
> **Pitch:** [`LANDING-AI-FIRST-COPY.md`](./LANDING-AI-FIRST-COPY.md)  
> **Prerrequisito:** estabilizar el runtime CSS primero — checklist activa en [`ToDo-prod.md`](./ToDo-prod.md) (v2.1). Este track se retoma **después** del DoD de producción CSS.
>
> **Scope:**
> - ✅ En alcance: schema, compiler, validator, fixtures, skills AI, CLI, docs de authoring, demos del spike.
> - ⏸️ Fuera de alcance hasta AIF-7+: playground en `lagunite-web/`, MCP server publicado, multi-target React/Astro, L3 page composition.
> - ❌ No mezclar con auditoría CSS archivo-a-archivo de `ToDo-prod` salvo fixes que el compiler necesite.

**Definition of done (spike):** JSON → HTML con clases Lagunite reales, visible en el browser.  
**Definition of done (MVP interno, después):** validate + compile usables + skills que emitan ese JSON.

---

## 📊 Diagnóstico (punto de partida)

**Ya existe:**
- Pipeline `docs:generate` → `docs/asJson` + `docs/asToon`
- Skills por capa + `validate.md` + `contrast.md`
- Runtime CSS buildable + theming `.night`
- Capas atoms → organisms documentadas

**No existe aún:**
- Schema de UI (intent / componentes)
- Compiler JSON → HTML
- Validator ejecutable (solo checklist markdown)
- CLI / MCP tools
- Fixtures golden
- Narrativa README AI-first

---

## 🚦 Plan por fases

### AIF-0 · Kickoff mínimo (15 min, no es un proyecto)

> **Qué es:** acordar defaults para no discutirlos durante el spike.  
> **Qué no es:** setup de Zod, monorepo, CLI, ni schema formal.  
> **Si estás solo:** marcá los defaults de abajo y pasá directo a **AIF-1**.

**Defaults firmados (cambiar solo si hay objeción explícita):**

| Tema | Default | ¿Bloquea el spike? |
| --- | --- | --- |
| Carpeta | `src/compiler/` | No — elegida |
| Scope spike | `card`, `button`, `row`, `heading`, `text` | No — elegida |
| Validación día 1 | **Ninguna librería** — mapper + `if` | No |
| Zod / JSON Schema | **Diferido a AIF-2** (solo si el spike sirve) | No |
| CLI `lagunite` | **Diferido a AIF-3** — día 1: `node src/compiler/compile.mjs …` | No |
| Paquete npm separado | No | No |
| Allowlist L1 grande | No — solo lo que use el spike | No |

Checklist residual (opcional, puede hacerse *después* del spike):

- [x] Norte B + frase de producto (`FUTURE-AI-FIRST.md` v0.2)
- [x] Defaults de la tabla de arriba
- [x] Puntero en `ai/SKILLS-INDEX.md`
- [ ] Una línea en `CLAUDE.md` al track AI-first (cuando toque docs)

**Done cuando:** sabés que el próximo paso es escribir `spike.json` + `compile.mjs`.  
**No hace falta “cerrar AIF-0” en una reunión formal.**

---

### AIF-1 · Spike técnico (tesis en 1 día útil)

> **Meta:** demostrar JSON → HTML real, sin schema perfecto.

**Fixture mínima:**
```json
{
  "component": "card",
  "children": [
    { "type": "heading", "level": 2, "text": "Spike AI-First" },
    { "type": "text", "text": "Compilado desde JSON.", "tone": "muted" },
    {
      "type": "row",
      "gap": "s",
      "children": [
        { "component": "button", "label": "Primary", "intent": "primary" },
        { "component": "button", "label": "Alt", "intent": "alt" }
      ]
    }
  ]
}
```

- [ ] Crear carpeta del compiler (según AIF-0)
- [ ] Mapper hardcodeado (sin schema genérico aún):
  - [ ] `row` → flex row + gap
  - [ ] `heading` / `text` → tags + tone classes
  - [ ] `button` → `.btn` (+ `.alt` / `.secondary` según intent)
  - [ ] `card` → `.card` + `.card-body` (o estructura documentada)
- [ ] Script: `node … fixtures/ui/spike.json > fixtures/ui/spike.html` (o API equivalente)
- [ ] HTML de preview que importe `./dist/lagunite.css` o `./src/lagunite.css`
- [ ] README corto en la carpeta del compiler: cómo correr el spike
- [ ] Anotar gaps (`<!-- GAP: … -->`) si falta utilidad — **no** inventar clases

**Done cuando:** abrir el HTML en browser muestra card + 2 botones + texto, 100% clases Lagunite existentes.

**Criterio de go/no-go:** si en <2 días no se ve claro, achicar nodos del spike — no sumar Zod/CLI todavía.

---

### AIF-2 · Schema MVP (L1 + L2)

> **Meta:** contrato tipado que el spike cumpla y que se pueda validar.

- [ ] Definir tipos/nodos:
  - [ ] L1: `row` | `col` | `box` (layout + `gap` | `p` | `m` | `tone` | `radius`)
  - [ ] L2: `button`, `alert`, `card`, `badge`, `input`
  - [ ] Contenido: `heading`, `text`, `children[]`
- [ ] Escala de tokens en schema (mapear a clases):
  - [ ] spacing: `xs` | `s` | `m` | `l` | `xl` (o el subset real del CSS)
  - [ ] tone: `primary` | `secondary` | `muted` | `success` | `warning` | `error`
  - [ ] button intent: `primary` | `alt` | `secondary` | …
- [ ] Implementar schema **solo si hace falta** (objeto JS + checks, o Zod si ya duele validar a mano)
- [ ] Script/helper: generar **allowlist de clases** desde `docs/asJson` (aunque el schema L1 sea reducido)
- [ ] Documentar el mapping intent → class string en un solo archivo (`MAPPING.md` o JSDoc)
- [ ] Versionar schema: `schemaVersion: "0.1.0"` en cada UI doc

**Done cuando:** el fixture del spike valida contra el schema; un JSON con prop inventada falla.

---

### AIF-3 · CLI compile + validate

> **Meta:** UX de producto mínima en terminal.

- [ ] Entry point CLI (package.json `bin` o script npm):
  - [ ] `lagunite validate <file.json>`
  - [ ] `lagunite compile <file.json> [-o out.html]`
- [ ] Exit codes: `0` ok · `1` error de schema · `2` warning-as-error (opcional flag)
- [ ] Output HTML: doctype mínimo opcional + fragment mode
- [ ] Mensajes de error legibles (path JSON + razón)
- [ ] npm scripts: `ai:validate`, `ai:compile` (nombres tentativos)
- [ ] No publicar a NPM todavía (solo uso local / monorepo)

**Done cuando:** un contribuidor corre un comando y obtiene HTML o error claro sin leer el código del compiler.

---

### AIF-4 · Fixtures, golden files y CI

> **Meta:** regresiones visibles; demos para directivos y para agentes.

- [ ] Carpeta `fixtures/ui/`:
  - [ ] `01-spike-card.json` (+ `.html` golden)
  - [ ] `02-alert-variants.json`
  - [ ] `03-form-row.json` (input + button)
  - [ ] `04-badge-row.json`
  - [ ] `05-invalid.json` (debe fallar validate)
- [ ] Test: compile de fixtures 01–04 coincide con golden (diff)
- [ ] Test: fixture 05 falla validate
- [ ] (Opcional) job CI que corra validate/compile en PR
- [ ] Preview HTML único `fixtures/ui/index.html` que liste/embele los casos

**Done cuando:** cambiar el mapper rompe un test de forma obvia.

---

### AIF-5 · Skills y prompting AI-first

> **Meta:** los agentes generan JSON del schema, no class soup.

- [ ] Nueva skill: `ai/skills/ui-schema.md` (cómo emitir UI JSON Lagunite)
- [ ] Nueva skill corta: `ai/skills/compile.md` (cuándo validate/compile)
- [ ] Actualizar `ai/SKILLS-INDEX.md`
- [ ] Actualizar `docs/PROMPT_GUIDE.md`: sección “Authoring JSON” primero; “raw classes” como avanzado
- [ ] Ajustar `ai/skills/validate.md`: checklist post-compile + link al CLI
- [ ] Mantener skills de capas (tokens, flex, …) como **referencia del runtime**, no puerta de entrada
- [ ] 3 prompt starters: “generá JSON card”, “validá este JSON”, “compilá y sugerí fixes”

**Done cuando:** un agente nuevo con solo el index + ui-schema produce JSON válido del MVP sin inventar clases.

---

### AIF-6 · Narrativa de producto (docs públicas)

> **Meta:** el repo explica el nuevo valor sin mentir sobre lo que ya shippea.

- [ ] Borrador README sección “AI-first (experimental)” — **no** reemplazar installation CSS hasta que AIF-3 esté usable
- [ ] Outline README futuro (post-MVP): valor, compile flow, link a schema, link a CSS runtime
- [ ] Actualizar keywords `package.json` cuando se publique compiler (`design-system`, `ai`, …)
- [ ] Decidir con RTP-4 (`ToDo-prod`): ¿v2.1 solo CSS o también menciona AI experimental?
- [ ] Landing HTML (opcional): usar copy de `LANDING-AI-FIRST-COPY.md` + utilidades reales; marcar GAPs

**Done cuando:** un visitante del repo entiende “CSS runtime + authoring schema” en <1 minuto.

---

### AIF-7 · Playground (lagunite-web — proyecto separado)

> **Meta:** demo visual para stakeholders.

- [ ] Página playground: textarea JSON → preview iframe/HTML
- [ ] Botones Validate / Compile
- [ ] Cargar fixtures de ejemplo
- [ ] `docs:sync` / consumir schema o compiler desde este repo (definir contrato de consumo)
- [ ] No bloquear AIF-1…6 por este ítem

**Done cuando:** se puede demostrar el flujo en una call de 5 minutos sin terminal.

---

### AIF-8 · Productización (post-MVP)

> **Meta:** empaquetar para adopción externa.

- [ ] Evaluar publicar `@lagunite/compiler` / `@lagunite/schema`
- [ ] MCP tools: `validate_ui`, `compile_ui`
- [ ] Contraste WCAG como gate (reusar lógica de `contrast.md` / `generate-contrast-docs.js`)
- [ ] Subset CSS / tree-shake por JSON usado (investigación)
- [ ] Targets React/Astro partials
- [ ] L3 page composition
- [ ] Enterprise allowlist / policy packs
- [ ] Telemetría local opcional (conteo de compiles — sin PII)

**Done cuando:** hay al menos un paquete consumible fuera del monorepo **o** decisión explícita de mantenerlo internal-only.

---

## 🗺️ Orden sugerido de trabajo (mínimo primero)

| Paso | Foco | Entregable |
| --- | --- | --- |
| Hoy | AIF-0 (defaults) + **AIF-1** | HTML del spike en el browser |
| Si el spike convence | AIF-2 liviano | Checks claros sin armar plataforma |
| Si se usa de verdad | AIF-3 | Script npm / CLI simple |
| Después | AIF-4…8 | Fixtures, skills, README, playground |

**Camino corto:** AIF-1 → (¿sirve?) → script compile → skill JSON.  
Zod, monorepo, MCP y playground **no** entran hasta que duela no tenerlos.

---

## 🔗 Relación con ToDo-prod

| Situación | Qué hacer |
| --- | --- |
| Bug CSS bloquea el spike (clase documentada no existe) | Fix mínimo en CSS + docs:generate; anotar en RTP si aplica |
| Rename cosmético de utilities | **No** durante AIF — congela la API del compiler |
| Release NPM v2.1 | Puede salir solo con CSS; AI-first se marca experimental hasta AIF-3 |
| Demos RTP-3 | Pueden coexistir con `fixtures/ui/`; no mezclar carpetas |

---

## 📝 Notas operativas

- No inventar clases en output del compiler. Si falta: `<!-- GAP: … -->` + ítem de schema/CSS backlog.
- Preferir generar allowlists desde `asJson` antes de mantener listas a mano.
- Commits sugeridos (cuando se pida commit): prefijo `ai-first:` o `compiler:`.
- Actualizar el log de decisiones en `FUTURE-AI-FIRST.md` al cerrar cada fase.
- Este archivo es la **única checklist ejecutable** del track AI-first; `FUTURE-*` es estrategia, `LANDING-*` es comunicación.

---

## ✅ Checklist rápido “¿seguimos invirtiendo?”

Después del spike (AIF-1), responder sí/no:

1. ¿El HTML compilado se ve como Lagunite “de verdad”?
2. ¿Fue más fácil pensar en JSON que en class strings para ese ejemplo?
3. ¿El mapping a clases existentes fue viable sin reescribir el CSS?
4. ¿Hay un siguiente componente obvio que sumar al schema?

Si 3+ son “sí” → continuar AIF-2. Si no → ajustar Q2/Q5 o revisar la tesis antes de más scope.
