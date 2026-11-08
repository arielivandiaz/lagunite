# Cómo pedirle UI a Lagunite (prompts simples)

> Guía rápida para **vos**: cómo hablarle a Cursor, Copilot o Claude y obtener buen HTML Lagunite.  
> Versión técnica (agentes / skills): [`ai/PROMPTING.md`](./ai/PROMPTING.md)

---

## La idea en una frase

Decí **qué querés**, **dónde**, y **qué no hacer**.  
No digas “usá todas las skills”.

---

## Receta de 4 líneas

1. **Qué hacer** — crear, arreglar o revisar  
2. **Dónde** — el archivo (`pocs/mi-pantalla.html`)  
3. **Qué es** — login, landing, herramienta a pantalla completa, etc.  
4. **Límites** — solo Lagunite · sin inventar clases · (opcional) sin browser / sin auditoría

Pegá esto y completá los corchetes:

```text
[Creá / Arreglá / Revisá] [archivo o “un POC nuevo”].

Qué es: [login | landing | formulario | herramienta full-screen | …].
Debe: [1 o 2 cosas que tiene que hacer el usuario].
Solo clases Lagunite. No inventes CSS nuevo.
[Opcional:] Rápido: compose only, sin browser ni Validator.
```

---

## Ejemplos listos para copiar

### Crear una pantalla

```text
Creá pocs/login.html: pantalla de login con email, password y botón Entrar.
Layout tipo formulario (no dashboard). Solo Lagunite.
Rápido: sin browser ni auditoría.
```

### Crear una herramienta a pantalla completa

```text
Creá pocs/md-drop-upload.html: herramienta full-viewport.
Puedo arrastrar un .md, elegir archivo o pegar texto, y ver preview.
Que ocupe toda la pantalla (no un form chiquito a la izquierda).
Solo Lagunite. Rápido: sin browser ni Validator.
```

### Arreglar algo que se ve mal

```text
En pocs/md-drop-upload.html todo queda pegado a la izquierda / no usa el alto.
Es una herramienta full-screen: arreglá solo el layout.
No reescribas el JS. Rápido.
```

### Pedir una revisión de calidad

```text
Auditar pocs/md-drop-upload.html con el UI Validator de Lagunite.
Decime qué falla y corregí lo seguro en el HTML.
```

---

## Frases que ayudan

| Si querés… | Decí algo como… |
| --- | --- |
| Que vaya al grano | `Rápido: compose only, sin browser ni Validator` |
| Pantalla completa (editor, tool) | `herramienta full-viewport` / `que ocupe toda la pantalla` |
| Formulario / settings | `página de formulario` / `stack de settings` |
| Solo clases del framework | `solo Lagunite, sin inventar clases` |
| Revisar calidad | `auditar` / `correr el UI Validator` |
| No tocar lógica | `no reescribas el JS` |

---

## Evitá esto

| Mejor no | Por qué |
| --- | --- |
| “Usá todas las skills de `ai/` y `.cursor`” | Confunde al agente y tarda mucho |
| Pedir crear + auditar + rediseñar + docs en un solo mensaje | Un pedido = un resultado |
| Adjuntar toda la carpeta `ai/skills` | Sobrecarga; alcanza con el archivo que estás editando |
| “Hacelo lindo como Tailwind / como un template AI” | Lagunite tiene sus propias clases y criterios |

---

## Mini checklist antes de enviar

- [ ] ¿Dije crear, arreglar o revisar? (una sola)  
- [ ] ¿Di el archivo o el nombre del POC?  
- [ ] ¿Di qué tipo de pantalla es?  
- [ ] ¿Pedí solo Lagunite?  
- [ ] Si quiero velocidad: ¿puse “rápido / sin browser”?  

---

## Más info

| Doc | Para quién |
| --- | --- |
| Este archivo | Vos, día a día |
| [`ai/PROMPTING.md`](./ai/PROMPTING.md) | Detalle + templates avanzados |
| [`AGENTS.md`](./AGENTS.md) | Reglas que ya conoce el agente en este repo |
| [`README.md`](./README.md) / [`README_ES.md`](./README_ES.md) | Instalar y usar Lagunite |
