import { defineConfig } from "astro/config";

import react from "@astrojs/react";
export default defineConfig({
  vite: {
    build: {
      minify: false,
     
    },
  },
  integrations: [react()],
});