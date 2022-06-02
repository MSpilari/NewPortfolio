import { useCallback, useEffect, useState } from 'react'
import Lottie from 'react-lottie-player'

type AnimationProps = {
	animationFileMobile?: object
	animationFileDesktop?: object
}

const Animation: React.FC<AnimationProps> = ({
	animationFileMobile,
	animationFileDesktop
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
		<div
			className='w-full overflow-hidden absolute top-[15%] left-[-30px] max-w-3xl 
		              sm:left-0 sm:top-0 
                  lg:h-full lg:flex lg:max-w-none lg:top-0 lg:left-0'
		>
			<Lottie
				loop
				play
				animationData={
					useMediaQuery('1024') ? animationFileDesktop : animationFileMobile
				}
				className='w-[400px] 
                      xxs:w-[450px] 
                      xs:w-[500px] 
                      sm:w-[calc(100%-64px)] 
                      lg:w-full'
			/>
		</div>
	)
}

export { Animation }
