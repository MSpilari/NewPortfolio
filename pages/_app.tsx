import '../src/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { AuthenticationProvider } from '../src/context/authentication'
import { LanguageProvider } from '../src/context/language'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<AuthenticationProvider>
			<LanguageProvider>
				<Head>
					<title>MSpilari | FullStack Developer</title>
					<meta
						name='description'
						content='Matheus Bernardes Spilari, MSpilari, FullStack Developer, portfólio para demonstrar as tecnologias que sei utilizar'
					/>
					<link rel='icon' href='/Logo.png' />
				</Head>
				<Component {...pageProps} />
			</LanguageProvider>
		</AuthenticationProvider>
	)
}

export default MyApp
