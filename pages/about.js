import DefaultPage from '../src/components/DefaultPage'
import CustomTitle from '../src/components/Titles'

const About = () => {
	return (
		<DefaultPage>
			<CustomTitle text='Sobre Mim' />
			<p>
				Amante da tecnologia, sempre buscando conhecer as tecnologias que estão
				em alta no mercado e aquelas mais usadas pelas grandes empresas do ramo.
				<br />
				Uma pessoa muito organizada, pragmática, resolutor de problemas,
				auto-didata que gosta de se atentar aos detalhes. Apaixonado por
				videogames, por isso conheci a programação. Sou fã de computação, desde
				pequeno desmontava alguns computadores. Hoje monto os meus para o
				trabalho e para minha diversão.
				<br />
				Curioso por todas as tecnologias, mas atualmente trabalhando mais com
				Javascript no Frontend e no Backend.
			</p>
		</DefaultPage>
	)
}

export default About
