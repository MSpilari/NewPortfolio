import CustomTitle from '../../Titles'
import DefaultAnimation from '../../Animation'
import { AboutWrapper, Info } from './styles'
import AnimationJson from '../../../assets/about.json'

const AboutText = () => {
	return (
		<AboutWrapper>
			<CustomTitle text='Sobre Mim' />
			<Info>
				Amante da tecnologia, sempre buscando conhecer o que está em alta no
				mercado e o mais usadas pelas grandes empresas do ramo.
				<br />
				<br />
				Uma pessoa muito organizada, pragmática, resolutor de problemas,
				autodidata que gosta de se atentar aos detalhes. Apaixonado por
				videogames, por isso conheci a programação. Sou fã de computação, desde
				pequeno desmontava alguns computadores. Hoje monto os meus para o
				trabalho e para minha diversão.
				<br />
				<br />
				Curioso por todas as tecnologias, mas atualmente trabalhando mais com
				Javascript no Frontend e no Backend.
			</Info>
		</AboutWrapper>
	)
}

const Animation = () => {
	return <DefaultAnimation animationJson={AnimationJson} />
}

export { AboutText, Animation }
