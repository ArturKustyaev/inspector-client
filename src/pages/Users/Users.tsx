import { useInfiniteQuery } from '@tanstack/react-query'
import { getUsersQueryOptions } from 'api'
import { PageLayout } from 'layout'
import { FC, ReactElement } from 'react'

export const Users: FC = (): ReactElement | null => {
	const { data } = useInfiniteQuery({ ...getUsersQueryOptions({}) })

	return (
		<PageLayout>
			{data?.pages.map(page => page.data.map(user => <div key={user._id}>{user.firstName}</div>))}
		</PageLayout>
	)
}
