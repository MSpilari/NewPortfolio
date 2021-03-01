import DefaultPage from '../src/components/DefaultPage'
import { Animation, Welcome } from '../src/components/pages/HomePage'

export default function Home() {
	return <DefaultPage firstChild={<Welcome />} secondChild={<Animation />} />
}
