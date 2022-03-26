import Lottie from 'react-lottie-player'
import animationMobile from '../../assets/animationMobile.json'

const AnimationMobile = () => {
	return (
		<div
			className='w-full overflow-hidden absolute top-[15%] left-[-30px] 
		sm:left-0 sm:top-0 max-w-3xl lg:hidden'
		>
			<Lottie
				loop
				play
				className='w-[400px] xxs:w-[450px] xs:w-[500px] sm:w-[calc(100%-64px)] '
				animationData={animationMobile}
			/>
		</div>
	)
}

export { AnimationMobile }
