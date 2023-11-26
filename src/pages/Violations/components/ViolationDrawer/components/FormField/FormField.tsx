import { Stack, Typography } from '@mui/material'
import { FC, PropsWithChildren, ReactElement } from 'react'
import { ReadonlyFieldWrapper } from './FormField.styles'
import { FormFieldProps } from './FormField.types'

export const FormField: FC<PropsWithChildren<FormFieldProps>> = ({
	label,
	direction = 'row',
	labelAlign,
	maxWidthValue,
	maxHeightValue,
	readonlyValue,
	children,
	readonly,
	noWrapValue = true
}): ReactElement | null => {
	return (
		<Stack
			flexGrow={1}
			direction={direction}
			justifyContent='space-between'
			alignItems={labelAlign ?? 'center'}
			spacing={1}
		>
			<Typography variant='body2' flex={direction === 'row' ? '0 0 195px' : undefined}>
				{label}
			</Typography>
			<ReadonlyFieldWrapper
				$direction={direction}
				$maxWidth={maxWidthValue}
				$maxHeight={readonly ? maxHeightValue : undefined}
			>
				{readonly ? (
					typeof readonlyValue === 'string' ? (
						<Typography variant='body2' color='text.dark' noWrap={noWrapValue}>
							{readonlyValue}
						</Typography>
					) : (
						readonlyValue
					)
				) : (
					children
				)}
			</ReadonlyFieldWrapper>
		</Stack>
	)
}
