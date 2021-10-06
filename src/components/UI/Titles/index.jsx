import { FontStyled } from './styles'

const CustomCharacters = ({ text }) => {
	const customizedChars = text.split('').map((char, index) => {
		return char === ',' ? (
			<>
				<FontStyled key={index}>{char}</FontStyled>
				<br />
			</>
		) : (
			<FontStyled key={index}>{char}</FontStyled>
		)
	})

	return <h1>{customizedChars}</h1>
}

export default CustomCharacters
