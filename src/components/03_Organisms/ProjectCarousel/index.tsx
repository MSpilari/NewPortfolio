import { CarouselSlider } from '@components/02_Molecules/CarouselSlider'
import { CarouselWrapper } from '@components/04_Templates/CarouselWrapper'

type ProjectsCarousel = {
	projectsInfo: []
}

const ProjectCarousel: React.FC<ProjectsCarousel> = ({ projectsInfo }) => {
	return (
		<CarouselWrapper>
			<CarouselSlider projectsInfo={projectsInfo} />
		</CarouselWrapper>
	)
}

export { ProjectCarousel }
