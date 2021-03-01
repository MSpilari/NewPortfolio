import styled from 'styled-components'

import NavBar from '../Header'

const MainWrapper = styled.main`
	width: 92%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	align-self: flex-end;
	flex-wrap: wrap;

	@media screen and (max-width: 768px) {
		align-self: center;
		height: 92%;
		width: 100%;
	}
`

const FirstChildWrapper = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: center;

	@media screen and (max-width: 768px) {
		width: 95%;
		margin: 0 auto;
	}
`
const SecondChildWrapper = styled.div`
	width: 50%;
	display: flex;
	align-items: center;
	justify-content: center;

	@media screen and (max-width: 768px) {
		display: none;
	}
`

const DefaultPage = ({ firstChild, secondChild }) => {
	return (
		<>
			<NavBar />
			<MainWrapper>
				<FirstChildWrapper>{firstChild}</FirstChildWrapper>
				<SecondChildWrapper>{secondChild}</SecondChildWrapper>
			</MainWrapper>
		</>
	)
}

export default DefaultPage
