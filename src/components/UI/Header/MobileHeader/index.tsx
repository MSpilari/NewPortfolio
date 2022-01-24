import Image from 'next/image'
import Link from 'next/link'
import {
	AiOutlineGithub,
	AiOutlineHome,
	AiOutlineLinkedin
} from 'react-icons/ai'
import { BsGear, BsPerson, BsShieldLock } from 'react-icons/bs'
import { GiBrazilFlag, GiUsaFlag } from 'react-icons/gi'
import { MdWorkOutline } from 'react-icons/md'
import Logo from '../../../../../public/Logo.svg'
import { allLanguages } from '../../../../config/allLanguages'
import { useLanguage } from '../../../../hooks/languageHook'

const MobileHeader = () => {
	const { language, setLanguage } = useLanguage()

	const handleLanguage = () =>
		setLanguage(
			language === allLanguages.ptBr ? allLanguages.en : allLanguages.ptBr
		)

	return (
		<section className='flex flex-col items-center w-full h-full lg:hidden'>
			<div className='w-full h-full flex items-center justify-center'>
				<div className='w-40 ml-3 h-full flex items-center'>
					<Image className='object-cover' src={Logo} alt='Logo MSpilari' />
				</div>
				<ul
					className='flex w-20 items-center justify-around 
					text-white text-2xl ml-auto mr-4'
				>
					<li className='mx-2'>
						<button onClick={() => handleLanguage()}>
							{language === allLanguages.ptBr ? (
								<GiUsaFlag />
							) : (
								<GiBrazilFlag />
							)}
						</button>
					</li>
					<li className='mx-2'>
						<a href='https://www.github.com/MSpilari'>
							<AiOutlineGithub />
						</a>
					</li>
					<li className='mx-2'>
						<a href='https://www.linkedin.com/in/matheus-bernardes-spilari-2b8068188/'>
							<AiOutlineLinkedin />
						</a>
					</li>
				</ul>
			</div>
			<nav
				className='flex fixed bottom-0 w-full h-12 
				items-center justify-around z-20 bg-zinc-900 lg:hidden'
			>
				<Link href='/'>
					<button className='text-2xl text-white'>
						<AiOutlineHome />
					</button>
				</Link>
				<Link href='/about'>
					<button className='text-2xl text-white'>
						<BsPerson />
					</button>
				</Link>
				<Link href='/skills'>
					<button className='text-2xl text-white'>
						<BsGear />
					</button>
				</Link>
				<Link href='/projects'>
					<button className='text-2xl text-white'>
						<MdWorkOutline />
					</button>
				</Link>
				<Link href='/login'>
					<button className='text-2xl text-white'>
						<BsShieldLock />
					</button>
				</Link>
			</nav>
		</section>
	)
}

export { MobileHeader }
