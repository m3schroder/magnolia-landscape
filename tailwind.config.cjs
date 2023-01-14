const config = {
	content: [
		"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
		"./src/**/*.{html,js,svelte,ts}",
	],
	important: true,
	theme: {
	},
	plugins: [
		require('flowbite/plugin')
	],
	darkMode: 'class',
};

module.exports = config;