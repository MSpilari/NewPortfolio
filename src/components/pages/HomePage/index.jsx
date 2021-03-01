import Link from 'next/link'

import DefaultAnimation from '../../Animation'
import animationJson from '../../../assets/laptopworking.json'
import Button from '../../Button'
import CustomCharacters from '../../Titles'
import { Role, TextDiv } from './styles'

const Welcome = () => {
	const mytext = 'Olá, eu sou o Matheus, Web Developer.'

	return (
		<TextDiv>
			<CustomCharacters text={mytext} />
			<Role>FullStack Developer</Role>
			<Link href='/contact'>
				<Button label='Entrar em contato !' />
			</Link>
		</TextDiv>
	)
}

const Animation = () => {
	return <DefaultAnimation animationJson={animationJson} />
}

export { Welcome, Animation }
