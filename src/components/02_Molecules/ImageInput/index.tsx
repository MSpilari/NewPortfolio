import { FC, useRef } from 'react'
import { BsFillCameraFill } from 'react-icons/bs'
import { IImageInput } from '@dto/AddNewProject'
import { imageToDataUrl } from '@utils/imageToDataUrl'

const ImageInput: FC<IImageInput> = ({ allInfo, setAllInfo }) => {
	const inputFileRef = useRef<HTMLInputElement>(null)

	const cleanInputOnClick = () => {
		if (inputFileRef.current) {
			inputFileRef.current.value = ''
			setAllInfo(prevState => ({ ...prevState, ['image']: '' }))
		}
	}

	return (
		<>
			<div className='w-[250px] h-[200px] flex items-center justify-center mx-auto my-1'>
				{allInfo.image ? (
					<img
						className='w-full h-full p-1'
						src={allInfo.image}
						alt='Picture To Upload'
						onClick={() => cleanInputOnClick()}
					/>
				) : (
					<button
						onClick={() => inputFileRef.current?.click()}
						className='flex flex-col items-center'
						type='button'
					>
						<BsFillCameraFill className='text-3xl' />

						<p className='text-lg text-center'>
							Click here to upload a picture
						</p>
					</button>
				)}
			</div>

			<input
				ref={inputFileRef}
				onChange={e => imageToDataUrl(e, allInfo, setAllInfo)}
				className='hidden'
				type='file'
				name='image'
				required
			/>
		</>
	)
}

export { ImageInput }
