import { Header } from '../src/components/UI/Header'
import { AnimationDesktop } from '../src/components/UI/Home/AnimationDesktop'
import { AnimationMobile } from '../src/components/UI/Home/AnimationMobile'
import { Greet } from '../src/components/UI/Home/Greet'

const HomePage = () => {
	return (
		<div className='w-screen h-screen lg:flex'>
			<Header />

			<div className='flex flex-col h-[calc(100%-128px)] relative lg:flex-row lg:w-[calc(100%-80px)] lg:h-full '>
				<AnimationMobile />
				<AnimationDesktop />

				<Greet />
			</div>
		</div>
	)
}

export default HomePage
