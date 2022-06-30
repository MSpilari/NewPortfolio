import { render, screen } from '@testing-library/react'
import { CarouselSlider } from './index'
import { projectsInfoMock } from '../../../tests/mocks/projectsInfo.mock'

describe('Carousel Slider tests', () => {
	beforeEach(() => {
		render(<CarouselSlider projectsInfo={projectsInfoMock} />)
	})

	it('Should be able to display three projects on the screen', () => {
		expect(screen.getByText('Project One')).toBeInTheDocument()
		expect(screen.getByText('Project Two')).toBeInTheDocument()
		expect(screen.getByText('Project Three')).toBeInTheDocument()
	})
})
