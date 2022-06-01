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
			<Link href='/'>
				<Button
					className='text-2xl text-white lg:linkButton lg:linkAnimation'
					iconLabel={<AiOutlineHome className='lg:linkButtonSvg' />}
					animationText={<p className='hidden lg:flex lg:linkButtonP'>Home</p>}
				/>
			</Link>
			<Link href='/about'>
				<Button
					className='text-2xl text-white lg:linkButton lg:linkAnimation'
					iconLabel={<BsPerson className='lg:linkButtonSvg' />}
					animationText={<p className='hidden lg:flex lg:linkButtonP'>About</p>}
				/>
			</Link>
			<Link href='/skills'>
				<Button
					className='text-2xl text-white lg:linkButton lg:linkAnimation'
					iconLabel={<BsGear className='lg:linkButtonSvg' />}
					animationText={
						<p className='hidden lg:flex lg:linkButtonP'>Skills</p>
					}
				/>
			</Link>
			<Link href='/projects'>
				<Button
					className='text-2xl text-white lg:linkButton lg:linkAnimation'
					iconLabel={<MdWorkOutline className='lg:linkButtonSvg' />}
					animationText={
						<p className='hidden lg:flex lg:linkButtonP'>Projects</p>
					}
				/>
			</Link>
			<Link href='/login'>
				<Button
					className='text-2xl text-white lg:linkButton lg:linkAnimation'
					iconLabel={<BsShieldLock className='lg:linkButtonSvg' />}
					animationText={<p className='hidden lg:flex lg:linkButtonP'>Login</p>}
				/>
			</Link>
		</nav>
	)
}

export { NavigationBar }
