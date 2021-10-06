import Link from 'next/link'
import { useContext } from 'react'

import { LanguageContext } from '../../providers/language'
import DefaultAnimation from '../../components/UI/Animation'
import animationJson from '../../assets/laptopworking.json'
import Button from '../../components/UI/Button'
import CustomCharacters from '../../components/UI/Titles'
import { Role, TextDiv } from './styles'

const Welcome = () => {
	const { Lang } = useContext(LanguageContext)

	return (
		<TextDiv>
			<CustomCharacters text={Lang.HomeTitle} />
			<Role>FullStack Developer</Role>
			<Link href='/contact'>
				<Button label={Lang.ButtonLabel} />
			</Link>
		</TextDiv>
	)
}

const Animation = () => {
	return <DefaultAnimation animationJson={animationJson} />
}

export { Welcome, Animation }
