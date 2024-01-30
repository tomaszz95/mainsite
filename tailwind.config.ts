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
				primary: '#121a26',
				secondary: '#f5fbef',
				navigation: '#101322',
				greylish: '#dfdbdb',
				hightlight: '#27c80f',
				hightlightSecond: '#b70cc7',
			},
		},
	},
	plugins: [],
}

export default config
