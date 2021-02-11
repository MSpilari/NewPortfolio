import Lottie from 'react-lottie'

import DefaultPage from '../src/components/DefaultPage'
import CustomTitle from '../src/components/Titles'
import animationData from '../src/assets/about.json'
import styled from 'styled-components'

const AboutWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 40%;
	text-align: center;

	@media screen and (max-width: 800px) {
		width: 100%;
	}
`
const AnimationDiv = styled.div`
	@media screen and (max-width: 768px) {
		display: none;
	}
`

const Info = styled.p`
	color: ${({ theme }) => theme.colors.text};
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
					Amante da tecnologia, sempre buscando conhecer o que está em alta no
					mercado e o mais usadas pelas grandes empresas do ramo.
					<br />
					<br />
					Uma pessoa muito organizada, pragmática, resolutor de problemas,
					autodidata que gosta de se atentar aos detalhes. Apaixonado por
					videogames, por isso conheci a programação. Sou fã de computação,
					desde pequeno desmontava alguns computadores. Hoje monto os meus para
					o trabalho e para minha diversão.
					<br />
					<br />
					Curioso por todas as tecnologias, mas atualmente trabalhando mais com
					Javascript no Frontend e no Backend.
				</Info>
			</AboutWrapper>
			<AnimationDiv>
				<Lottie
					options={defaultOptions}
					width={'90%'}
					isClickToPauseDisabled={true}
				/>
			</AnimationDiv>
		</DefaultPage>
	)
}

export default About
