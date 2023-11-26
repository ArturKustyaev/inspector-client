import { ViolationStatus } from './violation'

export const violationStatusLabels: Record<ViolationStatus, string> = {
	created: 'Создано',
	coordination: 'Согласование',
	revision: 'Доработка',
	completed: 'Решение суда'
}
