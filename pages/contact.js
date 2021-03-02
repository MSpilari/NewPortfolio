import DefaultPage from '../src/components/DefaultPage'
import { ContactForm } from '../src/components/pages/Contact'

const About = () => {
	return <DefaultPage firstChild={<ContactForm />} secondChild />
}

export default About
