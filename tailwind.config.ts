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
				main: '#212431',
				greylish: '#dfdbdb',
				hightlight: '#109923',
				hightlightHover: '#106f0f',
			},
		},
	},
	plugins: [],
}

export default config
