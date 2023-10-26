import { FC, ReactElement } from 'react'
import { StyledSidebar } from './Sidebar.styles'
import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { Link } from 'react-router-dom'
import GroupIcon from '@mui/icons-material/Group'
interface SidebarProps {}

export const Sidebar: FC<SidebarProps> = (): ReactElement | null => {
	return (
		<StyledSidebar>
			<List>
				<ListItem disablePadding>
					<ListItemButton component={Link} to='/users'>
						<ListItemIcon sx={{ minWidth: '40px' }}>
							<GroupIcon />
						</ListItemIcon>
						<ListItemText primary='Пользователи' />
					</ListItemButton>
				</ListItem>
			</List>
		</StyledSidebar>
	)
}
