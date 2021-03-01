import styled from 'styled-components'

const AboutWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;

	@media screen and (max-width: 800px) {
		width: 100%;
	}
`

const Info = styled.p`
	color: ${({ theme }) => theme.colors.text};
`

export { AboutWrapper, Info }
