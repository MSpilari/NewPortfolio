import CustomTitle from '../../Titles'
import { InfoDiv, Info } from './styles'

const SkillsText = () => {
	return (
		<InfoDiv>
			<CustomTitle text={'Habilidades & Experiência'} />
			<Info>
				Possuo mais conhecimento com o FrontEnd.
				<br />
				<br />
				HTML, CSS, SASS, Styled Components, Javascript, Typescript, Node, Next,
				Python.
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
	)
}

export { SkillsText }
