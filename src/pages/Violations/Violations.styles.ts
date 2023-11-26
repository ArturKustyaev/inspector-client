import { styled, Stack } from '@mui/material'

export const StyledViolationsWrapper = styled('div')(() => ({
	width: '100%',
	display: 'flex',
	flexDirection: 'column'
}))

export const StyledToolbar = styled(Stack)(({ theme }) => ({
	justifyContent: 'space-between',
	alignItems: 'center',
	borderRadius: theme.spacing(1),
	backgroundColor: 'white',
	marginBottom: theme.spacing(2),
	padding: theme.spacing(1),
	textAlign: 'left'
}))
