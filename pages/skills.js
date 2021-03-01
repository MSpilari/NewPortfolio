import DefaultPage from '../src/components/DefaultPage'
import { SkillsText } from '../src/components/pages/Skills'
import IconsFunc from '../src/components/pages/Skills/IconsDiv'

const Skills = () => {
	return <DefaultPage firstChild={<SkillsText />} secondChild={<IconsFunc />} />
}

export default Skills
