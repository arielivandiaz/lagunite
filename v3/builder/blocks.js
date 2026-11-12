/*
 * Lagunite Builder — catálogo de bloques (v3).
 * Cada bloque es un dato: { id, type, name, description, html }.
 * - `type` agrupa variantes intercambiables (header, hero, pricing…).
 * - `description` es la ficha corta que lee un humano o un agente para elegir.
 * - `html` usa solo clases del framework (src/lagunite.css); comportamiento opcional vía data-lb-* (ver builder.js).
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

const P = {
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  layers: '<path d="M12 3l9 5-9 5-9-5z"/><path d="M3 13l9 5 9-5"/>',
  clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
  link: '<path d="M10 14a4 4 0 005.66 0l3-3a4 4 0 00-5.66-5.66l-1 1"/><path d="M14 10a4 4 0 00-5.66 0l-3 3a4 4 0 005.66 5.66l1-1"/>',
  shield: '<path d="M12 3l8 3v6c0 4.5-3.4 8.3-8 9-4.6-.7-8-4.5-8-9V6z"/><path d="M8.5 12l2.5 2.5 4.5-5"/>',
  users: '<circle cx="9" cy="8" r="3.5"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6"/><path d="M16 4.5a3.5 3.5 0 010 7M21 20c0-2.8-1.8-5.1-4.3-5.8"/>',
  chart: '<path d="M4 20V11M10 20V5M16 20v-6M2 20h20"/>',
};
const ic = (name, cls = '') => `<svg${cls ? ` class="${cls}"` : ''} viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${P[name]}</svg>`;
const arrow = ic('arrow', 'btn-arrow');
const checks = (items) => `<ul class="col gap-s font-s">${items.map((i) => `<li class="row ai-c gap-s"><span class="color-primary">${ic('check')}</span>${i}</li>`).join('')}</ul>`;

const burger = '<button class="navbar-burger" type="button" aria-label="Abrir menú" data-lb-burger><span></span><span></span><span></span></button>';
const navLinks = `
  <ul class="navbar-nav">
    <li><a class="navbar-link" href="#features">Producto</a></li>
    <li><a class="navbar-link" href="#pricing">Precios</a></li>
    <li><a class="navbar-link" href="#testimonials">Clientes</a></li>
    <li><a class="navbar-link" href="#faq">Preguntas</a></li>
  </ul>`;

const productShot = `
<div class="glass border-r-xl padd-s wp100">
  <div class="card">
    <div class="card-header row jc-sb ai-c"><span>Esta semana</span><span class="badge">3 tareas</span></div>
    <ul class="list-container list-container-divider">
      <li class="list-item"><span class="avatar avatar-s avatar-initials">LM</span><div class="list-item-content"><span class="list-item-text">Diseño de onboarding</span></div><span class="badge badge-success-light">Listo</span></li>
      <li class="list-item"><span class="avatar avatar-s">JR</span><div class="list-item-content"><span class="list-item-text">Revisión de precios</span></div><span class="badge badge-warning-light">En curso</span></li>
      <li class="list-item"><span class="avatar avatar-s avatar-initials">SP</span><div class="list-item-content"><span class="list-item-text">Lanzamiento beta</span></div><span class="badge">Pendiente</span></li>
    </ul>
  </div>
</div>`;

const plan = ({ name, desc, monthly, yearly, period, yearlyPeriod, items, cta, featured }) => `
    <article class="card${featured ? ' card-featured' : ''} padd col gap">
      <div class="col gap-xs wp100">
        <div class="row jc-sb ai-c wp100"><h3 class="card-title">${name}</h3>${featured ? '<span class="badge badge-primary">Más elegido</span>' : ''}</div>
        <p class="card-text">${desc}</p>
      </div>
      <p class="row ai-c gap-s"><span class="font-display font-3xl bold" data-monthly="${monthly}" data-yearly="${yearly}">${monthly}</span><span class="font-s text-muted" data-monthly="${period}" data-yearly="${yearlyPeriod}">${period}</span></p>
      <a class="btn${featured ? '' : ' alt'} wp100" href="#cta">${cta}${featured ? ` ${arrow}` : ''}</a>
      <hr class="wp100" />
      ${checks(items)}
    </article>`;

const quoteCard = (q, n, r, i) => `
    <figure class="card card-hover padd col gap">
      <blockquote>“${q}”</blockquote>
      <figcaption class="row ai-c gap-s"><span class="avatar avatar-initials">${i}</span><span class="col"><span class="font-s bold">${n}</span><span class="font-s text-muted">${r}</span></span></figcaption>
    </figure>`;

const footerCols = `
    <div><p class="footer-title">Producto</p><ul class="footer-links"><li><a class="footer-link" href="#features">Funciones</a></li><li><a class="footer-link" href="#pricing">Precios</a></li><li><a class="footer-link" href="#">Novedades</a></li></ul></div>
    <div><p class="footer-title">Empresa</p><ul class="footer-links"><li><a class="footer-link" href="#">Nosotros</a></li><li><a class="footer-link" href="#">Contacto</a></li></ul></div>
    <div><p class="footer-title">Legal</p><ul class="footer-links"><li><a class="footer-link" href="#">Términos</a></li><li><a class="footer-link" href="#">Privacidad</a></li></ul></div>`;

export const BLOCKS = [
  // ─── Header ──────────────────────────────────────────────
  {
    id: 'header-01',
    type: 'header',
    name: 'Navbar flotante',
    description: 'Cápsula de vidrio centrada que queda fija al hacer scroll. Burger en móvil.',
    html: `
<header class="navbar navbar-floating" data-lb-navbar>
  <a class="navbar-brand" href="#"><span class="brand-mark" aria-hidden="true"></span>Brisa</a>
  ${burger}
  ${navLinks}
  <a class="btn size-s pill" href="#cta">Empezar gratis</a>
</header>`,
  },
  {
    id: 'header-02',
    type: 'header',
    name: 'Navbar de vidrio',
    description: 'Barra de ancho completo con blur y borde inferior tenue. Burger en móvil.',
    html: `
<header class="navbar navbar-sticky" data-lb-navbar>
  <a class="navbar-brand" href="#"><span class="brand-mark" aria-hidden="true"></span>Brisa</a>
  ${burger}
  ${navLinks}
  <a class="btn size-s" href="#cta">Empezar gratis</a>
</header>`,
  },

  // ─── Hero ────────────────────────────────────────────────
  {
    id: 'hero-01',
    type: 'hero',
    name: 'Hero centrado con producto',
    description: 'Anuncio, titular grande con una palabra en gradiente, dos CTA y captura del producto sobre grilla y malla.',
    html: `
<section class="bg-mesh bg-grid section">
  <div class="container col ai-c gap-l ta-c">
    <a class="badge badge-announce" href="#"><span class="badge badge-primary">Nuevo</span> Plantillas compartidas para equipos</a>
    <h1>El lugar <span class="text-gradient">tranquilo</span> donde tu equipo trabaja</h1>
    <p class="font-l text-muted">Tareas, notas y entregas en un solo lugar. Sin configuración eterna.</p>
    <div class="row jc-c ai-c gap-s">
      <a class="btn size-l pill" href="#cta">Empezar gratis ${arrow}</a>
      <a class="btn glass size-l pill" href="#features">Ver demo de 2 minutos</a>
    </div>
    <div class="container-m wp100 ta-lf">${productShot}</div>
  </div>
</section>`,
  },
  {
    id: 'hero-02',
    type: 'hero',
    name: 'Hero dividido',
    description: 'Texto y CTA a la izquierda, producto en vidrio a la derecha, con luz desde arriba.',
    html: `
<section class="bg-spotlight section">
  <div class="container grid xgrid-cols-1 dgrid-cols-2 gap-xl ai-c">
    <div class="col gap-l">
      <p class="overline-label">Para equipos de 3 a 50 personas</p>
      <h1 class="font-display-xl">Menos reuniones. Más trabajo terminado.</h1>
      <p class="font-l text-muted">Brisa ordena las prioridades del equipo para que cada uno sepa qué hacer hoy.</p>
      <div class="row ai-c gap-s">
        <a class="btn size-l" href="#cta">Probar 14 días ${arrow}</a>
        <a class="btn alt size-l" href="#pricing">Ver precios</a>
      </div>
    </div>
    ${productShot}
  </div>
</section>`,
  },

  // ─── Features ────────────────────────────────────────────
  {
    id: 'features-01',
    type: 'features',
    name: 'Bento',
    description: 'Grilla de cards de distinto tamaño con íconos, sobre fondo de puntos.',
    html: `
<section id="features" class="bg-dots section">
  <div class="container col gap-xl">
    <div class="col gap-s">
      <p class="overline-label">Producto</p>
      <h2>Todo lo que tu equipo necesita. Nada más.</h2>
      <p class="font-l text-muted">Tres piezas que funcionan juntas, sin integraciones que mantener.</p>
    </div>
    <div class="grid xgrid-cols-1 dgrid-cols-3 gap-l wp100">
      <article class="card card-hover padd col gap-s dcol-span-2">
        <span class="icon-tile">${ic('layers')}</span>
        <h3 class="card-title">Tareas con contexto</h3>
        <p class="card-text">Cada tarea guarda sus notas, archivos y decisiones. Nadie pregunta dos veces lo mismo.</p>
      </article>
      <article class="card card-hover padd col gap-s drow-span-2">
        <span class="icon-tile">${ic('link')}</span>
        <h3 class="card-title">Entregas con link público</h3>
        <p class="card-text">Tu cliente ve el avance sin crear cuenta ni pedir actualizaciones por mail.</p>
        ${checks(['Vista de solo lectura', 'Comentarios por entrega', 'Aviso automático al cerrar'])}
      </article>
      <article class="card card-hover padd col gap-s">
        <span class="icon-tile">${ic('clock')}</span>
        <h3 class="card-title">Prioridades del día</h3>
        <p class="card-text">Cada persona ve sus tres tareas más importantes al entrar.</p>
      </article>
      <article class="card card-hover padd col gap-s">
        <span class="icon-tile">${ic('shield')}</span>
        <h3 class="card-title">Permisos simples</h3>
        <p class="card-text">Editor o lector. Sin matrices de roles.</p>
      </article>
    </div>
  </div>
</section>`,
  },
  {
    id: 'features-02',
    type: 'features',
    name: '3 cards con ícono',
    description: 'Título centrado y tres cards iguales que se elevan al pasar el mouse.',
    html: `
<section id="features" class="section">
  <div class="container col gap-xl">
    <div class="col ai-c gap-s ta-c">
      <p class="overline-label">Cómo ayuda</p>
      <h2>Hecho para el día a día</h2>
    </div>
    <div class="grid xgrid-cols-1 dgrid-cols-3 gap-l wp100">
      <article class="card card-hover padd col gap-s"><span class="icon-tile icon-tile-solid">${ic('users')}</span><h3 class="card-title">Todo el equipo en sintonía</h3><p class="card-text">Prioridades visibles para todos, sin preguntar en el chat.</p></article>
      <article class="card card-hover padd col gap-s"><span class="icon-tile icon-tile-solid">${ic('chart')}</span><h3 class="card-title">Avance a la vista</h3><p class="card-text">Progreso por proyecto, actualizado solo.</p></article>
      <article class="card card-hover padd col gap-s"><span class="icon-tile icon-tile-solid">${ic('shield')}</span><h3 class="card-title">Tus datos son tuyos</h3><p class="card-text">Exportá todo en CSV cuando quieras, desde cualquier plan.</p></article>
    </div>
  </div>
</section>`,
  },

  // ─── Pricing ─────────────────────────────────────────────
  {
    id: 'pricing-01',
    type: 'pricing',
    name: '3 planes con mensual / anual',
    description: 'Selector de facturación y plan del medio destacado con borde en gradiente.',
    html: `
<section id="pricing" class="bg-spotlight section" data-lb-pricing>
  <div class="container col ai-c gap-xl">
    <div class="col ai-c gap-s ta-c">
      <p class="overline-label">Precios</p>
      <h2>Precios simples, sin sorpresas</h2>
      <p class="font-l text-muted">Empezá gratis. Cambiá de plan o cancelá cuando quieras.</p>
      <div class="segmented-control" role="group" aria-label="Facturación">
        <button type="button" class="segmented-option active" data-lb-billing="monthly" aria-pressed="true">Mensual</button>
        <button type="button" class="segmented-option" data-lb-billing="yearly" aria-pressed="false">Anual <span class="badge badge-primary-light">−17%</span></button>
      </div>
    </div>
    <div class="grid xgrid-cols-1 dgrid-cols-3 gap-l wp100">
      ${plan({ name: 'Inicial', desc: 'Para probar con un equipo chico.', monthly: '$0', yearly: '$0', period: '/ mes', yearlyPeriod: '/ año', items: ['Hasta 3 personas', 'Tareas y notas', '30 días de historial'], cta: 'Empezar gratis' })}
      ${plan({ name: 'Equipo', desc: 'Para equipos que entregan todas las semanas.', monthly: '$12', yearly: '$120', period: '/ persona / mes', yearlyPeriod: '/ persona / año', items: ['Personas ilimitadas', 'Entregas con link público', 'Historial completo', 'Soporte prioritario'], cta: 'Probar 14 días', featured: true })}
      ${plan({ name: 'Pro', desc: 'Para equipos que automatizan su trabajo.', monthly: '$24', yearly: '$240', period: '/ persona / mes', yearlyPeriod: '/ persona / año', items: ['Todo lo de Equipo', 'Automatizaciones', 'Integraciones'], cta: 'Elegir Pro' })}
    </div>
  </div>
</section>`,
  },
  {
    id: 'pricing-02',
    type: 'pricing',
    name: 'Gratis vs Pro',
    description: 'Dos planes lado a lado; Pro destacado con borde en gradiente.',
    html: `
<section id="pricing" class="section">
  <div class="container-m col ai-c gap-xl">
    <div class="col ai-c gap-s ta-c">
      <p class="overline-label">Precios</p>
      <h2>Empezá gratis, crecé cuando lo necesites</h2>
    </div>
    <div class="grid xgrid-cols-1 dgrid-cols-2 gap-l wp100">
      ${plan({ name: 'Gratis', desc: 'Para siempre, hasta 3 personas.', monthly: '$0', yearly: '$0', period: '', yearlyPeriod: '', items: ['3 personas', '100 tareas activas'], cta: 'Crear cuenta' })}
      ${plan({ name: 'Pro', desc: 'Para equipos que crecen.', monthly: '$9', yearly: '$90', period: '/ persona / mes', yearlyPeriod: '/ persona / año', items: ['Todo lo de Gratis', 'Tareas ilimitadas', 'Entregas públicas'], cta: 'Pasar a Pro', featured: true })}
    </div>
  </div>
</section>`,
  },

  // ─── Testimonials ────────────────────────────────────────
  {
    id: 'testimonials-01',
    type: 'testimonials',
    name: 'Cita destacada + 3 cards',
    description: 'Un testimonio grande centrado y tres más chicos debajo.',
    html: `
<section id="testimonials" class="section">
  <div class="container col gap-xl">
    <figure class="container-m col ai-c gap-l ta-c">
      <blockquote class="font-display font-xxl">“Brisa es la primera herramienta que el equipo abre sin que nadie se lo pida.”</blockquote>
      <figcaption class="row ai-c gap-s"><span class="avatar avatar-l avatar-initials">MA</span><span class="col ta-lf"><span class="bold">Martín A.</span><span class="font-s text-muted">Líder de producto, estudio de 40 personas</span></span></figcaption>
    </figure>
    <div class="grid xgrid-cols-1 dgrid-cols-3 gap-l wp100">
      ${quoteCard('Dejamos de perder entregas entre chats. Ahora todo vive en un lugar.', 'Lucía M.', 'Estudio de diseño', 'LM')}
      ${quoteCard('Lo configuramos en una tarde y el equipo lo usó al día siguiente.', 'Juan R.', 'Agencia de marketing', 'JR')}
      ${quoteCard('Los clientes ven el avance solos. Mandamos la mitad de los mails.', 'Sofía P.', 'Consultora', 'SP')}
    </div>
  </div>
</section>`,
  },
  {
    id: 'testimonials-02',
    type: 'testimonials',
    name: 'Una cita grande',
    description: 'Un solo testimonio centrado sobre luz suave. Más peso, menos ruido.',
    html: `
<section id="testimonials" class="bg-spotlight section">
  <figure class="container-m col ai-c gap-l ta-c">
    <blockquote class="font-display font-xxl">“Brisa es la primera herramienta que el equipo abre sin que nadie se lo pida.”</blockquote>
    <figcaption class="row ai-c gap-s"><span class="avatar avatar-l avatar-initials">MA</span><span class="col ta-lf"><span class="bold">Martín A.</span><span class="font-s text-muted">Líder de producto</span></span></figcaption>
  </figure>
</section>`,
  },

  // ─── FAQ ─────────────────────────────────────────────────
  {
    id: 'faq-01',
    type: 'faq',
    name: 'Acordeón dividido',
    description: 'Título a la izquierda y preguntas desplegables a la derecha. Sin JS.',
    html: `
<section id="faq" class="section">
  <div class="container grid xgrid-cols-1 dgrid-cols-3 gap-xl">
    <div class="col gap-s">
      <p class="overline-label">Preguntas</p>
      <h2>Preguntas frecuentes</h2>
      <p class="text-muted">¿No encontrás tu respuesta? <a href="#">Escribinos</a>.</p>
    </div>
    <div class="col ai-s gap-s dcol-span-2">
      <details class="card padd" open><summary>¿Puedo cancelar cuando quiera?</summary><p class="text-muted padd-t-s">Sí. Cancelás desde la configuración y no se cobra el mes siguiente.</p></details>
      <details class="card padd"><summary>¿Hay un plan gratis?</summary><p class="text-muted padd-t-s">Sí, para hasta 3 personas y sin límite de tiempo.</p></details>
      <details class="card padd"><summary>¿Puedo exportar mis datos?</summary><p class="text-muted padd-t-s">Cuando quieras, en CSV, desde cualquier plan.</p></details>
      <details class="card padd"><summary>¿Tienen soporte en español?</summary><p class="text-muted padd-t-s">Sí, por chat y mail, de lunes a viernes.</p></details>
    </div>
  </div>
</section>`,
  },

  // ─── CTA ─────────────────────────────────────────────────
  {
    id: 'cta-01',
    type: 'cta',
    name: 'Franja azul',
    description: 'Franja de acento azul con titular grande y dos botones.',
    html: `
<section id="cta" class="section">
  <div class="container">
    <div class="bg-1 border-r-xl padd-xl col ai-c gap ta-c shadow-xl">
      <p class="font-xs bold uppercase letter-spacing color-on-fill">Empezá hoy</p>
      <h2 class="color-on-fill">Ordená el trabajo de tu equipo esta semana</h2>
      <p class="font-l color-on-fill">Gratis para equipos de hasta 3 personas. Sin tarjeta de crédito.</p>
      <div class="row jc-c ai-c gap-s">
        <a class="btn alt size-l pill" href="#">Empezar gratis ${arrow}</a>
        <a class="btn glass size-l pill" href="#">Hablar con ventas</a>
      </div>
    </div>
  </div>
</section>`,
  },
  {
    id: 'cta-02',
    type: 'cta',
    name: 'Card horizontal',
    description: 'Card elevada con texto a la izquierda y botón a la derecha. Se apila en móvil.',
    html: `
<section id="cta" class="section">
  <div class="container">
    <div class="card card-elevated padd-l col-row jc-sb ai-c gap-l">
      <div class="col gap-xs"><h2 class="font-xxl">Probalo 14 días con tu equipo</h2><p class="text-muted">Sin tarjeta de crédito. Cancelás cuando quieras.</p></div>
      <a class="btn size-l" href="#">Empezar ahora ${arrow}</a>
    </div>
  </div>
</section>`,
  },

  // ─── Footer ──────────────────────────────────────────────
  {
    id: 'footer-01',
    type: 'footer',
    name: 'Footer con columnas',
    description: 'Columna de marca y tres columnas de links, con fila inferior.',
    html: `
<footer class="footer">
  <div class="footer-grid">
    <div class="col gap-s">
      <a class="navbar-brand" href="#"><span class="brand-mark" aria-hidden="true"></span>Brisa</a>
      <p class="font-s text-muted">El lugar tranquilo donde tu equipo trabaja.</p>
    </div>
    ${footerCols}
  </div>
  <div class="footer-bottom"><span>© 2026 Brisa</span><span>Hecho con Lagunite</span></div>
</footer>`,
  },
  {
    id: 'footer-02',
    type: 'footer',
    name: 'Footer mínimo',
    description: 'Una fila: marca, links y copyright.',
    html: `
<footer class="footer footer-minimal">
  <div class="container row jc-sb ai-c gap">
    <a class="navbar-brand" href="#"><span class="brand-mark" aria-hidden="true"></span>Brisa</a>
    <div class="row ai-c gap-l"><a class="footer-link" href="#">Términos</a><a class="footer-link" href="#">Privacidad</a><span class="footer-link">© 2026 Brisa</span></div>
  </div>
</footer>`,
  },
];

/** Página inicial de ejemplo: una landing armada con bloques del catálogo. */
export const STARTER_PAGE = ['header-01', 'hero-01', 'features-01', 'pricing-01', 'testimonials-01', 'faq-01', 'cta-01', 'footer-01'];
