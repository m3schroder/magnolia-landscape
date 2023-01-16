const config = {
	content: [
		"./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
		"./src/routes/**/*.{html,js,svelte,ts}",
		"./src/components/**/*.{html,js,svelte,ts}"
	],
	theme: {
		extend: {
			keyframes: {
				rotate180: {
					'0%': { transform: 'rotate(180deg)' },
					'100%': { transform: 'rotate(0deg)' }
				}
			},
			animation: {
				'rotate-180': 'rotate180 300ms linear infinite'
			},
			borderWidth: {
				"1": "1px"
			},
			boxShadow: {
				neu: '2px 3px 0px #96969625',
			},
			colors: {
				// "primary": {
				// 	DEFAULT: "#ad8428"
				// },
				"secondary": {
					DEFAULT: "#A1A1A1",
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