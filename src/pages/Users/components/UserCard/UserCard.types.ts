import { User, UserRole } from 'types'

export interface UserCardProps {
	user: User
	onUpdateUser: (user: User) => void
}

export interface StyledUserRoleProps {
	$role: UserRole
}
