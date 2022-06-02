import AboutMobileFile from '../src/assets/about.json'
import AboutDesktopFile from '../src/assets/AboutAnimation.json'

import { Animation } from '../src/components/01_Atoms/Animation'
import { Header } from '../src/components/03_Organisms/Header'
import { AnimationWrapper } from '../src/components/04_Templates/AnimationWrapper'
import { AboutText } from '../src/components/About/AboutText'

const About = () => {
	return (
		<div
			className='w-screen h-screen 
											lg:flex'
		>
			<Header />

			<div
				className='flex flex-col h-full relative 
											lg:flex-row lg:w-[calc(100%-80px)] lg:h-full '
			>
				<AnimationWrapper
					className='w-full overflow-hidden absolute top-[30%] max-w-4xl 
											sm:left-0 sm:top-[15%]
											lg:h-full lg:top-0 lg:left-0 lg:max-w-none'
				>
					<Animation
						animationFileMobile={AboutMobileFile}
						animationFileDesktop={AboutDesktopFile}
						className='w-full h-[calc(100%-128px)] 
												lg:h-full'
					/>
				</AnimationWrapper>

				<AboutText />
			</div>
		</div>
	)
}

export default About
