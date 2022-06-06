import { Header } from '../src/components/03_Organisms/Header'
import { AnimationLoginDesktop } from '../src/components/Login/AnimationLoginDesktop'
import { LoginForm } from '../src/components/Login/LoginForm'

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
