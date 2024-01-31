import { BsGithub, BsEyeFill } from 'react-icons/bs'
import Image from 'next/image'

import { Button } from '@components/01_Atoms/Button'
import { IProject } from '@dto/ProjectCard'

const ProjectCard = ({ image, prjLink, title, gitLink }: IProject) => {
	return (
		<div className='flex flex-col font-pushster w-[200px] h-[50vh] mx-3 bg-[rgba(0,0,0,0.5)] rounded-md lg:w-[350px] lg:h-[350px]'>
			<div className='relative w-full h-3/4 px-2 rounded-md overflow-hidden'>
				<Image
					layout='fill'
					objectFit='cover'
					sizes='50vw'
					src={image}
					alt={`${title} image`}
				/>
			</div>

			<h1 className='w-full text-xl text-yellow-500 ml-2 truncate'>{title}</h1>

			<div className='w-full flex justify-between my-2 '>
				<a href={gitLink} target='_blank' rel='noreferrer'>
					<Button
						className='border-2 flex items-center rounded-xl text-base px-4 py-2 
											hover:text-yellow-500 hover:border-yellow-500'
						iconLabel={<BsGithub className='mr-1' />}
						animationText='Code'
					/>
				</a>

				<a href={prjLink} target='_blank' rel='noreferrer'>
					<Button
						className='border-2 flex items-center rounded-xl text-base px-4 py-2 
											hover:text-yellow-500 hover:border-yellow-500'
						iconLabel={<BsEyeFill className='mr-1' />}
						animationText='Project'
					/>
				</a>
			</div>
		</div>
	)
}

export { ProjectCard }
