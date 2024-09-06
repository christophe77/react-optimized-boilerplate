import { VitePWAOptions } from 'vite-plugin-pwa';

const manifestForPlugin: Partial<VitePWAOptions> = {
	registerType: 'prompt',
    injectRegister : 'script-defer',
	includeAssets: ['/icons/favicon.ico', '/icons/apple-touch-icon.png'],
	manifest: {
        "theme_color": "#8936FF",
        "background_color": "#2EC6FE",
        "icons": [
            {
                "purpose": "maskable",
                "sizes": "512x512",
                "src": "/icons/icon512_maskable.png",
                "type": "image/png"
            },
            {
                "purpose": "any",
                "sizes": "512x512",
                "src": "/icons/icon512_rounded.png",
                "type": "image/png"
            }
        ],
        "orientation": "any",
        "display": "standalone",
        "lang": "fr-FR",
        "name": "React Optimized",
        "short_name": "React Optimized",
        "description": "React boilerplate optimized for SEO & performance"
    }
};
export default manifestForPlugin;
