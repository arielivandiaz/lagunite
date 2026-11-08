# Benchmark — Lagunite vs Tailwind vs CSS (con agentes de IA)

> **Por qué existe:** es la prueba del acto 3 de la historia ([`README.md`](./README.md)). Sin esto, “seguimos trabajando” es solo una frase.  
> **Fecha:** 2026-11-01 · **Estado:** metodología definida, sin corridas todavía

---

## Pregunta

> ¿Cuánto le cuesta a un agente de IA construir la misma pantalla, con la misma calidad, usando Lagunite, Tailwind o CSS puro?

---

## Variantes

| ID | Stack | Contexto que recibe el agente |
| --- | --- | --- |
| **L** | Lagunite | `AGENTS.md` + skills según el árbol (`route` → `compose` → 1 skill de capa como máximo) |
| **T** | Tailwind (CDN o build) | Ninguno extra (conocimiento base del modelo) |
| **C** | CSS puro | Ninguno extra; un `<style>` o archivo `.css` propio |

Mismo modelo, mismo prompt de tarea, misma fecha, sesión nueva por corrida.

---

## Set de pantallas (v1)

Elegidas para cubrir tipos distintos. Todas salen del Lab o de POCs existentes.

| # | Pantalla | Por qué |
| --- | --- | --- |
| 1 | Landing simple (hero, features, footer) | Contenido / marketing |
| 2 | Formulario de sign-up con validación | Forms, estados de error, a11y |
| 3 | Dashboard (sidebar, stat cards, tabla) | App shell |
| 4 | Tool full-viewport (`md-drop-upload`: editor + preview) | Layout difícil: el caso que ya falló |
| 5 | Pantalla con night mode toggle | Theming |

---

## Métricas

| Métrica | Cómo se mide |
| --- | --- |
| **Tokens de entrada** | Total consumido (incluye skills leídas) |
| **Tokens de salida** | Total generado |
| **Iteraciones** | Prompts de corrección hasta cumplir la checklist |
| **Errores** | Clases inventadas, layout roto, fallas de a11y/contraste (checklist abajo) |
| **Tiempo** | Reloj de punta a punta |
| **Tamaño** | Líneas de HTML/CSS final |
| **Calidad visual** | Revisión humana 1–5 en 320 / 640 / 1024 / 1440 px |

Métrica resumen: **tokens totales hasta “aprobado”**.

---

## Checklist de “aprobado” (igual para las tres)

- [ ] Layout correcto en 320 / 640 / 1024 / 1440 px
- [ ] Sin clases inexistentes (L: contra el catálogo; T: contra Tailwind)
- [ ] Labels en inputs, focus visible, headings en orden, icon-only con `aria-label`
- [ ] Contraste texto/fondo legible (light y night si aplica)
- [ ] Sin anti-slop evidente: gradientes violetas, stats falsas, emojis como íconos, CTA gemelos full-width

---

## Protocolo

1. Escribir el prompt de cada pantalla una sola vez (`story/benchmark/prompts/NN-nombre.md`).
2. Correr L, T y C en sesiones nuevas. Registrar métricas en `story/benchmark/results/AAAA-MM-DD.md`.
3. Si no queda aprobado, dar correcciones mínimas y contar iteraciones. Tope: 5 iteraciones.
4. Guardar el HTML final de cada variante en `story/benchmark/output/`.
5. Repetir en cada release de skills o del core para ver la tendencia.

---

## Cómo se publica

- Tabla por pantalla con las tres variantes y la métrica resumen.
- Un párrafo de lectura honesta: dónde perdió Lagunite y por qué.
- Qué cambiamos en skills/core a partir de eso.
- Mismo formato en el Lab como post.

---

## Plantilla de resultados

```md
## Corrida AAAA-MM-DD · modelo: <id> · Lagunite <versión>

| Pantalla | Variante | Tokens in | Tokens out | Iter. | Errores | Tiempo | Calidad |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 1 Landing | L | | | | | | |
| 1 Landing | T | | | | | | |
| 1 Landing | C | | | | | | |

**Lectura:** …
**Acciones:** …
```
