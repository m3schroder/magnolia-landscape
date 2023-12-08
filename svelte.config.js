import preprocess from "svelte-preprocess";
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/kit/vite';
import path from 'path'
import { mdsvex } from 'mdsvex'; // 👈 import mdsvex 
import mdsvexConfig from './mdsvex.config.js';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	extensions: ['.svelte', ...mdsvexConfig.extensions],
	preprocess: [
		vitePreprocess(),
		preprocess({ postcss: true }),
		mdsvex(mdsvexConfig) // 👈 add mdsvex with mdsvex configuration options

	],

	kit: {
		adapter: adapter(),
		alias: {
			"@lib": path.resolve("./src/lib"),
			"@ui": path.resolve("./src/components"),
			"@src": path.resolve("./src"),
			"@static": path.resolve("./src/static"),
		}
	}
};

export default config;
