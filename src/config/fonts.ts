import { The_Nautigal, Lobster } from 'next/font/google'

const theNautigal = The_Nautigal({
	subsets: ['latin'],
	display: 'swap',
	weight: ['400', '700'],
	variable: '--font-the-nautigal'
})

const lobster = Lobster({
	subsets: ['latin'],
	display: 'swap',
	weight: '400',
	variable: '--font-lobster'
})

export { theNautigal, lobster }
