// src/lagunite.js
//
// Entry point del bundle JS de Lagunite (Vite lib-mode).
// Mirror del rol que cumple src/lagunite.css para la parte de estilos:
// importa los estilos y re-exporta los modulos JS por capas.
//
// Modos de uso:
//   1) ESM manual:   import { PickerWheel } from 'lagunite';
//                    new PickerWheel(el);
//   2) ESM auto:     import 'lagunite';
//                    // todos los .picker-wheel del DOM se instancian solos
//   3) UMD <script>: <script src="dist/lagunite.umd.cjs"></script>
//                    window.Lagunite.PickerWheel, etc.
//
// Para desactivar el auto-init (tests, SSR, control manual):
//   globalThis.LAGUNITE_NO_AUTO_INIT = true;  // antes del import
//

// 1. CSS (Vite lo compila a dist/lagunite.css)
import './lagunite.css';

// 2. Utils genericos DOM
export * from './js/utils/dom.js';

// 3. Componentes por capa
import { PickerWheel, initPickerWheels } from './js/06-molecules/14-picker-wheel.js';
export { PickerWheel, initPickerWheels };

// 4. Auto-init: corre una vez el DOM esta listo.
//    Los modulos de componente NO tienen side-effects al importarse
//    (eso vive aca, en el entry) — asi el tree-shaking ESM funciona.
if (typeof document !== 'undefined' && !globalThis.LAGUNITE_NO_AUTO_INIT) {
  const runAutoInit = () => {
    initPickerWheels();
    // (proximos componentes: sumar aca sus init*)
  };
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runAutoInit);
  } else {
    runAutoInit();
  }
}
