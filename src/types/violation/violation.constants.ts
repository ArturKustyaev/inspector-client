import { LegendColors } from 'types'
import { ReviewStatus, ViolationStatus } from './violation'

export const violationStatusLabels: Record<ViolationStatus, string> = {
  created: 'Создано',
  coordination: 'Согласование',
  revision: 'Доработка',
  court: 'Решение суда',
  completed: 'Исполнено',
}

export const reviewStatusLabels: Record<ReviewStatus, string> = {
  approve: 'Согласовано',
  decline: 'Отклонено',
}

export const reviewStatusColors: Record<ReviewStatus, LegendColors> = {
  approve: 'green',
  decline: 'red',
}
