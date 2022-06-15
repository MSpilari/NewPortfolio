import type { AppProps } from 'next/app'
import Head from 'next/head'
import { AuthenticationProvider } from '../src/context/authentication'
import { LanguageProvider } from '../src/context/language'
import '../src/styles/globals.css'

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
	return (
		<AuthenticationProvider>
			<LanguageProvider>
				<Head>
					<title>MSpilari | FullStack Developer</title>

					<link rel='icon' href='/LogoYB.svg' />
				</Head>
				<Component {...pageProps} />
			</LanguageProvider>
		</AuthenticationProvider>
	)
}

export default MyApp
