import { useModal } from '@ebay/nice-modal-react'
import DeleteIcon from '@mui/icons-material/Delete'
import ModeEditIcon from '@mui/icons-material/ModeEdit'
import { Box, IconButton, Stack, Tooltip } from '@mui/material'
import { FC, ReactElement } from 'react'
import { userRoleLabels } from 'types'
import { UserDrawer } from '../UserDrawer'
import { StyledUserCard, StyledUserName, StyledUserRole } from './UserCard.styles'
import { UserCardProps } from './UserCard.types'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { userApi } from 'api'
import { useSnackbar } from 'notistack'
import { ConfirmDialog } from 'ui-kit'

export const UserCard: FC<UserCardProps> = ({ user }): ReactElement | null => {
	const userDrawer = useModal(UserDrawer)
	const confirmDialog = useModal(ConfirmDialog)
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
		userDrawer.show({ user })
	}

	const deleteUserClickHandler = () => {
		confirmDialog.show({
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
