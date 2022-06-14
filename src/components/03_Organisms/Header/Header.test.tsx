import { Header } from './index'
import { render } from '@testing-library/react'

describe('Header tests', () => {
	Object.defineProperty(window, 'matchMedia', {
		writable: true,
		value: jest.fn().mockImplementation(query => ({
			matches: false,
			media: query,
			onchange: null,
			addListener: jest.fn(), // deprecated
			removeListener: jest.fn(), // deprecated
			addEventListener: jest.fn(),
			removeEventListener: jest.fn(),
			dispatchEvent: jest.fn()
		}))
	})

	it('Should have a logo', () => {
		const { getByAltText } = render(<Header />)

		expect(getByAltText('Logo MSpilari')).toBeInTheDocument()
	})

	it('Should have three links to switch language, github and linkedin', () => {
		const { getAllByRole } = render(<Header />)

		const AllButtons = getAllByRole('listitem').map(listItem => listItem.title)

		expect(AllButtons.includes('Switch language')).toBeTruthy()
		expect(AllButtons.includes('Github')).toBeTruthy()
		expect(AllButtons.includes('LinkedIn')).toBeTruthy()
	})

	it('Should have five Link buttons rendered on the screen', () => {
		const { getAllByRole } = render(<Header />)

		const AllButtons = getAllByRole('link')

		console.log(AllButtons)
	})
})
