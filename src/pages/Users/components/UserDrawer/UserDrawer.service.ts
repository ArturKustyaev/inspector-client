import { User } from 'types'
import { userDrawerFormDefaultValues } from './UserDrawer.constants'
import { UserDrawerFormValues } from '.'

export function getUserDrawerFormDefaultValues(user?: User): UserDrawerFormValues {
	if (!user) return userDrawerFormDefaultValues

	return user
}
