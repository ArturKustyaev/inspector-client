import { ViolationStatus } from 'types'

export function isCourtFormReadonlyField(status: ViolationStatus | undefined) {
  if (!status) return false

  return status !== 'court'
}
