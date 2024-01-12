'use client'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { createContext, useState } from 'react'
import { auth } from '../../firebase'
import { IAuthContext } from '@dto/AuthContext'
import { ISignIn } from '@dto/SignIn'

const AuthenticationContextDefault = {
	userInfo: null,
	signIn: (props: ISignIn): any => {},
	signOut: () => {}
}

const AuthenticationContext = createContext<IAuthContext>(
	AuthenticationContextDefault
)

const AuthenticationProvider = ({ children }) => {
	const [userInfo, setUserInfo] = useState<string | null>(null)
	const { push } = useRouter()

	const signIn = async ({ email, password }) => {
		const credentials = await signInWithEmailAndPassword(auth, email, password)
			.then(credentials => credentials)
			.catch(() => null)

		if (credentials && credentials.user.accessToken) {
			setUserInfo(credentials.user.accessToken)
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
