export interface DrawerActionsProps {
  submitButtonId?: string;
  successButtonText?: string;
  cancelButtonText?: string;
  deleteButtonText?: string;
  disableSubmit: boolean;
  hideDeleteButton: boolean;
  onCancel: () => void;
  onDelete?: () => void;
}
