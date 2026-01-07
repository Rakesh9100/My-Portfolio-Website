import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
    site: 'https://rakeshroshan.netlify.app',
    integrations: [tailwind()],
    output: 'static',
    devToolbar: {
        enabled: false
    }
});