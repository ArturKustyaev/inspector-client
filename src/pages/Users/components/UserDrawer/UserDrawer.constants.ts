import { Option, UserRole, userRoleLabels } from 'types'
import { UserDrawerFormValues } from './UserDrawer.types'

export const userDrawerFormDefaultValues: UserDrawerFormValues = {
	lastName: '',
	firstName: '',
	middleName: '',
	email: '',
	login: '',
	password: '',
	role: 'user'
}

export const userRoleOptions: Option<string, UserRole>[] = [
	{
		label: userRoleLabels.admin,
		value: 'admin'
	},
	{
		label: userRoleLabels.lawyer,
		value: 'lawyer'
	},
	{
		label: userRoleLabels.supervisor,
		value: 'supervisor'
	},
	{
		label: userRoleLabels.user,
		value: 'user'
	}
]
