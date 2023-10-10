import { defineConfig } from 'astro/config'
import { qrcode } from 'vite-plugin-qrcode'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
    integrations: [tailwind()],
    plugins: [qrcode()],
})
