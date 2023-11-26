import { StackProps, styled } from '@mui/material'

interface ReadonlyFieldWrapperProps {
	$direction?: StackProps['direction']
	$maxHeight?: string
	$maxWidth?: string
}

export const ReadonlyFieldWrapper = styled('div')<ReadonlyFieldWrapperProps>(
	({ $direction, $maxWidth, $maxHeight }) => ({
		flex: $direction === 'row' ? '0 0 200px' : undefined,
		textAlign: $direction === 'row' ? 'right' : 'justify',
		overflow: 'auto',
		maxHeight: $maxHeight,
		width: $direction === 'column' ? '100%' : undefined,
		maxWidth: $maxWidth ? $maxWidth : $direction === 'row' ? '200px' : undefined
	})
)
