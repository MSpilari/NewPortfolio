import { deleteDoc, doc } from 'firebase/firestore'
import { deleteObject, ref } from 'firebase/storage'
import { db, storage } from '../../firebase'

const deleteProject = async (projectId: string, title: string) => {
	const storageImgRef = ref(storage, `projects/${title}-Image`)

	await deleteDoc(doc(db, 'projects', projectId))

	await deleteObject(storageImgRef)
}

export { deleteProject }
