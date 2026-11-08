/*
 * Lagunite Builder — catálogo de bloques (MVP)
 *
 * Cada bloque es un dato: { id, type, name, description, html }.
 * - `type` agrupa variantes intercambiables (header, hero, pricing…).
 * - `description` es la ficha corta que lee un humano o un agente para elegir.
 * - `html` usa solo clases Lagunite; comportamiento opcional vía data-lb-* (ver behaviors en builder.js).
 */

export const BLOCK_TYPES = [
  { type: 'header', label: 'Header' },
  { type: 'hero', label: 'Hero' },
  { type: 'features', label: 'Features' },
  { type: 'pricing', label: 'Precios' },
  { type: 'testimonials', label: 'Testimonios' },
  { type: 'faq', label: 'FAQ' },
  { type: 'cta', label: 'CTA' },
  { type: 'footer', label: 'Footer' },
];

const check = '<span class="color-success bold" aria-hidden="true">✓</span>';

export const BLOCKS = [
  // ─── Header ──────────────────────────────────────────────
  {
    id: 'header-01',
    type: 'header',
    name: 'Navbar con links y CTA',
    description: 'Marca a la izquierda, 3 links y un botón. Burger en móvil.',
    html: `
<header class="navbar navbar-sticky ta-lf" data-lb-navbar>
  <a class="navbar-brand bold" href="#">Brisa</a>
  <button class="navbar-burger" type="button" aria-label="Abrir menú" data-lb-burger>
    <span></span><span></span><span></span>
  </button>
  <ul class="navbar-nav">
    <li><a class="navbar-link" href="#features">Producto</a></li>
    <li><a class="navbar-link" href="#pricing">Precios</a></li>
    <li><a class="navbar-link" href="#faq">Preguntas</a></li>
    <li><a class="btn size-s" href="#cta">Empezar gratis</a></li>
  </ul>
</header>`,
  },
  {
    id: 'header-02',
    type: 'header',
    name: 'Navbar mínima',
    description: 'Solo marca y un botón. Para landings de una sola acción.',
    html: `
<header class="navbar ta-lf">
  <a class="navbar-brand bold" href="#">Brisa</a>
  <a class="btn size-s" href="#cta">Empezar gratis</a>
</header>`,
  },

  // ─── Hero ────────────────────────────────────────────────
  {
    id: 'hero-01',
    type: 'hero',
    name: 'Hero dividido',
    description: 'Texto + 2 CTAs a la izquierda, panel visual a la derecha.',
    html: `
<section class="container-fluid padd-v-xl ta-lf">
  <div class="container-l">
    <div class="grid xgrid-cols-1 dgrid-cols-2 gap-l ai-c">
      <div class="col gap">
        <p class="font-s bold color-primary">Para equipos pequeños</p>
        <h1 class="font-xxl bold color-text text-balance">Organizá el trabajo sin perder la tarde en herramientas</h1>
        <p class="font-l lh text-muted text-pretty">Brisa junta tareas, notas y entregas en un solo lugar. Empezás en cinco minutos.</p>
        <div class="row gap-s ai-c flex-wrap">
          <a class="btn size-l" href="#cta">Empezar gratis</a>
          <a class="btn alt size-l" href="#features">Ver cómo funciona</a>
        </div>
      </div>
      <div class="card padd col gap-s">
        <p class="font-s bold color-text">Esta semana</p>
        <div class="col gap-s">
          <div class="row jc-sb ai-c gap-s"><span class="font-s color-text">Diseño de onboarding</span><span class="badge badge-success">Listo</span></div>
          <div class="row jc-sb ai-c gap-s"><span class="font-s color-text">Revisión de precios</span><span class="badge badge-warning">En curso</span></div>
          <div class="row jc-sb ai-c gap-s"><span class="font-s color-text">Lanzamiento beta</span><span class="badge badge-outline">Pendiente</span></div>
        </div>
      </div>
    </div>
  </div>
</section>`,
  },
  {
    id: 'hero-02',
    type: 'hero',
    name: 'Hero centrado',
    description: 'Titular grande centrado, subtítulo y un CTA principal. Directo y sin distracciones.',
    html: `
<section class="container padd-v-xl ta-lf">
  <div class="col gap ai-c ta-c">
    <span class="badge badge-primary-light badge-pill">Nuevo: plantillas compartidas</span>
    <h1 class="font-xxl bold color-text text-balance">El lugar tranquilo donde tu equipo trabaja</h1>
    <p class="font-l lh text-muted text-pretty">Tareas, notas y entregas sin ruido. Sin configuración eterna.</p>
    <div class="row gap-s ai-c jc-c flex-wrap">
      <a class="btn size-l" href="#cta">Empezar gratis</a>
      <a class="btn ghost size-l" href="#pricing">Ver precios</a>
    </div>
  </div>
</section>`,
  },
  {
    id: 'hero-03',
    type: 'hero',
    name: 'Hero con beneficios',
    description: 'Titular a la izquierda y lista de 3 beneficios concretos a la derecha.',
    html: `
<section class="container padd-v-xl ta-lf">
  <div class="grid xgrid-cols-1 dgrid-cols-2 gap-l">
    <div class="col gap">
      <h1 class="font-xxl bold color-text text-balance">Menos reuniones. Más trabajo terminado.</h1>
      <p class="font-l lh text-muted">Brisa ordena las prioridades del equipo para que cada uno sepa qué hacer hoy.</p>
      <div class="row gap-s"><a class="btn size-l" href="#cta">Probar 14 días</a></div>
    </div>
    <ul class="list-none col gap marg-0 padd-0">
      <li class="row gap-s">${check}<div class="col gap-xs"><p class="bold color-text marg-0">Prioridades claras</p><p class="font-s text-muted marg-0">Cada persona ve sus tres tareas del día.</p></div></li>
      <li class="row gap-s">${check}<div class="col gap-xs"><p class="bold color-text marg-0">Notas junto a las tareas</p><p class="font-s text-muted marg-0">El contexto vive donde se usa.</p></div></li>
      <li class="row gap-s">${check}<div class="col gap-xs"><p class="bold color-text marg-0">Entregas visibles</p><p class="font-s text-muted marg-0">Clientes ven el avance sin pedir updates.</p></div></li>
    </ul>
  </div>
</section>`,
  },

  // ─── Features ────────────────────────────────────────────
  {
    id: 'features-01',
    type: 'features',
    name: '3 cards',
    description: 'Título centrado + 3 cards iguales con título y texto.',
    html: `
<section id="features" class="container padd-v-l ta-lf">
  <div class="col gap-s marg-b ai-c ta-c">
    <h2 class="font-xl bold color-text">Todo lo que necesitás, nada más</h2>
    <p class="font-s text-muted">Tres piezas que funcionan juntas.</p>
  </div>
  <div class="grid xgrid-cols-1 dgrid-cols-3 gap">
    <article class="card padd col gap-s">
      <h3 class="font-l bold color-text">Tareas</h3>
      <p class="font-s lh text-muted">Listas simples con responsables y fechas. Sin tableros infinitos.</p>
    </article>
    <article class="card padd col gap-s">
      <h3 class="font-l bold color-text">Notas</h3>
      <p class="font-s lh text-muted">Documentos livianos enlazados a cada tarea.</p>
    </article>
    <article class="card padd col gap-s">
      <h3 class="font-l bold color-text">Entregas</h3>
      <p class="font-s lh text-muted">Un link público para que el cliente vea el avance.</p>
    </article>
  </div>
</section>`,
  },
  {
    id: 'features-02',
    type: 'features',
    name: 'Pasos numerados',
    description: 'Título a la izquierda, 3 pasos numerados a la derecha. Ideal para “cómo funciona”.',
    html: `
<section id="features" class="container padd-v-l ta-lf">
  <div class="grid xgrid-cols-1 dgrid-cols-2 gap-l">
    <div class="col gap-s">
      <h2 class="font-xl bold color-text">Cómo funciona</h2>
      <p class="font-s lh text-muted">De cero a equipo organizado en una tarde.</p>
    </div>
    <ol class="list-none col gap marg-0 padd-0">
      <li class="row gap ai-fs"><span class="badge badge-primary badge-pill">1</span><div class="col gap-xs"><p class="bold color-text marg-0">Creá tu espacio</p><p class="font-s text-muted marg-0">Invitá al equipo con un link.</p></div></li>
      <li class="row gap ai-fs"><span class="badge badge-primary badge-pill">2</span><div class="col gap-xs"><p class="bold color-text marg-0">Cargá las prioridades</p><p class="font-s text-muted marg-0">Importá desde una planilla o empezá en blanco.</p></div></li>
      <li class="row gap ai-fs"><span class="badge badge-primary badge-pill">3</span><div class="col gap-xs"><p class="bold color-text marg-0">Compartí el avance</p><p class="font-s text-muted marg-0">Un link para clientes, sin cuentas extra.</p></div></li>
    </ol>
  </div>
</section>`,
  },
  {
    id: 'features-03',
    type: 'features',
    name: '4 columnas compactas',
    description: 'Cuatro features cortas sin cards, en una fila. Para listar capacidades.',
    html: `
<section id="features" class="container padd-v-l ta-lf">
  <h2 class="font-xl bold color-text marg-b">Hecho para el día a día</h2>
  <div class="grid xgrid-cols-1 dgrid-cols-4 gap-l">
    <div class="col gap-xs"><p class="bold color-text marg-0">Atajos de teclado</p><p class="font-s lh text-muted marg-0">Todo sin tocar el mouse.</p></div>
    <div class="col gap-xs"><p class="bold color-text marg-0">Modo noche</p><p class="font-s lh text-muted marg-0">Cómodo de noche, sin parches.</p></div>
    <div class="col gap-xs"><p class="bold color-text marg-0">Exportación</p><p class="font-s lh text-muted marg-0">Tus datos en CSV cuando quieras.</p></div>
    <div class="col gap-xs"><p class="bold color-text marg-0">Permisos simples</p><p class="font-s lh text-muted marg-0">Editor o lector. Nada más.</p></div>
  </div>
</section>`,
  },

  // ─── Pricing ─────────────────────────────────────────────
  {
    id: 'pricing-01',
    type: 'pricing',
    name: '3 planes, uno destacado',
    description: 'Tres columnas; el plan del medio destacado con borde y badge. El clásico.',
    html: `
<section id="pricing" class="container padd-v-l ta-lf">
  <div class="col gap-s marg-b ai-c ta-c">
    <h2 class="font-xl bold color-text">Precios simples</h2>
    <p class="font-s text-muted">Sin sorpresas. Cancelás cuando quieras.</p>
  </div>
  <div class="grid xgrid-cols-1 dgrid-cols-3 gap ai-s">
    <article class="card padd col gap">
      <div class="col gap-xs"><h3 class="font-l bold color-text">Inicial</h3><p class="font-s text-muted">Para probar con un equipo chico.</p></div>
      <p class="font-xxl bold color-text marg-0">$0 <span class="font-s text-muted">/ mes</span></p>
      <ul class="list-none col gap-s marg-0 padd-0 font-s color-text">
        <li class="row gap-s">${check} Hasta 3 personas</li>
        <li class="row gap-s">${check} Tareas y notas</li>
      </ul>
      <a class="btn alt wp100" href="#cta">Empezar gratis</a>
    </article>
    <article class="card card-primary card-elevated padd col gap">
      <div class="row jc-sb ai-c gap-s"><h3 class="font-l bold color-text">Equipo</h3><span class="badge badge-primary">Más elegido</span></div>
      <p class="font-s text-muted">Para equipos que entregan todas las semanas.</p>
      <p class="font-xxl bold color-text marg-0">$12 <span class="font-s text-muted">/ persona / mes</span></p>
      <ul class="list-none col gap-s marg-0 padd-0 font-s color-text">
        <li class="row gap-s">${check} Personas ilimitadas</li>
        <li class="row gap-s">${check} Entregas públicas</li>
        <li class="row gap-s">${check} Historial completo</li>
      </ul>
      <a class="btn wp100" href="#cta">Probar 14 días</a>
    </article>
    <article class="card padd col gap">
      <div class="col gap-xs"><h3 class="font-l bold color-text">Empresa</h3><p class="font-s text-muted">Para organizaciones con requisitos propios.</p></div>
      <p class="font-xxl bold color-text marg-0">A medida</p>
      <ul class="list-none col gap-s marg-0 padd-0 font-s color-text">
        <li class="row gap-s">${check} SSO y auditoría</li>
        <li class="row gap-s">${check} Soporte dedicado</li>
      </ul>
      <a class="btn alt wp100" href="#cta">Hablar con ventas</a>
    </article>
  </div>
</section>`,
  },
  {
    id: 'pricing-02',
    type: 'pricing',
    name: 'Planes con mensual / anual',
    description: '3 planes con selector de facturación; los precios cambian al elegir anual.',
    html: `
<section id="pricing" class="container padd-v-l ta-lf" data-lb-pricing>
  <div class="col gap marg-b ai-c ta-c">
    <h2 class="font-xl bold color-text">Elegí cómo pagar</h2>
    <div class="segmented-control" role="group" aria-label="Facturación">
      <button type="button" class="segmented-option active" data-lb-billing="monthly" aria-pressed="true">Mensual</button>
      <button type="button" class="segmented-option" data-lb-billing="yearly" aria-pressed="false">Anual (2 meses gratis)</button>
    </div>
  </div>
  <div class="grid xgrid-cols-1 dgrid-cols-3 gap ai-s">
    <article class="card padd col gap">
      <h3 class="font-l bold color-text">Inicial</h3>
      <p class="font-xxl bold color-text marg-0"><span data-monthly="$0" data-yearly="$0">$0</span> <span class="font-s text-muted" data-monthly="/ mes" data-yearly="/ año">/ mes</span></p>
      <p class="font-s text-muted">Hasta 3 personas.</p>
      <a class="btn alt wp100" href="#cta">Empezar gratis</a>
    </article>
    <article class="card card-primary padd col gap">
      <div class="row jc-sb ai-c gap-s"><h3 class="font-l bold color-text">Equipo</h3><span class="badge badge-primary">Más elegido</span></div>
      <p class="font-xxl bold color-text marg-0"><span data-monthly="$12" data-yearly="$120">$12</span> <span class="font-s text-muted" data-monthly="/ persona / mes" data-yearly="/ persona / año">/ persona / mes</span></p>
      <p class="font-s text-muted">Personas ilimitadas y entregas públicas.</p>
      <a class="btn wp100" href="#cta">Probar 14 días</a>
    </article>
    <article class="card padd col gap">
      <h3 class="font-l bold color-text">Pro</h3>
      <p class="font-xxl bold color-text marg-0"><span data-monthly="$24" data-yearly="$240">$24</span> <span class="font-s text-muted" data-monthly="/ persona / mes" data-yearly="/ persona / año">/ persona / mes</span></p>
      <p class="font-s text-muted">Automatizaciones e integraciones.</p>
      <a class="btn alt wp100" href="#cta">Elegir Pro</a>
    </article>
  </div>
</section>`,
  },
  {
    id: 'pricing-03',
    type: 'pricing',
    name: 'Gratis vs Pro',
    description: 'Dos planes lado a lado. Para productos freemium con una sola mejora.',
    html: `
<section id="pricing" class="container-m padd-v-l ta-lf">
  <h2 class="font-xl bold color-text ta-c marg-b">Empezá gratis, crecé cuando lo necesites</h2>
  <div class="grid xgrid-cols-1 dgrid-cols-2 gap ai-s">
    <article class="card padd col gap">
      <h3 class="font-l bold color-text">Gratis</h3>
      <p class="font-xxl bold color-text marg-0">$0</p>
      <ul class="list-none col gap-s marg-0 padd-0 font-s color-text">
        <li class="row gap-s">${check} 3 personas</li>
        <li class="row gap-s">${check} 100 tareas activas</li>
      </ul>
      <a class="btn alt wp100" href="#cta">Crear cuenta</a>
    </article>
    <article class="card card-primary padd col gap">
      <h3 class="font-l bold color-text">Pro</h3>
      <p class="font-xxl bold color-text marg-0">$9 <span class="font-s text-muted">/ persona / mes</span></p>
      <ul class="list-none col gap-s marg-0 padd-0 font-s color-text">
        <li class="row gap-s">${check} Todo lo de Gratis</li>
        <li class="row gap-s">${check} Tareas ilimitadas</li>
        <li class="row gap-s">${check} Entregas públicas</li>
      </ul>
      <a class="btn wp100" href="#cta">Pasar a Pro</a>
    </article>
  </div>
</section>`,
  },
  {
    id: 'pricing-04',
    type: 'pricing',
    name: 'Tabla comparativa',
    description: 'Planes como columnas y features como filas. Para comparar en detalle.',
    html: `
<section id="pricing" class="container padd-v-l ta-lf">
  <h2 class="font-xl bold color-text marg-b">Compará los planes</h2>
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr><th scope="col">Incluye</th><th scope="col">Inicial · $0</th><th scope="col">Equipo · $12</th><th scope="col">Empresa · a medida</th></tr>
      </thead>
      <tbody>
        <tr><th scope="row">Personas</th><td>3</td><td>Ilimitadas</td><td>Ilimitadas</td></tr>
        <tr><th scope="row">Entregas públicas</th><td>—</td><td>${check}</td><td>${check}</td></tr>
        <tr><th scope="row">Historial</th><td>30 días</td><td>Completo</td><td>Completo</td></tr>
        <tr><th scope="row">SSO y auditoría</th><td>—</td><td>—</td><td>${check}</td></tr>
      </tbody>
    </table>
  </div>
  <div class="row gap-s jc-fe marg-t">
    <a class="btn alt" href="#cta">Hablar con ventas</a>
    <a class="btn" href="#cta">Probar 14 días</a>
  </div>
</section>`,
  },

  // ─── Testimonials ────────────────────────────────────────
  {
    id: 'testimonials-01',
    type: 'testimonials',
    name: '3 testimonios',
    description: 'Tres cards con cita, nombre y rol. Iniciales en lugar de fotos.',
    html: `
<section class="container padd-v-l ta-lf">
  <h2 class="font-xl bold color-text ta-c marg-b">Lo que dicen los equipos</h2>
  <div class="grid xgrid-cols-1 dgrid-cols-3 gap">
    <figure class="card padd col gap marg-0">
      <blockquote class="font-s lh color-text marg-0">“Dejamos de perder entregas entre chats. Ahora todo está en un lugar.”</blockquote>
      <figcaption class="row gap-s ai-c"><span class="avatar avatar-s avatar-initials">LM</span><span class="col"><span class="font-s bold color-text">Lucía M.</span><span class="font-xs text-muted">Estudio de diseño</span></span></figcaption>
    </figure>
    <figure class="card padd col gap marg-0">
      <blockquote class="font-s lh color-text marg-0">“Lo configuramos en una tarde y el equipo lo usó al día siguiente.”</blockquote>
      <figcaption class="row gap-s ai-c"><span class="avatar avatar-s avatar-initials">JR</span><span class="col"><span class="font-s bold color-text">Juan R.</span><span class="font-xs text-muted">Agencia de marketing</span></span></figcaption>
    </figure>
    <figure class="card padd col gap marg-0">
      <blockquote class="font-s lh color-text marg-0">“Los clientes ven el avance solos. Mandamos la mitad de los mails.”</blockquote>
      <figcaption class="row gap-s ai-c"><span class="avatar avatar-s avatar-initials">SP</span><span class="col"><span class="font-s bold color-text">Sofía P.</span><span class="font-xs text-muted">Consultora</span></span></figcaption>
    </figure>
  </div>
</section>`,
  },
  {
    id: 'testimonials-02',
    type: 'testimonials',
    name: 'Una cita destacada',
    description: 'Un solo testimonio grande y centrado. Más peso, menos ruido.',
    html: `
<section class="container-m padd-v-xl ta-lf">
  <figure class="col gap ai-c ta-c marg-0">
    <blockquote class="font-xl lh color-text text-balance marg-0">“Brisa es la primera herramienta que el equipo abre sin que se lo pida.”</blockquote>
    <figcaption class="row gap-s ai-c"><span class="avatar avatar-initials">MA</span><span class="col ai-fs"><span class="font-s bold color-text">Martín A.</span><span class="font-xs text-muted">Líder de producto</span></span></figcaption>
  </figure>
</section>`,
  },

  // ─── FAQ ─────────────────────────────────────────────────
  {
    id: 'faq-01',
    type: 'faq',
    name: 'Acordeón',
    description: 'Preguntas desplegables (details/summary nativo). Sin JS.',
    html: `
<section id="faq" class="container-m padd-v-l ta-lf">
  <h2 class="font-xl bold color-text marg-b">Preguntas frecuentes</h2>
  <div class="col ai-s gap-s">
    <details class="card padd"><summary class="bold color-text cursor-pointer">¿Puedo cancelar cuando quiera?</summary><p class="font-s lh text-muted marg-0 padd-t-s">Sí. Cancelás desde la configuración y no se cobra el mes siguiente.</p></details>
    <details class="card padd"><summary class="bold color-text cursor-pointer">¿Hay un plan gratis?</summary><p class="font-s lh text-muted marg-0 padd-t-s">Sí, para hasta 3 personas, sin límite de tiempo.</p></details>
    <details class="card padd"><summary class="bold color-text cursor-pointer">¿Puedo exportar mis datos?</summary><p class="font-s lh text-muted marg-0 padd-t-s">Cuando quieras, en CSV, desde cualquier plan.</p></details>
  </div>
</section>`,
  },
  {
    id: 'faq-02',
    type: 'faq',
    name: 'Dos columnas',
    description: 'Preguntas y respuestas visibles en grilla de 2 columnas.',
    html: `
<section id="faq" class="container padd-v-l ta-lf">
  <h2 class="font-xl bold color-text marg-b">Preguntas frecuentes</h2>
  <div class="grid xgrid-cols-1 dgrid-cols-2 gap-l">
    <div class="col gap-xs"><h3 class="bold color-text marg-0">¿Puedo cancelar cuando quiera?</h3><p class="font-s lh text-muted marg-0">Sí, sin penalidades.</p></div>
    <div class="col gap-xs"><h3 class="bold color-text marg-0">¿Hay un plan gratis?</h3><p class="font-s lh text-muted marg-0">Sí, para hasta 3 personas.</p></div>
    <div class="col gap-xs"><h3 class="bold color-text marg-0">¿Puedo exportar mis datos?</h3><p class="font-s lh text-muted marg-0">En CSV, desde cualquier plan.</p></div>
    <div class="col gap-xs"><h3 class="bold color-text marg-0">¿Tienen soporte en español?</h3><p class="font-s lh text-muted marg-0">Sí, por chat y mail.</p></div>
  </div>
</section>`,
  },

  // ─── CTA ─────────────────────────────────────────────────
  {
    id: 'cta-01',
    type: 'cta',
    name: 'Card centrada',
    description: 'Card con título, texto y dos botones, centrada.',
    html: `
<section id="cta" class="container padd-v-l ta-lf">
  <div class="card card-elevated padd-l col gap ai-c ta-c">
    <h2 class="font-xl bold color-text">¿Listo para ordenar el trabajo?</h2>
    <p class="font-s text-muted">Gratis para equipos de hasta 3 personas.</p>
    <div class="row gap-s jc-c flex-wrap">
      <a class="btn" href="#">Empezar gratis</a>
      <a class="btn alt" href="#pricing">Ver precios</a>
    </div>
  </div>
</section>`,
  },
  {
    id: 'cta-02',
    type: 'cta',
    name: 'Banda horizontal',
    description: 'Texto a la izquierda y botón a la derecha, sobre superficie. Se apila en móvil.',
    html: `
<section id="cta" class="bg-surface padd-v-l ta-lf">
  <div class="container col-row jc-sb ai-c gap">
    <div class="col gap-xs">
      <h2 class="font-l bold color-text marg-0">Probalo 14 días con tu equipo</h2>
      <p class="font-s text-muted marg-0">Sin tarjeta de crédito.</p>
    </div>
    <a class="btn size-l" href="#">Empezar ahora</a>
  </div>
</section>`,
  },

  // ─── Footer ──────────────────────────────────────────────
  {
    id: 'footer-01',
    type: 'footer',
    name: 'Footer con columnas',
    description: 'Columnas de links y fila inferior con copyright.',
    html: `
<footer class="footer ta-lf">
  <div class="footer-grid">
    <div>
      <p class="footer-title">Producto</p>
      <ul class="footer-links">
        <li><a class="footer-link" href="#features">Funciones</a></li>
        <li><a class="footer-link" href="#pricing">Precios</a></li>
      </ul>
    </div>
    <div>
      <p class="footer-title">Empresa</p>
      <ul class="footer-links">
        <li><a class="footer-link" href="#">Nosotros</a></li>
        <li><a class="footer-link" href="#">Contacto</a></li>
      </ul>
    </div>
    <div>
      <p class="footer-title">Legal</p>
      <ul class="footer-links">
        <li><a class="footer-link" href="#">Términos</a></li>
        <li><a class="footer-link" href="#">Privacidad</a></li>
      </ul>
    </div>
  </div>
  <div class="footer-bottom">
    <p class="font-s text-muted marg-0">© 2026 Brisa</p>
  </div>
</footer>`,
  },
  {
    id: 'footer-02',
    type: 'footer',
    name: 'Footer mínimo',
    description: 'Una sola fila: copyright y dos links.',
    html: `
<footer class="footer footer-minimal ta-lf">
  <div class="container row jc-sb ai-c gap flex-wrap">
    <p class="font-s text-muted marg-0">© 2026 Brisa</p>
    <div class="row gap"><a class="footer-link" href="#">Términos</a><a class="footer-link" href="#">Privacidad</a></div>
  </div>
</footer>`,
  },
];

/** Página inicial de ejemplo: una landing armada con bloques del catálogo. */
export const STARTER_PAGE = ['header-01', 'hero-01', 'features-01', 'pricing-01', 'cta-01', 'footer-01'];
