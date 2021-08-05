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
