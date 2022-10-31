import { Header } from '../src/components/03_Organisms/Header'
import { ProjectCarousel } from '../src/components/03_Organisms/ProjectCarousel'

const Projects = ({ data }) => {
	return (
		<div className='w-screen h-screen lg:flex'>
			<Header />

			<div className='flex flex-col h-[calc(100%-128px)] relative lg:flex-row lg:w-[calc(100%-80px)] lg:h-full '>
				<ProjectCarousel projectsInfo={data} />
			</div>
		</div>
	)
}

export async function getServerSideProps() {
	const res = await fetch(`${process.env.CURRENT_URL}/api/allProjects`)
	const data = await res.json()

	return { props: { data } }
}

export default Projects
