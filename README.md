# Lagunite 2.0

[![NPM Version](https://img.shields.io/npm/v/lagunite?style=flat-square)](https://www.npmjs.com/package/lagunite)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square)](https://opensource.org/licenses/MIT)

> **[Leer en Español](./README_ES.md)** 🇪🇸

---

**The CSS framework for enterprise teams who value readable code over brief code.**

*Powerful, flexible, and crystal clear.*

Lagunite is a modern, utility-focused CSS framework for teams and enterprises that prioritize code clarity, maintainability, and seamless onboarding. Built from the ground up with descriptive naming conventions and a robust design system, it puts documentation first: Markdown docs, live examples, prompt guides, and AI-friendly resources (.toon, PROMPT_GUIDE) so both developers and AI assistants can use it effectively. Lagunite empowers teams to build beautiful interfaces faster—without sacrificing readability.

---

## 🎯 Why Lagunite?

### **For Enterprise Teams**
Lagunite was built with large teams in mind. Unlike cryptic utility frameworks, our descriptive class names make code reviews easier, onboarding faster, and collaboration smoother.

```html
<!-- Lagunite: Clear and self-documenting -->
<div class="marg-h-s padd-v-m border-color-primary border-r-l">
  <h2 class="font-l font-bold color-text-primary">Welcome</h2>
</div>

<!-- Other frameworks: Brief but cryptic -->
<div class="mx-2 py-4 border-primary rounded-lg">
  <h2 class="text-lg font-bold text-primary">Welcome</h2>
</div>
```

### **Key Advantages**

* **📖 Readable & Self-Documenting:** Class names like `.marg-h-s`, `.padd-v-m`, `.border-color-primary` are immediately understandable, even for junior developers.

* **📚 Documentation-First:** Documentation is a first-class citizen: Markdown docs, live examples, prompt guides and AI-friendly resources (.toon, PROMPT_GUIDE, cheatsheets) so both humans and assistants can use Lagunite effectively.

* **🎨 Enterprise-Grade Design System:** Built on semantic design tokens (--color-*, --space-*, --radius-*) that integrate seamlessly with corporate design systems.

* **🔧 Better Media Query Organization:** Unlike other frameworks, responsive variants are grouped with their base styles, making maintenance and debugging significantly easier.

* **🎛️ Superior Theming:** More flexible theming than Tailwind out-of-the-box, with clear separation between raw palette and semantic tokens.

* **⚡ Modern & Performant:** Powered by Vite and PostCSS. Clean, optimized CSS with atomic utilities for maximum flexibility.

* **♿ Accessibility First:** Built with `rem` units throughout, respecting user preferences and ensuring WCAG compliance.

---

## 🚀 Perfect For

- ✅ Enterprise development teams
- ✅ Projects that want documentation-first (docs, examples, prompt guides, AI-friendly resources)
- ✅ Projects requiring clear, maintainable code
- ✅ Teams with junior developers
- ✅ Companies building design systems
- ✅ Projects requiring extensive code reviews

---

## 🆚 Lagunite vs Other Frameworks

### **What Makes Lagunite Different**

While there are many excellent CSS frameworks available, Lagunite offers unique advantages for specific use cases:

| Feature | Lagunite Advantage |
|---------|-------------------|
| **Class Naming** | Descriptive and self-documenting (`.marg-h-s`, `.padd-v-m`) makes code immediately understandable, ideal for teams and code reviews |
| **Documentation** | Documentation-first: .md docs, examples, prompt guides, and AI-oriented resources (.toon, PROMPT_GUIDE) for humans and AI assistants alike |
| **Media Query Organization** | Responsive variants grouped with base styles for easier maintenance and debugging |
| **Design Token System** | Clear separation between raw palette and semantic tokens, making corporate design system integration seamless |
| **Learning Curve** | Junior developers can read and understand classes without memorizing cryptic abbreviations |
| **Code Reviews** | Reviewers immediately understand styling intent without referencing documentation |
| **Onboarding Time** | New team members productive faster thanks to readable class names |
| **Theming Flexibility** | Built-in semantic variables make theming more intuitive than configuration-based approaches |
| **Enterprise Focus** | Designed from the ground up for large teams and corporate environments |

### **When to Choose Lagunite**

✅ **Choose Lagunite if you:**
- Work in enterprise or large team environments
- Value code readability and maintainability
- Want rich, AI-friendly documentation (guides, examples, prompt helpers)
- Have team members with varying skill levels
- Conduct frequent code reviews
- Are building or maintaining a design system
- Prioritize long-term maintainability over brevity

### **Lagunite's Philosophy**

We believe that **code is read more often than it is written**. In enterprise environments where:
- Multiple developers collaborate on the same codebase
- Code reviews are frequent and thorough
- Junior developers need to understand existing code quickly
- Projects have long lifespans and multiple maintainers

...clarity becomes more valuable than brevity.

---

## 💡 Design Philosophy

### **Atomic Utilities + Descriptive Naming**

Lagunite combines the power of atomic utilities with the clarity of descriptive naming:

```css
/* Atomic utilities for maximum flexibility */
.border-w-2          /* border-width: 2px */
.border-solid        /* border-style: solid */
.border-color-primary /* border-color: var(--color-primary) */

/* Convenient shortcuts when you need speed */
.border              /* 2px solid primary (all-in-one) */
.bordered            /* border + border-radius */
```

### **Organized by Concept**

Every utility is organized with clear IDs for easy navigation:

```css
/* @ID: #03-06-01 - Container Base */
/* @ID: #03-06-02 - Container Sizes */
/* @ID: #03-06-03 - Container Fluid */
```

### **Responsive Design Made Easy**

Media queries are grouped with their base styles—not scattered at the end of files:

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

## 📦 What's Included

### **Complete Utility System**
- ✅ Typography & Text utilities
- Responsive breakpoints

---

## 🏁 Getting Started

> **Note:** Lagunite 2.0 is currently in active development. The library will be available on npm soon.

### **Installation (Coming Soon)**

```bash
npm install lagunite@next
```

### **Import in your project**

```javascript
import 'lagunite/dist/lagunite.css';
```

### **Quick Example**

```html
<div class="container-m padd-v-l">
  <h1 class="font-xl font-bold color-text-primary marg-b-m">
    Welcome to Lagunite
  </h1>
  
  <div class="grid g-cols-3 g-gap-m">
    <div class="border-r-l padd-m bg-primary-light">
      <h3 class="font-m font-semibold">Readable</h3>
      <p class="font-s color-text-secondary">
        Class names you can understand
      </p>
    </div>
    
    <div class="border-r-l padd-m bg-success-light">
      <h3 class="font-m font-semibold">Flexible</h3>
      <p class="font-s color-text-secondary">
        Atomic utilities for control
      </p>
    </div>
    
    <div class="border-r-l padd-m bg-warning-light">
      <h3 class="font-m font-semibold">Enterprise</h3>
      <p class="font-s color-text-secondary">
        Built for teams
      </p>
    </div>
  </div>
</div>
```

---

## 🗺️ Roadmap

### **Phase 1: Core Consolidation** (Current)
- ✅ Complete utility system
- ✅ Design token system
- ⏳ Essential components (buttons, cards, forms)
- ⏳ Comprehensive documentation site

### **Phase 2: Tooling & Distribution** (Q1 2026)
- Build CLI
- NPM package publication
- VS Code snippets
- CSS purging tool

### **Phase 3: Ecosystem Growth** (Q2 2026)
- React/Vue/Svelte wrappers
- Component library expansion
- Community building
- Enterprise support program

---

## 🤝 Contributing

Lagunite is in active development and we welcome contributions! Whether you're fixing bugs, improving documentation (guides, examples, translations), or proposing new features—we'd love to have you.

---

## 📄 License

MIT License - feel free to use Lagunite in your projects, commercial or otherwise.

---

## 🌟 Built for Teams, By Teams

Lagunite was created by developers who understand the challenges of working in large, multilingual teams. We believe that code clarity is not a luxury—it's a necessity for sustainable software development.

**Join us in building a better CSS framework for the enterprise world.**

[Documentation](./docs) • [GitHub](https://github.com/arielivandiaz/lagunite) • [Discussions](https://github.com/arielivandiaz/lagunite/discussions)