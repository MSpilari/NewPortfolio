import styled from 'styled-components'
import DefaultPage from '../src/components/DefaultPage'
import PageTitle from '../src/components/Titles'

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

const Info = styled.p`
	color: ${({ theme }) => theme.colors.text};
`

const Skills = () => {
	return (
		<DefaultPage>
			<div>
				<PageTitle text={'Habilidades & Experiência'} />
				<Info>
					Possuo mais conhecimento com o FrontEnd.
					<br />
					<br />
					HTML, CSS, SASS, Styled Components, Javascript, Typescript, Node,
					Next, Python.
					<br />
					Construindo pequenas e médias aplicações para a Web principalmente com
					React, utilizando também animações, layouts interativos com o conceito
					Mobile first e Single Page Application(SPA).
					<br />
					<br />
					Também possuo uma experiência no Backend, construindo APIs no padrão
					RESTful/REST, utilizando DBs como PostgreSQL ou MongoDB.
					<br />
					<br />
					Visite meu{' '}
					<a href='https://www.linkedin.com/in/matheus-bernardes-spilari-2b8068188/'>
						Linkedin
					</a>{' '}
					para entrar em contato.
				</Info>
			</div>
			<div>
				<i>
					<IoLogoHtml5 />
				</i>
				<i>
					<IoLogoCss3 />
				</i>
				<i>
					<SiStyledComponents />
				</i>
				<i>
					<IoLogoJavascript />
				</i>
				<i>
					<SiTypescript />
				</i>
				<i>
					<IoLogoPython />
				</i>
				<i>
					<IoLogoNodejs />
				</i>
				<i>
					<SiReact />
				</i>
				<i>
					<SiNextDotJs />
				</i>
				<i>
					<SiPostgresql />
				</i>
				<i>
					<SiMongodb />
				</i>
			</div>
		</DefaultPage>
	)
}

export default Skills
