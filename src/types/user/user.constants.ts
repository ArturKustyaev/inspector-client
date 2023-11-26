import { theme } from 'styles'
import { UserRole } from './user'

export const userRoleLabels: Record<UserRole, string> = {
	admin: 'Администратор',
	lawyer: 'Юрист',
	supervisor: 'Руководитель',
	user: 'Пользователь'
}

export const userRoleColors: Record<UserRole, string> = {
	admin: theme.palette.primary.main,
	lawyer: theme.palette.primary.light,
	supervisor: theme.palette.success.light,
	user: theme.palette.warning.light
}

export const roleArray: UserRole[] = ['admin', 'lawyer', 'supervisor', 'user']
