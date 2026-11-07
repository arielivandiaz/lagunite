/*
 * Lagunite Builder — catálogo de bloques para la piel Lagunite 3.
 * Mismo formato que blocks.js: { id, type, name, description, html }.
 * Estilos: pocs/builder/skins/lagunite3.css (generado desde design/lagunite3/).
 */

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
const checks = (items) => `<ul class="check-list">${items.map((i) => `<li>${ic('check')}${i}</li>`).join('')}</ul>`;

const navLinks = `
  <ul class="navbar-nav">
    <li><a class="navbar-link" href="#features">Producto</a></li>
    <li><a class="navbar-link" href="#pricing">Precios</a></li>
    <li><a class="navbar-link" href="#testimonials">Clientes</a></li>
    <li><a class="navbar-link" href="#faq">Preguntas</a></li>
  </ul>`;

const productShot = `
<div class="product-shot glass wp100">
  <div class="product-shot-inner">
    <div class="window-bar"><span></span><span></span><span></span></div>
    <div class="task-row"><span class="row ai-c gap-m"><span class="avatar avatar-s">LM</span>Diseño de onboarding</span><span class="badge badge-success badge-dot">Listo</span></div>
    <div class="task-row"><span class="row ai-c gap-m"><span class="avatar avatar-s avatar-slate">JR</span>Revisión de precios</span><span class="row ai-c gap-m"><span class="progress" style="width: 120px"><span style="width: 60%"></span></span><span class="badge badge-warning badge-dot">En curso</span></span></div>
    <div class="task-row"><span class="row ai-c gap-m"><span class="avatar avatar-s">SP</span>Lanzamiento beta</span><span class="badge">Pendiente</span></div>
  </div>
</div>`;

const plan = ({ name, desc, monthly, yearly, period, yearlyPeriod, items, cta, featured }) => `
    <article class="card${featured ? ' card-featured' : ''}" style="gap: 20px; padding: 28px">
      <div class="col gap-s wp100">
        <div class="row ai-c jc-sb wp100"><h3 class="title-s">${name}</h3>${featured ? '<span class="badge badge-solid">Más elegido</span>' : ''}</div>
        <p class="card-text">${desc}</p>
      </div>
      <div class="price"><span class="price-amount" data-monthly="${monthly}" data-yearly="${yearly}">${monthly}</span><span class="price-period" data-monthly="${period}" data-yearly="${yearlyPeriod}">${period}</span></div>
      <a class="btn${featured ? '' : ' alt'} wp100" href="#cta">${cta}${featured ? ` ${arrow}` : ''}</a>
      <div class="divider"></div>
      ${checks(items)}
    </article>`;

const quoteCard = (q, n, r, i, slate) => `
    <figure class="card card-hover" style="gap: 20px">
      <blockquote class="quote">“${q}”</blockquote>
      <figcaption class="row ai-c gap-m"><span class="avatar${slate ? ' avatar-slate' : ''}">${i}</span><span class="col"><span style="font-weight: 600; font-size: 14px">${n}</span><span class="text-muted" style="font-size: 13px">${r}</span></span></figcaption>
    </figure>`;

const footerCols = `
    <div><p class="footer-title">Producto</p><ul class="footer-links"><li><a class="footer-link" href="#features">Funciones</a></li><li><a class="footer-link" href="#pricing">Precios</a></li><li><a class="footer-link" href="#">Novedades</a></li></ul></div>
    <div><p class="footer-title">Empresa</p><ul class="footer-links"><li><a class="footer-link" href="#">Nosotros</a></li><li><a class="footer-link" href="#">Contacto</a></li></ul></div>
    <div><p class="footer-title">Legal</p><ul class="footer-links"><li><a class="footer-link" href="#">Términos</a></li><li><a class="footer-link" href="#">Privacidad</a></li></ul></div>`;

