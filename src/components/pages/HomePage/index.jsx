import Link from 'next/link'
import { useContext } from 'react'

import { LanguageContext } from '../../../providers/language'
import DefaultAnimation from '../../Animation'
import animationJson from '../../../assets/laptopworking.json'
import Button from '../../Button'
import CustomCharacters from '../../Titles'
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
