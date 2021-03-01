import { ProjectWrapper } from './styles'
import CustomTitle from '../../Titles'
import Loading from '../../Loading'
import Carousel from './Carousel'
import CardProject from './CardProject'

const OnlyChild = ({ isLoaded, allProjects }) => {
	return (
		<ProjectWrapper>
			<CustomTitle text='Projetos' />
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
