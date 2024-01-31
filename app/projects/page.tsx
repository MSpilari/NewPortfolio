import { ProjectCarousel } from '@components/03_Organisms/ProjectCarousel'

async function getServerSideProps() {
	const res = await fetch(`${process.env.CURRENT_URL}/api/allProjects`)

	if (!res.ok) {
		throw new Error('Failed to fetch data')
	}

	return res.json()
}

const Projects = async () => {
	const data = await getServerSideProps()

	return (
		<div className='flex flex-col h-[calc(100%-128px)] relative lg:flex-row lg:w-[calc(100%-80px)] lg:h-full '>
			<ProjectCarousel projectsInfo={data} />
		</div>
	)
}

export default Projects
