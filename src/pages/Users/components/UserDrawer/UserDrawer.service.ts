import { User } from 'types'
import { UserDrawerFormValues } from '.'
import { userDrawerFormDefaultValues } from './UserDrawer.constants'
import { UpdateUserBody } from 'api'

export function getUserDrawerFormDefaultValues(user?: User): UserDrawerFormValues {
	if (!user) return userDrawerFormDefaultValues

	return {
		...user,
		password: ''
	}
}

export function mapUserDrawerFormValues(values: UserDrawerFormValues): UpdateUserBody {
	const { password, ...restValues } = values

	return {
		...restValues,
		password: password || undefined
	}
}
