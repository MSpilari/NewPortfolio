import DefaultPage from '../src/components/DefaultPage'
import CustomTitle from '../src/components/Titles'
import db from '../db.json'
import CardProject from '../src/components/CardProject'

const Projects = () => {
	const projects = db.projects

	return (
		<DefaultPage>
			<div style={{ width: '100%' }}>
				<CustomTitle text='Projetos' />
				<div>
					{projects.map(project => {
						return (
							<CardProject
								key={project.title}
								href={project.href}
								project={project}
							/>
						)
					})}
				</div>
			</div>
		</DefaultPage>
	)
}

export default Projects
