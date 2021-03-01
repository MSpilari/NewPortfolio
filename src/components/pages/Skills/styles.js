import styled from 'styled-components'

const InfoDiv = styled.div`
	@media screen and (max-width: 768px) {
		width: 100%;
	}
`
const Info = styled.p`
	color: ${({ theme }) => theme.colors.text};
`

export { InfoDiv, Info }
