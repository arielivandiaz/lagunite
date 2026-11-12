# Lagunite — Business / landing knowledge base

> **Uso:** base de conocimiento para armar landing, one-pager o deck.  
> **No es** el README técnico ([`README.md`](./README.md) / [`README_ES.md`](./README_ES.md)).  
> **Narrativa canónica:** [`story/README.md`](./story/README.md) (ES) · [`story/STORY_EN.md`](./story/STORY_EN.md) (EN). Si hay conflicto, gana `story/`.  
> **Prueba pública IA:** [`story/BENCHMARK.md`](./story/BENCHMARK.md).  
> **Actualizado:** 2026-11-01 · v2.1.x

---

## 1. One-liners (elegir según página)

| Variante | Frase |
| --- | --- |
| **Producto hoy** | CSS legible, probado en producción. |
| **Historia corta** | El framework con el que construimos muchos sitios. Ahora aprendiendo a construirlos con IA, en público. |
| **IA (honesto)** | Todavía no es más eficiente que Tailwind para un agente. Estamos trabajando para que lo sea, y lo medimos. |
| **ES / LATAM** | Design system con clases legibles, hecho y usado en producción — no otro clone de Tailwind. |

**Nombre en hero:** siempre **Lagunite** como señal de marca dominante (no solo en nav).

---

## 2. Audiencias

| Quién | Qué necesita oír | CTA típico |
| --- | --- | --- |
| **Dev / lead frontend** | Clases legibles, probado en sitios reales, Lab con ejemplos copiables | Ver Lab · `npm i lagunite` |
| **Design / DS owner** | Tokens, capas atoms→organisms, night, criterio anti-slop | Ver design system / Lab |
| **Curioso de IA** | Experimento abierto: cuánto cuesta un framework propio frente a Tailwind y CSS | Ver benchmark |
| **Contribuidor** | Hay trabajo concreto: recipes, skills, core | Ver roadmap / issues |

Una landing pública habla a **dev + design** en el hero y tiene un bloque **“Lagunite + IA: en progreso”** más abajo.

---

## 3. Posicionamiento

### Qué somos
- Runtime CSS **utility-first** con nombres **descriptivos** (no `mx-auto` críptico), usado para construir muchos sitios.
- Design system estratificado: tokens → atoms → molecules → compounds → organisms.
- Criterio de diseño por defecto (anti-slop): superficies vs acentos, muted legible, focus visible, night real.
- Capa de IA **en progreso**: skills, validator, catálogo `asJson`/`asToon`. Medida contra Tailwind y CSS en el benchmark.

### Qué no somos
- No “Tailwind en español”.
- No “el framework más fácil para IA” (hoy no lo es; ver benchmark).
- No librería de prompts sueltos.
- No pedimos memorizar 2000 clases como propuesta de valor principal.

### Tailwind y CSS puro
No son el enemigo: son la **referencia** contra la que nos medimos. Hoy un agente construye más barato con ellos porque ya los conoce de memoria. Lo decimos y lo publicamos.

---

## 4. Propuesta de valor (claims usables)

### Hoy (demostrable en repo)
1. **Probado en producción** — lo usamos para construir muchos sitios reales.
2. **Markup legible** — clases que se leen en un PR.
3. **Anti-slop por defecto** — flex start, btn sin margen mágico, surfaces semánticas, muted correcto.
4. **Night mode real** — `.night` + tokens; no “pintar todo de gris”.
5. **Forms modernos** — `:user-invalid` / `:user-valid`, errores después de interactuar.
6. **Lab** — recipes Modern Web Guidance → clases Lagunite (`v3/lab/`, `/lab` en Astro).
7. **Capas de producto** — de botón a dashboard shell, documentadas.

### En progreso (decirlo así)
8. **Construir con IA** — skills, UI Validator, `npm run ai:sync`. Funciona, pero hoy cuesta más tokens que Tailwind/CSS.
9. **Benchmark público** — mismas pantallas, tres stacks, en cada release.

### Exploración (no vender)
10. JSON → UI / compiler / CLI / MCP — en pausa, no es parte del producto.

**Regla de copy:** ver [`story/README.md` § Reglas de copy](./story/README.md). Nada de “AI-first”, “AI-ready” ni “moat” hasta que el benchmark lo respalde.

---

## 5. Estructura sugerida de landing (1 viewport = 1 job)

Usar solo clases Lagunite en el HTML; GAPs explícitos.

| # | Sección | Job | Contenido mínimo |
| --- | --- | --- | --- |
| 0 | **Nav** | Orientar | Logo Lagunite, Docs, Lab, GitHub, CTA |
| 1 | **Hero** | Marca + promesa | Brand hero-level · 1 headline · 1 sub · 1 CTA group · visual dominante (producto/Lab, no collage) |
| 2 | **Origen** | Credibilidad | Probado en producción: sitios construidos con Lagunite |
| 3 | **Qué trae** | Anclar | Clases legibles, tokens, capas, night, anti-slop |
| 4 | **Lab** | Prueba | Recipes reales, “View source” legible |
| 5 | **Lagunite + IA** | Honestidad | “Todavía no gana; lo medimos” + último resultado del benchmark |
| 6 | **CTA final** | Conversión | `npm i` · ver Lab · ver benchmark |

