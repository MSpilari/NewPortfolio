import {
	AiOutlineHome,
	AiOutlineUser,
	AiOutlineEye,
	AiOutlineMail
} from 'react-icons/ai'

import { BsGear } from 'react-icons/bs'
import Icon from '../Icons'
const AllIcons = () => {
	return (
		<>
			<Icon href='/' text='Home'>
				<AiOutlineHome />
			</Icon>
			<Icon href='/about' text='About'>
				<AiOutlineUser />
			</Icon>
			<Icon href='/skills' text='Skills'>
				<BsGear />
			</Icon>
			<Icon href='/projects' text='Projects'>
				<AiOutlineEye />
			</Icon>
			<Icon href='/contact' text='Contact'>
				<AiOutlineMail />
			</Icon>
		</>
	)
}

export default AllIcons
