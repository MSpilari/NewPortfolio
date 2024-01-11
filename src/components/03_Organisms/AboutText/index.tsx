import { useLanguage } from '@hooks/languageHook'

const AboutText: React.FC = () => {
	const { language } = useLanguage()
	return (
		<section
			className='w-full h-full mx-auto mt-2 z-10 text-white flex flex-col items-center gap-2 justify-center
		lg:w-[400px] lg:h-[500px] lg:bottom-0 lg:gap-0 lg:absolute'
		>
			<h1 className='font-bold text-3xl animate-bounce text-yellow-500'>
				{language.AboutTitle}
			</h1>

			<p className='text-lg text-center mx-2 lg:ml-4'>{language.AboutInfo}</p>
		</section>
	)
}

export { AboutText }
