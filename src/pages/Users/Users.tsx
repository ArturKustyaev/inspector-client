import { Grid } from '@mui/material'
import { useInfiniteQuery } from '@tanstack/react-query'
import { getUsersQueryOptions } from 'api'
import { PageLoader } from 'components'
import { PageLayout } from 'layout'
import { FC, ReactElement } from 'react'
import { StyledUserListWrapper } from './Users.styles'
import { UserCard } from './components'

export const Users: FC = (): ReactElement | null => {
	const { data, isPending, isSuccess } = useInfiniteQuery(getUsersQueryOptions({}))

	return (
		<PageLayout>
			<StyledUserListWrapper>
				{isPending && <PageLoader />}
				{isSuccess && (
					<Grid spacing={2} container>
						{data?.pages.map(page =>
							page.data.map(user => (
								<Grid key={user._id} xl={4} lg={4} sm={6} xs={12} item>
									<UserCard user={user} />
								</Grid>
							))
						)}
					</Grid>
				)}
			</StyledUserListWrapper>
		</PageLayout>
	)
}
