export interface ICarouselWrapper {
	children: JSX.Element
}

export interface ProjectsSlider {
	projectsInfo: {
		id: string
		projectImage: string
		title: string
		projectLink: string
		githubLink: string
	}[]
}
