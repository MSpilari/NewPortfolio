'use client'

import { ICarouselWrapper } from '@dto/Carousel'
import { useLanguage } from '@hooks/languageHook'

const CarouselWrapper: React.FC<ICarouselWrapper> = ({ children }) => {
	const { language } = useLanguage()

	return (
		<div className='w-full h-full mx-auto absolute z-10 text-white flex flex-col items-center justify-center'>
			<h1 className='font-bold text-3xl animate-bounce text-yellow-500'>
				{language.ProjectsTitle}
			</h1>
			{children}
		</div>
	)
}

export { CarouselWrapper }
