import { useRef } from 'react'
import {
	BsFillArrowLeftSquareFill,
	BsFillArrowRightSquareFill
} from 'react-icons/bs'
import { useLanguage } from '../../hooks/languageHook'
import { carouselScroll } from '../../utils/carouselScroll'
import { Project } from './Project'

const ProjectCarousel = ({ projectsInfo }) => {
	const { language } = useLanguage()
	const carouselWrapper = useRef<HTMLDivElement | null>(null)

	return (
		<div
			className='w-full h-full mx-auto absolute z-10 text-white 
				flex flex-col items-center justify-center'
		>
			<h1
				className='font-pushster font-bold text-3xl animate-bounce
   text-yellow-500'
			>
				{language.ProjectsTitle}
			</h1>

			<div
				ref={carouselWrapper}
				className='w-full h-[80%] overflow-x-hidden scroll-smooth relative flex items-center '
			>
				<button
					onClick={() => carouselScroll(carouselWrapper.current, 'left')}
					className='text-3xl fixed top-1/2 left-0 text-yellow-500 z-10 lg:left-[80px]'
				>
					<BsFillArrowLeftSquareFill />
				</button>

				<div className='flex absolute overflow-x-auto'>
					{projectsInfo.map(project => {
						return (
							<Project
								key={project.id}
								image={project.projectImage}
								title={project.title}
								prjLink={project.projectLink}
								gitLink={project.githubLink}
							/>
						)
					})}
				</div>

				<button
					onClick={() => carouselScroll(carouselWrapper.current, 'right')}
					className='text-3xl fixed top-1/2 right-0 text-yellow-500 z-10'
				>
					<BsFillArrowRightSquareFill />
				</button>
			</div>
		</div>
	)
}

export { ProjectCarousel }
