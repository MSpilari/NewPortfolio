import { useLanguage } from '../../../hooks/languageHook'

const AboutText: React.FC = () => {
	const { language } = useLanguage()
	return (
		<div
			className='w-full h-full mx-auto absolute z-10 text-white flex flex-col items-center justify-around 
                  lg:w-[400px] lg:h-[500px] lg:bottom-0'
		>
			<h1
				className='font-pushster font-bold text-3xl animate-bounce
                  text-yellow-500'
			>
				{language.AboutTitle}
			</h1>
			<p
				className='font-pushster text-lg text-center mx-2 
                    sm:mt-32 
                    lg:mt-0 lg:ml-4'
			>
				{language.AboutInfo}
			</p>
		</div>
	)
}

export { AboutText }