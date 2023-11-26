import { StackProps } from '@mui/material';
import { FC, PropsWithChildren, ReactElement } from 'react';
import { StyledFormBox } from './FormBox.styles';

export const FormBox: FC<PropsWithChildren<StackProps>> = ({ children, ...props }): ReactElement | null => {
  return <StyledFormBox {...props}>{children}</StyledFormBox>;
};
