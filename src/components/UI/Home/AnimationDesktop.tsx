import Lottie from 'react-lottie-player'
import animationDesktop1 from '../../../assets/animationDesktop1.json'

const AnimationDesktop = () => {
	return (
		<div className=' hidden w-full h-full overflow-hidden absolute lg:flex'>
			<Lottie loop play className='w-full' animationData={animationDesktop1} />
		</div>
	)
}

export { AnimationDesktop }
