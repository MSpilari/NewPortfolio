import '../mocks/matchMedia.mock'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { Header } from '../../components/03_Organisms/Header'
import { Greet } from '../../components/03_Organisms/Greet'
import { LanguageProvider } from '../../context/language'

describe('Tests using Context API at the Index Page', () => {
	beforeEach(() =>
		render(
			<LanguageProvider>
				<Header />
				<Greet />
			</LanguageProvider>
		)
	)

	afterEach(() => cleanup())

	it('Should be able to show the Greet in portuguese', () => {
		expect(screen.getByText(/Olá/i)).toBeTruthy()
	})

	it('Should be able to change the language of the Greet after click a button', () => {
		const buttonSwitchLanguage = screen.getByTitle('Language button')

		fireEvent.click(buttonSwitchLanguage)

		// Why use the queryBy ?
		// Because in this case we don't want to find nothing, and the getBy, will return an error in that case.
		expect(screen.queryByText(/Olá/i)).toBeFalsy()

		expect(screen.getByText(/Hello/i)).toBeTruthy()
	})
})
