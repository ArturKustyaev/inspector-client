import { StackProps } from '@mui/material'
import { Property } from 'csstype'
import { ReactNode } from 'react'

export interface FormFieldProps {
	label: string
	direction?: StackProps['direction']
	labelAlign?: Property.AlignItems
	maxWidthValue?: string
	maxHeightValue?: string
	readonlyValue?: ReactNode
	readonly?: boolean
	noWrapValue?: boolean
}
