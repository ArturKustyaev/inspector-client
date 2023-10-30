export interface User {
	_id: string
	firstName: string
	lastName: string
	middleName: string
	email: string
	login: string
	role: UserRole
}

export type UserRole = 'user' | 'admin' | 'supervisor' | 'lawyer'
