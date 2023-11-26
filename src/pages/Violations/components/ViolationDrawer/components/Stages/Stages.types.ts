import { ViolationStatus } from 'types'

export interface FormationStagesProps {
	value: number
	status: ViolationStatus | null
	onChange: (value: number) => void
}