export const BLOCKS_L3 = [
  // ─── Header ──────────────────────────────────────────────
  {
    id: 'l3-header-01',
    type: 'header',
    name: 'Navbar flotante',
    description: 'Cápsula de vidrio centrada que queda fija al hacer scroll.',
    html: `
<header class="navbar navbar-floating">
  <a class="navbar-brand" href="#"><span class="brand-mark" aria-hidden="true"></span>Brisa</a>
  ${navLinks}
  <div class="row ai-c gap-s"><a class="btn ghost size-s" href="#">Ingresar</a><a class="btn size-s pill" href="#cta">Empezar gratis</a></div>
</header>`,
  },
  {
    id: 'l3-header-02',
    type: 'header',
    name: 'Navbar de vidrio',
    description: 'Barra de ancho completo con blur y borde inferior tenue.',
    html: `
<header class="navbar">
  <a class="navbar-brand" href="#"><span class="brand-mark" aria-hidden="true"></span>Brisa</a>
  ${navLinks}
  <div class="row ai-c gap-s"><a class="btn ghost size-s" href="#">Ingresar</a><a class="btn size-s" href="#cta">Empezar gratis</a></div>
</header>`,
  },

  // ─── Hero ────────────────────────────────────────────────
  {
    id: 'l3-hero-01',
    type: 'hero',
    name: 'Hero centrado con producto',
    description: 'Anuncio, titular grande con una palabra en gradiente, dos CTA y captura del producto sobre grilla y malla.',
    html: `
<section class="bg-mesh bg-grid" style="padding: 72px 0">
  <div class="container col ai-c gap-l ta-c">
    <a class="badge badge-announce" href="#"><span class="badge badge-solid">Nuevo</span> Plantillas compartidas para equipos ${ic('arrow')}</a>
    <h1 class="display-2xl" style="max-width: 15ch">El lugar <span class="text-gradient">tranquilo</span> donde tu equipo trabaja</h1>
    <p class="body-l text-muted measure">Tareas, notas y entregas en un solo lugar. Sin configuración eterna y sin reuniones para saber en qué está cada uno.</p>
    <div class="row ai-c jc-c gap-m">
      <a class="btn size-l pill" href="#cta">Empezar gratis ${arrow}</a>
      <a class="btn glass size-l pill" href="#features">Ver demo de 2 minutos</a>
    </div>
    <div class="wp100" style="max-width: 880px; margin-top: 32px; text-align: left">${productShot}</div>
  </div>
</section>`,
  },
  {
    id: 'l3-hero-02',
    type: 'hero',
    name: 'Hero dividido',
    description: 'Texto y CTA a la izquierda, producto en vidrio a la derecha, con luz desde arriba.',
    html: `
<section class="bg-spotlight" style="padding: 80px 0">
  <div class="container grid dgrid-cols-2 gap-xl ai-c">
    <div class="col gap-l">
      <p class="overline-label">Para equipos de 3 a 50 personas</p>
      <h1 class="display-xl">Menos reuniones. Más trabajo terminado.</h1>
      <p class="body-l text-muted">Brisa ordena las prioridades del equipo para que cada uno sepa qué hacer hoy.</p>
      <div class="row ai-c gap-m">
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
    id: 'l3-features-01',
    type: 'features',
    name: 'Bento',
    description: 'Grilla de cards de distinto tamaño con íconos, sobre fondo de puntos.',
    html: `
<section id="features" class="section bg-dots">
  <div class="container col gap-xl">
    <div class="section-head">
      <p class="overline-label">Producto</p>
      <h2 class="display-l">Todo lo que tu equipo necesita. Nada más.</h2>
      <p class="body-l text-muted">Tres piezas que funcionan juntas, sin integraciones que mantener.</p>
    </div>
    <div class="grid dgrid-cols-3 gap-l wp100">
      <article class="card card-hover dcol-span-2">
        <span class="icon-tile">${ic('layers')}</span>
        <h3 class="card-title">Tareas con contexto</h3>
        <p class="card-text measure">Cada tarea guarda sus notas, archivos y decisiones. Nadie pregunta dos veces lo mismo.</p>
        <div class="card card-sunken wp100" style="margin-top: 8px; padding: 16px">
          <div class="row ai-c jc-sb gap wp100"><span class="row ai-c gap-s"><span class="avatar avatar-s">LM</span><span style="font-size: 14px">Revisión de precios</span></span><span class="progress" style="width: 160px"><span style="width: 72%"></span></span></div>
        </div>
      </article>
      <article class="card card-hover drow-span-2">
        <span class="icon-tile">${ic('link')}</span>
        <h3 class="card-title">Entregas con link público</h3>
        <p class="card-text">Tu cliente ve el avance sin crear cuenta ni pedir actualizaciones por mail.</p>
        ${checks(['Vista de solo lectura', 'Comentarios por entrega', 'Aviso automático al cerrar'])}
      </article>
      <article class="card card-hover">
        <span class="icon-tile">${ic('clock')}</span>
        <h3 class="card-title">Prioridades del día</h3>
        <p class="card-text">Cada persona ve sus tres tareas más importantes al entrar.</p>
      </article>
      <article class="card card-hover">
        <span class="icon-tile">${ic('shield')}</span>
        <h3 class="card-title">Permisos simples</h3>
        <p class="card-text">Editor o lector. Sin matrices de roles.</p>
      </article>
    </div>
  </div>
</section>`,
  },
  {
    id: 'l3-features-02',
    type: 'features',
    name: '3 cards con ícono',
    description: 'Título centrado y tres cards iguales que se elevan al pasar el mouse.',
    html: `
<section id="features" class="section">
  <div class="container col gap-xl">
    <div class="section-head ta-c">
      <p class="overline-label">Cómo ayuda</p>
      <h2 class="display-l">Hecho para el día a día</h2>
    </div>
    <div class="grid dgrid-cols-3 gap-l wp100">
      <article class="card card-hover"><span class="icon-tile icon-tile-solid">${ic('users')}</span><h3 class="card-title">Todo el equipo en sintonía</h3><p class="card-text">Prioridades visibles para todos, sin preguntar en el chat.</p></article>
      <article class="card card-hover"><span class="icon-tile icon-tile-solid">${ic('chart')}</span><h3 class="card-title">Avance a la vista</h3><p class="card-text">Barras de progreso por proyecto, actualizadas solas.</p></article>
      <article class="card card-hover"><span class="icon-tile icon-tile-solid">${ic('shield')}</span><h3 class="card-title">Tus datos son tuyos</h3><p class="card-text">Exportá todo en CSV cuando quieras, desde cualquier plan.</p></article>
    </div>
  </div>
</section>`,
  },

  // ─── Pricing ─────────────────────────────────────────────
  {
    id: 'l3-pricing-01',
    type: 'pricing',
    name: '3 planes con mensual / anual',
    description: 'Selector de facturación y plan del medio destacado con borde en gradiente.',
    html: `
<section id="pricing" class="section bg-spotlight" data-lb-pricing>
  <div class="container col ai-c gap-xl">
    <div class="section-head ta-c">
      <p class="overline-label">Precios</p>
      <h2 class="display-l">Precios simples, sin sorpresas</h2>
      <p class="body-l text-muted">Empezá gratis. Cambiá de plan o cancelá cuando quieras.</p>
      <div class="segmented-control" role="group" aria-label="Facturación" style="margin-top: 8px">
        <button type="button" class="segmented-option active" data-lb-billing="monthly" aria-pressed="true">Mensual</button>
        <button type="button" class="segmented-option" data-lb-billing="yearly" aria-pressed="false">Anual <span class="badge badge-primary">−17%</span></button>
      </div>
    </div>
    <div class="grid dgrid-cols-3 gap-l wp100" style="align-items: start">
      ${plan({ name: 'Inicial', desc: 'Para probar con un equipo chico.', monthly: '$0', yearly: '$0', period: '/ mes', yearlyPeriod: '/ año', items: ['Hasta 3 personas', 'Tareas y notas', '30 días de historial'], cta: 'Empezar gratis' })}
      ${plan({ name: 'Equipo', desc: 'Para equipos que entregan todas las semanas.', monthly: '$12', yearly: '$120', period: '/ persona / mes', yearlyPeriod: '/ persona / año', items: ['Personas ilimitadas', 'Entregas con link público', 'Historial completo', 'Soporte prioritario'], cta: 'Probar 14 días', featured: true })}
      ${plan({ name: 'Pro', desc: 'Para equipos que automatizan su trabajo.', monthly: '$24', yearly: '$240', period: '/ persona / mes', yearlyPeriod: '/ persona / año', items: ['Todo lo de Equipo', 'Automatizaciones', 'Integraciones'], cta: 'Elegir Pro' })}
    </div>
  </div>
</section>`,
  },
  {
    id: 'l3-pricing-02',
    type: 'pricing',
    name: 'Gratis vs Pro',
    description: 'Dos planes lado a lado; Pro destacado con borde en gradiente.',
    html: `
<section id="pricing" class="section">
  <div class="container-s col ai-c gap-xl">
    <div class="section-head ta-c">
      <p class="overline-label">Precios</p>
      <h2 class="display-l">Empezá gratis, crecé cuando lo necesites</h2>
    </div>
    <div class="grid dgrid-cols-2 gap-l wp100" style="align-items: start">
      ${plan({ name: 'Gratis', desc: 'Para siempre, hasta 3 personas.', monthly: '$0', yearly: '$0', period: '', yearlyPeriod: '', items: ['3 personas', '100 tareas activas'], cta: 'Crear cuenta' })}
      ${plan({ name: 'Pro', desc: 'Para equipos que crecen.', monthly: '$9', yearly: '$90', period: '/ persona / mes', yearlyPeriod: '/ persona / año', items: ['Todo lo de Gratis', 'Tareas ilimitadas', 'Entregas públicas'], cta: 'Pasar a Pro', featured: true })}
    </div>
  </div>
</section>`,
  },

  // ─── Testimonials ────────────────────────────────────────
  {
    id: 'l3-testimonials-01',
    type: 'testimonials',
    name: 'Cita destacada + 3 cards',
    description: 'Un testimonio grande centrado y tres más chicos debajo.',
    html: `
<section id="testimonials" class="section">
  <div class="container col gap-xl">
    <figure class="col ai-c gap-l ta-c" style="max-width: 820px; margin-inline: auto">
      <blockquote class="quote-l">“Brisa es la primera herramienta que el equipo abre sin que nadie se lo pida.”</blockquote>
      <figcaption class="row ai-c gap-m"><span class="avatar avatar-l">MA</span><span class="col" style="text-align: left"><span style="font-weight: 600">Martín A.</span><span class="text-muted" style="font-size: 14px">Líder de producto, estudio de 40 personas</span></span></figcaption>
    </figure>
    <div class="grid dgrid-cols-3 gap-l wp100">
      ${quoteCard('Dejamos de perder entregas entre chats. Ahora todo vive en un lugar.', 'Lucía M.', 'Estudio de diseño', 'LM')}
      ${quoteCard('Lo configuramos en una tarde y el equipo lo usó al día siguiente.', 'Juan R.', 'Agencia de marketing', 'JR', true)}
      ${quoteCard('Los clientes ven el avance solos. Mandamos la mitad de los mails.', 'Sofía P.', 'Consultora', 'SP')}
    </div>
  </div>
</section>`,
  },
  {
    id: 'l3-testimonials-02',
    type: 'testimonials',
    name: 'Una cita grande',
    description: 'Un solo testimonio centrado sobre luz suave. Más peso, menos ruido.',
    html: `
<section id="testimonials" class="section bg-spotlight">
  <figure class="container-s col ai-c gap-l ta-c">
    <blockquote class="quote-l">“Brisa es la primera herramienta que el equipo abre sin que nadie se lo pida.”</blockquote>
    <figcaption class="row ai-c gap-m"><span class="avatar avatar-l">MA</span><span class="col" style="text-align: left"><span style="font-weight: 600">Martín A.</span><span class="text-muted" style="font-size: 14px">Líder de producto</span></span></figcaption>
  </figure>
</section>`,
  },

  // ─── FAQ ─────────────────────────────────────────────────
  {
    id: 'l3-faq-01',
    type: 'faq',
    name: 'Acordeón dividido',
    description: 'Título a la izquierda y preguntas desplegables a la derecha. Sin JS.',
    html: `
<section id="faq" class="section">
  <div class="container grid dgrid-cols-3 gap-xl">
    <div class="section-head">
      <p class="overline-label">Preguntas</p>
      <h2 class="display-l">Preguntas frecuentes</h2>
      <p class="text-muted">¿No encontrás tu respuesta? <a href="#">Escribinos</a>.</p>
    </div>
    <div class="faq dcol-span-2">
      <details open><summary>¿Puedo cancelar cuando quiera?</summary><p>Sí. Cancelás desde la configuración y no se cobra el mes siguiente. Tus datos quedan disponibles 30 días.</p></details>
      <details><summary>¿Hay un plan gratis?</summary><p>Sí, para hasta 3 personas y sin límite de tiempo.</p></details>
      <details><summary>¿Puedo exportar mis datos?</summary><p>Cuando quieras, en CSV, desde cualquier plan.</p></details>
      <details><summary>¿Tienen soporte en español?</summary><p>Sí, por chat y mail, de lunes a viernes.</p></details>
    </div>
  </div>
</section>`,
  },

  // ─── CTA ─────────────────────────────────────────────────
  {
    id: 'l3-cta-01',
    type: 'cta',
    name: 'Panel azul',
    description: 'Panel azul profundo con grilla, titular grande y dos botones.',
    html: `
<section id="cta" class="section">
  <div class="container">
    <div class="cta-panel">
      <p class="overline-label" style="color: var(--blue-100)">Empezá hoy</p>
      <h2 class="display-xl" style="max-width: 16ch">Ordená el trabajo de tu equipo esta semana</h2>
      <p class="body-l measure">Gratis para equipos de hasta 3 personas. Sin tarjeta de crédito.</p>
      <div class="row ai-c jc-c gap-m">
        <a class="btn on-dark size-l pill" href="#">Empezar gratis ${arrow}</a>
        <a class="btn on-dark-ghost size-l pill" href="#">Hablar con ventas</a>
      </div>
    </div>
  </div>
</section>`,
  },
  {
    id: 'l3-cta-02',
    type: 'cta',
    name: 'Card horizontal',
    description: 'Card elevada con texto a la izquierda y botón a la derecha. Se apila en móvil.',
    html: `
<section id="cta" class="section">
  <div class="container">
    <div class="card card-elevated row ai-c jc-sb gap-l" style="padding: 32px">
      <div class="col gap-s"><h2 class="title-l">Probalo 14 días con tu equipo</h2><p class="text-muted">Sin tarjeta de crédito. Cancelás cuando quieras.</p></div>
      <a class="btn size-l" href="#">Empezar ahora ${arrow}</a>
    </div>
  </div>
</section>`,
  },

  // ─── Footer ──────────────────────────────────────────────
  {
    id: 'l3-footer-01',
    type: 'footer',
    name: 'Footer con columnas',
    description: 'Columna de marca y tres columnas de links, con fila inferior.',
    html: `
<footer class="footer">
  <div class="footer-grid">
    <div class="col gap-m">
      <a class="navbar-brand" href="#"><span class="brand-mark" aria-hidden="true"></span>Brisa</a>
      <p class="text-muted" style="font-size: 14px; max-width: 32ch">El lugar tranquilo donde tu equipo trabaja.</p>
    </div>
    ${footerCols}
  </div>
  <div class="footer-bottom"><span>© 2026 Brisa</span><span>Hecho con Lagunite</span></div>
</footer>`,
  },
  {
    id: 'l3-footer-02',
    type: 'footer',
    name: 'Footer mínimo',
    description: 'Una fila: marca, links y copyright.',
    html: `
<footer class="footer" style="padding: 24px">
  <div class="container row ai-c jc-sb gap">
    <a class="navbar-brand" href="#"><span class="brand-mark" aria-hidden="true"></span>Brisa</a>
    <div class="row ai-c gap-l"><a class="footer-link" href="#">Términos</a><a class="footer-link" href="#">Privacidad</a><span class="footer-link">© 2026 Brisa</span></div>
  </div>
</footer>`,
  },
];

export const STARTER_PAGE_L3 = ['l3-header-01', 'l3-hero-01', 'l3-features-01', 'l3-pricing-01', 'l3-testimonials-01', 'l3-faq-01', 'l3-cta-01', 'l3-footer-01'];
