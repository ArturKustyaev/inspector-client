import { ArrowForward, Delete } from '@mui/icons-material'
import { Button } from '@mui/material'
import { FC, ReactElement } from 'react'
import { useFormState, useWatch } from 'react-hook-form'
import { StyleActionsWrapper } from '../FormActions.styles'
import { createFormWatchValues } from './CreateActions.constants'
import { CreateActionsProps } from './CreateActions.types'

export const CreateActions: FC<CreateActionsProps> = ({
  status,
  control,
  onCancel,
  onApproval,
  onDelete,
}): ReactElement | null => {
  const { isDirty, isValid } = useFormState({ control })

  const isSaveButtonShowed = status == null || status === 'created'
  const disableSubmit = !isDirty
  const disableSendButton =
    useWatch({ control, name: createFormWatchValues }).some((value) => !value) || !isValid || isDirty

  return (
    <StyleActionsWrapper>
      <Button onClick={onCancel}>Закрыть</Button>
      {isSaveButtonShowed && (
        <Button type="submit" form="create-form" color="success" disabled={disableSubmit}>
          Сохранить
        </Button>
      )}
      {status === 'created' && (
        <Button color="success" endIcon={<ArrowForward />} disabled={disableSendButton} onClick={onApproval}>
          На согласование
        </Button>
      )}
      {status === 'created' && (
        <Button color="error" endIcon={<Delete />} onClick={onDelete}>
          Удалить
        </Button>
      )}
    </StyleActionsWrapper>
  )
}