### Anti-patrones de layout (landing)
- No dashboard en el primer viewport.
- No cards en el hero.
- No full-bleed purple / glow / “AI slop”.
- Brand test: sin nav, ¿sigue siendo Lagunite?

Detalle visual: user rules de frontend + `ai/skills/anti-slop.md` + `ai/skills/compose.md`.

---

## 6. Mensajes por bloque (copy listo para pegar)

### Hero (dev/design)
- **Eyebrow:** Design system CSS · probado en producción  
- **Headline:** Lagunite  
- **Sub:** CSS legible que usamos para construir muchos sitios. Ahora aprendiendo a construirlos con IA — y contándolo en público.  
- **CTA primary:** Explorar el Lab  
- **CTA secondary:** Ver benchmark  

### Origen
- **Title:** Nació construyendo sitios reales  
- **Body:** Lagunite fue nuestra herramienta para entregar rápido y mantener sin dolor: clases que se leen como lo que hacen, tokens compartidos y modo noche real.  

### Lagunite + IA
- **Title:** Lagunite + IA: en progreso  
- **Body:** Hoy un agente construye más barato con Tailwind o CSS puro que con Lagunite. No lo escondemos: lo medimos. Cada release de skills y del core se evalúa contra el mismo set de pantallas.  
- **Link:** Ver resultados  

### Proof bullets (3–5)
- Sitios construidos con Lagunite (pendiente: lista verificable)  
- Lab: forms, dialogs, scroll, motion… mapeados a Lagunite  
- `.night`, surfaces, forms post-interacción  
- Benchmark publicado contra Tailwind y CSS  

### CTA final
- **Title:** Probalo en una pantalla.  
- **Primary:** `npm install lagunite`  
- **Secondary:** Ver `/lab` · Ver benchmark  

---

## 7. Prueba / activos (para sección “No partimos de cero”)

| Activo | Dónde |
| --- | --- |
| CSS v2.1 | `dist/lagunite.css` · [`FEATURES.md`](./FEATURES.md) |
| Lab recipes | [`v3/lab/`](./v3/lab/) · Astro [`web/`](./web/) → `/lab` |
| Narrativa | [`story/`](./story/) |
| Benchmark IA | [`story/BENCHMARK.md`](./story/BENCHMARK.md) |
| Agent skills (en progreso) | [`ai/`](./ai/) · [`AGENTS.md`](./AGENTS.md) |
| Catálogo machine-readable | `docs/asJson`, `docs/asToon` |
| Soporte browsers | [`SUPPORT.md`](./SUPPORT.md) |
| Gate CSS / release | [`ToDo-prod.md`](./ToDo-prod.md) · [`REVISION-v2.2.md`](./REVISION-v2.2.md) |

---

## 8. FAQ corta (landing)

**¿Lagunite sirve para construir con IA?**  
Se puede, pero hoy cuesta más tokens que Tailwind o CSS puro. Lo publicamos en el benchmark y trabajamos para reducir esa diferencia.

**¿Entonces por qué usarlo?**  
Si tu equipo escribe y revisa su markup, Lagunite da clases legibles, tokens y criterio de diseño listos. Es lo que lo hizo útil desde el principio.

**¿Es otro Tailwind?**  
Mismo tipo de CSS utility-first, con nombres descriptivos y un design system por capas. Tailwind es nuestra referencia de comparación.

**¿Sirve en producción?**  
Sí: es de donde viene. v2.1 es el runtime actual.

**¿Y el compiler JSON → HTML?**  
Exploración a futuro, en pausa. No es parte del producto.

**¿Print / IE?**  
No. Ver `SUPPORT.md`.

---

## 9. CTAs y URLs (cuando el sitio esté listo)

| Intent | Destino sugerido |
| --- | --- |
| Probar patrones | `/lab` (Astro) o `v3/lab/index.html` |
| Docs de capas | `/docs/…` |
| Instalar | npm · snippet en README |
| Lagunite + IA | Página con resultados de `story/BENCHMARK.md` |

---

## 10. Checklist antes de publicar la landing

- [ ] Hero pasa brand test (Lagunite dominante)
- [ ] Claims “hoy” vs “en progreso” vs “exploración” separados
- [ ] Ningún claim de IA sin link al benchmark
- [ ] Solo clases Lagunite (o `<!-- GAP -->`)
- [ ] Night toggle opcional pero coherente
- [ ] Links Lab / docs / npm vivos
- [ ] Sin purple-glow / cards en hero / dashboard en fold
- [ ] ES o EN consistente; sin tono “startup genérico AI”

---

## 11. Relación entre docs

```text
story/README.md / STORY_EN.md → narrativa canónica (manda)
story/BENCHMARK.md            → prueba pública IA
README.md / README_ES.md      → usuarios técnicos (install, scripts)
README-BUSINESS.md (este)     → brief landing aplicado
FEATURES.md / SUPPORT.md      → prueba tangible
LANDING-AI-FIRST-COPY.md      → archivado: visión interna, no pitch
FUTURE-AI-FIRST.md            → archivado: norte técnico interno
ToDo-ai-first.md              → en pausa
```
