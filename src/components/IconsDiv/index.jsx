import { motion } from 'framer-motion'
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
			{allLogos.map((Logo, index) => {
				return (
					<SkillIcon
						key={index}
						as={motion.i}
						whileHover={{
							rotate: [0, 0, 270, 270, 0],
							borderRadius: ['0%', '20%', '50%', '50%', '0%']
						}}
					>
						<Logo />
					</SkillIcon>
				)
			})}
		</IconsDiv>
	)
}

export default IconsFunc
