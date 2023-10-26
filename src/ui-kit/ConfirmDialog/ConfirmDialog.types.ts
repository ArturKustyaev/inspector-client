import { ReactNode } from 'react';

export interface ConfirmDialogProps {
  title?: string;
  body?: ReactNode;
  confirmButtonText?: string;
  denyButtonText?: string;
  onSuccess: () => void;
}
