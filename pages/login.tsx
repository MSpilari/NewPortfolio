import { Header } from '../src/components/UI/Header'
import { AnimationLoginDesktop } from '../src/components/UI/Login/AnimationLoginDesktop'
import { LoginForm } from '../src/components/UI/Login/LoginForm'

const Login = () => {
	return (
		<div className='w-screen h-screen lg:flex'>
			<Header />

			<div className='flex flex-col h-[calc(100%-128px)] relative lg:flex-row lg:w-[calc(100%-80px)] lg:h-full '>
				<AnimationLoginDesktop />
				<LoginForm />
			</div>
		</div>
	)
}

export default Login
