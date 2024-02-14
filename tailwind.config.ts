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
				primary: '#0e0e12',
				secondary: '#f5fbef',
				main: '#2a2c2e',
				greylish: '#dfdbdb',
				hightlight: '#32AA11',
				hightlightHover: '#107f0f',
			},
		},
	},
	plugins: [],
}

export default config
