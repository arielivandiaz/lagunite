# Lagunite Lab — Roadmap de adopción (POC → laboratorio)

> **Objetivo:** vender Lagunite a usuarios nuevos con **prueba de que se puede construir cosas reales**, no solo con un cheatsheet.  
> **Resultado final:** un laboratorio donde se crean webs y tools, explicadas en formato blog.  
> **Fecha:** 2026-09-17 · **Estado:** propuesta (aún no implementado)

**Relacionado:** [`demos/`](./demos/) (QA canónica de release) · [`FEATURES.md`](./FEATURES.md) · [`ToDo-prod.md`](./ToDo-prod.md) · `lagunite-web/` (sitio marketing, repo aparte)

---

## Definición corta

**Lagunite Lab** = sitio donde cada “experimento” es:

1. Una **web o tool usable** (no maqueta muerta)
2. Un **post de blog** que cuenta el porqué, las clases clave y las trampas
3. Un **“View source / Open in…”** que demuestre que el HTML es legible

**Objetivo de adopción:** el visitante piensa *“yo también podría hacer esto en una tarde”*.

---

## Principio de venta

| Mensaje | Experimento que lo prueba |
| --- | --- |
| Clases legibles, no jeroglíficos | Landing + “same UI in Tailwind vs Lagunite” (side-by-side) |
| No se ve a AI-slop por defecto | Dashboard / form con anti-slop checklist visible |
| Night de verdad | Misma pantalla light/night sin reescribir |
| Sirve para producto, no solo marketing | Tool interactiva (calculadora, checklist, habit tracker, invoice…) |
| AI-friendly | Un post: “prompt → HTML Lagunite validado” |

---

## Separación de responsabilidades

| Carpeta / producto | Rol |
| --- | --- |
| `demos/` | QA y proof de release (canónico, estable) |
| `pocs/` / `poc-*.html` | Exploración interna; materia prima para el Lab |
| `lab/` (propuesto) | Marketing + aprendizaje: webs/tools + blog |
| `lagunite-web/` | Sitio público (repo aparte); puede enlazar al Lab |

**Regla:** no mezclar Lab con demos canónicos. Demos = “el framework está listo”. Lab = “vos podés construir producto con él”.

---

## Roadmap en 4 fases

### Fase 0 — Definir el Lab (1–2 días)

**Entregable:** brief + estructura de carpetas + 1 página hub.

- Nombre de carpeta: `lab/` (recomendado en este repo; el marketing site solo enlaza)
- Plantilla de experimento:
  - `lab/experiments/<slug>/index.html` — la web/tool
  - `lab/posts/<slug>.md` (o HTML) — el blog
  - Metadata: tiempo estimado, capas usadas, night?, JS?
- Criterios de “shippable”:
  - solo clases reales (o `<!-- GAP -->`)
  - toggle night
  - mobile ok
  - 1 CTA “Adoptar / Copiar snippet / npm”

**DoD:** hub con 0 experimentos pero layout + plantilla de post listos.

---

### Fase 1 — MVP de persuasión (≈ 1 semana) — *el POC real*

**3 piezas, no 20.** Calidad > cantidad.

| # | Experimento | Por qué vende |
| --- | --- | --- |
| **A** | **Landing de producto ficticio** (reusar/pulir `demos/01` o un POC Crediship) | Primera impresión “esto se ve pro” |
| **B** | **App shell: dashboard + forms** (ideas de `demos/02` + `03`) | “Sirve para SaaS” |
| **C** | **Una tool de verdad** (habit tracker, invoice UI, schedule tipo Kineticist…) | Interactividad = credibilidad |

Cada una con post corto (~600–900 palabras):

- Problema
- Screenshot / live embed
- 8–12 clases “héroe”
- Decisiones anti-slop (qué *no* hicimos)
- Snippet mínimo copy-paste

**DoD:** Lab vivo con 3 experimentos + 3 posts + hub. Alguien externo entiende Lagunite en ~10 minutos.

