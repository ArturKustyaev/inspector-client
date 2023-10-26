import { styled } from '@mui/material'

export const StyledSidebar = styled('div')(({ theme }) => ({
	backgroundColor: 'white',
	borderRadius: theme.spacing(1),
	height: '100%',
	marginRight: theme.spacing(2)
}))
