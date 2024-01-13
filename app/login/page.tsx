import LoginFileAnimationDesktop from '@assets/animationLoginDesktop.json'
import { Animation } from '@components/01_Atoms/Animation'
import { AnimationWrapper } from '@components/04_Templates/AnimationWrapper'
import { LoginForm } from '@components/03_Organisms/LoginForm'

const Login = () => {
	return (
		<div className='flex flex-col h-[calc(100%-128px)] relative lg:flex-row lg:w-[calc(100%-80px)] lg:h-full '>
			<AnimationWrapper>
				<Animation
					className='hidden w-full h-full lg:flex'
					animationFile={LoginFileAnimationDesktop}
				/>
			</AnimationWrapper>

			<LoginForm />
		</div>
	)
}

export default Login
