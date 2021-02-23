import styled from 'styled-components'

const LoadingWrapper = styled.div`
	width: 100%;
	height: 200px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`
const Rotate = styled.div`
	width: 50px;
	height: 75px;
	border-top: solid 5px ${({ theme }) => theme.colors.hoverButtons};
	border-radius: 100px;
	animation: rotate 2s linear infinite;
	margin-bottom: 5px;
	@keyframes rotate {
		from {
			transform: rotate(0deg);
		}
		to {
			transform: rotate(360deg);
		}
	}
`
const Loading = () => {
	return (
		<LoadingWrapper>
			<Rotate />
			<span style={{ color: 'white' }}>Carregando...</span>
		</LoadingWrapper>
	)
}

export default Loading
