import { join } from 'path';
import skeleton from '@skeletonlabs/skeleton/tailwind/skeleton.cjs';
import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config}*/
const config = {
	darkMode: 'class',
	content: [ './src/**/*.{html,js,svelte,ts}', join(require.resolve('@skeletonlabs/skeleton'), '../**/*.{html,js,svelte,ts}') ],

	theme: {
		extend: {}
	},

	plugins: [ ...skeleton(), daisyui ]
};

module.exports = config;
