import NavBar from '../Header'
import { MainWrapper, FirstChildWrapper, SecondChildWrapper } from './styles'

const isClientSide = () => typeof window !== 'undefined'

const DefaultPage = ({ firstChild, secondChild }) => {
	return (
		<>
			{isClientSide() && (
				<>
					<NavBar />
					<MainWrapper>
						<FirstChildWrapper>{firstChild}</FirstChildWrapper>
						<SecondChildWrapper>{secondChild}</SecondChildWrapper>
					</MainWrapper>
				</>
			)}
		</>
	)
}

export default DefaultPage
