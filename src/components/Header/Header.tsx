import { AppBar, Container, Stack, Typography } from '@mui/material'
import { FC, ReactElement } from 'react'
import { Avatar } from './components'

export const Header: FC = (): ReactElement | null => {
	return (
		<AppBar sx={{ background: 'white' }} elevation={0} color='default' position='static'>
			<Container>
				<Stack width='100%' direction='row' justifyContent='space-between' alignItems='center'>
					<Typography variant='h6'>Учет инспекторов</Typography>
					<Avatar />
				</Stack>
			</Container>
		</AppBar>
	)
}
