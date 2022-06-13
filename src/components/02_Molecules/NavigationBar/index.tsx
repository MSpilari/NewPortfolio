import Link from 'next/link'
import { AiOutlineHome } from 'react-icons/ai'
import { BsGear, BsPerson, BsShieldLock } from 'react-icons/bs'
import { MdWorkOutline } from 'react-icons/md'
import { Button } from '../../01_Atoms/Button'

const NavigationBar = () => {
	return (
		<nav
			className='flex fixed bottom-0 w-full h-12 items-center justify-around z-20 bg-zinc-900
										lg:flex-col lg:static lg:h-96 xl:h-full'
		>
			<Link href='/' passHref>
				<a>
					{/* Wrap those Buttons(functional components) inside a anchor tag to avoid the warning React.forwardRef*/}
					<Button
						className='text-2xl text-white lg:linkButton lg:linkAnimation'
						iconLabel={<AiOutlineHome className='lg:linkButtonSvg' />}
						animationText={
							<p className='hidden lg:flex lg:linkButtonP'>Home</p>
						}
					/>
				</a>
			</Link>
			<Link href='/about' passHref>
				<a>
					<Button
						className='text-2xl text-white lg:linkButton lg:linkAnimation'
						iconLabel={<BsPerson className='lg:linkButtonSvg' />}
						animationText={
							<p className='hidden lg:flex lg:linkButtonP'>About</p>
						}
					/>
				</a>
			</Link>
			<Link href='/skills' passHref>
				<a>
					<Button
						className='text-2xl text-white lg:linkButton lg:linkAnimation'
						iconLabel={<BsGear className='lg:linkButtonSvg' />}
						animationText={
							<p className='hidden lg:flex lg:linkButtonP'>Skills</p>
						}
					/>
				</a>
			</Link>
			<Link href='/projects' passHref>
				<a>
					<Button
						className='text-2xl text-white lg:linkButton lg:linkAnimation'
						iconLabel={<MdWorkOutline className='lg:linkButtonSvg' />}
						animationText={
							<p className='hidden lg:flex lg:linkButtonP'>Projects</p>
						}
					/>
				</a>
			</Link>
			<Link href='/login' passHref>
				<a>
					<Button
						className='text-2xl text-white lg:linkButton lg:linkAnimation'
						iconLabel={<BsShieldLock className='lg:linkButtonSvg' />}
						animationText={
							<p className='hidden lg:flex lg:linkButtonP'>Login</p>
						}
					/>
				</a>
			</Link>
		</nav>
	)
}

export { NavigationBar }
