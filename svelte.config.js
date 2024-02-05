import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import adapter from "@sveltejs/adapter-netlify";

// extended.mjs
/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      "@/*": "./path/to/lib/*"
    }
  },

  preprocess: [vitePreprocess({})],
};

export default config;