---

### Fase 2 — Laboratorio editorial (2–3 semanas)

Ampliar a **serie**, no catálogo infinito.

Cola sugerida (priorizada):

1. Auth mobile flow (`pocs/mobile/*`) → “onboarding sin inventar átomos”
2. Night deep-dive → post técnico de contraste
3. Tailwind → Lagunite migration (skill existente) → “antes/después”
4. Components gallery narrada (`demos/04`) → “recetario, no Storybook frío”
5. “AI built this screen” → compose + UI validator como diferenciador

**Ritmo:** 1 experimento + 1 post / semana.

---

### Fase 3 — Adopción (cuando el Lab ya convence)

Fuera del POC puro; cierra el embudo:

- “Start here” de 15 min (npm + 1 layout)
- Cheatsheet embebido desde el Lab
- CTA claro a npm / GitHub / comunidad
- Opcional: “Submit your lab” (contribuciones)

---

## Arquitectura de carpetas (propuesta)

```
lab/
  index.html                 # hub: grid de experimentos
  about.html                 # qué es el lab + reglas
  experiments/
    landing-nova/
      index.html
    saas-pulse/
      index.html
    tool-habits/
      index.html
  posts/
    001-landing-nova.html    # o .md si más adelante hay build
    002-saas-pulse.html
    003-tool-habits.html
  assets/                    # solo si hace falta (evitar CSS inventado)
```

**Convenciones:**

- CSS: siempre enlace a `../src/lagunite.css` (mismo patrón que `demos/`)
- JS: `../src/lagunite.js` solo cuando el experimento lo necesite
- Blog en HTML Lagunite primero (cero toolchain); Markdown después si duele mantener
- Clases inventadas → marcar `<!-- GAP: … -->` o no shippear

---

## Plantilla de post (secciones fijas)

1. **Título + one-liner** — qué construimos y para quién  
2. **Live** — link al experimento  
3. **Problema** — qué queríamos demostrar  
4. **Resultado** — screenshot o embed  
5. **Clases héroe** — 8–12 utilities / componentes clave  
6. **Anti-slop** — qué evitamos a propósito (cards de más, `bg-1` de panel, etc.)  
7. **Snippet mínimo** — copy-paste que arranca  
8. **Gaps** — lo que el framework aún no cubre  
9. **CTA** — npm / GitHub / siguiente experimento  

---

## Métricas de éxito del POC

- Tiempo hasta “wow” en el hub: **≤ 30 s**
- En cada post: snippet copiable (“¿puedo usar esto ya?”)
- 1 persona externa completa el Start here sin ayuda
- Al menos **1 experimento que no sea landing** (la tool es el ancla de adopción)

---

## Orden de ataque (siguiente paso)

1. Decidir: ¿Lab en este repo (`lab/`) o solo en `lagunite-web`? → **recomendación: `lab/` aquí**
2. Elegir los **3 temas** de Fase 1 (nombres + audiencia)
3. Escribir la plantilla de post (secciones fijas arriba)
4. Montar `lab/index.html` (hub)
5. Promover/reescribir el mejor POC existente como Experimento A
6. Feedback interno → iterar posts **antes** de sumar más demos

---

## Opinión / tesis

Sí al Lab + blog. **No** empezar con 10 webs: el POC persuasivo son **3 piezas + narrativa**.

- `demos/` ya prueban que el framework existe y es estable.  
- El Lab prueba que **vos (y el usuario) podéis construir producto** con él.

---

## Decisiones pendientes

- [ ] Ubicación definitiva: `lab/` en este repo vs sección en `lagunite-web`
- [ ] Temas concretos de los 3 experimentos de Fase 1
- [ ] Formato de posts: HTML Lagunite vs Markdown (+ build)
- [ ] Nombre público del Lab (Lagunite Lab / Playground / Studio…)
- [ ] Relación con release v2.1: ¿Lab post-publish o en paralelo a `REVISION-v2.1.md`?
