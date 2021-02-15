import styled from 'styled-components'

export const SkillIcon = styled.i`
	font-size: 50px;
	color: ${({ theme }) => theme.colors.hoverButtons};
`

export const IconsDiv = styled.div`
	display: grid;
	width: 50%;
	grid-column-gap: 5px;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	margin-left: 5px;

	@media screen and (max-width: 768px) {
		width: 100%;
		margin: 0;
	}
`
