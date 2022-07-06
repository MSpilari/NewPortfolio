import { HTMLAttributes } from 'react'
import Lottie from 'react-lottie-player'

type AnimationProps = {
	animationFile?: object
}

const Animation: React.FC<AnimationProps & HTMLAttributes<HTMLDivElement>> = ({
	animationFile,
	...props
}) => {
	return <Lottie loop play animationData={animationFile} {...props} />
}

export { Animation }
