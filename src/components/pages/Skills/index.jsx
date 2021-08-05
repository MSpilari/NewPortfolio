import { useContext } from 'react'
import CustomTitle from '../../Titles'
import { InfoDiv, Info } from './styles'
import { GrLinkedin } from 'react-icons/gr'
import { LanguageContext } from '../../../providers/language'

const SkillsText = () => {
	const { Lang } = useContext(LanguageContext)

	return (
		<InfoDiv>
			<CustomTitle text={Lang.SkillsTitle} />
			<Info>
				{Lang.SkillsInfo}
				{/* Possuo mais conhecimento com o FrontEnd.
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
				<a
					style={{ textDecoration: 'none', color: 'inherit' }}
					href='https://www.linkedin.com/in/matheus-bernardes-spilari-2b8068188/'
				>
					<GrLinkedin />
				</a>{' '}
				para entrar em contato. */}
			</Info>
		</InfoDiv>
	)
}

export { SkillsText }
