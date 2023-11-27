import { useQueryClient } from '@tanstack/react-query'
import { useUpdateViolationMutation } from 'api'
import { useSnackbar } from 'notistack'

interface UseUpdateViolation {
  onSuccess: () => void
}

export const useUpdateViolation = ({ onSuccess }: UseUpdateViolation) => {
  const { enqueueSnackbar } = useSnackbar()
  const queryClient = useQueryClient()

  return useUpdateViolationMutation({
    onSuccess: () => {
      enqueueSnackbar('Запись успешно обновлена', {
        variant: 'success',
      })

      onSuccess()

      return queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })
}
