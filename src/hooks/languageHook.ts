'use client'

import { useContext } from 'react'
import { LanguageContext } from '@context/language'

const useLanguage = () => useContext(LanguageContext)

export { useLanguage }
