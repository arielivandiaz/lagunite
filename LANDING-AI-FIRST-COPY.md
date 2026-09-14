# Lagunite AI-First — Copy de landing (pitch a directivos)

> **Uso:** texto listo para landing / one-pager / deck.  
> **Audiencia:** dirección, sponsors, stakeholders de producto/tech.  
> **Tono:** claro, comercial-técnico, orientado a decisión de inversión.  
> **Alineado a:** [`FUTURE-AI-FIRST.md`](./FUTURE-AI-FIRST.md) v0.2 · track [`ToDo-ai-first.md`](./ToDo-ai-first.md)  
> **Actualizado:** 2026-09-14

---

## Meta (SEO / pestaña)

- **Title:** Lagunite AI-First — El design system que la IA no puede romper
- **Description:** Dejá de competir contra Tailwind en la memoria de los desarrolladores. Convertí Lagunite en un runtime compilable: JSON → HTML/CSS validado, mantenible y listo para la era de agentes.

---

## NAV

- Producto
- Por qué ahora
- Beneficios
- Mantenibilidad
- Qué se desbloquea
- Roadmap
- Invertir / Contacto

**CTA nav:** Solicitar brief ejecutivo

---

## HERO

**Eyebrow:** El futuro de Lagunite · AI-first design system

**Brand / producto (héroe):** Lagunite

**Headline:**  
No necesitamos que el mundo aprenda otro framework.  
Necesitamos que la IA construya sobre el nuestro — sin romperlo.

**Subhead:**  
La era en la que un CSS framework vive porque los humanos memorizan clases ya terminó. Tailwind y el CSS “libre” ganan por volumen de entrenamiento. Lagunite sobrevive — y crece — si se convierte en el **contrato estable** entre personas, agentes de IA y el producto visual de la empresa.

**CTA primario:** Ver la tesis de inversión  
**CTA secundario:** Ver qué ya tenemos construido

**Microcopy bajo CTAs:**  
No tiramos el CSS. Lo convertimos en runtime. La inversión se apalanca sobre años de trabajo, no lo reemplaza.

---

## BLOQUE: El problema (por qué el status quo mata el producto)

**Título:** Seguir como “otro utility framework” es la forma más cara de volverse irrelevante

**Cuerpo:**  
Hoy cualquier asistente de código genera Tailwind o CSS en segundos. Pedirle a un equipo que *aprenda* Lagunite es pedir un costo de adopción que el mercado ya no quiere pagar. Cada release que solo agrega más clases refuerza una carrera que no podemos ganar: más vocabulario humano vs. un modelo que ya “sabe” Tailwind.

**Tres dolores para dirección:**

1. **Adopción estancada** — sin red de tutorials ni corpus masivo en modelos, el framework no se elige solo.
2. **ROI de docs decreciente** — cheatsheets excelentes no compiten con “pedile a la IA que lo haga en Tailwind”.
3. **Riesgo de zombie product** — mantenimiento continuo de un activo que nadie nuevo quiere aprender.

**Punchline:**  
El riesgo no es pivotar. El riesgo es seguir invirtiendo en un posicionamiento que el mercado ya abandonó.

---

## BLOQUE: La solución

**Título:** Lagunite AI-First: describí la UI. El sistema la materializa.

**Cuerpo:**  
Redefinimos Lagunite como un **design system compilable y validable**:

1. El autor (humano o IA) describe la interfaz en **JSON / schema** (intención: layout, tono, componente, spacing).
2. Lagunite **valida** contra un catálogo cerrado (sin clases inventadas, sin contrastes rotos).
3. El **compiler** genera HTML + clases Lagunite (o CSS mínimo).
4. El **runtime CSS** existente (`dist/lagunite.css`) renderiza de forma consistente.

**Frase de producto:**  
Dejá de aprender clases. Describí la UI. Lagunite la materializa.

