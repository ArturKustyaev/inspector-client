import { useModal } from '@ebay/nice-modal-react'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import { Box, IconButton, Stack, Tooltip } from '@mui/material'
import { FC, ReactElement } from 'react'
import { userRoleLabels } from 'types'
import { UserDrawer } from '../UserDrawer'
import { StyledUserCard, StyledUserName, StyledUserRole } from './UserCard.styles'
import { UserCardProps } from './UserCard.types'

export const UserCard: FC<UserCardProps> = ({ user }): ReactElement | null => {
	const userDrawer = useModal(UserDrawer)

	const updateUserClickHandler = () => {
		userDrawer.show({ user })
	}

	return (
		<StyledUserCard>
			<Stack direction='row' justifyContent='space-between' alignItems='center'>
				<StyledUserRole label={userRoleLabels[user.role]} size='small' $role={user.role} />
				<Tooltip title='Изменить' arrow>
					<IconButton color='primary' size='small' onClick={updateUserClickHandler}>
						<ModeEditIcon />
					</IconButton>
				</Tooltip>
			</Stack>
			<Stack direction='row' pt={1} spacing={1}>
				<Box width='100px' height='100px' border='1px solid black' flexShrink={0} borderRadius={1.5}></Box>
				<Box>
					<StyledUserName variant='body1'>
						{user.lastName} {user.firstName} {user.middleName}
					</StyledUserName>
				</Box>
			</Stack>
		</StyledUserCard>
	)
}
