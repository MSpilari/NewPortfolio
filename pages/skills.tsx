import { Header } from '../src/components/UI/Header'
import { SkillsAnimationDesktop } from '../src/components/UI/Skills/SkillsAnimationDesktop'
import { SkillsText } from '../src/components/UI/Skills/SkillsText'

const Skills = () => {
	return (
		<div className='w-screen h-screen lg:flex'>
			<Header />

			<div
				className='flex flex-col  relative 
      lg:flex-row lg:w-[calc(100%-80px)] lg:h-full'
			>
				<SkillsAnimationDesktop />
				<SkillsText />
			</div>
		</div>
	)
}

export default Skills
