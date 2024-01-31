import notFoundAnimation from '@assets/notfound.json'
import { Animation } from '@components/01_Atoms/Animation'

export default function NotFound() {
	return (
		<div className='flex flex-col h-[calc(100%-128px)] relative lg:flex-row lg:w-[calc(100%-80px)] lg:h-full '>
			<Animation animationFile={notFoundAnimation} className='w-full h-full' />
		</div>
	)
}
