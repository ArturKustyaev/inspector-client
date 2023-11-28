import { CreateViolationBody } from 'api'
import { ViolationInspector, ViolationStatus } from 'types'

export interface CreateFormProps {
  inspector: ViolationInspector | undefined
  status: ViolationStatus | undefined
  createdAt: string | undefined
  onSubmit: (values: CreateViolationBody) => void
}

export interface CreateFormValues {
  title: string
  discoveryDate: Date | null
  violationType: string | null
  district: string | null
  location?: string
  description?: string
}
