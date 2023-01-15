const config = {
	content: [
		"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
		"./src/**/*.{html,js,svelte,ts}",
	],
	important: true,
	theme: {
		extend: {
			borderWidth: {
				"1": "1px"
			},
			boxShadow: {
				neu: '2px 3px 0px #96969625',
			},
			colors: {
				"primary": {
					DEFAULT: "#ad8428"
				},
				"secondary": {
					DEFAULT: "#AEAEAE",
					dark: "#A1A1A1"
				},
				"paper": {
					DEFAULT: "#EAEAEA"
				},
			}
		}
	},
	plugins: [
		require('flowbite/plugin')
	],
	darkMode: 'class',
};

module.exports = config;