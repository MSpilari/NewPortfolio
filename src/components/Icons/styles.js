import styled from 'styled-components'

export const StyledIcon = styled.i`
	margin: 20px 0;
	color: ${({ theme }) => theme.colors.text};
	font-size: 28px;

	@media screen and (max-width: 768px) {
		margin: 0 20px;
	}
`

export const StyledIconText = styled.p`
	font-size: 15px;
	color: ${({ theme }) => theme.colors.text};
	position: absolute;
	top: 50;
	opacity: 0;
	pointer-events: none;
`

export const StyledAnchor = styled.a`
	position: relative;
	text-decoration: none;
	align-items: center;
	display: flex;
	flex-direction: column;
	cursor: pointer;
	justify-content: center;

	&:hover i {
		color: ${({ theme }) => theme.colors.hoverButtons};
		opacity: 0;
		transition: 1s linear;
	}
	&:hover p {
		color: ${({ theme }) => theme.colors.hoverButtons};
		opacity: 1;
		transition: 1s linear;
	}

	@media screen and (min-width: 768px) {
		width: 60px;
	}

	@media screen and (max-width: 768px) {
		height: 60px;
	}
`
