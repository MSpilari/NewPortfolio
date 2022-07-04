import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { AdminChoices } from '../src/components/03_Organisms/AdminChoices'
import { useAuthentication } from '../src/hooks/authenticationHook'

const AddProject = () => {
	const { userInfo } = useAuthentication()
	const { push } = useRouter()

	useEffect(() => {
		userInfo ? null : push('/login')
	}, [])

	return (
		<div className='w-full h-full flex flex-col'>
			{userInfo ? <AdminChoices /> : <p className='text-white'>Redirect...</p>}
		</div>
	)
}

export default AddProject
