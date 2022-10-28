import Image from 'next/image'
import { deleteProject } from '../../../utils/deleteProject'

type IAdminCard = {
	id: string
	title: string
	projectImage: string
}

const AdminCard = ({ id, title, projectImage }: IAdminCard) => {
	return (
		<li
			className='w-[60%] mx-auto my-1 h-28 text-white flex items-center justify-between 
      font-pushster border-2 border-yellow-300 rounded-lg overflow-hidden'
			key={id}
		>
			{projectImage && (
				<div className='w-[200px] relative h-full overflow-hidden'>
					<Image
						className='absolute w-full h-full'
						objectFit='cover'
						layout='fill'
						src={projectImage}
					/>
				</div>
			)}

			<h5 className='text-xl truncate'>{title}</h5>

			<button
				className='mr-3 text-xl border-2 rounded-full p-2 border-red-600 text-red-600'
				onClick={() => deleteProject(id, title)}
			>
				X
			</button>
		</li>
	)
}

export { AdminCard }
