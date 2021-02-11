import Lottie from 'react-lottie'

import DefaultPage from '../src/components/DefaultPage'
import CustomTitle from '../src/components/Titles'
import animationData from '../src/assets/laptopworking.json'
import styled from 'styled-components'

const AboutWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 40%;
`

const Info = styled.p`
	color: ${({theme}) => theme.colors.text};
`

const About = () => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	}

	return (
		<DefaultPage>
			<AboutWrapper>
				<CustomTitle text='Sobre Mim' />
				<Info>
					Amante da tecnologia, sempre buscando conhecer as tecnologias que
					estão em alta no mercado e aquelas mais usadas pelas grandes empresas
					do ramo.
					<br />
					<br />
					Uma pessoa muito organizada, pragmática, resolutor de problemas,
					auto-didata que gosta de se atentar aos detalhes. Apaixonado por
					videogames, por isso conheci a programação. Sou fã de computação,
					desde pequeno desmontava alguns computadores. Hoje monto os meus para
					o trabalho e para minha diversão.
					<br />
					<br />
					Curioso por todas as tecnologias, mas atualmente trabalhando mais com
					Javascript no Frontend e no Backend.
				</Info>
			</AboutWrapper>
			<div>
				<Lottie
					options={defaultOptions}
					width={'90%'}
					isClickToPauseDisabled={true}
				/>
			</div>
		</DefaultPage>
	)
}

export default About
