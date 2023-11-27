import { Control } from 'react-hook-form'
import { ViolationStatus } from 'types'
import { CreateFormValues } from '../../CreateForm'

export interface CreateActionsProps {
  status: ViolationStatus | undefined
  control: Control<CreateFormValues>
  onCancel: () => void
  onApproval: () => void
  onDelete: () => void
}
