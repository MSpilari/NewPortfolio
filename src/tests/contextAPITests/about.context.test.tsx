import '../mocks/matchMedia.mock'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { Header } from '../../components/03_Organisms/Header'
import { AboutText } from '../../components/03_Organisms/AboutText'
import { LanguageProvider } from '../../context/language'

describe('Tests using Context API at the About Page', () => {
	beforeEach(() =>
		render(
			<LanguageProvider>
				<Header />
				<AboutText />
			</LanguageProvider>
		)
	)

	afterEach(() => cleanup())

	it('Should be able to show the Title of the page in portuguese', () => {
		expect(screen.getByText('Sobre Mim')).toBeTruthy()
	})

	it('Should be able to change the language of the AboutText title after click a button', () => {
		const buttonSwitchLanguage = screen.getByTitle('Language button')

		fireEvent.click(buttonSwitchLanguage)

		expect(screen.queryByText('Sobre Mim')).toBeFalsy()

		expect(screen.getByText('About Me')).toBeTruthy()
	})
})
