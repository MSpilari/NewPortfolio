import { shallow } from 'enzyme'
import { defaultLanguage as Lang } from '../../providers/language'
import { ContactForm } from '../../components/pages/Contact'
import DefaultTitle from '../../components/Titles'

describe('Contact tests', () => {
	it('Should be able to render contact page', () => {
		const wrapper = shallow(<ContactForm />, {
			context: Lang
		})

		console.log(wrapper.debug())
		expect(wrapper.find('input').debug())
	})
})
