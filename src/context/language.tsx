import {
	createContext,
	Dispatch,
	ReactNode,
	SetStateAction,
	useState
} from 'react'
import { allLanguages } from '../config/allLanguages'

interface ILanguageProvider {
	children: ReactNode
}

interface ILanguage {
	Hello1: string
	Hello2: string
	Name: string
	Role: string
	HomeTitle: string
	ButtonLabel: string
	ButtonMessageLabel: string
	AboutTitle: string
	AboutInfo: string
	SkillsTitle: string
	SkillsInfo: string
	ProjectsTitle: string
	ContactTitle: string
}

interface IDefaultLanguage {
	language: ILanguage
	setLanguage: Dispatch<SetStateAction<ILanguage>>
}

const defaultLanguage = {
	language: allLanguages.ptBr,
	setLanguage: () => {}
}

const LanguageContext = createContext<IDefaultLanguage>(defaultLanguage)

const LanguageProvider = ({ children }: ILanguageProvider) => {
	const [language, setLanguage] = useState(defaultLanguage.language)

	return (
		<LanguageContext.Provider value={{ language, setLanguage }}>
			{children}
		</LanguageContext.Provider>
	)
}

export { LanguageProvider, LanguageContext }
