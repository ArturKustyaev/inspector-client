import { buttonBaseClasses, inputAdornmentClasses, inputBaseClasses, svgIconClasses, styled } from '@mui/material'
import { DatePicker } from '@mui/x-date-pickers'

export const StyledDatePicker = styled(DatePicker)(({ theme }) => ({
	[`& .${inputBaseClasses.root}`]: {
		paddingRight: theme.spacing(0.5),

		[`& .${inputBaseClasses.input}.${inputBaseClasses.inputSizeSmall}`]: {
			paddingRight: 0
		},

		[`& .${inputAdornmentClasses.root}`]: {
			marginLeft: theme.spacing(0.5)
		}
	},

	[`& .${buttonBaseClasses.root}`]: {
		padding: theme.spacing(0.5),
		marginRight: 0,

		[`& .${svgIconClasses.root}`]: {
			fontSize: '16px',
			color: theme.palette.secondary.gray
		}
	}
})) as typeof DatePicker
