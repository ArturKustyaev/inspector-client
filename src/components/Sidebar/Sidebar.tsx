import GroupIcon from '@mui/icons-material/Group'
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks'
import MenuBookIcon from '@mui/icons-material/MenuBook'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { FC, ReactElement, memo } from 'react'
import { Link } from 'react-router-dom'
import { StyledSidebar } from './Sidebar.styles'
import { useUserPrivileges } from 'hooks'

export const Sidebar: FC = memo((): ReactElement | null => {
	const { isInspector } = useUserPrivileges()

	return (
		<StyledSidebar>
			<List>
				<ListItem disablePadding>
					<ListItemButton component={Link} to='/violations'>
						<ListItemIcon sx={{ minWidth: '40px' }}>
							<MenuBookIcon />
						</ListItemIcon>
						<ListItemText primary='Нарушения' />
					</ListItemButton>
				</ListItem>
				{!isInspector && (
					<>
						<ListItem disablePadding>
							<ListItemButton component={Link} to='/users'>
								<ListItemIcon sx={{ minWidth: '40px' }}>
									<GroupIcon />
								</ListItemIcon>
								<ListItemText primary='Пользователи' />
							</ListItemButton>
						</ListItem>
						<ListItem disablePadding>
							<ListItemButton component={Link} to='/users'>
								<ListItemIcon sx={{ minWidth: '40px' }}>
									<LibraryBooksIcon />
								</ListItemIcon>
								<ListItemText primary='Отчет' />
							</ListItemButton>
						</ListItem>
					</>
				)}
			</List>
		</StyledSidebar>
	)
})

Sidebar.displayName = 'Sidebar'
