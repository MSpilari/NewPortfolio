'use client'

import { signInWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { createContext, useState } from 'react'
import { auth } from '../../firebase'
import { IAuthContext, AuthenticationProviderProps } from '@dto/AuthContext'
import { ISignIn } from '@dto/SignIn'

const AuthenticationContextDefault = {
	userInfo: null,
	signIn: async (props: ISignIn): Promise<string | boolean | null> => {
		try {
			const credentials = await signInWithEmailAndPassword(
				auth,
				props.email,
				props.password
			)

			return credentials.user.accessToken
		} catch (error) {
			return false
		}
	},
	signOut: () => {}
}

const AuthenticationContext = createContext<IAuthContext>(
	AuthenticationContextDefault
)

const AuthenticationProvider: React.FC<AuthenticationProviderProps> = ({
	children
}) => {
	const [userInfo, setUserInfo] = useState<string | boolean | null>(null)
	const { push } = useRouter()

	const signIn = async ({ email, password }: ISignIn) => {
		const token = await AuthenticationContextDefault.signIn({ email, password })

		if (token) {
			setUserInfo(token)
			return push('/addProject')
		}

		return setUserInfo(token)
	}

	const signOut = () => setUserInfo(null)

	return (
		<AuthenticationContext.Provider value={{ userInfo, signIn, signOut }}>
			{children}
		</AuthenticationContext.Provider>
	)
}

export { AuthenticationProvider, AuthenticationContext }
