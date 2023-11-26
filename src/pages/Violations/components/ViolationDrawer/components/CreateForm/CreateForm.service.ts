import { CreateViolationBody } from 'api'
import { Violation } from 'types'
import { getFormatDate } from 'utils'
import { createFormDefaultValues } from './CreateForm.constants'
import { CreateFormValues } from './CreateForm.types'

export function getCreateFormDefaultValues(violation?: Violation): CreateFormValues {
	if (!violation) return createFormDefaultValues

	const { violationInfo } = violation

	return {
		title: violationInfo.title,
		discoveryDate: violationInfo.discoveryDate ? new Date(violationInfo.discoveryDate) : null,
		violationType: violationInfo.violationType ?? null,
		district: violationInfo.district ?? '',
		location: violationInfo.location ?? '',
		description: violationInfo.description ?? ''
	}
}

export function mapCreateFormValues(values: CreateFormValues): CreateViolationBody {
	const { description, discoveryDate, district, location, title, violationType } = values
	const fnsFormatPattern = 'yyyy-MM-dd'

	return {
		title,
		discoveryDate: getFormatDate({ date: discoveryDate, fnsFormatPattern }) ?? undefined,
		violationType: violationType ?? undefined,
		district: district ?? undefined,
		location,
		description
	}
}
