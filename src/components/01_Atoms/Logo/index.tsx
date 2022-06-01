import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'

import SmallLogo from '../../../../public/Logo.svg'
import LargeLogo from '../../../../public/Logo(1).svg'

const Logo: React.FC = () => {
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
			className='w-40 ml-3 h-full flex items-center 
							lg:w-full lg:ml-0 lg:justify-center'
		>
			<Image
				className='object-cover'
				src={useMediaQuery('1024') ? LargeLogo : SmallLogo}
				alt='Logo MSpilari'
			/>
		</div>
	)
}

export { Logo }
