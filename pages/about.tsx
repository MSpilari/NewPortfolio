import { useMediaQuery } from 'react-responsive'
import AboutDesktopFile from '../src/assets/AboutAnimation.json'

import { Animation } from '../src/components/01_Atoms/Animation'
import { AboutText } from '../src/components/03_Organisms/AboutText'
import { Header } from '../src/components/03_Organisms/Header'

const About = () => {
	const isDesktop = useMediaQuery({ query: '(min-width:1024px)' })

	return (
		<div className='w-screen h-screen lg:flex'>
			<Header />

			<div className='flex flex-col h-full relative lg:flex-row lg:w-[calc(100%-80px)]'>
				{isDesktop ? (
					<Animation
						animationFile={AboutDesktopFile}
						className='w-full h-[calc(100%-128px)] lg:h-full '
					/>
				) : null}

				<AboutText />
			</div>
		</div>
	)
}

export default About
