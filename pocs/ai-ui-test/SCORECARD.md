# AI UI test — Scorecard

> **Fecha:** 2026-09-14  
> **Carpeta:** `pocs/ai-ui-test/`  
> **Cómo abrir:** `npm run dev` → visitar `/pocs/ai-ui-test/index.html`

## Qué es cada corrida

| | A (baseline) | B (compose) |
| --- | --- | --- |
| Intent | Simular errores típicos de un agente **sin** `compose.md` | Mismas 3 pantallas aplicando `ai/skills/compose.md` |
| No es | Un modelo externo en ciego | Magia — es la skill aplicada a propósito |

Para un test más duro después: pedile a **otra sesión / otro agente** solo el brief + skills index (sin mostrarle los HTML A), y compará con B.

## Briefs

1. Auth / sign-in card  
2. Dashboard: nav + 3 stats + table  
3. Settings: profile form + save/cancel  

## Criterios (1–5)

| # | Criterio |
| --- | --- |
| 1 | Alineación (contenido no “flota” al centro sin querer) |
| 2 | Ritmo de spacing (un gap dominante) |
| 3 | Superficies (`.bg`/`.card` vs `.bg-1..9`) |
| 4 | Jerarquía tipográfica (≤3 niveles) |
| 5 | Contraste / legibilidad |
| 6 | Clases reales Lagunite (sin inventadas) |

**Éxito:** B gana en ≥4 criterios en ≥2 de 3 briefs.

## Tabla (completar mirando el browser)

| Brief | C1 | C2 | C3 | C4 | C5 | C6 | Notas |
| --- | --- | --- | --- | --- | --- | --- | --- |
| 01 Auth A | | | | | | | |
| 01 Auth B | | | | | | | |
| 02 Dash A | | | | | | | |
| 02 Dash B | | | | | | | |
| 03 Set A | | | | | | | |
| 03 Set B | | | | | | | |

## Cómo invocar el UI Validator

En Cursor: agente **Lagunite UI Validator** o skill `lagunite-ui-validator`  
(orquestador: `ai/skills/validate.md` + domain skills).

## Hallazgos ya corregidos (2026-09-14)

- `.color-text-alt` en light = **blanco** → no usar como muted; usar `.card-text`
- Centrado full screen: **`minvh100`**, no `minhp100` (% del padre)
- POCs B incluyen toggle **Night/Day** fijo para probar contraste

## Expectativa rápida (sin mirar)

A suele fallar por: `.row` centrado, `.bg-1/2/7`, `btn-primary` / `btn-ghost`, labels sueltos, gaps mezclados.  
B debería verse como producto usable: `form-group`, `card` regions, `jc-fs`/`jc-fe`, sidebar organism, `stat-card`.

## Archivos tocados para habilitar B en agentes futuros

- `ai/skills/compose.md` **(nuevo)**
- `ai/skills/validate.md`, `flex.md`, `patterns.md`, `SKILLS-INDEX.md`
- `src/css/03-layout/FLEX-CHEATSHEET.md`
- `.cursor/rules/lagunite-ai.mdc`, `CLAUDE.md`
