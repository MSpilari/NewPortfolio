import { ChangeEvent, Dispatch, SetStateAction } from 'react'
import { IAllInfo } from '../components/02_Molecules/AddNewProject'

const inputChanges = (
	event: ChangeEvent<HTMLInputElement>,
	_prevState: IAllInfo,
	setAllInfo: Dispatch<SetStateAction<IAllInfo>>
) => {
	const { name, value } = event.target
	setAllInfo(prevState => ({
		...prevState,
		[name]: value
	}))
}

export { inputChanges }
