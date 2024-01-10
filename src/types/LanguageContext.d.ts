import { Dispatch, SetStateAction, ReactNode } from 'react'

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

export { IDefaultLanguage, ILanguageProvider }
