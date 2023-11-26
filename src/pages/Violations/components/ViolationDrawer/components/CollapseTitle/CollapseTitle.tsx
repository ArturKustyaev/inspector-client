import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { Box, Collapse, Stack } from '@mui/material';
import { FC, PropsWithChildren, ReactElement, useState } from 'react';
import { StyledExpandButton, StyledTitleItem } from './CollapseTitle.styles';
import { CollapseTitleProps } from './CollapseTitle.types';

export const CollapseTitle: FC<PropsWithChildren<CollapseTitleProps>> = ({
  className,
  title,
  children,
  disabled,
}): ReactElement | null => {
  const [open, setOpen] = useState(disabled ? false : true);

  return (
    <Box className={className}>
      <StyledTitleItem $disabled={disabled}>
        <Stack width="100%" direction="row" justifyContent="space-between" alignItems="center">
          <span>{title}</span>
          <StyledExpandButton color="inherit" size="small" disabled={disabled} onClick={() => setOpen((prev) => !prev)}>
            {open ? <RemoveIcon fontSize="inherit" /> : <AddIcon fontSize="inherit" />}
          </StyledExpandButton>
        </Stack>
      </StyledTitleItem>
      <Collapse in={open}>
        <Box p={1.25} pb={0}>
          {children}
        </Box>
      </Collapse>
    </Box>
  );
};
