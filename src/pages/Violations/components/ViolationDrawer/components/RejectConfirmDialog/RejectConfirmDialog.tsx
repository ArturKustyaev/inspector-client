import NiceModal, { useModal } from '@ebay/nice-modal-react'
import { Box, Button, Dialog, Stack, Typography } from '@mui/material'
import { ChangeEvent, ReactElement, useState } from 'react'
import { BaseTextField } from 'ui-kit'
import { RejectConfirmDialogProps } from './RejectConfirmDialog.types'

export const RejectConfirmDialog = NiceModal.create<RejectConfirmDialogProps>(({ onSuccess }): ReactElement | null => {
  const { visible, hide } = useModal()
  const [comment, setComment] = useState('')

  const commentChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value)
  }

  const rejectNeedClickHandler = () => {
    onSuccess(comment)

    closeDialogHandler()
  }

  function closeDialogHandler() {
    hide()
    setTimeout(() => {
      setComment('')
    }, 300)
  }

  return (
    <Dialog
      PaperProps={{
        sx: {
          p: 3.75,
          width: 440,
        },
      }}
      open={visible}
      onClose={closeDialogHandler}>
      <Box textAlign="center" mb={4}>
        <Typography variant="subtitle1">Отправить запись о нарушении на доработку?</Typography>
      </Box>
      <Box mb={4}>
        <BaseTextField
          value={comment}
          label="Комментарий"
          placeholder="Введите текст"
          rows={3}
          multiline
          fullWidth
          onChange={commentChangeHandler}
        />
      </Box>
      <Stack direction="row" spacing={1.25}>
        <Button color="error" disabled={!comment} fullWidth onClick={rejectNeedClickHandler}>
          Отклонить
        </Button>
        <Button fullWidth onClick={closeDialogHandler}>
          Отмена
        </Button>
      </Stack>
    </Dialog>
  )
})
