import Lottie from 'react-lottie-player'
import projectDesktopAnimation from '../../assets/projectAnimationDesktop.json'

const ProjectAnimationDesktop = () => {
	return (
		<div className=' hidden w-full h-full overflow-hidden absolute lg:flex'>
			<Lottie
				loop
				play
				className='w-full'
				animationData={projectDesktopAnimation}
			/>
		</div>
	)
}

export { ProjectAnimationDesktop }
