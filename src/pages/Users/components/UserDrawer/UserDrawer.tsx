import NiceModal, { useModal } from '@ebay/nice-modal-react'
import { Button, Stack, TextField } from '@mui/material'
import { ReactElement, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { ConfirmDialog, Drawer, PasswordTextField } from 'ui-kit'
import { userDrawerFormDefaultValues } from './UserDrawer.constants'
import { getUserDrawerFormDefaultValues } from './UserDrawer.service'
import { UserDrawerFormValues, UserDrawerProps } from './UserDrawer.types'

export const UserDrawer = NiceModal.create<UserDrawerProps>(({ user }): ReactElement | null => {
	const { visible, hide } = useModal()
	const confirmDialog = useModal(ConfirmDialog)
	const {
		control,
		formState: { isDirty },
		reset,
		handleSubmit
	} = useForm<UserDrawerFormValues>({
		defaultValues: userDrawerFormDefaultValues
	})

	useEffect(() => {
		if (visible) {
			reset(getUserDrawerFormDefaultValues(user))
		}
	}, [visible])

	const submitFormHandler = (values: UserDrawerFormValues) => {
		console.log(values)
	}

	const confirmCloseDrawer = () => {
		isDirty ? confirmDialog.show({ onSuccess: closeDrawer }) : closeDrawer()
	}

	const closeDrawer = () => {
		hide()
	}

	return (
		<Drawer title='Изменение пользователя' anchor='right' open={visible} onClose={confirmCloseDrawer}>
			<Stack height='100%' px={3} py={2}>
				<Stack component='form' height='100%' onSubmit={handleSubmit(submitFormHandler)}>
					<Controller
						control={control}
						name='lastName'
						render={({ field: { ref, ...fieldProps }, fieldState: { error } }) => (
							<TextField
								{...fieldProps}
								inputRef={ref}
								label='Фамилия'
								size='small'
								error={!!error}
								helperText={error?.message}
							/>
						)}
					/>
					<Controller
						control={control}
						name='firstName'
						render={({ field: { ref, ...fieldProps }, fieldState: { error } }) => (
							<TextField
								{...fieldProps}
								inputRef={ref}
								label='Имя'
								size='small'
								error={!!error}
								helperText={error?.message}
							/>
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
								size='small'
								error={!!error}
								helperText={error?.message}
							/>
						)}
					/>
					<Controller
						control={control}
						name='email'
						render={({ field: { ref, ...fieldProps }, fieldState: { error } }) => (
							<TextField
								{...fieldProps}
								inputRef={ref}
								label='E-mail'
								size='small'
								error={!!error}
								helperText={error?.message}
							/>
						)}
					/>
					<Controller
						control={control}
						name='login'
						render={({ field: { ref, ...fieldProps }, fieldState: { error } }) => (
							<TextField
								{...fieldProps}
								inputRef={ref}
								label='Логин'
								size='small'
								error={!!error}
								helperText={error?.message}
							/>
						)}
					/>
					<Controller
						control={control}
						name='password'
						render={({ field: { ref, ...fieldProps }, fieldState: { error } }) => (
							<PasswordTextField
								{...fieldProps}
								inputRef={ref}
								label='Пароль'
								size='small'
								error={!!error}
								helperText={error?.message}
							/>
						)}
					/>
					<Stack direction='row' spacing={2} mt='auto'>
						<Button variant='contained' color='success' type='submit' fullWidth>
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
