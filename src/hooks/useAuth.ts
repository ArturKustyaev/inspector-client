import { useUserContext } from 'context'

export const useAuth = () => {
	const { user } = useUserContext()

	return Boolean(user)
}
