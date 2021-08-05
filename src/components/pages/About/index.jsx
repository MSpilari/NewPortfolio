import { useContext } from 'react'

import CustomTitle from '../../Titles'
import DefaultAnimation from '../../Animation'
import { AboutWrapper, Info } from './styles'
import AnimationJson from '../../../assets/about.json'
import { LanguageContext } from '../../../providers/language'

const AboutText = () => {
	const { Lang } = useContext(LanguageContext)
	return (
		<AboutWrapper>
			<CustomTitle text={Lang.AboutTitle} />
			<Info>{Lang.AboutInfo}</Info>
		</AboutWrapper>
	)
}

const Animation = () => {
	return <DefaultAnimation animationJson={AnimationJson} />
}

export { AboutText, Animation }
