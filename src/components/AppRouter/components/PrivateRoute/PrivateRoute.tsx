import { useAuth } from 'hooks'
import { FC, ReactElement } from 'react'
import { Navigate, Outlet } from 'react-router-dom'

interface PrivateRouteProps {}

export const PrivateRoute: FC<PrivateRouteProps> = (): ReactElement | null => {
	const isAuth = useAuth()

	return isAuth ? <Outlet /> : <Navigate to='/login' />
}
