import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { compression } from 'vite-plugin-compression2';
import { VitePWA } from 'vite-plugin-pwa';
import manifestForPlugin from './src/manifest'
// https://vitejs.dev/config/

export default defineConfig({
	plugins: [react(), compression(), VitePWA(manifestForPlugin)],
});
