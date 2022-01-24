import { AboutAnimationDesktop } from '../src/components/UI/About/AboutAnimationDesktop'
import { AboutAnimationMobile } from '../src/components/UI/About/AboutAnimationMobile'
import { AboutText } from '../src/components/UI/About/AboutText'
import { Header } from '../src/components/UI/Header'

const About = () => {
	return (
		<div className='w-screen h-screen lg:flex'>
			<Header />

			<div className='flex flex-col h-[calc(100%-128px)] relative lg:flex-row lg:w-[calc(100%-80px)] lg:h-full '>
				<AboutAnimationMobile />
				<AboutAnimationDesktop />

				<AboutText />
			</div>
		</div>
	)
}

export default About
