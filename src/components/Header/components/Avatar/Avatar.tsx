import { IconButton, Menu, MenuItem, Avatar as MuiAvatar } from '@mui/material'
import { useQueryClient } from '@tanstack/react-query'
import { useUserContext } from 'context'
import { FC, ReactElement, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { TokenPair } from 'types'
import { useLocalStorage } from 'usehooks-ts'

export const Avatar: FC = (): ReactElement | null => {
	const navigate = useNavigate()
	const [, setAuth] = useLocalStorage<TokenPair | null>('auth', null)
	const { user, resetUser } = useUserContext()
	const [anchor, setAnchor] = useState<HTMLElement | null>(null)
	const queryClient = useQueryClient()

	const openMenuHandler = (event: React.MouseEvent<HTMLElement>) => {
		setAnchor(event.currentTarget)
	}

	const closeMenuHandler = () => {
		setAnchor(null)
	}

	const logoutClickHandler = () => {
		resetUser()
		setAuth(null)
		navigate('/login')
		queryClient.removeQueries()
	}

	return (
		<>
			<IconButton onClick={openMenuHandler}>
				<MuiAvatar src={user?.avatar ?? undefined} alt={user?.firstName}>
					{user?.firstName[0]}
				</MuiAvatar>
			</IconButton>
			<Menu anchorEl={anchor} open={Boolean(anchor)} onClose={closeMenuHandler}>
				<MenuItem onClick={logoutClickHandler}>Выйти</MenuItem>
			</Menu>
		</>
	)
}
