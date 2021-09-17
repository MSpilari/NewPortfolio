import { isClientSide } from '../../utils/isClientSide'

describe('Client Side Function', () => {
	it('Should be able to return a boolean', () => {
		const value = isClientSide()

		expect(typeof value === 'boolean').toBeTruthy()
	})
})
