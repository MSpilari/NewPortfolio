import styled from 'styled-components'

export const HeaderWrapper = styled.header`
	width: 60px;

	@media screen and (max-width: 768px) {
		width: 100%;
		height: 60px;
	}
`

export const MovingNavWrapper = styled.span`
	@media screen and (min-width: 482px) {
		display: none;
	}
`

export const HeaderBar = styled.div`
	position: fixed;
	height: 100%;
	width: 60px;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	background-color: rgba(0, 0, 0, 0.3);

	@media screen and (max-width: 768px) {
		width: 100%;
		height: 60px;
		flex-direction: row;
	}
`

export const MenuIconButton = styled.i`
	color: ${({ theme }) => theme.colors.text};
	margin-right: 20px;
	font-size: 25px;

	@media screen and (min-width: 482px) {
		display: none;
	}
`

export const NavBar = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

	@media screen and (max-width: 482px) {
		display: none;
	}

	@media screen and (max-width: 768px) {
		flex-direction: row;
	}
`

export const SocialMediaList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	padding: 0;

	list-style: none;

	@media screen and (max-width: 482px) {
		display: none;
	}

	@media screen and (max-width: 768px) {
		flex-direction: row;
	}
`
