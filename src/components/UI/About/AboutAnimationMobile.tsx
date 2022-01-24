import Lottie from 'react-lottie-player'
import aboutAnimationMobile from '../../../assets/about.json'

const AboutAnimationMobile = () => {
	return (
		<div
			className='w-full overflow-hidden absolute top-[30%] 
sm:left-0 sm:top-[15%] max-w-4xl lg:hidden'
		>
			<Lottie
				loop
				play
				className='w-full h-[calc(100%-128px)]'
				animationData={aboutAnimationMobile}
			/>
		</div>
	)
}

export { AboutAnimationMobile }
