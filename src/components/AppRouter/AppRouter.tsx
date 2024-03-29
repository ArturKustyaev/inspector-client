import { MainLayout } from 'layout'
import { Home, Login, Users, Violations } from 'pages'
import { FC, ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import { PrivateRoute } from './components'

export const AppRouter: FC = (): ReactElement | null => {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route element={<PrivateRoute />}>
					<Route path='/' element={<Home />} />
					<Route path='/users' element={<Users />} />
					<Route path='/violations' element={<Violations />} />
				</Route>
			</Route>
			<Route path='/login' element={<Login />} />
		</Routes>
	)
}
