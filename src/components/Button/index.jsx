import styled from 'styled-components'

const StyledButton = styled.button`
	background-color: transparent;
	border: 3px solid ${({ theme }) => theme.colors.text};
	padding: 20px 10px;
	font-size: 18px;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.text};
	cursor: pointer;

	margin: 20px 0;

	&:hover {
		border: 3px solid ${({ theme }) => theme.colors.hoverButtons};
		background-color: ${({ theme }) => theme.colors.hoverButtons};
	}
`

const Button = ({ label, ...props }) => {
	return <StyledButton {...props}>{label}</StyledButton>
}

export default Button
