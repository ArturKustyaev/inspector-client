import { Control } from 'react-hook-form'
import { ReviewStatus, ViolationStatus } from 'types'
import { CreateFormValues } from '../../CreateForm'

export interface CreateActionsProps {
  stage: number
  status: ViolationStatus | undefined
  createControl: Control<CreateFormValues>
  onCancel: () => void
  onUpdateStatus: (status: ViolationStatus) => void
  onApprove: (status: ReviewStatus, message?: string) => void
  onDelete: () => void
}
