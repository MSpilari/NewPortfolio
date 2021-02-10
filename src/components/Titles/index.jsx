import styled from 'styled-components'

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

const CustomCharacters = ({ text }) => {
	const customizedChars = text.split('').map(char => {
		return char === ',' ? (
			<>
				<FontStyled>{char}</FontStyled>
				<br />
			</>
		) : (
			<FontStyled>{char}</FontStyled>
		)
	})

	return <h1>{customizedChars}</h1>
}

export default CustomCharacters
