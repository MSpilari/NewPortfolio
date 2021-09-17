import { StyledButton } from './style'

const Button = ({ label, ...props }) => {
	return <StyledButton {...props}>{label}</StyledButton>
}

export default Button
