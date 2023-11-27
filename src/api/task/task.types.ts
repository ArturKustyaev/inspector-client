import { ViolationStatus } from 'types'

export const s = 1

export interface CreateViolationBody {
  title: string
  discoveryDate?: string
  violationType?: string
  district?: string
  location?: string
  description?: string
}

export interface UpdateViolationBody extends Partial<CreateViolationBody> {
  violationId: string
}

export interface ChangeStatusBody {
  id: string
  status: ViolationStatus
}
