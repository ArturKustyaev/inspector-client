import { ChipProps as MuiChipProps } from '@mui/material'
import { LegendColors } from 'types'

export interface ChipProps extends Omit<MuiChipProps, 'color'> {
	color?: LegendColors
}
