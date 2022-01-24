import { AddNewProject } from '../src/components/UI/AddProject/AddNewProject'
import { Header } from '../src/components/UI/Header'
import { useAuthentication } from '../src/hooks/authenticationHook'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const AddProject = () => {
	const { userInfo } = useAuthentication()
	const { push } = useRouter()

	useEffect(() => {
		userInfo ? null : push('/login')
	}, [])

	return (
		<div className='w-full h-full lg:flex'>
			<Header />

			<div className='flex flex-col h-[calc(100%-128px)] relative lg:flex-row lg:w-[calc(100%-80px)] lg:h-full '>
				{userInfo ? (
					<AddNewProject />
				) : (
					<p className='text-white'>Redirect...</p>
				)}
			</div>
		</div>
	)
}

export default AddProject
