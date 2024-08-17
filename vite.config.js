// vite.config.js
import { defineConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

export default defineConfig({
	plugins: [sveltekit()],
	server: {
		fs: {
			allow: ['C:/Ayushkumar48/ALL PROGRAMMING !!!!!!!!!!/Windows/Projects/Torbin/public']
		}
	}
});
