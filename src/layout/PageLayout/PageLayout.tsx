import { Container, Stack } from '@mui/material'
import { Header, Sidebar } from 'components'
import { FC, PropsWithChildren, ReactElement } from 'react'

export const PageLayout: FC<PropsWithChildren> = ({ children }): ReactElement | null => {
	return (
		<Stack height='inherit' minHeight='inherit'>
			<Header />
			<Container sx={{ display: 'flex', flex: 1 }}>
				<Stack direction='row' py={2} width='100%'>
					<Sidebar />
					{children}
				</Stack>
			</Container>
		</Stack>
	)
}
