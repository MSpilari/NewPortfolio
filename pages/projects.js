import { useState, useEffect } from 'react'

import DefaultPage from '../src/components/containers/DefaultPage'
import { OnlyChild } from '../src/screens/Projects'

const Projects = () => {
	const [allProjects, setAllProjects] = useState([])
	const [isLoaded, setIsLoaded] = useState(false)

	useEffect(() => {
		const path =
			document.location.host === 'localhost:3000'
				? 'http://localhost:3000/api/projects'
				: 'https://mspilariportfolio.vercel.app/api/projects'
		fetch(path)
			.then(res => res.json())
			.then(data => {
				setAllProjects(data.projects)
				setIsLoaded(true)
			})
	}, [])

	return (
		<DefaultPage
			firstChild={<OnlyChild allProjects={allProjects} isLoaded={isLoaded} />}
		/>
	)
}

export default Projects
