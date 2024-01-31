import { LoginForm } from '@components/03_Organisms/LoginForm'

const Login = () => {
	return (
		<div className='flex flex-col h-[calc(100%-128px)] relative lg:flex-row lg:w-[calc(100%-80px)] lg:h-full '>
			<LoginForm />
		</div>
	)
}

export default Login
