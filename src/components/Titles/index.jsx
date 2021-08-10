import styled from 'styled-components'

const FontStyled = styled.span`
	font-size: 50px;
	font-weight: 900;
	color: ${({ theme }) => theme.colors.text};
	padding: 1px;
	cursor: pointer;

	transition: all 0.5s linear;

	&:hover {
		color: ${({ theme }) => theme.colors.hoverButtons};
	}
`

const CustomCharacters = ({ text }) => {
	const customizedChars = text.split('').map((char, index) => {
		return char === ',' ? (
			<>
				<FontStyled key={index}>{char}</FontStyled>
				<br />
			</>
		) : (
			<FontStyled key={index}>{char}</FontStyled>
		)
	})

	return <h1>{customizedChars}</h1>
}

export default CustomCharacters
