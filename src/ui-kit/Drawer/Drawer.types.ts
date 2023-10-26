import { DrawerProps as MUIDrawerProps } from '@mui/material';
import { ReactElement } from 'react';

export interface DrawerProps extends MUIDrawerProps {
  title: string;
  subtitle?: string;
  titleEndButton?: ReactElement | null;
  width?: string | number;
}
