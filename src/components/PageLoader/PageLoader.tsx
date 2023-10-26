import { CircularProgress, Stack } from '@mui/material'
import { FC, ReactElement } from 'react'

export const PageLoader: FC = (): ReactElement | null => {
	return (
		<Stack height='inherit' minHeight='inherit' justifyContent='center' alignItems='center'>
			<CircularProgress />
		</Stack>
	)
}
