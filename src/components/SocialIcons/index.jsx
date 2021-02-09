import styled from 'styled-components'

const StyledSocialIcon = styled.i`
	color: ${({ theme }) => theme.colors.text};
	margin: 5px 0;
	font-size: 20px;

	&:hover {
		color: ${({ theme }) => theme.colors.hoverButtons};
	}

	@media screen and (max-width: 768px) {
		margin: 0 5px;
	}
`

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
