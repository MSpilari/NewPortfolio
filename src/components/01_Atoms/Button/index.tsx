import { ButtonHTMLAttributes } from 'react'
import { ButtonProps } from '@dto/Button'

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
