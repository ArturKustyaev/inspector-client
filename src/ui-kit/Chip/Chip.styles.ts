import { Chip, chipClasses, styled } from '@mui/material'
import { LegendColors } from 'types'

interface StyledChipProps {
	$color?: LegendColors
}

export const StyledChip = styled(Chip)<StyledChipProps>(({ theme, $color }) => ({
	color: 'white',
	backgroundColor: $color ? theme.palette.legends[$color] : theme.palette.secondary.main,
	borderRadius: theme.spacing(0.5),
	textTransform: 'uppercase',
	padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`,

	[`&.${chipClasses.sizeSmall}`]: {
		height: '22px'
	},

	[`& .${chipClasses.label}`]: {
		padding: 0
	}
}))
