import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../globalStyles'

import db from '../db.json'

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={db.theme}>
			<GlobalStyle />
			<Head>
				<title>MSpilari | FullStack Developer</title>
				<link rel='icon' href='/LogoYB.svg' />
				<script
					defer
					src='https://kit.fontawesome.com/2dc936f8ea.js'
					crossorigin='anonymous'
				></script>
			</Head>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}

export default MyApp
