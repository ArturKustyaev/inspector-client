import { Stack, Typography } from '@mui/material'
import { FC, ReactElement } from 'react'
import { ViolationCardFieldProps } from './ViolationCardField.types'

export const ViolationCardField: FC<ViolationCardFieldProps> = ({ label, value }): ReactElement | null => {
  return (
    <Stack direction="row" justifyContent="space-between" alignContent="center">
      <Typography variant="body2">{label}</Typography>
      {typeof value === 'string' ? (
        <Typography variant="body2" color="text.dark">
          {value}
        </Typography>
      ) : (
        value
      )}
    </Stack>
  )
}
