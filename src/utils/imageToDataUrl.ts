import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { IAllInfo } from '../components/03_Organisms/AddNewProject'

const imageToDataUrl = (
	event: ChangeEvent<HTMLInputElement>,
	_prevState: IAllInfo,
	setAllInfo: Dispatch<SetStateAction<IAllInfo>>
) => {
	const reader = new FileReader()
	const { name } = event.target
	if (event.target.files?.item(0)) {
		reader.readAsDataURL(event.target.files[0])
	}

	reader.onload = readerEvent => {
		setAllInfo(prevState => ({
			...prevState,
			[name]: String(readerEvent.target?.result)
		}))
	}
}

export { imageToDataUrl }
