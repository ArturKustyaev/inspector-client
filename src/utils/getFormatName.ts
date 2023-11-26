export const getFormatName = (lastName: string, firstName: string, middleName: string): string => {
	return (
		(lastName ? `${lastName} ` : '') + (firstName ? `${firstName[0]}.` : '') + (middleName ? `${middleName[0]}.` : '')
	)
}
