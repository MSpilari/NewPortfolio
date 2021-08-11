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

import {
	IconsDiv,
	SkillIcon,
	CardBack,
	CardFliper,
	CardFront,
	CardInner,
	SpanIcon
} from './styles'

const IconsFunc = () => {
	const allLogos = [
		{ icon: IoLogoHtml5, label: 'HTML' },
		{ icon: IoLogoCss3, label: 'CSS' },
		{ icon: SiStyledComponents, label: 'Styled-Components' },
		{ icon: IoLogoJavascript, label: 'Javascript' },
		{ icon: SiTypescript, label: 'Typescript' },
		{ icon: IoLogoPython, label: 'Python' },
		{ icon: IoLogoNodejs, label: 'NodeJs' },
		{ icon: SiReact, label: 'ReactJs' },
		{ icon: SiNextDotJs, label: 'NextJs' },
		{ icon: SiPostgresql, label: 'Postgresql' },
		{ icon: SiMongodb, label: 'MongoDb' }
	]

	return (
		<IconsDiv>
			{allLogos.map((Logo, index) => {
				return (
					<CardFliper key={index}>
						<CardInner>
							<CardFront>
								<SkillIcon>
									<Logo.icon />
								</SkillIcon>
							</CardFront>
							<CardBack>
								<SpanIcon>{Logo.label}</SpanIcon>
							</CardBack>
						</CardInner>
					</CardFliper>
				)
			})}
		</IconsDiv>
	)
}

export default IconsFunc