**Lo que NO es:**  
No es “otra librería de prompts”. No es abandonar el CSS. No es un chatbot.  
Es infraestructura de UI para la era de agentes.

**Decisión ya tomada (producto):**  
Norte = Schema/JSON → HTML (con puente de validación de clases). El CSS no se reescribe: se vuelve el motor.

---

## BLOQUE: Por qué es la mejor alternativa para mantenerlo vivo

**Título:** Tres caminos. Solo uno crea categoría nueva.

| Camino | Qué pasa | Resultado probable |
| --- | --- | --- |
| Status quo (utilities + docs) | Competimos con Tailwind en terreno perdido | Producto zombie / adopción flat |
| Achicar y “ser más Bootstrap” | Componentes sin historia AI | Commodity vs. shadcn / MUI |
| **AI-first (JSON → UI + runtime)** | Creamos contrato que la IA necesita | **Producto diferenciable y defendible** |

**Argumento ejecutivo:**  
La IA no elimina los design systems. Los vuelve **más necesarios** — porque sin contrato, los agentes generan UI inconsistente, inaccesible e imposible de mantener a escala. Quien posea el contrato, posee el estándar interno (y eventualmente el de clientes).

---

## BLOQUE: Beneficios técnicos (para CTOs / leads)

**Título:** Beneficios técnicos de la arquitectura propuesta

### 1. Vocabulario cerrado y machine-readable
Catálogo generado desde el CSS (`asJson` / `asToon`). La IA y el compiler hablan el mismo diccionario. Se termina el “alucinar clases”.

### 2. Contrato tipado (schema)
JSON Schema / Zod como API de UI. Breaking changes controlados por versión de schema, no por “alguien cambió un classname en un PR”.

### 3. Compilación determinística
Misma entrada JSON → misma salida HTML/CSS. Reproducible en CI, demos, agentes y humanos.

### 4. Validación en el borde
Rechazo de props inválidas, componentes desconocidos, pairings de contraste peligrosos, layouts fuera de allowlist.

### 5. Separación authoring / runtime
- **Authoring:** intención (JSON).  
- **Runtime:** CSS Lagunite estable.  
Se puede evolucionar el compiler sin reescribir años de tokens y componentes.

### 6. Single source of truth
Tokens, capas (atoms → organisms) y docs dejan de ser tres mundos: el schema se alimenta del catálogo generado desde el CSS.

### 7. Surface area controlada
En lugar de “2000 clases para memorizar”, un set acotado de intents + componentes semánticos. Menos superficie = menos bugs = mejor para modelos.

### 8. CI-friendly
`lagunite validate` / `lagunite compile` en pipeline: fallar el build si la UI generada por un agente no cumple el design system.

### 9. Multi-target (roadmap)
HTML primero; después Astro/React/Vue partials desde el mismo JSON. Un authoring, varios runtimes de framework JS.

### 10. Observabilidad de UI
Logs de compile, diffs de schema, reportes de “cuánto del DS se usa” — métricas que dirección puede leer.

### 11. Theming de verdad
Cambiar tokens / `.night` sin reescribir pantallas: el JSON habla en `tone: primary`, no en hex.

### 12. Accesibilidad como regla, no como checklist PDF
Contraste, focus y estructuras de componentes semánticos en el validator — no solo en un skill markdown.

### 13. MCP / tools para IDEs
`compile_ui`, `validate_ui` como herramientas nativas en Cursor, Claude, Copilot. Lagunite deja de ser “CSS que pegás” y pasa a ser **capability del agente**.

### 14. Menor drift entre docs y código
Si el schema se genera desde el CSS documentado, la documentación deja de mentir.

### 15. Migración gradual
Utilities actuales siguen existiendo. El compiler emite clases Lagunite. Cero big-bang obligatorio para consumidores actuales.

---

## BLOQUE: Ventajas competitivas / de negocio

**Título:** Ventajas que justifican seguir invirtiendo

