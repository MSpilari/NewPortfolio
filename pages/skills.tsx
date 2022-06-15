import { Animation } from '../src/components/01_Atoms/Animation'
import { Header } from '../src/components/03_Organisms/Header'
import { SkillsText } from '../src/components/03_Organisms/SkillsText'
import { AnimationWrapper } from '../src/components/04_Templates/AnimationWrapper'

import SkillsDesktopAnimationFile from '../src/assets/SkillsAnimation.json'

const Skills = () => {
	return (
		<div className='w-screen h-screen lg:flex'>
			<Header />

			<div
				className='flex flex-col  relative 
      lg:flex-row lg:w-[calc(100%-80px)] lg:h-full'
			>
				<AnimationWrapper className='w-full h-full overflow-hidden absolute lg:flex'>
					<Animation
						animationFileDesktop={SkillsDesktopAnimationFile}
						className='w-full'
					/>
				</AnimationWrapper>

				<SkillsText />
			</div>
		</div>
	)
}

export default Skills
