import { useContext } from 'react'
import { AuthenticationContext } from '@context/authentication'

const useAuthentication = () => useContext(AuthenticationContext)

export { useAuthentication }
