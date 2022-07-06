import LoginFileAnimationDesktop from '../src/assets/animationLoginDesktop.json'
import { Animation } from '../src/components/01_Atoms/Animation'
import { Header } from '../src/components/03_Organisms/Header'
import { AnimationWrapper } from '../src/components/04_Templates/AnimationWrapper'
import { LoginForm } from '../src/components/03_Organisms/LoginForm'

const Login = () => {
	return (
		<div className='w-screen h-screen lg:flex'>
			<Header />

			<div className='flex flex-col h-[calc(100%-128px)] relative lg:flex-row lg:w-[calc(100%-80px)] lg:h-full '>
				<AnimationWrapper>
					<Animation
						className='hidden w-full h-full lg:flex'
						animationFile={LoginFileAnimationDesktop}
					/>
				</AnimationWrapper>

				<LoginForm />
			</div>
		</div>
	)
}

export default Login
