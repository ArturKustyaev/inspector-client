import NiceModal from '@ebay/nice-modal-react'
import { ThemeProvider } from '@mui/material'
import { LocalizationProvider, ruRU } from '@mui/x-date-pickers'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns'
import { MutationCache, QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { isAxiosError } from 'axios'
import { AppRouter } from 'components'
import { UserContextProvider } from 'context'
import ruLocale from 'date-fns/locale/ru'
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
							if (Array.isArray(error.response?.data.message)) {
								enqueueSnackbar(error.response?.data.message.join(', '), {
									variant: 'error'
								})
							} else {
								enqueueSnackbar(error.response?.data.message, {
									variant: 'error'
								})
							}
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
			<LocalizationProvider
				localeText={ruRU.components.MuiLocalizationProvider.defaultProps.localeText}
				dateAdapter={AdapterDateFns}
				adapterLocale={ruLocale}
			>
				<QueryClientProvider client={queryClient}>
					<NiceModal.Provider>
						<UserContextProvider>
							<AppRouter />
						</UserContextProvider>
					</NiceModal.Provider>
				</QueryClientProvider>
			</LocalizationProvider>
		</ThemeProvider>
	)
}

export default App