1. **Categoría propia** — “design system compilable para IA”, no “Tailwind en español”.
2. **Defensa contra commodity** — el valor está en schema + validate + runtime, no en memorizar utilidades.
3. **Apalanca CAPEX ya hecho** — tokens, capas, generador de docs, skills: no partimos de cero.
4. **Historia de venta enterprise** — “nuestros agentes solo pueden emitir UI aprobada por el DS”.
5. **Onboarding cercano a cero** — el usuario describe pantallas; no hace curso de clases.
6. **Velocidad de entrega con guardrails** — más rápido *y* más consistente.
7. **Producto empaquetable** — CLI, schema packs, MCP server, playground.
8. **Docs ES / LATAM** — authoring en el idioma del equipo, sin depender de “ser el Tailwind local”.
9. **Retención de talento** — el equipo trabaja en plataforma, no en un clon tardío de utilities.
10. **Moat creciente** — cada componente + regla de validate encarece el “CSS libre”.
11. **Partnerships con IDEs / AI tools** — skill packs oficiales.
12. **Métricas medibles** — compiles/día, % UI válida, cobertura de componentes.
13. **Upsell natural** — runtime open → compiler/validate → playground → DS enterprise.
14. **Alineación con presupuesto AI** — capa de control del gasto en frontend generado por agentes.
15. **Narrativa de supervivencia creíble** — el único terreno donde un DS pequeño puede ganar.

---

## BLOQUE: Mantenibilidad (argumento clave para no temer el pivot)

**Título:** Más mantenible, no menos — por diseño

**Lead:**  
El miedo habitual es: “¿ahora mantenemos CSS *y* un compiler?”. La arquitectura responde al revés: **el compiler reduce el costo de mantener el sistema a escala**.

### Por qué baja el costo de mantenimiento

1. **Una fuente, muchos artefactos** — CSS documentado → catálogo JSON → schema/allowlist.
2. **API estable hacia afuera** — consumidores hablan JSON; el compiler absorbe renames internos.
3. **Menos superficie pública** — se congelan breakings de utilities; el schema versiona intención.
4. **Validación automática** — menos review de “¿esta clase existe?”.
5. **Skills más cortas** — schema + ejemplos en vez de cheatsheets interminables para la IA.
6. **Regresión visual acotada** — fixtures JSON → HTML golden en CI.
7. **Ownership claro** — DS (tokens/componentes/reglas) vs platform (compiler/CLI/MCP).
8. **Deuda visible** — gaps / props no soportadas = backlog priorizable.
9. **Compat hacia atrás** — HTML Lagunite legacy sigue; el camino nuevo es aditivo.
10. **Menos dependencia de héroes** — el conocimiento vive en el schema.

**Frase para slide:**  
Invertir en AI-first no es sumar un producto paralelo: es **ponerle una API al design system que ya construimos**.

---

## BLOQUE GRANDE: Qué se desbloquea si seguimos invirtiendo

**Título:** Si invertimos ahora, esto es lo que se vuelve posible

### Producto y plataforma
1. CLI oficial — `compile`, `validate`, `init`, `diff`
2. Playground web — JSON in, preview out
3. NPM packs — `@lagunite/css`, `@lagunite/schema`, `@lagunite/compiler`
4. MCP server — Lagunite como tool nativa de agentes
5. Skill packs para Cursor / Claude / Copilot / Windsurf
6. Registry de componentes versionado (atoms → organisms)
7. UI Diff — dos JSON → cambio visual/HTML
8. Bundle mínimo — CSS subset según JSON usado
9. Themes / token packs por marca o cliente
10. Modo enterprise lock — solo componentes allowlisted

### Experiencia de equipos
11. Onboarding en horas, no semanas
12. Designers → JSON (Figma→JSON a futuro)
13. PMs piden pantallas en lenguaje de intención
14. Code review del JSON (intención), no de 40 utilidades por div
15. Menos bike-shedding de naming
16. Pairing humano-IA con validator de por medio
17. Hand-off design→dev con menos pérdida
18. Docs vivas — cada nodo del schema = docs + API + ejemplo

