'use client'

import { useMediaQuery } from 'react-responsive'
import AboutDesktopFile from '@assets/AboutAnimation.json'

import { Animation } from '@components/01_Atoms/Animation'
import { AboutText } from '@components/03_Organisms/AboutText'

const About = () => {
	const isDesktop = useMediaQuery({ query: '(min-width:1024px)' })

	return (
		<section className='flex flex-col relative lg:overflow-hidden lg:h-full lg:flex-row lg:w-[calc(100%-80px)]'>
			{isDesktop && (
				<Animation
					animationFile={AboutDesktopFile}
					className='w-full absolute h-[calc(100%-128px)] lg:h-full '
				/>
			)}

			<AboutText />
		</section>
	)
}

export default About
