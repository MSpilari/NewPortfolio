import styled from 'styled-components'

export const SkillIcon = styled.i`
	font-size: 50px;
	display: flex;
	justify-self: center;
	align-self: center;
	border: 1px solid ${({ theme }) => theme.colors.text};
	color: ${({ theme }) => theme.colors.text};
	padding: 10px;
	transition: 0.4s linear;

	&:hover {
		border: 1px solid ${({ theme }) => theme.colors.hoverButtons};
		color: ${({ theme }) => theme.colors.hoverButtons};
	}
`

export const IconsDiv = styled.div`
	display: grid;
	width: 90%;
	gap: 5px;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	margin-left: 5px;

	@media screen and (max-width: 768px) {
		width: 100%;
		margin: 0;
	}
`
