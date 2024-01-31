import { useState } from 'react'
import { ImageInput } from '@components/02_Molecules/ImageInput'
import { TitleGitProjectInput } from '@components/02_Molecules/TitleGitProjectInput'
import { SubmitAProject } from '@utils/SubmitAProject'
import { IAllInfo } from '@dto/AddNewProject'

const defaultState = {
	image: '',
	title: '',
	githubLink: '',
	projectLink: ''
}

const AddNewProject = () => {
	const [allInfo, setAllInfo] = useState({} as IAllInfo)

	const { image, githubLink, title, projectLink } = allInfo

	return (
		<div className='w-full h-full mx-auto z-10 text-white flex flex-col items-center justify-center lg:w-full lg:h-full'>
			<h1 className='text-2xl text-yellow-500 mb-3'>Add a new project</h1>

			<form
				onSubmit={e => {
					e.preventDefault()
					SubmitAProject(allInfo)
					setAllInfo(defaultState)
				}}
				className='flex flex-col items-center w-[90%] mx-auto'
			>
				<ImageInput allInfo={allInfo} setAllInfo={setAllInfo} />

				<TitleGitProjectInput allInfo={allInfo} setAllInfo={setAllInfo} />

				<button
					className='px-10 py-2 my-7 border-2 border-white text-xl rounded-lg hover:text-yellow-500 hover:border-yellow-500 disabled:bg-gray-500 disabled:opacity-50 disabled:hover:bg-gray-500 disabled:hover:border-white disabled:hover:text-white'
					type='submit'
					disabled={!image || !projectLink || !githubLink || !title}
				>
					Send
				</button>
			</form>
		</div>
	)
}
export { AddNewProject }
