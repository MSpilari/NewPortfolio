import DefaultPage from '../src/components/DefaultPage'
import { ContactForm, Animation } from '../src/components/pages/Contact'

const About = () => {
	return (
		<DefaultPage firstChild={<ContactForm />} secondChild={<Animation />} />
	)
}

export default About
