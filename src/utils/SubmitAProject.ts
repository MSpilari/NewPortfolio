import {
	addDoc,
	collection,
	doc,
	serverTimestamp,
	updateDoc
} from 'firebase/firestore'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'
import { db, storage } from '../../firebase'

interface ISubmitAProject {
	image: string
	githubLink: string
	title: string
	projectLink: string
}

const SubmitAProject = async ({
	image,
	githubLink,
	title,
	projectLink
}: ISubmitAProject) => {
	const docRef = await addDoc(collection(db, 'projects'), {
		projectLink,
		title,
		githubLink,
		createdAt: serverTimestamp()
	})

	const imgRef = ref(storage, `/projects/${docRef.id}/image`)

	await uploadString(imgRef, image, 'data_url').then(async snapshot => {
		const downloadURL = await getDownloadURL(imgRef)

		await updateDoc(doc(db, 'projects', docRef.id), {
			projectImage: downloadURL
		})
	})
}

export { SubmitAProject }
