import Lottie from 'react-lottie'

import { AnimationDiv } from './style'
const DefaultAnimation = ({ animationJson }) => {
	const defaultOptions = {
		loop: true,
		autoplay: true,
		animationData: animationJson,
		rendererSettings: {
			preserveAspectRatio: 'xMidYMid slice'
		}
	}

	return (
		<AnimationDiv>
			<Lottie options={defaultOptions} isClickToPauseDisabled={true} />
		</AnimationDiv>
	)
}

export default DefaultAnimation
