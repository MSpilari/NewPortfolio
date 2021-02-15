import styled from 'styled-components'
import DefaultPage from '../src/components/DefaultPage'
import PageTitle from '../src/components/Titles'
import IconsFunc from '../src/components/IconsDiv'

const Info = styled.p`
	color: ${({ theme }) => theme.colors.text};
`
const InfoDiv = styled.div`
	margin-top: 60px;
	width: 45%;
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`

const Skills = () => {
	return (
		<DefaultPage>
			<InfoDiv>
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
			</InfoDiv>
			<IconsFunc />
		</DefaultPage>
	)
}

export default Skills
