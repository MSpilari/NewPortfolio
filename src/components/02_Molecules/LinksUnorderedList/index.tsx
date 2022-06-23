import { GiBrazilFlag, GiUsaFlag } from 'react-icons/gi'
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'

import { Anchor } from '../../01_Atoms/Anchor'
import { Button } from '../../01_Atoms/Button'
import { ListItem } from '../../01_Atoms/ListItem'

import { allLanguages } from '../../../config/allLanguages'
import { useLanguage } from '../../../hooks/languageHook'

const LinksUnorderedList = () => {
	const { language, setLanguage } = useLanguage()

	const handleLanguage = () =>
		setLanguage(
			language === allLanguages.ptBr ? allLanguages.en : allLanguages.ptBr
		)

	return (
		<ul
			className='flex w-20 items-center justify-around text-white text-2xl ml-auto mr-4 
                  lg:flex-col lg:w-full lg:h-full lg:mr-0 lg:ml-0'
		>
			<ListItem className='mx-2 lg:my-1' title='Switch language'>
				<Button
					title='Language button'
					iconLabel={
						language === allLanguages.ptBr ? <GiUsaFlag /> : <GiBrazilFlag />
					}
					onClick={() => handleLanguage()}
				/>
			</ListItem>

			<ListItem className='mx-2 lg:my-1' title='Github'>
				<Anchor
					anchorText={<AiOutlineGithub />}
					href='https://www.github.com/MSpilari'
					target='_blank'
					rel='noopener noreferrer'
				/>
			</ListItem>

			<ListItem className='mx-2 lg:my-1' title='LinkedIn'>
				<Anchor
					anchorText={<AiOutlineLinkedin />}
					href='https://www.linkedin.com/in/matheus-bernardes-spilari-2b8068188/'
					target='_blank'
					rel='noopener noreferrer'
				/>
			</ListItem>
		</ul>
	)
}

export { LinksUnorderedList }
