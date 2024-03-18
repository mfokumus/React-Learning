/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { jsx } from "@emotion/react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),jsx()],
  test: {
    globals: true,
    environment: "jsdom",
    css: true,
    setupFiles: "./src/test/setupTests.js",
  },
});
