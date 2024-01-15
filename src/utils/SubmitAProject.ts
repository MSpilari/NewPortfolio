import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { getDownloadURL, ref, uploadString } from 'firebase/storage'
import { db, storage } from '../../firebase'
import { ISubmitAProject } from '@dto/AddNewProject'

const SubmitAProject = async ({
	image,
	githubLink,
	title,
	projectLink
}: ISubmitAProject) => {
	const imgRef = ref(storage, `/projects/${title}-Image`)

	await uploadString(imgRef, image, 'data_url').then(async () => {
		const downloadURL = await getDownloadURL(imgRef)

		await addDoc(collection(db, 'projects'), {
			projectLink,
			title,
			githubLink,
			projectImage: downloadURL,
			createdAt: serverTimestamp()
		})
	})
}

export { SubmitAProject }
