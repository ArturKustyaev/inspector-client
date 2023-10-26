import { infiniteQueryOptions, queryOptions } from '@tanstack/react-query'
import { BASE_FETCH_COUNT } from 'api'
import { userApi } from '../user'
import { GetAllRequest } from '../user.types'

export const getMyProfileQueryOptions = () =>
	queryOptions({
		queryKey: ['my-profile'],
		refetchOnWindowFocus: false,
		queryFn: () => userApi.myProfile().then(res => res.data)
	})

export const getUsersQueryOptions = ({ count = BASE_FETCH_COUNT, query }: Omit<GetAllRequest, 'page'>) =>
	infiniteQueryOptions({
		queryKey: ['users', { query }],
		initialPageParam: 1,
		queryFn: ({ pageParam }) => userApi.getAll({ page: pageParam, count, query }).then(res => res.data),
		getNextPageParam: (lastPage, allPages) => (lastPage.data.length === count ? allPages.length + 1 : undefined)
	})
