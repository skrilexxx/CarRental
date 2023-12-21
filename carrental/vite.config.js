import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	},
	css: {
		preprocessorOptions: {
		  // If using a preprocessor like Sass, configure it here
		},
	  },
	  resolve: {
		alias: {
		  // Add your custom aliases here
		  '@': '/src',
		},
		extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.svelte'],
	  },
};

export default config;
