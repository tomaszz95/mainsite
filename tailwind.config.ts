import type { Config } from 'tailwindcss'

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		colors: {
			primary: '#141414',
			darkGrey: '#1f1f1f',
			secondary: '#f5fbef',
			greylish: '#dfdbdb',
			hightlight: '#27c80f',
		},
	},
	plugins: [],
}
export default config
