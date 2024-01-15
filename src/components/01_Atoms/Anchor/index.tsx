import { AnchorHTMLAttributes } from 'react'
import { AnchorProps } from '@dto/Anchor'

const Anchor: React.FC<
	AnchorProps & AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ anchorText, ...props }) => {
	return <a {...props}>{anchorText}</a>
}

export { Anchor }
