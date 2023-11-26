import { useUserContext } from 'context'

export const useUserPrivileges = () => {
	const { user } = useUserContext()

	return {
		isAdmin: user?.role === 'admin',
		isLawyer: user?.role === 'lawyer',
		isSupervisor: user?.role === 'supervisor',
		isInspector: user?.role === 'user'
	}
}
