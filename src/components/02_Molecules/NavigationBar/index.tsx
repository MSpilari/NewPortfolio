import Link from 'next/link'
import { AiOutlineHome } from 'react-icons/ai'
import { BsGear, BsPerson, BsShieldLock } from 'react-icons/bs'
import { MdWorkOutline } from 'react-icons/md'
import { Button } from '@components/01_Atoms/Button'

const NavigationBar = () => {
	return (
		<nav className='flex fixed bottom-0 w-full h-12 items-center justify-around z-20 bg-zinc-900 lg:flex-col lg:static lg:h-96 xl:h-full'>
			<Link href='/' passHref>
				<Button
					data-testid='homeButton'
					className='text-2xl text-white lg:linkButton lg:linkAnimation'
					iconLabel={<AiOutlineHome className='lg:linkButtonSvg' />}
					animationText={<p className='hidden lg:flex lg:linkButtonP'>Home</p>}
					aria-label='Home Button'
				/>
			</Link>

			<Link href='/about' passHref>
				<Button
					data-testid='aboutButton'
					className='text-2xl text-white lg:linkButton lg:linkAnimation'
					iconLabel={<BsPerson className='lg:linkButtonSvg' />}
					animationText={<p className='hidden lg:flex lg:linkButtonP'>About</p>}
					aria-label='About Button'
				/>
			</Link>

			<Link href='/skills' passHref>
				<Button
					data-testid='skillsButton'
					className='text-2xl text-white lg:linkButton lg:linkAnimation'
					iconLabel={<BsGear className='lg:linkButtonSvg' />}
					animationText={
						<p className='hidden lg:flex lg:linkButtonP'>Skills</p>
					}
					aria-label='Skills Button'
				/>
			</Link>

			<Link href='/projects' passHref>
				<Button
					data-testid='projectsButton'
					className='text-2xl text-white lg:linkButton lg:linkAnimation'
					iconLabel={<MdWorkOutline className='lg:linkButtonSvg' />}
					animationText={
						<p className='hidden lg:flex lg:linkButtonP'>Projects</p>
					}
					aria-label='Projects Button'
				/>
			</Link>

			<Link href='/login' passHref>
				<Button
					data-testid='loginButton'
					className='text-2xl text-white lg:linkButton lg:linkAnimation'
					iconLabel={<BsShieldLock className='lg:linkButtonSvg' />}
					animationText={<p className='hidden lg:flex lg:linkButtonP'>Login</p>}
					aria-label='Login Button'
				/>
			</Link>
		</nav>
	)
}

export { NavigationBar }
