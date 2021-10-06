import { ProjectWrapper } from './styles'
import CustomTitle from '../../components/UI/Titles'
import Loading from '../../components/UI/Loading'
import Carousel from './Carousel'
import CardProject from './CardProject'
import { useContext } from 'react'
import { LanguageContext } from '../../providers/language'

const OnlyChild = ({ isLoaded, allProjects }) => {
	const { Lang } = useContext(LanguageContext)

	return (
		<ProjectWrapper>
			<CustomTitle text={Lang.ProjectsTitle} />
			{isLoaded ? (
				<Carousel>
					{allProjects.map(project => {
						return (
							<CardProject
								key={project.title}
								href={project.href}
								project={project}
							/>
						)
					})}
				</Carousel>
			) : (
				<Loading />
			)}
		</ProjectWrapper>
	)
}

export { OnlyChild }