### Calidad, a11y, riesgo
19. WCAG gates en compile
20. Dark mode / night sin reescritura de pantallas
21. Responsive policy en schema (`x` / `d`)
22. Auditorías de consistencia multi-producto
23. Menos UI “copiada” con tokens ajenos
24. Compliance visual / white-label
25. Señales tempranas de deuda (escapes / gaps)

### IA y agentes
26. Agentes que construyen UI dentro del corral del DS
27. Migración Tailwind/HTML legacy → JSON → HTML nuevo
28. Refactors seguros (cambian JSON, recompilan)
29. Generación multi-página con tono visual garantizado
30. Eval harness de LLMs vs schema
31. Prompts cortos, resultados largos
32. Memoria institucional del diseño en el producto, no en chats

### Escala y negocio
33. White-label rápido (tokens + compile)
34. Suites multi-producto con un DS gobernado
35. Time-to-demo menor en preventa
36. Licenciamiento por seats / compiles / MCP
37. Servicios profesionales de schema enterprise
38. Casos de estudio medibles
39. Partnerships “AI + design system controlado”
40. Thought-leadership AI-native DS

### Ingeniería a largo plazo
41. Congelar API de clases como detalle de implementación
42. Evolucionar CSS interno sin drama de adopción
43. Tests golden de UI de primera clase
44. Telemetría de uso real del DS
45. Deprecation civilizada de nodos del schema
46. Multi-renderer sin duplicar el design language
47. Storybook / demos desde fixtures JSON
48. Contrato para microfrontends
49. Export de tokens interoperables
50. Camino a composición de páginas (L3) cuando L1+L2 esté sólido

**Cierre:**  
Esto es el **árbol de valor**. El tronco es schema + validate + compile + runtime. Sin tronco, cada ítem es un proyecto suelto.

---

## BLOQUE: Qué pasa si NO invertimos

**Título:** El costo de no decidir

- Seguimos mejorando un framework cuya propuesta (“aprendé nuestras clases”) se devalúa cada trimestre.
- La IA del mercado mejorará… para Tailwind y CSS genérico, no para nosotros.
- El equipo paga mantenimiento de un activo con techo de adopción bajo.
- La categoría “DS compilable para agentes” la toma otro — posiblemente un wrapper sobre Tailwind.

**Línea dura (usar con cuidado):**  
Mantener Lagunite vivo no es una cuestión de más utilidades. Es una cuestión de **cambiar el producto que estamos vendiendo**.

---

## BLOQUE: Prueba de que no partimos de cero

**Título:** La inversión se apoya en activos reales

Ya existe en el repo:

- Capas de design system (tokens → organisms)
- Documentación machine-readable (`asJson` / `asToon`)
- Skills y reglas para asistentes (Cursor, Claude, Copilot)
- Guía de prompting y validación + contraste
- Runtime CSS buildable (Vite + PostCSS)
- Theming `.night`

**Mensaje a directivos:**  
No pedimos inventar un startup. Pedimos **completar el producto**: dar vuelta el pipeline (de solo CSS→JSON docs a **JSON→UI**) y empaquetarlo. El plan de ejecución está en `ToDo-ai-first.md`.

---

## BLOQUE: Roadmap en una mirada (para slide)

Alineado al track real (`ToDo-ai-first.md`):

| Fase | Nombre | Qué se ve |
| --- | --- | --- |
| **AIF-0** | Decisión | Norte cerrado, frase de producto, scope MVP |
| **AIF-1** | Spike | 1 JSON → HTML (card + button + row) en el browser |
| **AIF-2** | Schema | Contrato L1+L2 tipado (5 componentes) |
| **AIF-3** | CLI | `validate` + `compile` locales |
| **AIF-4** | Fixtures / CI | Golden files; regresiones visibles |
| **AIF-5** | Skills AI | Agentes emiten JSON, no class soup |
| **AIF-6** | Narrativa | README experimental AI-first |
| **AIF-7** | Playground | Demo web (lagunite-web) |
| **AIF-8** | Productización | Packs NPM, MCP, multi-target |

