import NiceModal, { useModal } from '@ebay/nice-modal-react'
import { Button, MenuItem, Stack, TextField } from '@mui/material'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { userApi } from 'api'
import { useSnackbar } from 'notistack'
import { ReactElement, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ConfirmDialog, Drawer, PasswordTextField } from 'ui-kit'
import { userDrawerFormDefaultValues, userRoleOptions } from './UserDrawer.constants'
import { getUserDrawerFormDefaultValues, mapUserDrawerFormValues } from './UserDrawer.service'
import { UserDrawerFormValues, UserDrawerProps } from './UserDrawer.types'

export const UserDrawer = NiceModal.create<UserDrawerProps>(({ user }): ReactElement | null => {
	const queryClient = useQueryClient()
	const { visible, hide } = useModal()
	const { enqueueSnackbar } = useSnackbar()
	const confirmDialog = useModal(ConfirmDialog)
	const {
		control,
		formState: { isDirty },
		reset,
		handleSubmit
	} = useForm<UserDrawerFormValues>({
		defaultValues: userDrawerFormDefaultValues
	})
	const { mutate } = useMutation({
		mutationFn: userApi.update,
		onSuccess: () => {
			enqueueSnackbar('Пользователь успешно изменен', { variant: 'success' })
			closeDrawer()

			return queryClient.invalidateQueries({ queryKey: ['users'] })
		}
	})

	useEffect(() => {
		if (visible) {
			reset(getUserDrawerFormDefaultValues(user))
		}
	}, [visible])

	const submitFormHandler = (values: UserDrawerFormValues) => {
		if (user?._id) {
			mutate({ params: { id: user._id }, body: mapUserDrawerFormValues(values) })
		}
	}

	const confirmCloseDrawer = () => {
		isDirty ? confirmDialog.show({ onSuccess: closeDrawer }) : closeDrawer()
	}

	const closeDrawer = () => {
		hide()

		setTimeout(() => {
			reset()
		}, 300)
	}

	return (
		<Drawer title='Изменение пользователя' anchor='right' open={visible} onClose={confirmCloseDrawer}>
			<Stack height='100%' px={3} py={2}>
				<Stack component='form' height='100%' onSubmit={handleSubmit(submitFormHandler)}>
					<Stack spacing={3}>
						<Controller
							control={control}
							name='lastName'
							render={({ field: { ref, ...fieldProps }, fieldState: { error } }) => (
								<TextField {...fieldProps} inputRef={ref} label='Фамилия' error={!!error} helperText={error?.message} />
							)}
						/>
						<Controller
							control={control}
							name='firstName'
							render={({ field: { ref, ...fieldProps }, fieldState: { error } }) => (
								<TextField {...fieldProps} inputRef={ref} label='Имя' error={!!error} helperText={error?.message} />
							)}
						/>
						<Controller
							control={control}
							name='middleName'
							render={({ field: { ref, ...fieldProps }, fieldState: { error } }) => (
								<TextField
									{...fieldProps}
									inputRef={ref}
									label='Отчество'
									error={!!error}
									helperText={error?.message}
								/>
							)}
						/>
						<Controller
							control={control}
							name='role'
							render={({ field: { ref, ...fieldProps }, fieldState: { error } }) => (
								<TextField
									{...fieldProps}
									inputRef={ref}
									label='Роль пользователя'
									error={!!error}
									helperText={error?.message}
									select
								>
									{userRoleOptions.map(option => (
										<MenuItem key={option.value} value={option.value}>
											{option.label}
										</MenuItem>
									))}
								</TextField>
							)}
						/>
						<Controller
							control={control}
							name='email'
							render={({ field: { ref, ...fieldProps }, fieldState: { error } }) => (
								<TextField {...fieldProps} inputRef={ref} label='E-mail' error={!!error} helperText={error?.message} />
							)}
						/>
						<Controller
							control={control}
							name='login'
							render={({ field: { ref, ...fieldProps }, fieldState: { error } }) => (
								<TextField {...fieldProps} inputRef={ref} label='Логин' error={!!error} helperText={error?.message} />
							)}
						/>
						<Controller
							control={control}
							name='password'
							render={({ field: { ref, ...fieldProps }, fieldState: { error } }) => (
								<PasswordTextField
									autoComplete='off'
									{...fieldProps}
									inputRef={ref}
									label='Новый пароль'
									error={!!error}
									helperText={error?.message}
								/>
							)}
						/>
					</Stack>
					<Stack direction='row' spacing={2} mt='auto'>
						<Button variant='contained' color='success' type='submit' disabled={!isDirty} fullWidth>
							Сохранить
						</Button>
						<Button fullWidth onClick={confirmCloseDrawer}>
							Отмена
						</Button>
					</Stack>
				</Stack>
			</Stack>
		</Drawer>
	)
})
