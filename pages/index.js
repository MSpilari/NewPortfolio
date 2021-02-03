import Link from 'next/link'
import styled from 'styled-components'

const HeaderBar = styled.div`
	position: fixed;
	height: 100%;
	width: 60px;
	top: 0;
	left: 0;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;

	background-color: transparent;

	& > i {
		color: wheat;
		margin-right: 20px;
		font-size: 25px;
	}

	@media screen and (max-width: 768px) {
		width: 100%;
		height: 60px;
		flex-direction: row;
	}
`

const NavBar = styled.nav`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;

	& > i {
		margin: 20px 0;
		color: white;
		font-size: 28px;
	}

	@media screen and (max-width: 482px) {
		display: none;
	}

	@media screen and (max-width: 768px) {
		flex-direction: row;
		& > i {
			margin: 0 20px;
		}
	}
`

const SocialMediaList = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	padding: 0;

	list-style: none;

	& > li {
		color: white;
		margin: 5px 0;
		font-size: 20px;
	}

	@media screen and (max-width: 482px) {
		display: none;
	}

	@media screen and (max-width: 768px) {
		flex-direction: row;
		& > li {
			margin: 0 5px;
		}
	}
`

export default function Home() {
	return (
		<header>
			<HeaderBar>
				<Link href='/'>
					<a>
						<img style={{ width: '100%' }} src='/Logo(1).svg' />
					</a>
				</Link>
				<i class='fas fa-bars'></i>
				<NavBar>
					<i class='fas fa-home'></i>
					<i class='fas fa-user'></i>
					<i class='fas fa-cog'></i>
					<i class='far fa-eye'></i>
					<i class='fas fa-envelope'></i>
				</NavBar>
				<SocialMediaList>
					<li>
						<i class='fab fa-github'></i>
					</li>
					<li>
						<i class='fab fa-linkedin-in'></i>
					</li>
				</SocialMediaList>
			</HeaderBar>
		</header>
	)
}
