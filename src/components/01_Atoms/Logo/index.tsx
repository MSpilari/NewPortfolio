import Image from 'next/image'

import LargeLogo from '../../../../public/Logo(1).svg'
import SmallLogo from '../../../../public/Logo.svg'

const Logo: React.FC = () => {
	return (
		<div className='w-40 ml-3 h-full flex items-center lg:w-full lg:ml-0 lg:justify-center'>
			<div className='lg:hidden'>
				<Image
					className='object-cover'
					src={SmallLogo}
					alt='Logo MSpilari Mobile'
				/>
			</div>

			<div className='hidden lg:flex'>
				<Image
					className='object-cover'
					src={LargeLogo}
					alt='Logo MSpilari Desktop'
				/>
			</div>
		</div>
	)
}

export { Logo }
