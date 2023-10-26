import { Container, Stack } from '@mui/material'
import { Header } from 'components'
import { FC, PropsWithChildren, ReactElement } from 'react'

export const PageLayout: FC<PropsWithChildren> = ({ children }): ReactElement | null => {
	return (
		<Stack height='inherit' minHeight='inherit'>
			<Header />
			<Container>{children}</Container>
		</Stack>
	)
}
