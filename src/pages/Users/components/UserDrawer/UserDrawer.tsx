import NiceModal, { useModal } from '@ebay/nice-modal-react'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, MenuItem, Stack, TextField } from '@mui/material'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { userApi } from 'api'
import { ImagePreview } from 'components'
import { useSnackbar } from 'notistack'
import { ReactElement, useEffect } from 'react'
import { Controller, useForm, useWatch } from 'react-hook-form'
import { ConfirmDialog, Drawer, PasswordTextField } from 'ui-kit'
import { userDrawerFormDefaultValues, userRoleOptions } from './UserDrawer.constants'
import { getUserDrawerFormDefaultValues, getUserDrawerTitle, mapUserDrawerFormValues } from './UserDrawer.service'
import { StyledHiddenInput } from './UserDrawer.styles'
import { UserDrawerFormValues, UserDrawerProps } from './UserDrawer.types'
import { userSchema } from './UserDrawer.validation'
import { useImagePreview } from 'hooks'

export const UserDrawer = NiceModal.create<UserDrawerProps>(({ user }): ReactElement | null => {
	const queryClient = useQueryClient()
	const { visible, hide } = useModal()
	const { enqueueSnackbar } = useSnackbar()
	const confirmDialog = useModal(ConfirmDialog)
	const {
		control,
		formState: { isDirty },
		setValue,
		reset,
		handleSubmit
	} = useForm<UserDrawerFormValues>({
		defaultValues: userDrawerFormDefaultValues,
		resolver: yupResolver(userSchema)
	})
	const createUserMutation = useMutation({
		mutationFn: userApi.create,
		onSuccess: () => {
			enqueueSnackbar('Пользователь успешно создан', { variant: 'success' })
			closeDrawer()

			return queryClient.invalidateQueries({ queryKey: ['users'] })
		}
	})
	const updateUserMutation = useMutation({
		mutationFn: userApi.update,
		onSuccess: () => {
			enqueueSnackbar('Пользователь успешно изменен', { variant: 'success' })
			closeDrawer()

			return queryClient.invalidateQueries({ queryKey: ['users'] })
		}
	})
	const avatar = useWatch({ control }).avatar
	const [image, setImage] = useImagePreview(avatar)

	useEffect(() => {
		if (visible) {
			reset(getUserDrawerFormDefaultValues(user, !user))
		}
	}, [visible])

	const submitFormHandler = (values: UserDrawerFormValues) => {
		if (user?._id) {
			updateUserMutation.mutate({ params: { id: user._id }, body: mapUserDrawerFormValues(values) })
		} else {
			createUserMutation.mutate(mapUserDrawerFormValues(values))
		}
	}

	const confirmCloseDrawer = () => {
		isDirty ? confirmDialog.show({ onSuccess: closeDrawer }) : closeDrawer()
	}

	const closeDrawer = () => {
		hide()
		setImage(null)

		setTimeout(() => {
			reset()
		}, 300)
	}

	return (
		<Drawer title={getUserDrawerTitle(!user)} open={visible} onClose={confirmCloseDrawer}>
			<Stack height='100%' px={3} py={2}>
				<Stack component='form' height='100%' onSubmit={handleSubmit(submitFormHandler)}>
					<Stack spacing={3} mb={2}>
						<Controller
							control={control}
							name='avatarPreview'
							render={({ field: { value } }) => (
								<Box overflow='hidden'>
									<ImagePreview url={image || value || undefined} width={200} height={200} />
									<Box mt={1} textAlign='center'>
										<Button component='label'>
											Загрузить фото
											<StyledHiddenInput
												type='file'
												accept='.jpeg, .jpg, .png'
												onChange={e => setValue('avatar', e.target.files?.[0] ?? null)}
											/>
										</Button>
									</Box>
								</Box>
							)}
						/>
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
									label={user ? 'Новый пароль' : 'Пароль'}
									error={!!error}
									helperText={error?.message}
								/>
							)}
						/>
					</Stack>
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
