import { Option, violationStatusLabels } from 'types'
import { ViolationStatus } from 'types'

export const menuItems: Option<string, number>[] = [
  {
    value: 1,
    label: 'Создание',
  },
  {
    value: 2,
    label: violationStatusLabels.coordination,
  },
  {
    value: 3,
    label: violationStatusLabels.completed,
  },
]

export const stages: Record<ViolationStatus, number> = {
  created: 1,
  revision: 1,
  coordination: 2,
  court: 3,
  completed: 3,
}
