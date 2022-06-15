import { useLanguage } from '../../../hooks/languageHook'
import { TechLogos } from '../../02_Molecules/TechLogos'

const SkillsText = () => {
	const { language } = useLanguage()
	return (
		<div
			className='w-full mx-auto z-10 text-white flex flex-col items-center justify-around overflow-y-auto 
									lg:w-full lg:h-full lg:flex-row lg:overflow-hidden lg:bg-[rgba(0,0,0,0.7)]'
		>
			<div className='w-full flex flex-col items-center'>
				<h1
					className='text-xl font-pushster text-yellow-500 animate-bounce my-3 
												lg:text-3xl'
				>
					{language.SkillsTitle}
				</h1>

				<p className='text-lg font-pushster text-center mx-2'>
					{language.SkillsInfo}
				</p>
			</div>

			<TechLogos />
		</div>
	)
}

export { SkillsText }
