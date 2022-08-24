// Remember to import the mocks before the element you want to test/render
import '../../../tests/mocks/matchMedia.mock'
import { Header } from './index'
import { render } from '@testing-library/react'

describe('Header tests', () => {
	it('Should have a Mobile and Desktop logos', () => {
		const { getByAltText } = render(<Header />)

		expect(getByAltText('Logo MSpilari Mobile')).toBeInTheDocument()
		expect(getByAltText('Logo MSpilari Desktop')).toBeInTheDocument()
	})

	it('Should have three links to switch language, github and linkedin', () => {
		const { getAllByRole } = render(<Header />)

		const AllButtons = getAllByRole('listitem').map(listItem => listItem.title)

		expect(AllButtons.includes('Switch language')).toBeTruthy()
		expect(AllButtons.includes('Github')).toBeTruthy()
		expect(AllButtons.includes('LinkedIn')).toBeTruthy()
	})

	it('Should have five Link buttons rendered on the screen', () => {
		const { getAllByTestId } = render(<Header />)

		const AllButtons = getAllByTestId('NavLink')

		expect(AllButtons).toHaveLength(5)
	})
})
