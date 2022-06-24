import '../mocks/matchMedia.mock'
import { cleanup, fireEvent, render, screen } from '@testing-library/react'
import { Header } from '../../components/03_Organisms/Header'
import { SkillsText } from '../../components/03_Organisms/SkillsText'
import { LanguageProvider } from '../../context/language'

describe('Tests using Context API at the Skills Page', () => {
	beforeEach(() =>
		render(
			<LanguageProvider>
				<Header />
				<SkillsText />
			</LanguageProvider>
		)
	)

	afterEach(() => cleanup())

	it('Should be able to show the Title of the page in portuguese', () => {
		expect(screen.getByText('Habilidades & Experiência')).toBeTruthy()
	})

	it('Should be able to change the language of the SkillsText title after click a button', () => {
		const buttonSwitchLanguage = screen.getByTitle('Language button')

		fireEvent.click(buttonSwitchLanguage)

		expect(screen.queryByText('Habilidades & Experiência')).toBeFalsy()

		expect(screen.getByText('Skills & Experience')).toBeTruthy()
	})
})
