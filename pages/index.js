import Link from 'next/link'
import styled from 'styled-components'
import NavBar from '../src/components/Header'

const MainWrapper = styled.main`
	width: 95%;
	height: 100%;
	display: flex;
	align-items: center;
	align-self: flex-end;
`

const FontStyled = styled.span`
	font-size: 50px;
	font-weight: 900;
	color: ${({ theme }) => theme.colors.text};
	padding: 1px;

	transition: all 0.5s linear;

	&:hover {
		color: ${({ theme }) => theme.colors.hoverButtons};
		font-size: 52px;
	}
`

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

const StyledButton = styled.button`
	background-color: transparent;
	border: 3px solid ${({ theme }) => theme.colors.crazyBlue};
	padding: 20px 10px;
	font-size: 18px;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.crazyBlue};
	cursor: pointer;

	margin: 20px 0;
`

export default function Home() {
	const mytext = 'Olá, eu sou o Matheus, Web Developer.'

	return (
		<>
			<NavBar />
			<MainWrapper>
				<TextDiv>
					<h1>
						{mytext.split('').map(char =>
							char === ',' ? (
								<>
									<FontStyled>{char}</FontStyled>
									<br />
								</>
							) : (
								<FontStyled>{char}</FontStyled>
							)
						)}
					</h1>
					<h4>FullStack Developer</h4>
					<Link href='/contact'>
						<StyledButton>Entrar em Contato !</StyledButton>
					</Link>
				</TextDiv>
			</MainWrapper>
		</>
	)
}
