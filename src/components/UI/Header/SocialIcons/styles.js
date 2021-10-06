import styled from 'styled-components'

const StyledSocialIcon = styled.i`
	color: ${({ theme }) => theme.colors.text};
	margin: 5px 0;
	font-size: 20px;

	&:hover {
		color: ${({ theme }) => theme.colors.hoverButtons};
	}

	@media screen and (max-width: 768px) {
		margin: 0 5px;
	}
`

export { StyledSocialIcon }
