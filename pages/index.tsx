import AnimationDesktopFile from '../src/assets/animationDesktop1.json'
import AnimationMobileFile from '../src/assets/animationMobile.json'

import { Animation } from '../src/components/01_Atoms/Animation'
import { Header } from '../src/components/03_Organisms/Header'
import { Greet } from '../src/components/03_Organisms/Greet'
import { AnimationWrapper } from '../src/components/04_Templates/AnimationWrapper'

const HomePage = () => {
	return (
		<div
			className='w-screen h-screen 
											lg:flex'
		>
			<Header />

			<div
				className='flex flex-col h-[calc(100%-128px)] relative 
												lg:flex-row lg:w-[calc(100%-80px)] lg:h-full '
			>
				<AnimationWrapper
					className='w-full overflow-hidden absolute top-[15%] left-[-30px] max-w-3xl 
																	sm:left-0 sm:top-0 
																	lg:left-0 lg:top-0 lg:max-w-none lg:h-full'
				>
					<Animation
						animationFileMobile={AnimationMobileFile}
						animationFileDesktop={AnimationDesktopFile}
						className='w-[400px] 
												xxs:w-[450px] 
												xs:w-[500px] 
												sm:w-[calc(100%-64px)]
												lg:w-full'
					/>
				</AnimationWrapper>

				<Greet />
			</div>
		</div>
	)
}

export default HomePage
