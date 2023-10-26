import { DefaultError, UseMutationOptions } from '@tanstack/react-query'

export type CustomHookMutationOptions<
	TData = unknown,
	TVariables = void,
	TError = DefaultError,
	TContext = unknown
> = Omit<UseMutationOptions<TData, TError, TVariables, TContext>, 'mutationFn'>

export interface PaginatedRequest {
	page?: number
	count?: number
	query?: string
}

export interface PaginatedResponse<T> {
	data: T[]
	total: number
}
