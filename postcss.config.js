// postcss.config.js
export default {
  plugins: {
    // Une todos los @import en un solo archivo. Es lo primero que debe correr.
    'postcss-import': {},
    // Nos permite usar sintaxis moderna como anidación de CSS.
    'postcss-preset-env': {
      stage: 1, // Usamos features bastante modernas.
      features: {
        'nesting-rules': true, // ¡La clave para escribir CSS más limpio!
      },
    },
    // Añade los prefijos de navegador necesarios.
    'autoprefixer': {},
    // Minifica el CSS solo cuando corremos `npm run build`.
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}),
  },
};