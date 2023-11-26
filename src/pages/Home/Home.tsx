import { FC, ReactElement } from 'react'
import { Navigate } from 'react-router-dom'

export const Home: FC = (): ReactElement | null => {
	return <Navigate to='/violations' />
}
