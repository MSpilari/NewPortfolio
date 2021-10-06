import styled from 'styled-components'

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
	width: ${() =>
		typeof window !== 'undefined' && document.location.pathname === '/projects'
			? '100%'
			: '50%'};
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
	display: ${() =>
		typeof window !== 'undefined' && document.location.pathname === '/projects'
			? 'none'
			: 'flex'};
	align-items: center;
	justify-content: center;

	@media screen and (max-width: 768px) {
		display: ${() =>
			typeof window !== 'undefined' && document.location.pathname === '/skills'
				? 'flex'
				: 'none'};
		width: 95%;
	}
`

export { MainWrapper, FirstChildWrapper, SecondChildWrapper }
