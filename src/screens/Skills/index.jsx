import { useContext } from 'react'
import parse from 'html-react-parser'
import { GrLinkedin } from 'react-icons/gr'

import { LanguageContext } from '../../providers/language'
import CustomTitle from '../../components/UI/Titles'
import { InfoDiv, Info } from './styles'

const SkillsText = () => {
	const { Lang } = useContext(LanguageContext)

	return (
		<InfoDiv>
			<CustomTitle text={Lang.SkillsTitle} />
			<Info>
				{parse(Lang.SkillsInfo, {
					library: {
						createElement: () => {
							return (
								<a
									style={{ textDecoration: 'none', color: 'inherit' }}
									href='https://www.linkedin.com/in/matheus-bernardes-spilari-2b8068188/'
								>
									<GrLinkedin />
								</a>
							)
						}
					}
				})}
			</Info>
		</InfoDiv>
	)
}

export { SkillsText }
