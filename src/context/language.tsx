'use client'

import { createContext, useState } from 'react'
import { IDefaultLanguage, ILanguageProvider } from '../types/LanguageContext'
import { allLanguages } from '../config/allLanguages'

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

export { LanguageContext, LanguageProvider }
