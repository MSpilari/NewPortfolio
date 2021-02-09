import Link from 'next/link'

import { StyledAnchor, StyledIcon, StyledIconText } from './styles'

const Icon = ({ href, text, children }) => {
	return (
		<Link href={href}>
			<StyledAnchor>
				<StyledIcon>{children}</StyledIcon>
				<StyledIconText>{text}</StyledIconText>
			</StyledAnchor>
		</Link>
	)
}

export default Icon
