import { Header } from '../src/components/UI/Header'
import { ProjectAnimationDesktop } from '../src/components/Projects/projectAnimationDesktop'
import { ProjectCarousel } from '../src/components/Projects/ProjectCarousel'

const Projects = () => {
	return (
		<div className='w-screen h-screen lg:flex'>
			<Header />

			<div className='flex flex-col h-[calc(100%-128px)] relative lg:flex-row lg:w-[calc(100%-80px)] lg:h-full '>
				<ProjectAnimationDesktop />

				<ProjectCarousel />
			</div>
		</div>
	)
}

export default Projects
