'use client'

import { useRef } from 'react'
import {
	BsFillArrowLeftSquareFill,
	BsFillArrowRightSquareFill
} from 'react-icons/bs'

import { carouselScroll } from '@utils/carouselScroll'
import { Button } from '@components/01_Atoms/Button'
import { ProjectCard } from '@components/02_Molecules/ProjectCard'
import { ProjectsSlider } from '@dto/Carousel'

const CarouselSlider: React.FC<ProjectsSlider> = ({ projectsInfo }) => {
	const carouselWrapper = useRef<HTMLDivElement | null>(null)

	return (
		<div
			ref={carouselWrapper}
			className='w-full h-[80%] overflow-x-hidden scroll-smooth relative flex items-center '
		>
			<Button
				iconLabel={<BsFillArrowLeftSquareFill />}
				onClick={() => carouselScroll(carouselWrapper.current, 'left')}
				className='text-3xl fixed top-1/2 left-0 text-yellow-500 z-10 lg:left-[80px]'
			/>

			<div className='flex absolute overflow-x-auto'>
				{projectsInfo.map(project => {
					return (
						<ProjectCard
							key={project.id}
							image={project.projectImage}
							title={project.title}
							prjLink={project.projectLink}
							gitLink={project.githubLink}
						/>
					)
				})}
			</div>

			<Button
				iconLabel={<BsFillArrowRightSquareFill />}
				onClick={() => carouselScroll(carouselWrapper.current, 'right')}
				className='text-3xl fixed top-1/2 right-0 text-yellow-500 z-10'
			/>
		</div>
	)
}

export { CarouselSlider }
