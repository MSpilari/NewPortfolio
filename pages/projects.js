import DefaultPage from '../src/components/DefaultPage'
import CustomTitle from '../src/components/Titles'
import Carousel from '../src/components/Carousel'
import CardProject from '../src/components/CardProject'

import db from '../db.json'
import styled from 'styled-components'

const ProjectWrapper = styled.div`
	width: 90%;
	margin: 0 auto;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`

const Projects = () => {
	const projects = db.projects

	return (
		<DefaultPage>
			<ProjectWrapper>
				<CustomTitle text='Projetos' />

				<Carousel>
					{projects.map(project => {
						return (
							<CardProject
								key={project.title}
								href={project.href}
								project={project}
							/>
						)
					})}
				</Carousel>
			</ProjectWrapper>
		</DefaultPage>
	)
}

export default Projects
