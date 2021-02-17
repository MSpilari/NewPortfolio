import styled from 'styled-components'

import NavBar from '../Header'

const MainWrapper = styled.main`
	width: 95%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	align-self: flex-end;
	flex-wrap: wrap;

	@media screen and (max-width: 768px) {
		align-self: center;
	}
`

const DefaultPage = ({ children }) => {
	return (
		<>
			<NavBar />
			<MainWrapper>{children}</MainWrapper>
		</>
	)
}

export default DefaultPage
