// vite.config.js
import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // Configuramos Vite para que compile en "modo librería"
    lib: {
      // El punto de entrada de nuestra librería (incluye el JS)
      entry: resolve(__dirname, 'src/lagunite.js'),
      name: 'Lagunite', // El nombre global para la versión UMD
      fileName: 'lagunite', // El nombre base de los archivos de salida
    },
    rollupOptions: {
      // Opciones avanzadas de Rollup (el bundler que usa Vite)
      output: {
        // Nos aseguramos de que el archivo CSS se llame lagunite.css
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') {
            return 'lagunite.css';
          }
          return assetInfo.name;
        },
      },
    },
  },
});