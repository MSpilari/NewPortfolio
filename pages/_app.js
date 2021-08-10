import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import { LanguageProvider } from '../src/providers/language'
import GlobalStyle from '../globalStyles'

import db from '../db.json'

function MyApp({ Component, pageProps }) {
	return (
		<LanguageProvider>
			<ThemeProvider theme={db.theme}>
				<GlobalStyle />
				<Head>
					<meta property='og:title' content='MSpilari | FullStack Developer' />
					<meta property='og:description' content='MSpilari portfolio' />
					<meta
						property='og:url'
						content='https://mspilariportfolio.vercel.app/'
					/>
					<meta
						property='og:image'
						content='blob:https://vercel.com/c2a44192-7b80-4fc3-904b-bb10ce4c4a7d'
					/>

					<title>MSpilari | FullStack Developer</title>

					<link rel='icon' href='/LogoYB.svg' />

					<link rel='preconnect' href='https://fonts.gstatic.com' />
					<link
						href='https://fonts.googleapis.com/css2?family=Hammersmith+One&display=swap'
						rel='stylesheet'
					/>
				</Head>
				<Component {...pageProps} />
			</ThemeProvider>
		</LanguageProvider>
	)
}

export default MyApp
