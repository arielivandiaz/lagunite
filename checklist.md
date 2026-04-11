# Checklist Lagunite

Fecha de revisión tabla CSS: 2026-03-08 · Última actualización sección IA: 2026-04-11

---

## 1. Tabla de archivos CSS (`src/css`)

Orden por subcarpeta. Columnas: revisado · Ids · web · correcciones · cambios · upgrades · readyToProd

| Archivo | revisado | Ids | web | correcciones | cambios | upgrades | readyToProd |
|---|---:|---:|---:|---:|---:|---:|---:|
| 00-config/01-pallete.css |  |  |  |  |  |  |  |
| 00-config/02-typography.css |  |  |  |  |  |  |  |
| 00-config/03-theme.css |  |  |  |  |  |  |  |
| 00-config/04-measures.css |  |  |  |  |  |  |  |
| 00-config/05-base.css |  |  |  |  |  |  |  |
| 00-config/CONFIG.md |  |  |  |  |  |  |  |

| 01-text/01-fonts.css |  |  |  |  |  |  |  |
| 01-text/02-typography.css |  |  |  |  |  |  |  |
| 01-text/TEXT.md |  |  |  |  |  |  |  |

| 02-colors/01-background.css |  |  |  |  |  |  |  |
| 02-colors/02-text.css |  |  |  |  |  |  |  |
| 02-colors/03-border.css |  |  |  |  |  |  |  |
| 02-colors/COLORS.md |  |  |  |  |  |  |  |

| 03-layout/01-flex.css |  |  |  |  |  |  |  |
| 03-layout/02-grid.css |  |  |  |  |  |  |  |
| 03-layout/03-position.css |  |  |  |  |  |  |  |
| 03-layout/04-margin.css |  |  |  |  |  |  |  |
| 03-layout/05-padding.css |  |  |  |  |  |  |  |
| 03-layout/06-containers.css |  |  |  |  |  |  |  |
| 03-layout/07-overflow.css |  |  |  |  |  |  |  |
| 03-layout/08-size.css |  |  |  |  |  |  |  |
| 03-layout/09-width.css |  |  |  |  |  |  |  |
| 03-layout/10-height.css |  |  |  |  |  |  |  |

| 04-decorators/01-effects.css |  |  |  |  |  |  |  |
| 04-decorators/02-shadows.css |  |  |  |  |  |  |  |
| 04-decorators/03-opacity.css |  |  |  |  |  |  |  |
| 04-decorators/04-border.css |  |  |  |  |  |  |  |
| 04-decorators/05-transforms.css |  |  |  |  |  |  |  |
| 04-decorators/06-transitions.css |  |  |  |  |  |  |  |
| 04-decorators/07-animations.css |  |  |  |  |  |  |  |
| 04-decorators/08-filters.css |  |  |  |  |  |  |  |
| 04-decorators/DECORATORS.md |  |  |  |  |  |  |  |

| 05-atoms/01-buttons.css |  |  |  |  |  |  |  |
| 05-atoms/02-inputs.css |  |  |  |  |  |  |  |
| 05-atoms/03-table.css |  |  |  |  |  |  |  |
| 05-atoms/04-lists.css |  |  |  |  |  |  |  |
| 05-atoms/05-figures.css |  |  |  |  |  |  |  |
| 05-atoms/06-badges.css |  |  |  |  |  |  |  |
| 05-atoms/07-avatars.css |  |  |  |  |  |  |  |
| 05-atoms/ATOMS-CHEATSHEET.md |  |  |  |  |  |  |  |

| 06-molecules/01-form-groups.css |  |  |  |  |  |  |  |
| 06-molecules/02-alerts.css |  |  |  |  |  |  |  |
| 06-molecules/03-dropdown.css |  |  |  |  |  |  |  |
| 06-molecules/04-tooltip.css |  |  |  |  |  |  |  |
| 06-molecules/05-breadcrumb.css |  |  |  |  |  |  |  |

| 07-compounds/01-cards.css |  |  |  |  |  |  |  |
| 07-compounds/02-modals.css |  |  |  |  |  |  |  |

| 08-organisms/01-navbar.css |  |  |  |  |  |  |  |
| 08-organisms/02-sidebar.css |  |  |  |  |  |  |  |
| 08-organisms/03-footer.css |  |  |  |  |  |  |  |

| 10-misc/01-display.css |  |  |  |  |  |  |  |
| 10-misc/02-cursor.css |  |  |  |  |  |  |  |
| 10-misc/03-pseudo.css |  |  |  |  |  |  |  |
| 10-misc/MISC-CHEATSHEET.md |  |  |  |  |  |  |  |

---

## 2. Checklist IA / prompts (menos correcciones al generar UI)

Aprendizajes del demo **todo** y del framework. Marcar al adoptar en el flujo de trabajo.

| Hecho | Acción |
|:---:|---|
| ☐ | **Regla de proyecto** (p. ej. `.cursor/rules`): “Lagunite v2; leer skill o `docs/PROMPT_GUIDE.md` antes de inventar clases; orden base → `x` → `d`; layout antes que decoración”. |
| ☐ | **Prompt fijo** al pedir HTML: citar `lagunite-validate` + capa adecuada (tokens → typo/colors → spacing → flex/grid → decorators → atoms → …). |
| ☐ | **Flex/grid:** recordar que `.row` / `.col` centran por defecto; para alinear a la izquierda usar `jc-fs`, `ai-fs` (o `ai-stretch`) donde aplique. |
| ☐ | **Modo `.night`:** probar siempre; el texto debe usar `--color-text-base` / `.color-text` o herencia coherente; evitar `.color-gray-*` sueltos para cuerpo (no siguen el tema). |
| ☐ | **Superficies blancas:** `.bg-white` fija tinta por defecto; combinar con `.color-*` según skills; badges outline usan `currentColor` en borde. |
| ☐ | **Documentación generada:** tras cambios en CSS ejecutar `npm run docs:generate` (no editar a mano `docs/asJson` ni `docs/asToon`). Opcional: `npm run docs` si usás merge. |
| ☐ | **Skills del repo** (`.cursor/skills/`): `lagunite-tokens`, `typography`, `colors`, `spacing`, `flex`, `grid`, `containers`, `decorators`, `misc`, `atoms`, `molecules`, `compounds`, `organisms`, `patterns`, `validate`. No hace falta más skill “por archivo CSS”; sí conviene **regla** que obligue a abrirlas. |
| ☐ | **Plantilla:** `lagunite-patterns` como punto de partida para páginas nuevas; luego ajustar. |

---

## 3. Skills Cursor vs otros IDE

| Entorno | Uso de estas skills |
|---|-----|
| **Cursor** | Carpeta **`.cursor/skills/*/SKILL.md`**: el producto puede sugerirlas según `description` del frontmatter YAML. Mantenerlas en el repo para que el equipo las herede al clonar. |
| **Otros IDE** (VS Code, WebStorm, Zed, etc.) | **No hay integración nativa** del mismo formato “Cursor Skills”. Equivalentes: (1) copiar el contenido de `SKILL.md` a **`docs/`** o **`AGENTS.md`** / **`.github/copilot-instructions.md`**; (2) pegar en el prompt el bloque de **`docs/PROMPT_GUIDE.md`**; (3) usar **snippets** o **User rules** del asistente que apunte a `PROMPT_GUIDE` + cheatsheets en `src/css/**`. |

Los archivos `SKILL.md` son Markdown legible por humanos y por cualquier LLM si los **adjuntás o @mencionás** en el chat; la ventaja de Cursor es la detección automática por descripción.
