'use client'

import { HTMLAttributes } from 'react'
import Lottie from 'react-lottie-player'
import { AnimationProps } from '@dto/Animation'

const Animation: React.FC<AnimationProps & HTMLAttributes<HTMLDivElement>> = ({
	animationFile,
	...props
}) => {
	return <Lottie loop play animationData={animationFile} {...props} />
}

export { Animation }
