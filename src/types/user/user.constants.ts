import { LegendColors } from 'types'
import { UserRole } from './user'

export const userRoleLabels: Record<UserRole, string> = {
  admin: 'Администратор',
  lawyer: 'Юрист',
  supervisor: 'Руководитель',
  user: 'Инспектор',
}

export const userRoleColors: Record<UserRole, LegendColors> = {
  admin: 'blue',
  lawyer: 'darkPink',
  supervisor: 'green',
  user: 'grayBlue',
}

export const roleArray: UserRole[] = ['admin', 'lawyer', 'supervisor', 'user']
