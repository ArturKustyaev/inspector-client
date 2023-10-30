import { infiniteQueryOptions } from '@tanstack/react-query'
import { BASE_FETCH_COUNT } from 'api'
import { taskApi } from './task'
import { GetAllRequest } from './task.types'

export const getTasksQueryOptions = ({ count = BASE_FETCH_COUNT, query }: Omit<GetAllRequest, 'page'>) =>
	infiniteQueryOptions({
		queryKey: ['tasks', { query }],
		initialPageParam: 1,
		queryFn: ({ pageParam }) => taskApi.getAll({ page: pageParam, count, query }).then(res => res.data),
		getNextPageParam: (lastPage, allPages) => (lastPage.data.length === count ? allPages.length + 1 : undefined)
	})
