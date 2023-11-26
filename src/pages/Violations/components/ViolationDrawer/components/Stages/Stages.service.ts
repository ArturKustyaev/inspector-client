import { ViolationStatus } from 'types'
import { stages } from './Stages.constants'

export function getIsDisabledMenuItem(status: ViolationStatus | null | undefined, stage: number) {
	if (!status) return stage !== 1

	return stages[status] < stage
}
