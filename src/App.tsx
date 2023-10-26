import NiceModal from '@ebay/nice-modal-react'
import { ThemeProvider } from '@mui/material'
import { MutationCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { isAxiosError } from 'axios'
import { AppRouter } from 'components'
import { UserContextProvider } from 'context'
import { useSnackbar } from 'notistack'
import { useState } from 'react'
import { theme } from 'styles'

function App() {
	const { enqueueSnackbar } = useSnackbar()
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						retry: 3
					}
				},
				mutationCache: new MutationCache({
					onError: error => {
						if (isAxiosError(error)) {
							enqueueSnackbar(error.response?.data.message, {
								variant: 'error'
							})
						} else {
							enqueueSnackbar(error.message, {
								variant: 'error'
							})
						}
					}
				})
			})
	)

	return (
		<ThemeProvider theme={theme}>
			<QueryClientProvider client={queryClient}>
				<NiceModal.Provider>
					<UserContextProvider>
						<AppRouter />
					</UserContextProvider>
				</NiceModal.Provider>
			</QueryClientProvider>
		</ThemeProvider>
	)
}

export default App
