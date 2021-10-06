import styled from 'styled-components'

export const IconsDiv = styled.div`
	display: grid;
	width: 90%;
	gap: 5px;
	grid-template-columns: 1fr 1fr 1fr 1fr;
	margin-left: 5px;

	@media screen and (max-width: 768px) {
		width: 100%;
		margin: 0;
	}
`

export const CardFliper = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	perspective: 1000px;

	&:hover > div {
		transform: rotateY(180deg);
	}
`

export const CardInner = styled.div`
	position: relative;
	width: 100%;
	height: 100%;
	transition: transform 0.8s;
	transform-style: preserve-3d;
`

export const CardFront = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	backface-visibility: hidden;
	-webkit-backface-visibility: hidden;
`
export const CardBack = styled.div`
	position: absolute;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100%;
	text-align: center;
	backface-visibility: hidden;
	-webkit-backface-visibility: hidden;
	transform: rotateY(180deg);
`

export const SkillIcon = styled.i`
	font-size: 50px;
	display: flex;
	justify-self: center;
	align-self: center;
	border: 1px solid ${({ theme }) => theme.colors.text};
	color: ${({ theme }) => theme.colors.text};
	padding: 10px;
	transition: 0.4s linear;

	&:hover {
		border: 1px solid ${({ theme }) => theme.colors.hoverButtons};
		color: ${({ theme }) => theme.colors.hoverButtons};
	}
`

export const SpanIcon = styled.span`
	color: ${({ theme }) => theme.colors.text};
	padding: 10px;
	transition: 0.4s linear;

	&:hover {
		color: ${({ theme }) => theme.colors.hoverButtons};
	}
`
