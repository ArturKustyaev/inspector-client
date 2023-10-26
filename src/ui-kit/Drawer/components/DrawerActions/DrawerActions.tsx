import DeleteIcon from '@mui/icons-material/Delete';
import { Button, Stack } from '@mui/material';
import { FC, ReactElement } from 'react';
import { DrawerActionsProps } from './DrawerActions.types';

export const DrawerActions: FC<DrawerActionsProps> = ({
  submitButtonId,
  successButtonText,
  cancelButtonText,
  deleteButtonText,
  disableSubmit,
  hideDeleteButton,
  onCancel,
  onDelete,
}): ReactElement | null => {
  return (
    <Stack mt="auto" px={2.5} py={1.25} spacing={2}>
      <Stack direction="row" justifyContent="space-between" spacing={2}>
        <Button type="submit" form={submitButtonId} color="success" fullWidth disabled={disableSubmit}>
          {successButtonText || 'Сохранить'}
        </Button>
        <Button fullWidth onClick={onCancel}>
          {cancelButtonText || 'Отменить'}
        </Button>
      </Stack>
      {!hideDeleteButton && (
        <Button color="error" variant="text" startIcon={<DeleteIcon />} fullWidth onClick={onDelete}>
          {deleteButtonText || 'Удалить'}
        </Button>
      )}
    </Stack>
  );
};
