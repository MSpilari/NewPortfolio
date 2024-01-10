export interface IAuthContext {
	userInfo: string | null
	signIn: (props: ISignIn) => void
	signOut: () => void
}
