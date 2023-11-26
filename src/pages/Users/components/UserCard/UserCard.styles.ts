import { Chip, Typography, styled } from '@mui/material'
import { userRoleColors } from 'types'
import { StyledUserRoleProps } from './UserCard.types'
import PersonIcon from '@mui/icons-material/Person'

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

export const StyledAvatarWrapper = styled('div')`
	flex-shrink: 0;
	width: 100px;
	height: 100px;
	border-radius: 8px;
	overflow: hidden;
`

export const StyledAvatar = styled('img')`
	width: 100%;
	height: 100%;
`

export const StyledNoAvatarWrapper = styled('div')`
	width: 100%;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${({ theme }) => theme.palette.grey[300]};
`

export const StyledNoAvatarIcon = styled(PersonIcon)`
	color: ${({ theme }) => theme.palette.grey[600]};
	font-size: 40px;
`