**Pedido de inversión inmediato:** fondear **AIF-0 → AIF-3** (tesis demostrable + CLI). El resto se prioriza con evidencia del spike.

**Paralelo:** el release NPM del CSS (`ToDo-prod`) **no se cancela**; es el runtime. AI-first es la API de authoring.

---

## BLOQUE: Objeciones y respuestas (FAQ ejecutiva)

**“¿Por qué no usamos Tailwind y listo?”**  
Porque Tailwind optimiza generación libre. Nosotros necesitamos **generación gobernada**: marca, a11y, consistencia, versionado.

**“¿No es más barato hacer skills sobre Tailwind?”**  
Skills sin runtime propio no crean activo. Se copian. El moat está en compiler + schema + CSS versionado + validate.

**“¿Y si la IA mejora tanto que no hace falta DS?”**  
Cuanto mejor es la IA, más barato es generar basura visual a escala. Los sistemas serios invierten en **guardrails**.

**“¿Duplicamos mantenimiento?”**  
No si el schema se genera desde el catálogo CSS. El compiler es una capa; la fuente sigue siendo una.

**“¿Qué pasa con usuarios actuales del CSS?”**  
Siguen soportados. El HTML compilado *es* Lagunite. El camino nuevo es aditivo.

**“¿Cuánto hasta ver valor?”**  
El spike (AIF-1) demuestra la tesis en días. El MVP interno (schema + CLI) es de semanas si se prioriza — ver `ToDo-ai-first.md`.

**“¿Bloqueamos el release 2.1 del CSS?”**  
No. Tracks paralelos. CSS estable sigue siendo entregable; AI-first se marca experimental hasta tener CLI usable.

---

## BLOQUE: CTA final

**Título:** Mantener Lagunite vivo es elegir el terreno donde aún podemos ganar

**Cuerpo:**  
El mercado ya no premia “otro set de clases”. Premia sistemas que las máquinas pueden respetar.  
Tenemos la base. Falta fondear la Fase 1 ejecutable (spike → schema → CLI).

**CTA primario:** Aprobar el norte AI-first y fondear AIF-0 → AIF-3  
**CTA secundario:** Deep-dive técnico (30 min) con `FUTURE-AI-FIRST.md` + `ToDo-ai-first.md`

**Cierre:**  
Lagunite no necesita ser más grande.  
Necesita ser **inevitable para cualquier agente que construya UI bajo nuestra marca.**

---

## Variantes cortas (para ads / slides / email)

### Elevator (20 s)
Las IAs ya escriben CSS. Un framework que exige aprender clases muere lento. Lagunite vive si se vuelve el contrato: JSON in, UI válida out, con el CSS que ya construimos como runtime.

### Subject line email
Por qué AI-first es la única vía para que Lagunite no se vuelva legacy

### Tweet / LinkedIn
Dejá de pedirle al mundo que aprenda tus classnames.  
Pedile a la IA que hable tu schema.  
Eso es un design system que sobrevive 2026+.

### One-liner deck
**Lagunite AI-First = design system compilable para humanos y agentes.**

---

## Notas de uso (internas, no publicar)

- Este copy es persuasivo: no reemplaza el doc de decisión (`FUTURE-AI-FIRST.md`) ni el checklist (`ToDo-ai-first.md`).
- Evitar fechas públicas hasta que AIF-1 esté demoable.
- Si se arma HTML real de landing: solo clases Lagunite; marcar GAPs.
- Tonos visuales a evitar: púrpura genérico AI, glow, “robot ilustrado” — mejor producto concreto (JSON → preview).
- Pedido de inversión = **AIF-0→AIF-3**, no el árbol completo de 50 ítems.
