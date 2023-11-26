import { styled } from '@mui/material'

export const StyledViolationCard = styled('div')(({ theme }) => ({
	display: 'flex',
	flexDirection: 'column',
	flexGrow: 1,
	alignItems: 'flex-start',
	backgroundColor: 'white',
	borderRadius: theme.spacing(1),
	textAlign: 'left',
	height: '100%'
}))
