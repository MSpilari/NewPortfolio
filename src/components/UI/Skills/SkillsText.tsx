import { useLanguage } from '../../../hooks/languageHook'
import { AiOutlineHtml5 } from 'react-icons/ai'
import { Card } from './Card'
import { allLogos } from '../../../config/allSkillsLogos'

const SkillsText = () => {
	const { language } = useLanguage()
	return (
		<div
			className='w-full mx-auto z-10 text-white 
    flex flex-col items-center justify-around overflow-y-auto lg:w-full lg:h-full lg:flex-row lg:overflow-hidden '
		>
			<div className='w-full flex flex-col items-center'>
				<h1 className='text-xl font-pushster text-yellow-500 animate-bounce my-3 lg:text-3xl'>
					{language.SkillsTitle}
				</h1>

				<p className='text-lg font-pushster text-center mx-2'>
					{language.SkillsInfo}
				</p>
			</div>

			<div className='mt-5 mb-14 w-full grid grid-cols-3 gap-3 items-center justify-center'>
				{allLogos.map((logo, index) => (
					<Card key={`Logo+${index}`} icon={logo.icon} name={logo.name} />
				))}
			</div>
		</div>
	)
}

export { SkillsText }
