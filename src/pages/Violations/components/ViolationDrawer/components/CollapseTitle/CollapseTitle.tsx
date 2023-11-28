import { Box, Stack } from '@mui/material'
import { FC, PropsWithChildren, ReactElement } from 'react'
import { StyledTitleItem } from './CollapseTitle.styles'
import { CollapseTitleProps } from './CollapseTitle.types'

export const CollapseTitle: FC<PropsWithChildren<CollapseTitleProps>> = ({
  className,
  title,
  children,
  disabled,
}): ReactElement | null => {
  return (
    <Box className={className}>
      <StyledTitleItem $disabled={disabled}>
        <Stack width="100%" direction="row" justifyContent="space-between" alignItems="center">
          <span>{title}</span>
        </Stack>
      </StyledTitleItem>
      <Box p={1.25} pb={0}>
        {children}
      </Box>
    </Box>
  )
}
