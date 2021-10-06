import styled from 'styled-components'

const TextDiv = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;

	@media screen and (max-width: 768px) {
		width: 95%;
		margin: 0 auto;
	}
`

const Role = styled.h4`
	align-self: flex-end;
	color: ${({ theme }) => theme.colors.crazyBlue};
	margin: 0 0 10px 0;
`

export { TextDiv, Role }
