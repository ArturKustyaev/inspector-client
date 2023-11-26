import NiceModal from '@ebay/nice-modal-react'
import { Button, Grid, TextField } from '@mui/material'
import { useInfiniteQuery } from '@tanstack/react-query'
import { getUsersQueryOptions } from 'api'
import { PageLoader } from 'components'
import { useDebounceValue } from 'hooks'
import { PageLayout } from 'layout'
import { ChangeEvent, FC, ReactElement, useCallback, useState } from 'react'
import { User } from 'types'
import { StyledToolbar, StyledUserListWrapper } from './Users.styles'
import { UserCard, UserDrawer } from './components'

export const Users: FC = (): ReactElement | null => {
	const [search, setSearch] = useState('')
	const debouncedSearch = useDebounceValue(search)
	const { data, isPending, isSuccess } = useInfiniteQuery(getUsersQueryOptions({ query: debouncedSearch || undefined }))

	const searchChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setSearch(e.target.value)
	}

	const addUserClickHandler = () => {
		NiceModal.show(UserDrawer)
	}

	const updateUserClickHandler = useCallback((user: User) => {
		NiceModal.show(UserDrawer, { user })
	}, [])

	return (
		<PageLayout>
			<StyledUserListWrapper>
				<StyledToolbar direction='row' spacing={2}>
					<TextField label='Поиск' onChange={searchChangeHandler} />
					<Button onClick={addUserClickHandler}>Добавить пользователя</Button>
				</StyledToolbar>
				{isPending && <PageLoader />}
				{isSuccess && (
					<Grid spacing={2} container>
						{data.pages.map(page =>
							page.data.map(user => (
								<Grid key={user._id} xl={4} lg={4} sm={6} xs={12} item>
									<UserCard user={user} onUpdateUser={updateUserClickHandler} />
								</Grid>
							))
						)}
					</Grid>
				)}
			</StyledUserListWrapper>
		</PageLayout>
	)
}
