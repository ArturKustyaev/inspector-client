import { ViolationStatus } from 'types'

export interface CourtFormProps {
  status: ViolationStatus | undefined
}

export interface CourtFormValues {
  endDate: Date | null
  courtDecision: string | null
  amount: number | null
}
