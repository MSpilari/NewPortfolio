import Link from 'next/link'

import Icon from '../Icons'
import SocialIcon from '../SocialIcons'
import { HeaderBar, NavBar, SocialMediaList } from '../Header/styles'

const AppBar = () => {
	return (
		<header>
			<HeaderBar>
				<Link href='/'>
					<a style={{ backgroundColor: 'black' }}>
						<img style={{ width: '100%' }} src='/Logo(1).svg' />
					</a>
				</Link>
				<i class='fas fa-bars'></i>
				<NavBar>
					<Icon href='/' className='fas fa-home' text='Home' />
					<Icon href='/about' className='fas fa-user' text='About' />
					<Icon href='/skills' className='fas fa-cog' text='Skills' />
					<Icon href='/portfolio' className='far fa-eye' text='Portfolio' />
					<Icon href='/contact' className='fas fa-envelope' text='Contact' />
				</NavBar>
				<SocialMediaList>
					<SocialIcon
						href='https://github.com/MSpilari'
						className='fab fa-github'
					/>
					<SocialIcon
						href='https://www.linkedin.com/in/matheus-bernardes-spilari-2b8068188/'
						className='fab fa-linkedin-in'
					/>
				</SocialMediaList>
			</HeaderBar>
		</header>
	)
}

export default AppBar
