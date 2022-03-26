import Lottie from 'react-lottie-player'
import SkillDesktopAnimation from '../../assets/SkillsAnimation.json'

const SkillsAnimationDesktop = () => {
	return (
		<div className=' hidden w-full h-full overflow-hidden absolute lg:flex'>
			<Lottie
				loop
				play
				className='w-full'
				animationData={SkillDesktopAnimation}
			/>
		</div>
	)
}

export { SkillsAnimationDesktop }
