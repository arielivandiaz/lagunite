Lagunite 3 es la nueva piel de Lagunite: la misma API de clases (`.btn`, `.btn.alt`, `.card`, `.badge`, `.navbar`…), el mismo azul de marca `#2476ff`, y superficies con profundidad, luz y movimiento. Todo valor sale de los tokens; los efectos se construyen con sombras en capas, brillos internos de 1px, vidrio y fondos de malla o grilla, siempre dentro de la familia azul.

## Principios

- **Profundidad con luz.** Cada superficie elevada lleva un brillo superior de 1px (`color-highlight`), un contorno tenue (`color-border`) y una sombra de la escala. Nada es plano, nada grita.
- **El azul guía la mirada.** `color-primary` aparece en la acción principal, el foco, los estados seleccionados y un solo acento por sección (una palabra en `.text-gradient`, un `.card-featured`). El resto es neutro.
- **Movimiento con peso.** Hover sube 1–3px y aumenta la sombra; click hunde con `scale(0.98)`. Duraciones de 120, 180 y 320ms; la curva `--ease-spring` solo en interruptores y flechas. Todo se desactiva con `prefers-reduced-motion`.
- **Un efecto por sección.** Malla, grilla, puntos o vidrio: uno por sección, nunca combinados con más de un fondo.

## Color

- Fondo de página `color-bg`; bandas en `color-surface`; cards, inputs y menús en `color-surface-raised`; rieles y huecos en `color-surface-sunken`.
- Texto `color-text`; secundario `color-text-muted`; placeholders y deshabilitados `color-text-subtle` (no para contenido).
- Marca: `color-primary` (`#2476ff`) para acentos y gradientes. Los botones usan `color-primary-fill` → `color-primary-fill-end` con texto `color-on-primary` (4.75:1). Links y texto azul en `color-primary-text`. Fondos azules suaves en `color-primary-soft`.
- Estados: `color-success`, `color-warning`, `color-danger` como texto e íconos, con su `*-soft` de fondo. Destructivo sólido: `color-danger-fill`.
- Bordes: `color-border` decorativo, `color-border-strong` para contornos de botones secundarios y tablas, `input-border` (3:1) para límites de controles.
- Vidrio: `color-glass` siempre con `blur-md` y contorno; solo sobre fondos con contenido detrás (malla, grilla, imagen).
- Todos los pares de texto documentados pasan WCAG AA en Day y Night.

## Tipografía

- Display: Bricolage Grotesque (familia `display`) para titulares, títulos y precios. Cuerpo: Instrument Sans (familia `sans`). Código: JetBrains Mono.
- Landing: `display-2xl` (72px) para el hero, `display-xl` (56px) para el CTA final, `display-l` (44px) para títulos de sección.
- Interfaz: `title-l`, `title-m`, `title-s` para títulos; `body-l` para bajadas; `body` y `body-s` para texto; `label` en botones y formularios; `caption` en badges; `overline` en mayúsculas sobre los títulos de sección (clase `.overline-label`).
- Los titulares llevan tracking negativo (−0.035em a −0.01em) y `text-wrap: balance`.
- Tres niveles por bloque como máximo: overline, título y bajada.

## Espacio, radios y sombras

- Escala de 4px: `space-1` (4) a `space-32` (128). Secciones con `space-16` en móvil y `space-24` en desktop (`.section`).
- Radios: `radius-md` (10) botones e inputs, `radius-lg` (14) alertas y segmented, `radius-xl` (20) cards, `radius-2xl` (28) paneles de CTA y capturas de producto, `radius-full` píldoras y avatares.
- Sombras: `shadow-xs` controles, `shadow-sm` cards en reposo, `shadow-md` hover, `shadow-lg` vidrio y popovers, `shadow-xl` modales. `shadow-primary` y `shadow-primary-hover` solo bajo elementos azules. `shadow-focus` en todo foco de teclado.
- Bordes de 1px siempre (`border-hairline`). No hay bordes de 2px.

## Fondos y efectos

- `.bg-mesh`: radiales azules suaves. `.bg-grid`: grilla de 48px que se desvanece. `.bg-dots`: puntos de 20px. `.bg-spotlight`: luz desde arriba.
- `.glass`, `.card-glass`, `.btn.glass`, `.navbar`: vidrio con blur.
- `.card-featured`: borde en gradiente azul, una vez por grupo.
- `.text-gradient`: una palabra del titular, nunca una frase entera.

## Contenido

- Español rioplatense: "Empezá gratis", "Probalo 14 días".
- Botones con verbo y resultado. Titulares que nombran el beneficio en menos de ocho palabras.
- Sin emojis, sin estadísticas inventadas, sin gradientes azul-violeta.

## Iconografía

- Íconos de trazo en SVG inline: 24×24, trazo 2px, puntas redondeadas, `currentColor`, `aria-hidden="true"`. Tamaño 18px en botones y alertas, 20px en `.icon-tile`.
- No hay set de íconos ni logo propio todavía: la marca de ejemplo usa `.brand-mark`, un cuadrado con el gradiente primario.

## Uso con el framework

- Las clases conservan los nombres de Lagunite 2, así una página existente cambia de piel al reemplazar el stylesheet.
- Night se activa con `data-theme="dark"` en `<html>`; en el framework equivale a `.night`.
- Fuentes desde Google Fonts (el `@import` va al inicio de `components/bundle.css`).
