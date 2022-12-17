/** @type {import('vite').UserConfig} */

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: [
      { find: "@", replacement: path.join(__dirname, "/src") },
      { find: "@Firebase", replacement: path.join(__dirname, "/firebase") },
      {
        find: "@Auth",
        replacement: path.join(__dirname, "/src/components/Auth"),
      },
      { find: "@Style", replacement: path.join(__dirname, "/src/scss") },
    ],
  },
});
