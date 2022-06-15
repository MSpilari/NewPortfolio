import { HTMLAttributes, useCallback, useEffect, useState } from 'react'
import Lottie from 'react-lottie-player'

type AnimationProps = {
	animationFileMobile?: object
	animationFileDesktop?: object
}

const Animation: React.FC<AnimationProps & HTMLAttributes<HTMLDivElement>> = ({
	animationFileMobile,
	animationFileDesktop,
	...props
}) => {
	const useMediaQuery = (width: string) => {
		const [targetReached, setTargetReached] = useState(false)

		const updatedTarget = useCallback((e: MediaQueryListEvent) => {
			e.matches ? setTargetReached(true) : setTargetReached(false)
		}, [])

		useEffect(() => {
			const media = window.matchMedia(`(min-width:${width}px)`)

			media.addEventListener('change', e => updatedTarget(e))

			media.matches && setTargetReached(true)

			return () => media.removeEventListener('change', e => updatedTarget(e))
		}, [])

		return targetReached
	}

	return (
		<Lottie
			loop
			play
			animationData={
				useMediaQuery('1024') ? animationFileDesktop : animationFileMobile
			}
			{...props}
		/>
	)
}

export { Animation }
