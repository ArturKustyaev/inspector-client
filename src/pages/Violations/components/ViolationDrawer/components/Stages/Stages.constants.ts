import { Option, violationStatusLabels } from 'types'
import { ViolationStatus } from 'types'

export const menuItems: Option<string, number>[] = [
	{
		value: 1,
		label: violationStatusLabels.created
	},
	{
		value: 2,
		label: violationStatusLabels.coordination
	},
	{
		value: 3,
		label: violationStatusLabels.completed
	}
]

export const stages: Record<ViolationStatus, number> = {
	created: 1,
	coordination: 2,
	revision: 1,
	completed: 3
}
