import { BsGithub, BsEyeFill } from 'react-icons/bs'

interface IProject {
	image: string
	prjLink: string
	title: string
	gitLink: string
}

const ProjectCard = ({ image, prjLink, title, gitLink }: IProject) => {
	return (
		<div
			className='flex flex-col font-pushster w-[200px] h-full mx-3 bg-[rgba(0,0,0,0.5)] rounded-md 
                  lg:w-[350px] lg:h-[350px]'
		>
			<img
				className='w-full p-2 rounded-xl'
				src={image}
				alt={`${title} image`}
			/>

			<h1 className='w-full text-xl text-yellow-500 truncate'>{title}</h1>

			<div className='w-full flex justify-between my-2 '>
				<a href={gitLink} target='_blank' rel='noreferrer'>
					<button
						className='border-2 flex items-center rounded-xl 
          text-base px-4 py-2 hover:text-yellow-500 hover:border-yellow-500'
					>
						<BsGithub className='mr-1' />
						Code
					</button>
				</a>

				<a href={prjLink} target='_blank' rel='noreferrer'>
					<button
						className='border-2 flex items-center rounded-xl 
          text-base px-4 py-2 hover:text-yellow-500 hover:border-yellow-500'
					>
						<BsEyeFill className='mr-1' />
						Project
					</button>
				</a>
			</div>
		</div>
	)
}

export { ProjectCard }
