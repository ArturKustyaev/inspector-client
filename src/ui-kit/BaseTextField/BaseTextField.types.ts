import { TextFieldProps } from '@mui/material';

export type BaseTextFieldProps = TextFieldProps & {
  textAlign?: TextAlign;
  placeholderTextAlign?: TextAlign;
};

export type TextAlign = 'left' | 'center' | 'right';
