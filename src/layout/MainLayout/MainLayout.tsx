import { useQuery } from '@tanstack/react-query'
import { getMyProfileQueryOptions } from 'api'
import { PageLoader } from 'components'
import { useUserContext } from 'context'
import { FC, PropsWithChildren, ReactElement, useEffect } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useReadLocalStorage } from 'usehooks-ts'

export const MainLayout: FC<PropsWithChildren> = (): ReactElement | null => {
	const isAuth = useReadLocalStorage('auth')
	const { data, isPending, isError, isSuccess } = useQuery({ ...getMyProfileQueryOptions(), enabled: !!isAuth })
	const { user, setUser } = useUserContext()

	useEffect(() => {
		if (isSuccess) {
			setUser(data)
		}
	}, [isSuccess])

	if (isError || !isAuth) {
		return <Navigate to='/login' />
	}

	return isPending ? <PageLoader /> : user ? <Outlet /> : null
}
