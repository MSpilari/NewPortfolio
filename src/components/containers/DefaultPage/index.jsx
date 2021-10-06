import NavBar from '../../UI/Header'
import { isClientSide } from '../../../utils/isClientSide'
import { MainWrapper, FirstChildWrapper, SecondChildWrapper } from './styles'

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
