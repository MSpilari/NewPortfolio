import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import Logo from '../../../../public/LogoYB.png'
import { useMediaQuery } from 'react-responsive'

const Loading = () => {
	const router = useRouter()

	const isMobile = useMediaQuery({ query: '(max-width:768px)' })

	const [loading, setLoading] = useState(false)

	useEffect(() => {
		setLoading(true)
		setTimeout(() => setLoading(false), 1500)
	}, [])

	useEffect(() => {
		const handleStart = () => setLoading(true)

		const handleComplete = () => setTimeout(() => setLoading(false), 2500)

		router.events.on('routeChangeStart', handleStart)
		router.events.on('routeChangeComplete', handleComplete)
		router.events.on('routeChangeError', handleComplete)

		return () => {
			router.events.off('routeChangeStart', handleStart)
			router.events.off('routeChangeComplete', handleComplete)
			router.events.off('routeChangeError', handleComplete)
		}
	}, [router])

	return (
		<div
			className={`absolute flex flex-col items-center justify-center gap-1 overflow-hidden w-screen h-0 z-20 lg:w-0 lg:h-screen 
			bg-gradient-to-b lg:bg-gradient-to-r from-black to-yellow-400 
			${
				loading
					? isMobile
						? 'animate-YFtransition'
						: 'animate-XFtransition'
					: isMobile
					? 'animate-YBtransition'
					: 'animate-XBtransition'
			}
			`}
		>
			<span className='relative flex items-center justify-center w-52 h-32 animate-bounce'>
				<Image
					src={Logo}
					alt='MSpilari logo'
					objectFit='contain'
					sizes='25vw'
					layout='fill'
				/>
			</span>
			<span className='text-xl'>Loading...</span>
		</div>
	)
}

export { Loading }
