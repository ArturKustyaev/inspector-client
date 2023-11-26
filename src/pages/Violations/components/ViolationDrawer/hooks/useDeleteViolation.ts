import { useQueryClient } from '@tanstack/react-query'
import { useDeleteViolationMutation } from 'api'
import { useSnackbar } from 'notistack'

interface UseDeleteMutation {
	onSuccess: () => void
}

export const useDeleteViolation = ({ onSuccess }: UseDeleteMutation) => {
	const { enqueueSnackbar } = useSnackbar()
	const queryClient = useQueryClient()

	return useDeleteViolationMutation({
		onSuccess: () => {
			enqueueSnackbar('Запись успешно удалена', {
				variant: 'success'
			})

			onSuccess()

			return queryClient.invalidateQueries({ queryKey: ['tasks'] })
		}
	})
}
