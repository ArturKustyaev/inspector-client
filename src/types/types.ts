import { theme } from 'styles'

export interface Option<TLabel extends string | number = string, TValue extends string | number = string> {
	label: TLabel
	value: TValue
}

export type LegendColors = keyof typeof theme.palette.legends

export const isLegendColor = (colorName: string): colorName is LegendColors => {
	return colorName in theme.palette.legends
}
