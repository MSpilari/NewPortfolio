import { ButtonHTMLAttributes } from 'react'

type ButtonProps = {
	iconLabel: JSX.Element | string
	animationText?: JSX.Element | string
}

const Button: React.FC<
	ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>
> = ({ iconLabel, animationText, ...props }) => {
	return (
		<button {...props}>
			{iconLabel}
			{animationText}
		</button>
	)
}

export { Button }
