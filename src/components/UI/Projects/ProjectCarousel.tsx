import {
	collection,
	onSnapshot,
	query,
	QueryDocumentSnapshot
} from 'firebase/firestore'
import { useEffect, useRef, useState } from 'react'
import {
	BsFillArrowLeftSquareFill,
	BsFillArrowRightSquareFill
} from 'react-icons/bs'
import { db } from '../../../../firebase'
import { useLanguage } from '../../../hooks/languageHook'
import { carouselScroll } from '../../../utils/carouselScroll'
import { Project } from './Project'

const ProjectCarousel = () => {
	const { language } = useLanguage()
	const [projects, setProjects] = useState<QueryDocumentSnapshot[]>([])
	const carouselWrapper = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		onSnapshot(query(collection(db, 'projects')), snapshot =>
			setProjects(snapshot.docs)
		)
	}, [])
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
					{projects.map(project => {
						return (
							<Project
								key={project.id}
								image={project.data().projectImage}
								title={project.data().title}
								prjLink={project.data().projectLink}
								gitLink={project.data().githubLink}
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
