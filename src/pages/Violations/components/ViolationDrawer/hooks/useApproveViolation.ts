import { useQueryClient } from '@tanstack/react-query'
import { useApproveMutation } from 'api'
import { useSnackbar } from 'notistack'

interface UseApproveViolation {
  onSuccess: () => void
}

export const useApproveViolation = ({ onSuccess }: UseApproveViolation) => {
  const { enqueueSnackbar } = useSnackbar()
  const queryClient = useQueryClient()

  return useApproveMutation({
    onSuccess: () => {
      enqueueSnackbar('Запись успешно согласована', {
        variant: 'success',
      })

      onSuccess()

      return queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })
}
