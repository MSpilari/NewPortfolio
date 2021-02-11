import Link from 'next/link'
import styled from 'styled-components'
import Lottie from 'react-lottie'

import DefaultPage from '../src/components/DefaultPage'
import Button from '../src/components/Button'
import CustomCharacters from '../src/components/Titles'
import animationData from '../src/assets/laptopworking.json'

const TextDiv = styled.div`
	margin-left: 20px;
	display: flex;
	flex-direction: column;
	align-items: center;

	& h4 {
		align-self: flex-end;
		color: ${({ theme }) => theme.colors.crazyBlue};
		margin: 0 0 10px 0;
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
