import { AnchorHTMLAttributes } from 'react'

type AnchorProps = {
	anchorText: JSX.Element | string
}

const Anchor: React.FC<
	AnchorProps & AnchorHTMLAttributes<HTMLAnchorElement>
> = ({ anchorText, ...props }) => {
	return <a {...props}>{anchorText}</a>
}

export { Anchor }
