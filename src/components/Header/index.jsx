import { useState } from 'react'

import SocialIcon from './SocialIcons'
import AllIcons from './AllIcons'
import MovingNav from './MovingNav'
import {
	HeaderBar,
	NavBar,
	SocialMediaList,
	HeaderWrapper
} from '../Header/styles'
import { AiFillGithub, AiFillLinkedin, AiOutlineMenu } from 'react-icons/ai'

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
				<i>
					<AiOutlineMenu onClick={() => setIsOpen(!isOpen)} />
				</i>
			</HeaderBar>

			<MovingNav isOpen={isOpen} />
		</HeaderWrapper>
	)
}

export default AppBar
