import styled from 'styled-components'
import Link from 'next/link'

const StyledIcon = styled.i`
	margin: 20px 0;
	color: ${({ theme }) => theme.colors.text};
	font-size: 28px;

	&:hover {
		color: ${({ theme }) => theme.colors.hoverButtons};
	}

	@media screen and (max-width: 768px) {
		margin: 0 20px;
	}
`

const Icon = ({ href, className }) => {
	return (
		<Link href={href}>
			<a>
				<StyledIcon className={className} />
			</a>
		</Link>
	)
}

export default Icon
