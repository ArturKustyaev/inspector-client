import { useQueryClient } from '@tanstack/react-query'
import { useCreateViolationMutation } from 'api'
import { useSnackbar } from 'notistack'

interface UseCreateViolation {
	onSuccess: () => void
}

export const useCreateViolation = ({ onSuccess }: UseCreateViolation) => {
	const { enqueueSnackbar } = useSnackbar()
	const queryClient = useQueryClient()

	return useCreateViolationMutation({
		onSuccess: () => {
			enqueueSnackbar('Запись успешно создана', {
				variant: 'success'
			})

			onSuccess()

			return queryClient.invalidateQueries({ queryKey: ['tasks'] })
		}
	})
}
