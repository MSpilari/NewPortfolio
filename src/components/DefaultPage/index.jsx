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
