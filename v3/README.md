# v3 — herramientas revisadas

Todo lo que está en esta carpeta funciona con Lagunite 3 y usa solo el core (`src/lagunite.css`, `src/lagunite.js`).
Lo que todavía está fuera de `v3/` (`pocs/`, `old/`, …) no fue migrado.

| Carpeta | Qué es | Cómo abrirlo (`npm run dev`) |
| --- | --- | --- |
| [`builder/`](./builder/) | Lagunite Builder: armar landings con bloques y exportar HTML | `/v3/builder/index.html` |
| [`lab/`](./lab/) | 44 recetas de Modern Web Guidance hechas con Lagunite | `/v3/lab/index.html` |
| [`qa/`](./qa/) | Página de QA con todos los componentes en Day, Night y móvil | `/v3/qa/components.html` |
| [`design-system/`](./design-system/) | Tokens y brand book de Lagunite 3 (fuente del artifact de diseño) | — |

## Criterio para entrar a `v3/`

- Usa solo clases que existen en `src/lagunite.css` (sin clases inventadas).
- Sin desbordes horizontales en 375px ni en desktop.
- Se ve bien en Day y en Night.
- Enlaza el CSS del core, no copias ni pieles aparte.
