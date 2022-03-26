import Lottie from 'react-lottie-player'
import AboutAnimationLarge from '../../assets/AboutAnimation.json'

const AboutAnimationDesktop = () => {
	return (
		<div className=' hidden w-full h-full overflow-hidden absolute lg:flex'>
			<Lottie
				loop
				play
				className='w-full'
				animationData={AboutAnimationLarge}
			/>
		</div>
	)
}

export { AboutAnimationDesktop }
