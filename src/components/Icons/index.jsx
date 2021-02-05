import { useRouter } from 'next/router'

import { StyledAnchor, StyledIcon, StyledIconText } from './styles'

const Icon = ({ href, className, text }) => {
	const router = useRouter()

	const handleClick = event => {
		event.preventDefault()
		return router.push(href)
	}

	return (
		<StyledAnchor href={href} onClick={e => handleClick(e)}>
			<StyledIcon className={className} />
			<StyledIconText>{text}</StyledIconText>
		</StyledAnchor>
	)
}

export default Icon
