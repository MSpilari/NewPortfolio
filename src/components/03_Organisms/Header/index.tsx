import { Logo } from '../../01_Atoms/Logo'
import { LinksUnorderedList } from '../../02_Molecules/LinksUnorderedList'
import { NavigationBar } from '../../02_Molecules/NavigationBar'

const Header = () => {
	return (
		<section className='flex flex-col items-center w-full h-full'>
			<div
				className='w-full h-full flex items-center justify-center 
											lg:w-20 lg:h-56 lg:flex-col xl:h-2/3'
			>
				<Logo />

				<LinksUnorderedList />
			</div>

			<NavigationBar />
		</section>
	)
}

export { Header }
