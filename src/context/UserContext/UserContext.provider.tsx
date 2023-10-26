import { FC, PropsWithChildren, ReactElement, useState } from 'react'
import { User } from 'types'
import { UserContext } from './UserContext'

export const UserContextProvider: FC<PropsWithChildren> = ({ children }): ReactElement | null => {
	const [user, setUser] = useState<User | null>(null)

	const onSetUser = (user: User) => {
		setUser(user)
	}

	const onResetUser = () => {
		setUser(null)
	}

	return (
		<UserContext.Provider value={{ user, setUser: onSetUser, resetUser: onResetUser }}>{children}</UserContext.Provider>
	)
}
