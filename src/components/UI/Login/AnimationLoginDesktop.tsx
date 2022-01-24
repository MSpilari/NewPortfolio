import Lottie from 'react-lottie-player'
import LoginAnimationDesktop from '../../../assets/animationLoginDesktop.json'

const AnimationLoginDesktop = () => {
	return (
		<div className=' hidden w-full h-full overflow-hidden absolute lg:flex'>
			<Lottie
				loop
				play
				className='w-full'
				animationData={LoginAnimationDesktop}
			/>
		</div>
	)
}

export { AnimationLoginDesktop }
