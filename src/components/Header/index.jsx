import { useState } from 'react'

import SocialIcon from './SocialIcons'
import AllIcons from './AllIcons'
import MovingNav from './MovingNav'
import { AiFillGithub, AiFillLinkedin, AiOutlineMenu } from 'react-icons/ai'

import {
	HeaderBar,
	MovingNavWrapper,
	NavBar,
	SocialMediaList,
	HeaderWrapper,
	MenuIconButton
} from '../Header/styles'

const AppBar = () => {
	const [isOpen, setIsOpen] = useState(false)
	return (
		<HeaderWrapper>
			<HeaderBar>
				<a style={{ backgroundColor: 'black', width: '60px', height: '60px' }}>
					<img style={{ width: '100%' }} src='/Logo(1).svg' />
				</a>
				<NavBar>
					<AllIcons />
				</NavBar>
				<SocialMediaList>
					<SocialIcon href='https://github.com/MSpilari'>
						<AiFillGithub />
					</SocialIcon>
					<SocialIcon href='https://www.linkedin.com/in/matheus-bernardes-spilari-2b8068188/'>
						<AiFillLinkedin />
					</SocialIcon>
				</SocialMediaList>
				<MenuIconButton>
					<AiOutlineMenu onClick={() => setIsOpen(!isOpen)} />
				</MenuIconButton>
			</HeaderBar>
			<MovingNavWrapper>
				<MovingNav isOpen={isOpen} />
			</MovingNavWrapper>
		</HeaderWrapper>
	)
}

export default AppBar
