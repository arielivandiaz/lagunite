---
applyTo: "**/*.html,src/css/**/*.css,lagunite-web/src/**/*.astro"
---

# Lagunite validate (meta)

## Antes de generar

1. **Elegir la skill correcta** para la capa: tokens → typography/colors → spacing/layout → decorators → atoms → molecules → compounds → organisms → patterns.
2. **No inventar clases.** Si no está en la skill relevante o en `src/css`, indicarlo y sugerir la utilidad documentada más cercana.
3. **Preferir utilidades a `style=""` o px en crudo**, salvo que el framework genuinamente no tenga equivalente (en ese caso, declarar el hueco).

## Higiene de cadenas de clase

1. **Orden:** utilidades base primero, luego **`x*`** (max-width 639px), luego **`d*`** (min-width 640px).
2. **Layout primero:** flex/grid/position → margin/padding/gap → typography/colors → borders/shadows/effects.
3. **Gap en grid/flex:** usar **`.gap-*`** (y `xgap*` / `dgap*`) de las skills flex/grid — **no** nombres legacy eliminados como `g-gap` o `f-gap`.

## Sanidad de capa

| Capa | Skill | Ejemplos |
| --- | --- | --- |
| Atoms | lagunite-atoms | `.btn`, `.input`, tables, lists |
| Molecules | lagunite-molecules | `.form-group`, `.alert`, `.dropdown` |
| Compounds | lagunite-compounds | `.card`, `.modal` |
| Organisms | lagunite-organisms | `.navbar`, `.sidebar`, `.footer` |

No poner markup de organism dentro de un nombre de clase molecule "porque sí"; mantener estructura DOM como en los archivos CSS fuente.

## Después de generar (revisión rápida)

- Escanear abreviaciones desconocidas o estilo Tailwind en proyectos Lagunite.
- Verificar que los prefijos responsive coincidan con la intención (`x` = mobile, `d` = desktop).
- **Background + texto:** muchas utilidades `.bg-*` setean color de texto; no apilar `.color-*` conflictivo sin razón.

## Docs de referencia en este repo

- [docs/PROMPT_GUIDE.md](docs/PROMPT_GUIDE.md) — starters y reglas para asistentes.
- Cheatsheets de layout: [src/css/03-layout/FLEX-CHEATSHEET.md](src/css/03-layout/FLEX-CHEATSHEET.md), [src/css/03-layout/GRID-CHEATSHEET.md](src/css/03-layout/GRID-CHEATSHEET.md), [src/css/03-layout/CONTAINERS-CHEATSHEET.md](src/css/03-layout/CONTAINERS-CHEATSHEET.md), [src/css/03-layout/LAYOUT-SPACING-CHEATSHEET.md](src/css/03-layout/LAYOUT-SPACING-CHEATSHEET.md).
- Otros cheatsheets: [src/css/04-decorators/DECORATORS-CHEATSHEET.md](src/css/04-decorators/DECORATORS-CHEATSHEET.md), [src/css/05-atoms/ATOMS-CHEATSHEET.md](src/css/05-atoms/ATOMS-CHEATSHEET.md), [src/css/10-misc/MISC-CHEATSHEET.md](src/css/10-misc/MISC-CHEATSHEET.md).

## Prompt de una línea reutilizable

"Lagunite v2 only: use skills + `src/css`; base then `x` then `d`; no invented classes; layout utilities before decoration."
