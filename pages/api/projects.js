import allProjects from '../../src/database/allProjects'

export default (req, res) => {
	res.status(200).json(allProjects)
}
