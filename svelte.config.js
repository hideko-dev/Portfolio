import { vitePreprocess } from "@sveltejs/vite-plugin-svelte"
import adapter from "@sveltejs/adapter-cloudflare"

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      include: ['/*'],
    }),
    alias: {
      "@/*": "./path/to/lib/*"
    }
  },

  preprocess: [vitePreprocess({})],
}

export default config
