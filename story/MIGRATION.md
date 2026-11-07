# Migración de docs al nuevo storytelling

> **Qué es:** relevamiento de las afirmaciones actuales que contradicen la historia ([`README.md`](./README.md)) y qué hacer con cada una.  
> **Fecha:** 2026-11-01 · **Estado:** pendiente de aplicar · Las líneas son de esa fecha y pueden moverse.

---

## Prioridad 1 — público (README / web)

| Archivo | Hoy dice | Cambiar por |
| --- | --- | --- |
| [`../README.md:8`](../README.md) | “…and for **AI agents** that compose UI from skills instead of inventing Tailwind-ish class soup.” | Párrafo EN de [`STORY_EN.md`](./STORY_EN.md) (§ Paragraph) |
| [`../README.md:77-93`](../README.md) | Sección “AI-first (skills now · compiler later)” | Título “Lagunite + AI: work in progress” + bloque IA de `STORY_EN.md`; mantener la tabla de skills como “para quien quiera probar” |
| [`../README_ES.md:8`](../README_ES.md) | Mismo claim de agentes | Párrafo ES de [`README.md`](./README.md) (§ Párrafo) |
| [`../README_ES.md:77-93`](../README_ES.md) | Sección “AI-first (skills ahora · compiler después)” | “Lagunite + IA: en progreso” + bloque IA |
| `../web/src/pages/index.astro` | Revisar hero y bloques IA | Hero de § Versiones por largo |

## Prioridad 2 — base de negocio

| Archivo | Hoy dice | Acción |
| --- | --- | --- |
| [`../README-BUSINESS.md:14-18`](../README-BUSINESS.md) | One-liners “contrato que la IA puede respetar”, “gobierna la UI que generan los agentes” | Reemplazar tabla por one-liners de `story/README.md` |
| [`../README-BUSINESS.md:30`](../README-BUSINESS.md) | Audiencia CTO: “Moat vs Tailwind” | Reemplazar por audiencias de `story/README.md` |
| [`../README-BUSINESS.md:42`](../README-BUSINESS.md) | “Capa **AI-ready**” | “Capa de IA en progreso (skills, validator), medida en el benchmark” |
| [`../README-BUSINESS.md:55-57`](../README-BUSINESS.md) | Tabla competitiva “Moat = runtime + docs + skills” | Quitar; Tailwind pasa a ser baseline del benchmark |
| [`../README-BUSINESS.md:69,78`](../README-BUSINESS.md) | “Agents first-class”, regla “vender ‘diseñado para agentes’” | Reemplazar por § Reglas de copy |
| [`../README-BUSINESS.md:111-122`](../README-BUSINESS.md) | Hero “Design system CSS · AI-ready” | Hero nuevo |
| [`../README-BUSINESS.md:155-162`](../README-BUSINESS.md) | FAQ | FAQ de `story/README.md` |

## Prioridad 3 — archivar como visión interna

| Archivo | Acción |
| --- | --- |
| [`../LANDING-AI-FIRST-COPY.md`](../LANDING-AI-FIRST-COPY.md) | Agregar al inicio: “**Archivado — visión interna, no es pitch público.** Ver `story/`.” Mover a `old/` o `ai/vision/` |
| [`../FUTURE-AI-FIRST.md`](../FUTURE-AI-FIRST.md) | Mismo banner; sigue siendo válido como norte técnico |
| [`../ToDo-ai-first.md`](../ToDo-ai-first.md) | Banner “en pausa”; link a `story/BENCHMARK.md` como gate previo |

## Sin cambios

- [`../README-PROMPTS.md`](../README-PROMPTS.md) y [`../ai/PROMPTING.md`](../ai/PROMPTING.md): son guías de uso, no pitch.
- [`../AGENTS.md`](../AGENTS.md): instrucciones operativas para agentes; no hace afirmaciones de mercado.

---

## Checklist

- [x] Prioridad 1 aplicada (README, README_ES). `web/src/pages/index.astro` es un índice de páginas sin pitch: sin cambios
- [x] Prioridad 2 aplicada (README-BUSINESS reescrito)
- [x] Prioridad 3: banners agregados. **No se movieron** los archivos para no romper links; mover cuando se limpie la raíz
- [x] Link a `story/` desde README y README_ES
- [x] Revisión final (2026-11-01): `grep` solo encuentra nombres de archivo y la propia regla de copy
