import { IconsDiv, SkillIcon } from './styles'

import {
	IoLogoHtml5,
	IoLogoCss3,
	IoLogoJavascript,
	IoLogoNodejs,
	IoLogoPython
} from 'react-icons/io'

import {
	SiTypescript,
	SiNextDotJs,
	SiStyledComponents,
	SiMongodb,
	SiPostgresql,
	SiReact
} from 'react-icons/si'

const IconsFunc = () => {
	const allLogos = [
		IoLogoHtml5,
		IoLogoCss3,
		SiStyledComponents,
		IoLogoJavascript,
		SiTypescript,
		IoLogoPython,
		IoLogoNodejs,
		SiReact,
		SiNextDotJs,
		SiPostgresql,
		SiMongodb
	]

	return (
		<IconsDiv>
			{allLogos.map(Logo => {
				return (
					<SkillIcon>
						<Logo />
					</SkillIcon>
				)
			})}
		</IconsDiv>
	)
}

export default IconsFunc
