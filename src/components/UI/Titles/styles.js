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

export { FontStyled }
