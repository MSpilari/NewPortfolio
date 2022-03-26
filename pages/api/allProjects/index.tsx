import { collection, getDocs } from 'firebase/firestore'
import { NextApiRequest, NextApiResponse } from 'next'
import { db } from '../../../firebase'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { method } = req

	if (method === 'GET') {
		const allProjectsDocs = await getDocs(collection(db, 'projects'))

		const allProjects = allProjectsDocs.docs.map(project => {
			return {
				id: project.id,
				...project.data()
			}
		})

		return res.status(200).json(allProjects)
	}

	return res.status(500).json({ name: 'Error' })
}
