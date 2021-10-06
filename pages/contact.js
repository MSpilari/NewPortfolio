import DefaultPage from '../src/components/containers/DefaultPage'
import { ContactForm, Animation } from '../src/screens/Contact'

const Contact = () => {
	return (
		<DefaultPage firstChild={<ContactForm />} secondChild={<Animation />} />
	)
}

export default Contact
