import styled from 'styled-components'

export const FormContactWrapper = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const DefaultInput = styled.input`
	background-color: rgba(0, 0, 0, 0.3);
	border: solid 2px rgba(0, 0, 0, 0.3);
	border-radius: 8px;
	width: 300px;
	margin: 10px 0;
	padding: 20px;
	color: ${({ theme }) => theme.colors.text};
	outline: none;
	font-size: 18px;

	&:focus {
		border: solid 2px ${({ theme }) => theme.colors.hoverButtons};
	}
`

export const DefaultTextArea = styled.textarea`
	background-color: rgba(0, 0, 0, 0.3);
	border: solid 2px rgba(0, 0, 0, 0.3);
	border-radius: 8px;
	width: 300px;
	height: 150px;
	margin: 10px 0;
	padding: 20px;
	color: ${({ theme }) => theme.colors.text};
	outline: none;
	font-size: 18px;
	resize: none;

	&:focus {
		border: solid 2px ${({ theme }) => theme.colors.hoverButtons};
	}
`
