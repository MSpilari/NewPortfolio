import { signInWithEmailAndPassword } from 'firebase/auth'
import { NextApiRequest, NextApiResponse } from 'next'
import { auth } from '../../../firebase'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const { method, body } = req

	if (method === 'POST') {
		const { email, password } = body

		await signInWithEmailAndPassword(auth, email, password)
			.then(user => {
				return res.status(200).json({ message: user.user })
			})
			.catch(error => {
				return res.status(500).json({ message: null })
			})
	}

	return res.status(500).json({ name: 'Error' })
}
