import Link from 'next/link'
import styled from 'styled-components'
import Lottie from 'react-lottie'

import DefaultPage from '../src/components/DefaultPage'
import Button from '../src/components/Button'
import CustomCharacters from '../src/components/Titles'
import animationData from '../src/assets/laptopworking.json'

const TextDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 40%;

	& h4 {
		align-self: flex-end;
		color: ${({ theme }) => theme.colors.crazyBlue};
		margin: 0 0 10px 0;
	}

	@media screen and (max-width: 768px) {
		width: 95%;
		margin: 0 auto;
	}
`

const AnimationDiv = styled.div`
	width: 42%;
	@media screen and (max-width: 768px) {
		display: none;
	}
`

export default function Home() {
	const mytext = 'Olá, eu sou o Matheus, Web Developer.'

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
			<TextDiv>
				<CustomCharacters text={mytext} />
				<h4>FullStack Developer</h4>
				<Link href='/contact'>
					<Button label='Entrar em contato !' />
				</Link>
			</TextDiv>
			<AnimationDiv>
				<Lottie options={defaultOptions} isClickToPauseDisabled={true} />
			</AnimationDiv>
		</DefaultPage>
	)
}
