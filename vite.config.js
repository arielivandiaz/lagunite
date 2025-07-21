// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  return {
    build: {
      minify: mode === "production",

      lib: {
        entry: resolve(__dirname, "src/lagunite.js"),
        name: "Lagunite",
        fileName: "lagunite",
      },
      rollupOptions: {
        output: {
          assetFileNames: (assetInfo) => {
            if (assetInfo.name === "style.css") {
              return "lagunite.css";
            }
            return assetInfo.name;
          },
        },
      },
    },
  };
});
