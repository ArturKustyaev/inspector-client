import { Chip, Typography, styled } from '@mui/material'
import { userRoleColors } from 'types'
import { StyledUserRoleProps } from './UserCard.types'

export const StyledUserCard = styled('div')(({ theme }) => ({
	backgroundColor: 'white',
	borderRadius: theme.spacing(1),
	padding: theme.spacing(2),
	textAlign: 'left'
}))

export const StyledUserRole = styled(Chip, { shouldForwardProp: prop => prop !== '$role' })<StyledUserRoleProps>(
	({ theme, $role }) => ({
		color: 'white',
		backgroundColor: userRoleColors[$role],
		borderRadius: theme.spacing(0.75)
	})
)

export const StyledUserName = styled(Typography)(({ theme }) => ({
	color: theme.palette.primary.dark,
	fontSize: '18px',
	fontWeight: 500
}))
