import Link from 'next/link'
import styled from 'styled-components'
import DefaultPage from '../src/components/DefaultPage'
import Button from '../src/components/Button'
import CustomCharacters from '../src/components/Titles'

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

	return (
		<DefaultPage>
			<TextDiv>
				<CustomCharacters text={mytext} />
				<h4>FullStack Developer</h4>
				<Link href='/contact'>
					<Button label='Entrar em contato !' />
				</Link>
			</TextDiv>
		</DefaultPage>
	)
}
