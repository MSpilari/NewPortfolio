import { useState, useEffect } from 'react'
import styled from 'styled-components'

import DefaultPage from '../src/components/DefaultPage'
import CustomTitle from '../src/components/Titles'
import Carousel from '../src/components/Carousel'
import CardProject from '../src/components/CardProject'

const ProjectWrapper = styled.div`
	width: 90%;
	margin: 0 auto;

	@media screen and (max-width: 768px) {
		width: 100%;
	}
`

const Projects = () => {
	const [allProjects, setAllProjects] = useState([])

	useEffect(() => {
		const path =
			document.location.host === 'localhost:3000'
				? 'http://localhost:3000/api/projects'
				: 'https://mspilariportfolio.vercel.app/api/projects'
		fetch(path)
			.then(res => res.json())
			.then(data => setAllProjects(data.projects))
	}, [])

	return (
		<DefaultPage>
			<ProjectWrapper>
				<CustomTitle text='Projetos' />

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
			</ProjectWrapper>
		</DefaultPage>
	)
}

export default Projects
