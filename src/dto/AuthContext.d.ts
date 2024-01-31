export interface IAuthContext {
	userInfo: string | boolean | null
	signIn: (props: ISignIn) => void
	signOut: () => void
}

export interface AuthenticationProviderProps {
	children: ReactNode
}
