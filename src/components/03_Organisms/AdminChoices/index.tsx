import { AddNewProject } from '../../02_Molecules/AddNewProject'
import { ListDeleteProjects } from '../../02_Molecules/ListDeleteProjects'

const AdminChoices = () => {
	return (
		<>
			<ListDeleteProjects />
			<AddNewProject />
		</>
	)
}
export { AdminChoices }
