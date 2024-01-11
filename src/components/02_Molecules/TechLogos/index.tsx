import { allLogos } from '@config/allSkillsLogos'
import { Card } from '@components/01_Atoms/Card'

const TechLogos: React.FC = () => {
	return (
		<div className='mt-5 mb-14 w-full grid grid-cols-3 gap-3 items-center justify-center'>
			{allLogos.map((logo, index) => (
				<Card key={`Logo+${index}`} icon={logo.icon} name={logo.name} />
			))}
		</div>
	)
}

export { TechLogos }
