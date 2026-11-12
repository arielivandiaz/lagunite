# Qué cambió desde Lagunite 2

| Área | Lagunite 2 | Lagunite 3 |
| --- | --- | --- |
| Azul de marca | `#2476ff` | `#2476ff` (sin cambios) |
| Botón principal | Relleno plano azul, texto 4.11:1 | Gradiente con brillo superior, sombra azul, hover que sube y click que hunde; texto 4.75:1 |
| Botón secundario | Contorno azul de 2px | Superficie elevada, contorno neutro de 1px y sombra mínima |
| Nuevas variantes | — | `.btn.soft`, `.btn.glass`, `.btn.on-dark`, `.pill`, `.icon`, flecha animada, `.kbd` |
| Fondo de página | Gris `#eee` | `#f6f7f9` en Day, `#090b10` en Night, con superficies bien separadas |
| Neutros | Grises sin intención | Slate frío con sesgo al azul de marca |
| Bordes | 2px azul por defecto | 1px tenue; azul solo en foco y en `.card-featured` |
| Tipografía | Zen Kaku Gothic + PT Sans, seis familias cargadas | Bricolage Grotesque + Instrument Sans + JetBrains Mono |
| Escala | Utilidades hasta 32px | Display de 44, 56 y 72px con tracking negativo |
| Cards | Planas con borde | Brillo superior, contorno tenue, sombra; variantes hover, featured, glass y sunken |
| Fondos | Gradientes `bgg-*` multicolor | `.bg-mesh`, `.bg-grid`, `.bg-dots`, `.bg-spotlight`, solo en azul |
| Estados | Dos paletas (`color-*` y `chip-*`) | Una sola, con `*-soft` de fondo; `.chip` pasa a `.badge` |
| Contraste | Cinco pares bajo AA | Todos los pares documentados pasan AA en ambos temas |
| Movimiento | Transiciones sueltas | Tres duraciones y dos curvas, respetando `prefers-reduced-motion` |
| Navbar | Barra opaca | Vidrio con blur; variante flotante en cápsula |

## Lo que no cambia

- Los nombres de clase de componentes (`.btn`, `.card`, `.badge`, `.alert`, `.tabs`, `.segmented-control`, `.navbar`, `.footer`, `.empty-state`, `.table`).
- Las utilidades de layout y el orden base → `x*` → `d*`.
- El modelo de Day y Night.

## Pendiente para llevarlo al framework

- Reemplazar `src/css/00-config/` por estos tokens y portar `components/bundle.css` a las capas `05-atoms` … `08-organisms`.
- Componentes de Lagunite 2 sin rediseñar todavía: dropdown, tooltip, breadcrumb, modal, bottom-sheet, sidebar, topbar, stat-cards, skeleton, picker-wheel, list-item.
- Base: quitar el `text-align: center` del `body` y el margen de `header`.
