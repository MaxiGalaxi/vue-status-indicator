import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

export default defineConfig({
  plugins: [vue()],
  test: {
    environment: "jsdom",
    globals: true,
    include: ["tests/**/*.test.js"],
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.js"),
      name: "Vue3StatusIndicator",
      fileName: (format) => `status-indicator.${format}.js`,
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue",
        },
        exports: "named",
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === "style.css") return "status-indicator.css";
          return assetInfo.name;
        },
      },
    },
    cssCodeSplit: false,
  },
});
