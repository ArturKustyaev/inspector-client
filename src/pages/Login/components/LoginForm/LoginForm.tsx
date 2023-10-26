import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Button, Paper, Stack, TextField, Typography } from '@mui/material'
import { FC, ReactElement } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { PasswordTextField } from 'ui-kit'
import { LoginFormProps, LoginFormValues } from './LoginForm.types'
import { loginFormSchema } from './LoginForm.validation'

export const LoginForm: FC<LoginFormProps> = ({ isPending, onSubmit }): ReactElement | null => {
	const { control, handleSubmit } = useForm<LoginFormValues>({
		defaultValues: {
			login: '',
			password: ''
		},
		resolver: yupResolver(loginFormSchema)
	})

	const submitFormHandler = (values: LoginFormValues) => {
		onSubmit(values)
	}

	return (
		<Paper sx={{ width: '350px', p: 3 }} elevation={0}>
			<Box pb={3}>
				<Typography variant='h5'>Вход в систему</Typography>
			</Box>
			<form onSubmit={handleSubmit(submitFormHandler)}>
				<Stack spacing={2} pb={3}>
					<Controller
						name='login'
						control={control}
						render={({ field: { ref, ...fieldProps }, fieldState: { error } }) => (
							<TextField
								{...fieldProps}
								inputRef={ref}
								size='small'
								label='Введите логин'
								error={!!error}
								helperText={error?.message}
							/>
						)}
					/>
					<Controller
						name='password'
						control={control}
						render={({ field: { ref, ...fieldProps }, fieldState: { error } }) => (
							<PasswordTextField
								{...fieldProps}
								inputRef={ref}
								size='small'
								label='Введите пароль'
								error={!!error}
								helperText={error?.message}
							/>
						)}
					/>
				</Stack>
				<Button variant='contained' type='submit' fullWidth disabled={isPending} disableElevation>
					Войти
				</Button>
			</form>
		</Paper>
	)
}
