import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#101022',
				secondary: '#f5fbef',
				main: '#121a26',
				greylish: '#dfdbdb',
				hightlight: '#00bd00',
				hightlightHover: '#109f0f',
				hightlightSecond: '#b70cc7',
				hightlightSecondHover: '#890d94',
			},
		},
	},
	plugins: [],
}

export default config
