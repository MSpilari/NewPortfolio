import React from 'react'
import DefaultPage from '../components/DefaultPage'
import { shallow } from 'enzyme'

describe('Testing if enzyme is working', () => {
	const component = shallow(<DefaultPage />)

	expect(component.find('div')).toHaveLength(2)
})
