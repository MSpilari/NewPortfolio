import { useState, useEffect } from 'react'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import { desktopSettings, mediumSettings, mobileSettings } from './styles'

const MyCarousel = ({ children }) => {
	const [currentScreenSize, setCurrentScreenSize] = useState(
		getWindowDimensions()
	)

	useEffect(() => {
		function handleResize() {
			setCurrentScreenSize(getWindowDimensions())
		}
		window.addEventListener('resize', handleResize)
		return () => window.removeEventListener('resize', handleResize)
	}, [])

	function getWindowDimensions() {
		const windowWidth = window.innerWidth
		return windowWidth
	}

	function screenSizeCalc() {
		if (currentScreenSize < 768) return mobileSettings
		if (768 <= currentScreenSize < 1024) return mediumSettings
		if (currentScreenSize >= 1024) return desktopSettings
	}

	return <Carousel {...screenSizeCalc()}>{children}</Carousel>
}

export default MyCarousel
