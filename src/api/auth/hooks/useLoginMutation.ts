import { useMutation } from '@tanstack/react-query'
import { CustomHookMutationOptions } from 'api'
import { authApi } from '../auth'
import { LoginRequest, LoginResponse } from '../auth.types'

interface UseLoginMutation {
	options?: CustomHookMutationOptions<LoginResponse, LoginRequest>
}

export const useLoginMutation = ({ options }: UseLoginMutation) => {
	return useMutation({
		mutationFn: (payload: LoginRequest) => authApi.login(payload).then(res => res.data),
		...options
	})
}
