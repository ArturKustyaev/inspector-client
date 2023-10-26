import NiceModal, { useModal } from '@ebay/nice-modal-react';
import { Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import { StyledDialogActions, StyledDialogButton } from './ConfirmDialog.styles';
import { ConfirmDialogProps } from './ConfirmDialog.types';
import { ReactElement } from 'react';

export const ConfirmDialog = NiceModal.create<ConfirmDialogProps>(
  ({ title, body, confirmButtonText, denyButtonText, onSuccess }): ReactElement | null => {
    const { visible, hide } = useModal();

    const successClickHandler = () => {
      closeHandler();
      onSuccess();
    };

    const closeHandler = () => {
      hide();
    };

    return (
      <Dialog
        PaperProps={{
          sx: {
            width: 400,
            textAlign: 'center',
          },
        }}
        open={visible}
        onClose={closeHandler}>
        <DialogTitle sx={{ pt: 3.75, pb: 1.5 }} variant="subtitle1" justifyContent="center">
          {title || 'Подтвердить закрытие формы?'}
        </DialogTitle>
        <DialogContent>
          <Typography sx={{ wordBreak: 'break-word' }} variant="body2" color="text.dark">
            {body || 'Форма будет закрыта, а все введенные данные безвозвратно утеряны.'}
          </Typography>
        </DialogContent>
        <StyledDialogActions>
          <StyledDialogButton color="success" autoFocus fullWidth onClick={successClickHandler}>
            {confirmButtonText || 'Да'}
          </StyledDialogButton>
          <StyledDialogButton fullWidth onClick={closeHandler}>
            {denyButtonText || 'Отмена'}
          </StyledDialogButton>
        </StyledDialogActions>
      </Dialog>
    );
  },
);
