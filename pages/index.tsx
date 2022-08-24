import AnimationMobileFile from '../src/assets/indexAnimationMobile.json'
import AnimationDesktopFile from '../src/assets/indexAnimationDesktop.json'

import { Animation } from '../src/components/01_Atoms/Animation'
import { Header } from '../src/components/03_Organisms/Header'
import { Greet } from '../src/components/03_Organisms/Greet'
import { AnimationWrapper } from '../src/components/04_Templates/AnimationWrapper'

const HomePage = () => {
	return (
		<div className='w-screen h-screen lg:flex'>
			<Header />

			<div className='flex flex-col h-[calc(100%-128px)] relative lg:flex-row lg:w-[calc(100%-80px)] lg:h-full '>
				<AnimationWrapper className='w-full h-full overflow-hidden absolute'>
					<Animation
						animationFile={AnimationMobileFile}
						className='w-full h-full lg:hidden'
					/>

					<Animation
						animationFile={AnimationDesktopFile}
						className='hidden lg:w-full lg:flex lg:h-full'
					/>
				</AnimationWrapper>

				<Greet />
			</div>
		</div>
	)
}

export default HomePage
