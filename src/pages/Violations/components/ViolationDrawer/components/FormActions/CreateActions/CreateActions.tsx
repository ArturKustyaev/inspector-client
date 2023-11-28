import { ArrowForward, Check, Delete, DoDisturbOn } from '@mui/icons-material'
import { Button } from '@mui/material'
import { useUserPrivileges } from 'hooks'
import { FC, ReactElement } from 'react'
import { useFormState, useWatch } from 'react-hook-form'
import { ReviewStatus, ViolationStatus } from 'types'
import { StyleActionsWrapper } from '../FormActions.styles'
import { createFormWatchValues } from './CreateActions.constants'
import { CreateActionsProps } from './CreateActions.types'
import NiceModal from '@ebay/nice-modal-react'
import { RejectConfirmDialog } from '../..'

export const CreateActions: FC<CreateActionsProps> = ({
  stage,
  status,
  createControl,
  onCancel,
  onUpdateStatus,
  onApprove,
  onDelete,
}): ReactElement | null => {
  const { isLawyer } = useUserPrivileges()
  const { isDirty, isValid } = useFormState({ control: createControl })

  const isSaveAndApproveButtonsShowed = status == null || status === 'created' || status === 'revision'
  const isCompleteButtonShowed = status === 'court' && isLawyer && stage === 3
  const disableSubmit = !isDirty
  const disableSendButton =
    useWatch({ control: createControl, name: createFormWatchValues }).some((value) => !value) || !isValid || isDirty
  const isApprovalOrRejectButtonsShowed = status === 'coordination' && isLawyer

  const changeStatusHandler = (status: ViolationStatus) => {
    onUpdateStatus(status)
  }

  const reviewChangeHandler = (status: ReviewStatus) => {
    if (status === 'decline') {
      NiceModal.show(RejectConfirmDialog, { onSuccess: (message) => onApprove(status, message) })
    } else {
      onApprove(status)
    }
  }

  return (
    <StyleActionsWrapper>
      <Button onClick={onCancel}>Закрыть</Button>
      {isSaveAndApproveButtonsShowed && (
        <>
          <Button type="submit" form="create-form" color="success" disabled={disableSubmit}>
            Сохранить
          </Button>
          <Button
            color="success"
            endIcon={<ArrowForward />}
            disabled={disableSendButton}
            onClick={() => changeStatusHandler('coordination')}>
            На согласование
          </Button>
        </>
      )}
      {isCompleteButtonShowed && (
        <Button type="submit" form="court-form" color="success">
          Исполнить
        </Button>
      )}
      {status === 'created' && (
        <Button color="error" endIcon={<Delete />} onClick={onDelete}>
          Удалить
        </Button>
      )}
      {isApprovalOrRejectButtonsShowed && (
        <>
          <Button color="success" endIcon={<Check />} onClick={() => reviewChangeHandler('approve')}>
            Согласовать
          </Button>
          <Button color="error" endIcon={<DoDisturbOn />} onClick={() => reviewChangeHandler('decline')}>
            Отклонить
          </Button>
        </>
      )}
    </StyleActionsWrapper>
  )
}
