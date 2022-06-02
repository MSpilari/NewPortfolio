import AnimationDesktopFile from '../src/assets/animationDesktop1.json'
import AnimationMobileFile from '../src/assets/animationMobile.json'

import { Animation } from '../src/components/03_Organisms/Animation'
import { Header } from '../src/components/03_Organisms/Header'
import { Greet } from '../src/components/03_Organisms/Greet'

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
				<Animation
					animationFileMobile={AnimationMobileFile}
					animationFileDesktop={AnimationDesktopFile}
				/>

				<Greet />
			</div>
		</div>
	)
}

export default HomePage
