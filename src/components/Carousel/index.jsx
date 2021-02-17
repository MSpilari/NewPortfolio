import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'

const MyCarousel = ({ children }) => {
	const desktopSettings = {
		arrows: true,
		infinite: true,
		centered: true,
		slidesPerPage: 3,
		itemWidth: 350
	}

	const mobileSettings = {
		arrows: true,
		infinite: true,
		centered: true,
		slidesPerPage: 1
	}

	const mediumSettings = {
		arrows: true,
		infinite: true,
		centered: true,
		slidesPerPage: 2
	}

	const screenSizeCalc = () => {
		if (window.screen.availWidth < 768) return mobileSettings
		if (768 <= window.screen.availWidth < 1024) return mediumSettings
		if (window.screen.availWidth >= 1024) return desktopSettings
	}

	let screenSizeSettings = screenSizeCalc()

	return <Carousel {...screenSizeSettings}>{children}</Carousel>
}

export default MyCarousel
