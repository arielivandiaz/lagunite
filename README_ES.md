# Lagunite 2.0

[![NPM Version](https://img.shields.io/npm/v/lagunite?style=flat-square)](https://www.npmjs.com/package/lagunite)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)

> **[Read in English](./README.md)** 🇬🇧

---

**El framework CSS para equipos empresariales que valoran código legible sobre código breve.**

*Potente, flexible y cristalino.*

Lagunite es un framework CSS moderno y enfocado en utilidades, diseñado específicamente para equipos hispanohablantes y empresas que priorizan la claridad del código, la mantenibilidad y la incorporación fluida de nuevos miembros. Construido desde cero con nomenclatura descriptiva y un sistema de diseño robusto, Lagunite permite a los equipos construir interfaces hermosas más rápido—sin sacrificar legibilidad.

---

## 🎯 ¿Por qué Lagunite?

### **Para Equipos Empresariales**
Lagunite fue construido pensando en equipos grandes. A diferencia de frameworks crípticos, nuestros nombres de clases descriptivos facilitan las revisiones de código, aceleran la incorporación de nuevos desarrolladores y mejoran la colaboración.

```html
<!-- Lagunite: Claro y auto-documentado -->
<div class="marg-h-s padd-v-m border-color-primary border-r-l">
  <h2 class="font-l font-bold color-text-primary">Bienvenido</h2>
</div>

<!-- Otros frameworks: Breve pero críptico -->
<div class="mx-2 py-4 border-primary rounded-lg">
  <h2 class="text-lg font-bold text-primary">Bienvenido</h2>
</div>
```

### **Ventajas Clave**

* **📖 Legible y Auto-documentado:** Nombres de clases como `.marg-h-s`, `.padd-v-m`, `.border-color-primary` son inmediatamente comprensibles, incluso para desarrolladores junior.

* **🌍 Documentación en Español Primero:** Documentación completa en español con traducciones al inglés. Perfecto para equipos latinoamericanos y españoles.

* **🎨 Sistema de Diseño Nivel Enterprise:** Construido sobre tokens de diseño semánticos (--color-*, --space-*, --radius-*) que se integran perfectamente con sistemas de diseño corporativos.

* **🔧 Mejor Organización de Media Queries:** A diferencia de otros frameworks, las variantes responsivas están agrupadas con sus estilos base, haciendo el mantenimiento y debugging significativamente más fácil.

* **🎛️ Theming Superior:** Theming más flexible que Tailwind out-of-the-box, con clara separación entre paleta raw y tokens semánticos.

* **⚡ Moderno y Performante:** Impulsado por Vite y PostCSS. CSS limpio y optimizado con utilidades atómicas para máxima flexibilidad.

* **♿ Accesibilidad Primero:** Construido con unidades `rem` en todo el sistema, respetando las preferencias del usuario y asegurando cumplimiento WCAG.

---

## 🚀 Perfecto Para

- ✅ Equipos de desarrollo empresarial
- ✅ Organizaciones hispanohablantes
- ✅ Proyectos que requieren código claro y mantenible
- ✅ Equipos con desarrolladores junior
- ✅ Empresas construyendo design systems
- ✅ Proyectos que requieren extensas revisiones de código

---

## 🆚 Lagunite vs Otros Frameworks

### **Lo que Hace a Lagunite Diferente**

Si bien existen muchos frameworks CSS excelentes disponibles, Lagunite ofrece ventajas únicas para casos de uso específicos:

| Característica | Ventaja de Lagunite |
|----------------|---------------------|
| **Nomenclatura de Clases** | Descriptiva y auto-documentada (`.marg-h-s`, `.padd-v-m`) hace el código inmediatamente comprensible, ideal para equipos y revisiones de código |
| **Idioma de Documentación** | Documentación nativa en español con soporte en inglés—perfecta para equipos latinoamericanos y españoles |
| **Organización de Media Queries** | Variantes responsivas agrupadas con estilos base para mantenimiento y debugging más fácil |
| **Sistema de Tokens de Diseño** | Clara separación entre paleta raw y tokens semánticos, facilitando la integración con design systems corporativos |
| **Curva de Aprendizaje** | Desarrolladores junior pueden leer y entender clases sin memorizar abreviaciones crípticas |
| **Revisiones de Código** | Los revisores entienden inmediatamente la intención del estilo sin consultar documentación |
| **Tiempo de Onboarding** | Nuevos miembros del equipo productivos más rápido gracias a nombres de clases legibles |
| **Flexibilidad de Theming** | Variables semánticas integradas hacen el theming más intuitivo que enfoques basados en configuración |
| **Enfoque Enterprise** | Diseñado desde cero para equipos grandes y entornos corporativos |

### **Cuándo Elegir Lagunite**

✅ **Elige Lagunite si:**
- Trabajas en entornos enterprise o equipos grandes
- Valoras la legibilidad y mantenibilidad del código
- Necesitas documentación y soporte en español
- Tienes miembros del equipo con diferentes niveles de experiencia
- Realizas revisiones de código frecuentes
- Estás construyendo o manteniendo un design system
- Priorizas la mantenibilidad a largo plazo sobre la brevedad

### **La Filosofía de Lagunite**

Creemos que **el código se lee más veces de las que se escribe**. En entornos empresariales donde:
- Múltiples desarrolladores colaboran en la misma base de código
- Las revisiones de código son frecuentes y exhaustivas
- Los desarrolladores junior necesitan entender código existente rápidamente
- Los proyectos tienen larga vida útil y múltiples mantenedores

...la claridad se vuelve más valiosa que la brevedad.

---

## 💡 Filosofía de Diseño

### **Utilidades Atómicas + Nomenclatura Descriptiva**

Lagunite combina el poder de las utilidades atómicas con la claridad de la nomenclatura descriptiva:

```css
/* Utilidades atómicas para máxima flexibilidad */
.border-w-2          /* border-width: 2px */
.border-solid        /* border-style: solid */
.border-color-primary /* border-color: var(--color-primary) */

/* Shortcuts convenientes cuando necesitas velocidad */
.border              /* 2px solid primary (todo en uno) */
.bordered            /* border + border-radius */
```

### **Organizado por Concepto**

Cada utilidad está organizada con IDs claros para fácil navegación:

```css
/* @ID: #03-06-01 - Container Base */
/* @ID: #03-06-02 - Container Sizes */
/* @ID: #03-06-03 - Container Fluid */
```

### **Diseño Responsivo Simplificado**

Los media queries están agrupados con sus estilos base—no dispersos al final de los archivos:

```css
/* @ID: #03-06-01 - Base Container */
.container { width: 100%; margin: 0 auto; }

@media (max-width: 639px) {
  .xcontainer { padding: var(--space-3); }
}

@media (min-width: 640px) {
  .dcontainer { padding: var(--space-6); }
}
```

---

## 📦 ¿Qué Incluye?

### **Sistema Completo de Utilidades**
- ✅ Tipografía y utilidades de texto
- ✅ Sistema de colores (texto y fondos)
- ✅ Utilidades de layout (Flexbox y Grid)
- ✅ Espaciado (márgenes y padding)
- ✅ Utilidades de tamaño (ancho y alto)
- ✅ Utilidades de contenedores
- ✅ Utilidades de bordes (atómicas y shortcuts)
- ⏳ Sombras y efectos (próximamente)
- ⏳ Animaciones y transiciones (próximamente)

### **Sistema de Diseño Robusto**
- Tokens de color semánticos con paleta HSL
- Escala de espaciado consistente
- Sistema de tipografía flexible
- Tokens de border radius y width
- Breakpoints responsivos

---

## 🏁 Comenzando

> **Nota:** Lagunite 2.0 está actualmente en desarrollo activo. La librería estará disponible en npm pronto.

### **Instalación (Próximamente)**

```bash
npm install lagunite@next
```

### **Importar en tu proyecto**

```javascript
import 'lagunite/dist/lagunite.css';
```

### **Ejemplo Rápido**

```html
<div class="container-m padd-v-l">
  <h1 class="font-xl font-bold color-text-primary marg-b-m">
    Bienvenido a Lagunite
  </h1>
  
  <div class="grid g-cols-3 g-gap-m">
    <div class="border-r-l padd-m bg-primary-light">
      <h3 class="font-m font-semibold">Legible</h3>
      <p class="font-s color-text-secondary">
        Nombres de clases que puedes entender
      </p>
    </div>
    
    <div class="border-r-l padd-m bg-success-light">
      <h3 class="font-m font-semibold">Flexible</h3>
      <p class="font-s color-text-secondary">
        Utilidades atómicas para control total
      </p>
    </div>
    
    <div class="border-r-l padd-m bg-warning-light">
      <h3 class="font-m font-semibold">Enterprise</h3>
      <p class="font-s color-text-secondary">
        Construido para equipos
      </p>
    </div>
  </div>
</div>
```

---

## 🗺️ Roadmap

### **Fase 1: Consolidación del Core** (Actual)
- ✅ Sistema completo de utilidades
- ✅ Sistema de tokens de diseño
- ⏳ Componentes esenciales (botones, cards, forms)
- ⏳ Sitio de documentación completa

### **Fase 2: Tooling y Distribución** (Q1 2026)
- CLI de build
- Publicación en NPM
- Snippets para VS Code
- Herramienta de purging CSS

### **Fase 3: Crecimiento del Ecosistema** (Q2 2026)
- Wrappers para React/Vue/Svelte
- Expansión de librería de componentes
- Construcción de comunidad
- Programa de soporte empresarial

---

## 🤝 Contribuyendo

¡Lagunite está en desarrollo activo y damos la bienvenida a contribuciones! Ya sea arreglando bugs, mejorando la documentación (especialmente traducciones al español), o proponiendo nuevas funcionalidades—nos encantaría contar contigo.

---

## 📄 Licencia

Licencia MIT - siéntete libre de usar Lagunite en tus proyectos, comerciales o de otro tipo.

---

## 🌟 Construido para Equipos, por Equipos

Lagunite fue creado por desarrolladores que entienden los desafíos de trabajar en equipos grandes y multilingües. Creemos que la claridad del código no es un lujo—es una necesidad para el desarrollo de software sostenible.

**Únete a nosotros en la construcción de un mejor framework CSS para el mundo empresarial.**

[Documentación](./docs) • [GitHub](https://github.com/arielivandiaz/lagunite) • [Discusiones](https://github.com/arielivandiaz/lagunite/discussions)
