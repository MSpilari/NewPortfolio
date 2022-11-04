import { useMediaQuery } from 'react-responsive'
import AnimationDesktopFile from '../src/assets/indexAnimationDesktop.json'
import AnimationMobileFile from '../src/assets/indexAnimationMobile.json'

import { Animation } from '../src/components/01_Atoms/Animation'
import { Greet } from '../src/components/03_Organisms/Greet'
import { Header } from '../src/components/03_Organisms/Header'

const HomePage = () => {
	const isMobile = useMediaQuery({ query: '(max-width:768px)' })

	return (
		<div className='w-screen h-screen lg:flex'>
			<Header />

			<div className='flex flex-col h-[calc(100%-128px)] relative lg:flex-row lg:w-[calc(100%-80px)] lg:h-full '>
				<Animation
					animationFile={isMobile ? AnimationMobileFile : AnimationDesktopFile}
					className='w-full h-full'
				/>

				<Greet />
			</div>
		</div>
	)
}

export default HomePage
