import { LoadingWrapper, Rotate } from './styles'

const Loading = () => {
	return (
		<LoadingWrapper>
			<Rotate />
			<span style={{ color: 'white' }}>Carregando...</span>
		</LoadingWrapper>
	)
}

export default Loading
