import { signInWithEmailAndPassword } from 'firebase/auth'
import { createContext, useState } from 'react'
import { auth } from '../../firebase'

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

	const signIn = async ({ email, password }: ISignIn) => {
		try {
			const UserCredentials = await signInWithEmailAndPassword(
				auth,
				email,
				password
			)
			const { user } = UserCredentials
			return setUserInfo(user)
		} catch (error) {
			return setUserInfo(null)
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
