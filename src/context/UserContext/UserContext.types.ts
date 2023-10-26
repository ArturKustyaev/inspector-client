import { User } from 'types'

export interface UserContextProps {
	user: User | null
	setUser: (user: User) => void
	resetUser: () => void
}
