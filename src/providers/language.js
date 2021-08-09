import { createContext, useState } from 'react'

const defaultLanguage = {
	currentLang: {
		ptBr: {
			HomeTitle: 'Olá, eu sou o Matheus, Web Developer.',
			ButtonLabel: 'Entrar em contato !',
			ButtonMessageLabel: 'Enviar Mensagem !',
			AboutTitle: 'Sobre Mim',
			AboutInfo: `Amante da tecnologia, sempre buscando conhecer o que está em alta no
            mercado e o mais usadas pelas grandes empresas do ramo.
            
            Uma pessoa muito organizada, pragmática, resolutor de problemas,
            autodidata que gosta de se atentar aos detalhes. Apaixonado por
            videogames, por isso conheci a programação. Sou fã de computação, desde
            pequeno desmontava alguns computadores. Hoje monto os meus para o
            trabalho e para minha diversão.

            Curioso por todas as tecnologias, mas atualmente trabalhando mais com
            Javascript no Frontend e no Backend.`,
			SkillsTitle: 'Habilidades & Experiência',
			SkillsInfo: `Possuo mais conhecimento com o FrontEnd.
            HTML, CSS, SASS, Styled Components, Javascript, Typescript, Node, Next,
            Python.
            Construindo pequenas e médias aplicações para a Web principalmente com
            React, utilizando também animações, layouts interativos com o conceito
            Mobile first e Single Page Application(SPA).
            Também possuo uma experiência no Backend, construindo APIs no padrão
            RESTful/REST, utilizando DBs como PostgreSQL ou MongoDB.
            Visite meu <a 
                        style={{ textDecoration: 'none', color: 'inherit' }} 
                        href='https://www.linkedin.com/in/matheus-bernardes-spilari-2b8068188/'> 
                        <GrLinkedin /> 
                        </a> para entrar em contato.`,
			ProjectsTitle: 'Projetos',
			ContactTitle: 'Me Contate !'
		},
		en: {
			HomeTitle: 'Hello, I´m Matheus, Web Developer.',
			ButtonLabel: 'Contact Me !',
			ButtonMessageLabel: 'Send a Message !',
			AboutTitle: 'About Me',
			AboutInfo: `Technology lover, always seeking to know what is hot on the 
            market and the most used by large companies in the field.
               
            A very organized, pragmatic, problem solving person,
            self-taught person who likes to pay attention to details. In love with
            video games, that's why I got to know the programming. I'm a computer fan, since
            i was a kid, i disassembled some computers to know how it works. Today I build mine for the
            work and for my enjoyment.
            
            Curious about all technologies, but currently working more with
            Javascript in Frontend and Backend.`,
			SkillsTitle: 'Skills & Experience',
			SkillsInfo: `I have more knowledge with FrontEnd.
            HTML, CSS, SASS, Styled Components, Javascript, Typescript, Node, Next,
            Python.
            Building small and medium web applications primarily with
            React, also using animations, interactive layouts with the concept
            Mobile first and Single Page Application(SPA).
            I also have an experience in the Backend, building APIs in the pattern.
            RESTful/REST, using DBs like PostgreSQL or MongoDB.
            Visit my <a
                style={{ textDecoration: 'none', color: 'inherit' }}
                href='https://www.linkedin.com/in/matheus-bernardes-spilari-2b8068188/'
            >
                <GrLinkedin />
            </a> to get in touch.`,
			ProjectsTitle: 'Projects',
			ContactTitle: 'Contact Me !'
		}
	},
	setLang: () => {}
}

const LanguageContext = createContext(defaultLanguage)

const LanguageProvider = ({ children }) => {
	const [Lang, setLang] = useState(defaultLanguage.currentLang.ptBr)

	return (
		<LanguageContext.Provider value={{ Lang, setLang }}>
			{children}
		</LanguageContext.Provider>
	)
}

export { LanguageProvider, LanguageContext, defaultLanguage }
