import { Dispatch, FC, SetStateAction } from 'react'
import { inputChanges } from '../../../utils/inputChanges'
import { IAllInfo } from '../../03_Organisms/AddNewProject'

interface ITitleGitProjectInput {
	allInfo: IAllInfo
	setAllInfo: Dispatch<SetStateAction<IAllInfo>>
}

const TitleGitProjectInput: FC<ITitleGitProjectInput> = ({
	allInfo,
	setAllInfo
}) => {
	return (
		<>
			<label className='flex text-lg mt-2 ' htmlFor='title'>
				<span className='text-lg mx-1'>Title:</span>

				<input
					className='text-lg w-full bg-transparent border-2 rounded-md outline-none'
					type='text'
					name='title'
					value={allInfo.title}
					placeholder='Project title...'
					onChange={e => inputChanges(e, allInfo, setAllInfo)}
					required
				/>
			</label>

			<label className='flex text-lg mt-2 ' htmlFor='githubLink'>
				<span className='text-lg mx-1'>GithubLink:</span>

				<input
					className='text-lg w-full bg-transparent border-2 rounded-md outline-none'
					type='text'
					name='githubLink'
					value={allInfo.githubLink}
					placeholder='Github Link...'
					onChange={e => inputChanges(e, allInfo, setAllInfo)}
					required
				/>
			</label>

			<label className='flex text-lg mt-2 ' htmlFor='projectLink'>
				<span className='text-lg mx-1'>Project Link:</span>

				<input
					className='text-lg w-full bg-transparent border-2 rounded-md outline-none'
					type='text'
					name='projectLink'
					value={allInfo.projectLink}
					placeholder='Project Link...'
					onChange={e => inputChanges(e, allInfo, setAllInfo)}
					required
				/>
			</label>
		</>
	)
}

export { TitleGitProjectInput }
