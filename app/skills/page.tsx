'use client'

import { Animation } from '@components/01_Atoms/Animation'
import { SkillsText } from '@components/03_Organisms/SkillsText'
import { AnimationWrapper } from '@components/04_Templates/AnimationWrapper'

import SkillsDesktopAnimationFile from '@assets/SkillsAnimation.json'

const Skills = () => {
	return (
		<div className='flex flex-col  relative lg:flex-row lg:w-[calc(100%-80px)] lg:h-full'>
			<AnimationWrapper className='w-full h-full overflow-hidden absolute lg:flex'>
				<Animation
					animationFile={SkillsDesktopAnimationFile}
					className='hidden w-full lg:flex'
				/>
			</AnimationWrapper>

			<SkillsText />
		</div>
	)
}

export default Skills
