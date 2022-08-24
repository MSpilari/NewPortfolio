import AboutMobileFile from '../src/assets/about.json'
import AboutDesktopFile from '../src/assets/AboutAnimation.json'

import { Animation } from '../src/components/01_Atoms/Animation'
import { Header } from '../src/components/03_Organisms/Header'
import { AboutText } from '../src/components/03_Organisms/AboutText'
import { AnimationWrapper } from '../src/components/04_Templates/AnimationWrapper'

const About = () => {
	return (
		<div className='w-screen h-screen lg:flex'>
			<Header />

			<div className='flex flex-col h-full relative lg:flex-row lg:w-[calc(100%-80px)]'>
				<AnimationWrapper className='w-full overflow-hidden absolute top-[30%] max-w-4xl sm:left-0 sm:top-[15%] lg:h-full lg:top-0 lg:left-0 lg:max-w-none'>
					<Animation
						animationFile={AboutMobileFile}
						className='w-full h-[calc(100%-128px)] lg:hidden'
					/>

					<Animation
						animationFile={AboutDesktopFile}
						className='hidden w-full h-[calc(100%-128px)] lg:h-full lg:flex'
					/>
				</AnimationWrapper>

				<AboutText />
			</div>
		</div>
	)
}

export default About
