import { StyledSocialIcon } from './styles'

const SocialIcon = ({ href, children }) => {
	return (
		<a href={href} target='_blank' rel='noreferrer'>
			<li>
				<StyledSocialIcon>{children}</StyledSocialIcon>
			</li>
		</a>
	)
}

export default SocialIcon
