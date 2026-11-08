# MD → Lagunite

Corta demo del conversor: markdown de entrada, HTML Lagunite de salida — **solo JS**, sin dependencias.

## Qué hace

- Headings, párrafos, listas, links, énfasis
- Citas → `.alert`
- Fences de código → superficie `.bg-surface`
- Directivas `:::` → compounds Lagunite

## Lista

1. Abrí este POC con `npm run dev`
2. Editá el markdown a la izquierda
3. Mirá el preview a la derecha

- Solo clases documentadas
- Sin inventar Tailwind names
- Muted con `.text-muted`

> Tip: en un proyecto hermano podrías `fetch` un `.md` de recipes/skilllets y montarlo así.

:::card
### Card desde directiva

Cuerpo de card con tipografía Lagunite. Las acciones van abajo.

[Abrir docs](https://example.com) · *énfasis* y `código inline`
:::

:::alert success
Patrón OK: superficies `.card` / `.bg`, no `.bg-1`…`.bg-9` como paneles.
:::

```lagunite
<button type="button" class="btn">Primary CTA</button>
<button type="button" class="btn alt">Alt</button>
```

---

Meta: `pocs/md-to-lagunite` · link CSS `src/lagunite.css`
