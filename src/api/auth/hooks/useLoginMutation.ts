import { useMutation } from '@tanstack/react-query'
import { CustomHookMutationOptions } from 'api/api.types'
import { LoginRequest, LoginResponse } from '..'
import { authApi } from '../auth'

interface UseLoginMutation {
	options?: CustomHookMutationOptions<LoginResponse, LoginRequest>
}

export const useLoginMutation = ({ options }: UseLoginMutation) => {
	return useMutation({
		mutationFn: (payload: LoginRequest) => authApi.login(payload).then(res => res.data),
		...options
	})
}
