import { User, UserRole } from 'types'

export interface UserDrawerProps {
	user?: User
}

export interface UserDrawerFormValues {
	lastName: string
	firstName: string
	middleName: string
	email: string
	login: string
	password?: string
	role: UserRole | null
	isAddUser: boolean
	avatarPreview: string | null
	avatar: File | null
}
