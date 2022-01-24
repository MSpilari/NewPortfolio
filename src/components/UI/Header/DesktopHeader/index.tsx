import Link from 'next/link'
import Image from 'next/image'
import {
	AiOutlineGithub,
	AiOutlineHome,
	AiOutlineLinkedin
} from 'react-icons/ai'
import { BsGear, BsPerson, BsShieldLock } from 'react-icons/bs'
import { GiBrazilFlag, GiUsaFlag } from 'react-icons/gi'
import { MdWorkOutline } from 'react-icons/md'

import Logo from '../../../../../public/Logo(1).svg'
import { allLanguages } from '../../../../config/allLanguages'
import { useLanguage } from '../../../../hooks/languageHook'

const DesktopHeader = () => {
	const { language, setLanguage } = useLanguage()

	const handleLanguage = () =>
		setLanguage(
			language === allLanguages.ptBr ? allLanguages.en : allLanguages.ptBr
		)

	return (
		<section className='hidden w-full h-full lg:flex flex-col'>
			<div className='w-20 h-56 flex flex-col items-center xl:h-2/3'>
				<div className='w-full flex items-center justify-center'>
					<Image className='object-cover' src={Logo} alt='Logo MSpilari' />
				</div>

				<ul
					className='flex flex-col w-full h-full items-center justify-around 
      text-white text-2xl'
				>
					<li className='my-1'>
						<button onClick={() => handleLanguage()}>
							{language === allLanguages.ptBr ? (
								<GiUsaFlag />
							) : (
								<GiBrazilFlag />
							)}
						</button>
					</li>

					<li className='my-1'>
						<a href='https://www.github.com/MSpilari'>
							<AiOutlineGithub />
						</a>
					</li>

					<li className='my-1'>
						<a href='https://www.linkedin.com/in/matheus-bernardes-spilari-2b8068188/'>
							<AiOutlineLinkedin />
						</a>
					</li>
				</ul>
			</div>

			<nav
				className='flex flex-col w-full h-96 
    items-center justify-around bg-zinc-900 xl:h-full'
			>
				<Link href='/'>
					<button className='linkButton linkAnimation'>
						<AiOutlineHome className='linkButtonSvg' />
						<p className='linkButtonP'>Home</p>
					</button>
				</Link>

				<Link href='/about'>
					<button className='linkButton linkAnimation'>
						<BsPerson className='linkButtonSvg' />
						<p className='linkButtonP'>About</p>
					</button>
				</Link>

				<Link href='/skills'>
					<button className='linkButton linkAnimation'>
						<BsGear className='linkButtonSvg' />
						<p className='linkButtonP'>Skills</p>
					</button>
				</Link>

				<Link href='/projects'>
					<button className='linkButton linkAnimation'>
						<MdWorkOutline className='linkButtonSvg' />
						<p className='linkButtonP'>Projects</p>
					</button>
				</Link>

				<Link href='/login'>
					<button className='linkButton linkAnimation'>
						<BsShieldLock className='linkButtonSvg' />
						<p className='linkButtonP'>Login</p>
					</button>
				</Link>
			</nav>
		</section>
	)
}

export { DesktopHeader }
