import { useLanguage } from '../../../hooks/languageHook'

const Greet: React.FC = () => {
	const { language } = useLanguage()
	return (
		<div
			className='w-[200px] absolute bottom-0 left-[30%] z-10 text-white flex flex-col 
                  sm:w-[400px] 
                  lg:left-[15%] lg:bottom-[10%]'
		>
			<p
				className='font-pushster text-lg my-2  
                    lg:text-4xl lg:text-black'
			>
				{language.Hello1}&#128075;{language.Hello2}
			</p>

			<h1
				className='font-theNautigal text-5xl my-2 animate-pulse 
                    lg:text-7xl lg:text-black'
			>
				{language.Name}
			</h1>

			<p
				className='font-pushster ml-auto text-blue-400 my-2 
                    lg:text-2xl lg:text-red-600'
			>
				{language.Role}
			</p>
		</div>
	)
}

export { Greet }
