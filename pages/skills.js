import DefaultPage from '../src/components/containers/DefaultPage'
import { SkillsText } from '../src/screens/Skills'
import IconsFunc from '../src/screens/Skills/IconsDiv'

const Skills = () => {
	return <DefaultPage firstChild={<SkillsText />} secondChild={<IconsFunc />} />
}

export default Skills
