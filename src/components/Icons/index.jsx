import Link from 'next/link'

import { StyledAnchor, StyledIcon, StyledIconText } from './styles'

const Icon = ({ href, className, text }) => {
	return (
		<Link href={href}>
			<StyledAnchor>
				<StyledIcon className={className} />
				<StyledIconText>{text}</StyledIconText>
			</StyledAnchor>
		</Link>
	)
}

export default Icon
