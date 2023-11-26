import { Button, styled } from '@mui/material'

export const StyleActionsWrapper = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(2.5),
	gap: theme.spacing(2),
	boxShadow: theme.shadows[5]
}))

export const StyledActionButton = styled(Button)`
	min-width: 150px;
`
