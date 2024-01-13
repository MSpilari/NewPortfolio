'use client'

import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { AdminChoices } from '@components/03_Organisms/AdminChoices'
import { useAuthentication } from '@hooks/authenticationHook'

const AddProject = () => {
	const { userInfo } = useAuthentication()
	const { push } = useRouter()

	useEffect(() => {
		userInfo ? null : push('/login')
	}, [])

	return (
		<section className='w-full h-full flex flex-col'>
			{userInfo ? <AdminChoices /> : <p className='text-white'>Redirect...</p>}
		</section>
	)
}

export default AddProject
