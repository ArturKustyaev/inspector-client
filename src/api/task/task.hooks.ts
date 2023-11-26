import { infiniteQueryOptions, useMutation } from '@tanstack/react-query'
import { BASE_FETCH_COUNT, CreateViolationBody, CustomHookMutationOptions, PaginatedRequest } from 'api'
import { violation } from './task'
import { Violation } from 'types'

export const getTasksQueryOptions = ({ count = BASE_FETCH_COUNT, query }: Omit<PaginatedRequest, 'page'>) =>
	infiniteQueryOptions({
		queryKey: ['tasks', { query }],
		initialPageParam: 1,
		queryFn: ({ pageParam }) => violation.getAll({ page: pageParam, count, query }).then(res => res.data),
		getNextPageParam: (lastPage, allPages) => (lastPage.data.length === count ? allPages.length + 1 : undefined)
	})

export const useCreateViolationMutation = (options?: CustomHookMutationOptions<Violation, CreateViolationBody>) =>
	useMutation({
		mutationFn: (body: CreateViolationBody) => violation.create(body).then(res => res.data),
		...options
	})

export const useDeleteViolationMutation = (options?: CustomHookMutationOptions<Violation, string>) =>
	useMutation({ mutationFn: id => violation.delete(id).then(res => res.data), ...options })
