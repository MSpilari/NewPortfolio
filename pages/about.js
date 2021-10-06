import DefaultPage from '../src/components/containers/DefaultPage'
import { AboutText, Animation } from '../src/screens/About'

const About = () => {
	return <DefaultPage firstChild={<AboutText />} secondChild={<Animation />} />
}

export default About
