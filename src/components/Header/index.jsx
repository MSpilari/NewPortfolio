import { useContext, useState } from 'react'

import SocialIcon from './SocialIcons'
import AllIcons from './AllIcons'
import MovingNav from './MovingNav'
import { AiFillGithub, AiFillLinkedin, AiOutlineMenu } from 'react-icons/ai'
import { GiBrazilFlag, GiUsaFlag } from 'react-icons/gi'

import {
	HeaderBar,
	MovingNavWrapper,
	NavBar,
	SocialMediaList,
	HeaderWrapper,
	MenuIconButton
} from '../Header/styles'

import { LangSwitcher } from './LangSwitcher/styles'
import { defaultLanguage, LanguageContext } from '../../providers/language'

const AppBar = () => {
	const { Lang, setLang } = useContext(LanguageContext)
	const [isOpen, setIsOpen] = useState(false)

	const handleLanguage = () => {
		return Lang === defaultLanguage.currentLang.ptBr
			? setLang(defaultLanguage.currentLang.en)
			: setLang(defaultLanguage.currentLang.ptBr)
	}
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
					<LangSwitcher onClick={() => handleLanguage()}>
						{Lang === defaultLanguage.currentLang.ptBr ? (
							<GiUsaFlag />
						) : (
							<GiBrazilFlag />
						)}
					</LangSwitcher>
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
