import { useRouter } from 'next/router'
import { createContext, useState } from 'react'

interface ISignIn {
	email: string
	password: string
}

const AuthenticationContextDefault = {
	userInfo: null,
	signIn: props => {},
	signOut: () => {}
}

const AuthenticationContext = createContext(AuthenticationContextDefault)

const AuthenticationProvider = ({ children }) => {
	const [userInfo, setUserInfo] = useState(null)
	const { push } = useRouter()

	const signIn = async ({ email, password }: ISignIn) => {
		const res = await fetch(
			`${process.env.NEXT_PUBLIC_CURRENT_URL}/api/login`,
			{
				method: 'POST',
				body: JSON.stringify({ email, password }),
				headers: { 'Content-Type': 'application/json' }
			}
		)

		const credentials = await res.json()

		if (credentials.message) {
			setUserInfo(credentials.message)
			return push('/addProject')
		}
	}

	const signOut = () => setUserInfo(null)

	return (
		<AuthenticationContext.Provider value={{ userInfo, signIn, signOut }}>
			{children}
		</AuthenticationContext.Provider>
	)
}

export { AuthenticationProvider, AuthenticationContext }
