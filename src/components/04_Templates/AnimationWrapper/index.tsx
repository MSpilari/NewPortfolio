import { HTMLAttributes } from 'react'

const AnimationWrapper: React.FC<HTMLAttributes<HTMLDivElement>> = ({
	children,
	...props
}) => {
	return (
		<div className='w-full h-full overflow-hidden absolute' {...props}>
			{children}
		</div>
	)
}

export { AnimationWrapper }
