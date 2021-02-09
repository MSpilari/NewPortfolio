import Icon from '../Icons'
import SocialIcon from '../SocialIcons'
import {
	HeaderBar,
	NavBar,
	SocialMediaList,
	HeaderWrapper
} from '../Header/styles'
import {
	AiOutlineHome,
	AiOutlineUser,
	AiOutlineEye,
	AiOutlineMail,
	AiFillGithub,
	AiFillLinkedin
} from 'react-icons/ai'
import { BsGear } from 'react-icons/bs'

const AppBar = () => {
	return (
		<HeaderWrapper>
			<HeaderBar>
				<a style={{ backgroundColor: 'black', width: '60px', height: '60px' }}>
					<img style={{ width: '100%' }} src='/Logo(1).svg' />
				</a>
				<i class='fas fa-bars'></i>
				<NavBar>
					<Icon href='/' text='Home'>
						<AiOutlineHome />
					</Icon>
					<Icon href='/about' text='About'>
						<AiOutlineUser />
					</Icon>
					<Icon href='/skills' text='Skills'>
						<BsGear />
					</Icon>
					<Icon href='/projects' text='Projects'>
						<AiOutlineEye />
					</Icon>
					<Icon href='/contact' text='Contact'>
						<AiOutlineMail />
					</Icon>
				</NavBar>
				<SocialMediaList>
					<SocialIcon href='https://github.com/MSpilari'>
						<AiFillGithub />
					</SocialIcon>
					<SocialIcon href='https://www.linkedin.com/in/matheus-bernardes-spilari-2b8068188/'>
						<AiFillLinkedin />
					</SocialIcon>
				</SocialMediaList>
			</HeaderBar>
		</HeaderWrapper>
	)
}

export default AppBar
