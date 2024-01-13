import { AddNewProject } from '@components/02_Molecules/AddNewProject'
import { ListDeleteProjects } from '@components/02_Molecules/ListDeleteProjects'

const AdminChoices = () => {
	return (
		<>
			<ListDeleteProjects />
			<AddNewProject />
		</>
	)
}
export { AdminChoices }
