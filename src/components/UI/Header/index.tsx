import { DesktopHeader } from './DesktopHeader'
import { MobileHeader } from './MobileHeader'

const Header = () => {
	return (
		<header
			className=' bg-zinc-900 w-full h-20 
    border-b-2 border-yellow-400 font-pushster lg:h-screen lg:w-20 lg:border-r-2 lg:border-b-0'
		>
			<MobileHeader />
			<DesktopHeader />
		</header>
	)
}

export { Header }
