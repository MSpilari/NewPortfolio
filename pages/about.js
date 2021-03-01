import DefaultPage from '../src/components/DefaultPage'
import { AboutText, Animation } from '../src/components/pages/About'

const About = () => {
	return <DefaultPage firstChild={<AboutText />} secondChild={<Animation />} />
}

export default About
