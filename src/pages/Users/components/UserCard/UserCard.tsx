import NiceModal from '@ebay/nice-modal-react'
import DeleteIcon from '@mui/icons-material/Delete'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import { Box, Divider, IconButton, Stack, Tooltip, Typography } from '@mui/material'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { userApi } from 'api'
import { useSnackbar } from 'notistack'
import { FC, ReactElement, memo } from 'react'
import { userRoleLabels } from 'types'
import { ConfirmDialog } from 'ui-kit'
import { generateRandomString } from 'utils'
import {
	StyledAvatar,
	StyledAvatarWrapper,
	StyledNoAvatarIcon,
	StyledNoAvatarWrapper,
	StyledUserCard,
	StyledUserName,
	StyledUserRole
} from './UserCard.styles'
import { UserCardProps } from './UserCard.types'

export const UserCard: FC<UserCardProps> = memo(({ user, onUpdateUser }): ReactElement | null => {
	const queryClient = useQueryClient()
	const { enqueueSnackbar } = useSnackbar()
	const { mutate } = useMutation({
		mutationFn: userApi.delete,
		onSuccess: () => {
			enqueueSnackbar('Пользователь успешно удален', { variant: 'success' })
			return queryClient.invalidateQueries({ queryKey: ['users'] })
		}
	})

	const updateUserClickHandler = () => {
		onUpdateUser(user)
	}

	const deleteUserClickHandler = () => {
		NiceModal.show(ConfirmDialog, {
			title: 'Удаление пользователя',
			denyButtonText: 'Нет',
			body: 'Вы действительно хотите удалить пользователя?',
			onSuccess: () => mutate(user._id)
		})
	}

	return (
		<StyledUserCard>
			<Stack direction='row' justifyContent='space-between' alignItems='center'>
				<StyledUserRole label={userRoleLabels[user.role]} size='small' $role={user.role} />
				<Stack direction='row'>
					<Tooltip title='Изменить' arrow>
						<IconButton color='primary' size='small' onClick={updateUserClickHandler}>
							<ModeEditIcon />
						</IconButton>
					</Tooltip>
					<Tooltip title='Удалить' arrow>
						<IconButton color='error' size='small' onClick={deleteUserClickHandler}>
							<DeleteIcon />
						</IconButton>
					</Tooltip>
				</Stack>
			</Stack>
			<Stack direction='row' pt={1} spacing={1} mb={2}>
				<StyledAvatarWrapper>
					{user.avatar ? (
						<StyledAvatar src={`${user.avatar}?${generateRandomString()}`} />
					) : (
						<StyledNoAvatarWrapper>
							<StyledNoAvatarIcon />
						</StyledNoAvatarWrapper>
					)}
				</StyledAvatarWrapper>
				<Box>
					<StyledUserName variant='body1'>
						{user.lastName} {user.firstName} {user.middleName}
					</StyledUserName>
				</Box>
			</Stack>
			<Divider />
			<Box mt={1}>
				<Typography variant='body1'>Логин: {user.login}</Typography>
				<Typography variant='body1'>E-mail: {user.email}</Typography>
			</Box>
		</StyledUserCard>
	)
})

UserCard.displayName = 'UserCard'
