---
title: Cómo montar un post con Lagunite
date: 2026-09-21
description: Ejemplo de entrada de blog generada desde markdown.
lang: es
lead: El shell HTML es fijo; solo el cuerpo sale del .md.
---

Este párrafo vive en el cuerpo de la entrada. El título y la fecha salen del frontmatter (o del primer `#` si no hay `title`).

## Idea

Una plantilla única (`blog-template.html`) define nav, article prose, footer y night toggle. El markdown solo aporta el contenido de la entrada.

- Tipografía y listas con clases Lagunite
- Citas como alertas
- Directivas opcionales para cards

> Este bloque se vuelve `.alert.alert-info`.

:::alert success
Listo para `node convert-to-html.mjs posts/hello.md`.
:::

## Siguiente

Podés apuntar `--css` al `dist/lagunite.css` de un proyecto consumidor, o dejar el default relativo a `src/lagunite.css` del repo.
