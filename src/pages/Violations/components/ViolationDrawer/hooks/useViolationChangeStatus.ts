import { useQueryClient } from '@tanstack/react-query'
import { useViolationChangeStatusMutation } from 'api'
import { useSnackbar } from 'notistack'
import { changeViolationStatusMessages } from '../ViolationDrawer.constants'

interface UseViolationChangeStatus {
  onSuccess: () => void
}

export const useViolationChangeStatus = ({ onSuccess }: UseViolationChangeStatus) => {
  const { enqueueSnackbar } = useSnackbar()
  const queryClient = useQueryClient()

  return useViolationChangeStatusMutation({
    onSuccess: (data) => {
      const { violationInfo } = data

      enqueueSnackbar(changeViolationStatusMessages[violationInfo.status], {
        variant: 'success',
      })

      onSuccess()

      return queryClient.invalidateQueries({ queryKey: ['tasks'] })
    },
  })
}
