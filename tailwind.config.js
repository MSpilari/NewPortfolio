const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	mode: 'jit',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./pages/*.{js,ts,jsx,tsx}',
		'./src/components/**/*.{js,ts,jsx,tsx}',
		'./src/components/**/**/*.{js,ts,jsx,tsx}'
	],
	theme: {
		screens: {
			xxxs: '320px',
			xxs: '375px',
			xs: '425px',
			...defaultTheme.screens
		},
		extend: {
			fontFamily: {
				theNautigal: ['The Nautigal', 'cursive'],
				pushster: ['Pushster', 'cursive']
			}
		}
	},
	plugins: []
}
