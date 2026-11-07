# Lagunite — Storytelling (canónico)

> **Uso:** fuente única de verdad para cómo contamos Lagunite (README, web, Lab, posts, charlas).  
> **Reemplaza como pitch público a:** [`../LANDING-AI-FIRST-COPY.md`](../LANDING-AI-FIRST-COPY.md) y la sección AI de [`../README-BUSINESS.md`](../README-BUSINESS.md) (ver [`MIGRATION.md`](./MIGRATION.md)).  
> **English:** [`STORY_EN.md`](./STORY_EN.md) · **Prueba pública:** [`BENCHMARK.md`](./BENCHMARK.md)  
> **Fecha:** 2026-11-01 · **Estado:** v1 (borrador aprobable)

---

## Idea central

> **Lagunite está probado en producción con humanos. Con IA todavía no gana, y lo estamos midiendo en público.**

La honestidad no es un descargo: es el diferencial. Casi todos los frameworks dicen “AI-ready” sin mostrar números. Nosotros mostramos dónde estamos.

---

## La historia en tres actos

### 1. Origen — probado en producción
Lagunite nació como el framework con el que construimos muchos sitios web de forma rápida y escalable. Clases que se leen como lo que hacen, tokens compartidos, componentes por capas (átomos → organismos) y modo noche real. Funcionó: nos dejó entregar rápido y mantener sin dolor.

### 2. Presente — lo que todavía no logramos
Con la era de la IA intentamos adaptarlo para que los agentes construyan con Lagunite: skills, validador, catálogo de clases. Todavía no es más eficiente que Tailwind o CSS puro en tokens consumidos vs resultado. La razón es simple: los modelos ya conocen Tailwind y CSS de memoria; a Lagunite lo tienen que aprender en cada tarea.

### 3. Qué hacemos — seguir, con evidencia
Seguimos trabajando: construimos ejemplos reales en el Lab, fortalecemos el framework y medimos en público cuánto cuesta construir la misma pantalla con Lagunite, Tailwind y CSS. Cuando Lagunite gane, se va a ver en los números. Mientras tanto, sigue siendo una gran opción para equipos que escriben y revisan su propio markup.

---

## Versiones por largo

**Una línea**
> CSS legible, probado en producción. Aprendiendo a construir con IA, en público.

**Párrafo (README / about)**
> Lagunite es el framework CSS con el que construimos muchos sitios de forma rápida y escalable: clases descriptivas, tokens y modo noche real. En la era de la IA lo estamos adaptando para agentes, pero todavía no es más eficiente que Tailwind o CSS puro en tokens vs resultado. Seguimos trabajando en eso con ejemplos reales en el Lab, un core más sólido y benchmarks publicados.

**Hero (web)**
- **Eyebrow:** Design system CSS · probado en producción
- **Title:** Lagunite
- **Sub:** CSS legible que usamos para construir muchos sitios. Ahora aprendiendo a construirlos con IA — y contándolo en público.
- **CTA primario:** Ver el Lab · **Secundario:** Ver benchmark

**Bloque IA (web / README)**
- **Title:** Lagunite + IA: en progreso
- **Body:** Hoy un agente construye más barato con Tailwind o CSS puro que con Lagunite. No lo escondemos: lo medimos. Cada release de skills y del core se evalúa contra el mismo set de pantallas.
- **Link:** Ver resultados → [`BENCHMARK.md`](./BENCHMARK.md)

---

## Pilares (qué sí afirmamos)

| Pilar | Afirmación | Evidencia |
| --- | --- | --- |
| **Probado** | Lo usamos para construir muchos sitios reales | Lista de sitios / casos (pendiente: ver § Pendientes) |
| **Legible** | Clases descriptivas que se entienden en un PR | Ejemplos lado a lado en el Lab |
| **Criterio** | Defaults anti-slop: superficies vs acentos, muted legible, focus visible, night real | `ai/skills/anti-slop.md`, demos |
| **Plataforma moderna** | Recipes de Modern Web Guidance construidas con Lagunite | `lab/recipes/` |
| **Honesto con IA** | Medimos tokens vs resultado contra Tailwind y CSS | [`BENCHMARK.md`](./BENCHMARK.md) |

---

## Reglas de copy

### Decir
- “Probado en producción”, “muchos sitios”, “clases legibles”.
- “Todavía no”, “en progreso”, “lo estamos midiendo”.
- Números concretos cuando existan (link al benchmark).

### No decir (hasta que el benchmark lo respalde)
- “AI-first”, “AI-ready”, “diseñado para agentes” como afirmación de hoy.
- “El design system que la IA no puede romper”.
- “Moat vs Tailwind”, “gobernamos la UI que generan los agentes”.
- “Mejor que Tailwind para IA” o cualquier comparación sin números.
- Prometer el compiler JSON → HTML con fecha.

### Tono
- Primera persona plural (“construimos”, “medimos”).
- Sin hype ni superlativos. Sin atacar a Tailwind: es la referencia contra la que nos medimos, no el enemigo.
- Español rioplatense en ES; inglés simple en EN.

---

## Audiencias

| Quién | Qué tiene que oír | CTA |
| --- | --- | --- |
| **Dev / lead frontend** | Clases legibles, probado, Lab con ejemplos copiables | Ver Lab · `npm i lagunite` |
| **Design / DS owner** | Tokens, capas, night, criterio anti-slop | Ver design system |
| **Curioso de IA** | Experimento abierto: cuánto cuesta un framework propio frente a Tailwind | Ver benchmark |
| **Contribuidor** | Hay trabajo concreto: recipes, skills, core | Ver roadmap / issues |

---

## FAQ

**¿Lagunite sirve para construir con IA?**  
Sí se puede, pero hoy cuesta más tokens que Tailwind o CSS puro. Lo publicamos en el benchmark y trabajamos para reducir esa diferencia.

**¿Entonces por qué usarlo?**  
Si tu equipo escribe y revisa su markup, Lagunite da clases legibles, tokens y criterio de diseño listos. Es lo que lo hizo útil desde el principio.

**¿Es otro Tailwind?**  
Es el mismo tipo de CSS utility-first, con nombres descriptivos y un design system por capas. Tailwind es nuestra referencia de comparación.

**¿Qué pasa con el compiler JSON → HTML?**  
Es una exploración a futuro, en pausa. No es parte del producto.

---

## Pendientes para cerrar la historia

- [ ] Lista de sitios construidos con Lagunite (aunque sea 3–5 con permiso de mostrar) → reemplaza “muchos sitios” por algo verificable.
- [ ] Primera corrida del benchmark ([`BENCHMARK.md`](./BENCHMARK.md)) → da el número del acto 2.
- [ ] Aplicar [`MIGRATION.md`](./MIGRATION.md) en README, README_ES, README-BUSINESS y `web/`.
