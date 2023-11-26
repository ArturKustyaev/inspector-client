import { List, MenuItem, alpha, menuItemClasses, styled } from '@mui/material'

export const StyledStageList = styled(List)`
	padding-top: 0;
	flex-grow: 1;
`

export const StyledStageItem = styled(MenuItem)(({ theme }) => ({
	fontSize: '14px',
	color: theme.palette.grey[600],
	borderRadius: theme.spacing(0.5),
	padding: `${theme.spacing(1)} ${theme.spacing(1.25)}`,

	'&:hover': {
		backgroundColor: alpha(theme.palette.primary.main, 0.05)
	},

	[`&.${menuItemClasses.disabled}`]: {
		opacity: 0.8,
		backgroundColor: alpha(theme.palette.grey[400], 0.04)
	},

	[`&.${menuItemClasses.selected}`]: {
		color: theme.palette.primary.main,
		backgroundColor: alpha(theme.palette.primary.main, 0.08)
	},

	'&:not(:last-child)': {
		marginBottom: theme.spacing(1)
	}
}))
