import { LiHTMLAttributes } from 'react'

const ListItem: React.FC<LiHTMLAttributes<HTMLLIElement>> = ({
	children,
	...props
}) => {
	return <li {...props}>{children}</li>
}

export { ListItem }
