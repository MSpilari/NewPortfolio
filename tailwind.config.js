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
				theNautigal: ['var(--font-the-nautigal)'],
				lobster: ['var(--font-lobster)']
			},
			keyframes: {
				XFtransition: {
					'0%': {
						left: '5rem',
						width: '0px'
					},
					'100%': {
						left: '5rem',
						width: 'calc(100vw - 5rem)'
					}
				},
				XBtransition: {
					'0%': {
						left: '5rem',
						width: 'calc(100vw - 5rem)'
					},
					'100%': {
						left: '5rem',
						width: '0px'
					}
				},
				YFtransition: {
					'0%': {
						top: '5rem',
						height: '0px'
					},
					'100%': {
						top: '5rem',
						height: 'calc(100vh - 8rem)'
					}
				},
				YBtransition: {
					'0%': {
						top: '5rem',
						height: 'calc(100vw - 8rem)'
					},
					'100%': {
						top: '5rem',
						height: '0px'
					}
				}
			},
			animation: {
				XFtransition: 'XFtransition 0.3s ease-out forwards',
				XBtransition: 'XBtransition 1s ease-in-out',
				YFtransition: 'YFtransition 0.3s ease-out forwards',
				YBtransition: 'YBtransition 1s ease-in'
			}
		}
	},
	plugins: []
}
