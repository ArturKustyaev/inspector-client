import { Stack } from '@mui/material'
import { useLoginMutation } from 'api'
import { useUserContext } from 'context'
import { FC, ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { TokenPair } from 'types'
import { useLocalStorage } from 'usehooks-ts'
import { LoginForm, LoginFormValues } from './components'

export const Login: FC = (): ReactElement | null => {
	const [, setIsAuth] = useLocalStorage<TokenPair | null>('auth', null)
	const navigate = useNavigate()
	const { setUser } = useUserContext()
	const { mutate, isPending } = useLoginMutation({
		options: {
			onSuccess: data => {
				const { accessToken, refreshToken, user } = data

				setUser(user)
				setIsAuth({ accessToken, refreshToken })
				navigate('/')
			}
		}
	})

	const onLoginFormSubmit = (values: LoginFormValues) => {
		mutate(values)
	}

	return (
		<Stack flex={1} minHeight='inherit' justifyContent='center' alignItems='center'>
			<LoginForm isPending={isPending} onSubmit={onLoginFormSubmit} />
		</Stack>
	)
}
