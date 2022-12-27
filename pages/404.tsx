import { Animation } from '../src/components/01_Atoms/Animation'
import { Header } from '../src/components/03_Organisms/Header'
import notFoundAnimation from '../src/assets/notfound.json'

export default function Custom404() {
	return (
		<div className='w-screen h-screen lg:flex'>
			<Header />

			<div className='flex flex-col h-[calc(100%-128px)] relative lg:flex-row lg:w-[calc(100%-80px)] lg:h-full '>
				<Animation
					animationFile={notFoundAnimation}
					className='w-full h-full'
				/>
			</div>
		</div>
	)
}
