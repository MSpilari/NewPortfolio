import DefaultPage from '../src/components/containers/DefaultPage'
import { Animation, Welcome } from '../src/screens/HomePage'

export default function Home() {
	return <DefaultPage firstChild={<Welcome />} secondChild={<Animation />} />
}
