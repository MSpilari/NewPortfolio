import { collection, onSnapshot } from 'firebase/firestore'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { db } from '../../../../firebase'
import { AdminCard } from '@components/01_Atoms/AdminCard'
import { IAllProjects } from '@dto/AddNewProject'

const ListDeleteProjects = () => {
	const [allProjects, setAllProjects] = useState<IAllProjects[]>([])

	useEffect(() => {
		onSnapshot(collection(db, 'projects'), snapshot => {
			setAllProjects(
				snapshot.docs.map(project => {
					return {
						id: project.id,
						...project.data()
					}
				}) as IAllProjects[]
			)
		})
	}, [])

	return (
		<div className='w-full flex flex-col items-center'>
			<Link href={'/'}>
				<p className='text-yellow-500 cursor-pointer  text-xl'>
					Back to Home page
				</p>
			</Link>

			<h1 className='text-yellow-500 text-2xl'>List/Delete Projects</h1>

			<ul className='w-full flex flex-col'>
				{allProjects.map(project => {
					const { id, title, projectImage } = project
					return (
						<AdminCard
							key={id}
							id={id}
							title={title}
							projectImage={projectImage}
						/>
					)
				})}
			</ul>
		</div>
	)
}

export { ListDeleteProjects }
