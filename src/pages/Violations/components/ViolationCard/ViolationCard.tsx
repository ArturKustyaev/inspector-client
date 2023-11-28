import NiceModal from '@ebay/nice-modal-react'
import { Box, CardActionArea, Divider, Stack, Typography } from '@mui/material'
import { FC, ReactElement } from 'react'
import { violationStatusLabels } from 'types'
import { Chip } from 'ui-kit'
import { getFormatDate, getFormatName } from 'utils'
import { ViolationDrawer } from '../ViolationDrawer'
import { StyledViolationCard } from './ViolationCard.styles'
import { ViolationCardProps } from './ViolationCard.types'
import { ViolationCardField } from './components'

export const ViolationCard: FC<ViolationCardProps> = ({ violation }): ReactElement | null => {
  const inspector = violation.violationInfo.user

  const cardClickHandler = () => {
    NiceModal.show(ViolationDrawer, { violation })
  }

  return (
    <StyledViolationCard onClick={cardClickHandler}>
      <CardActionArea sx={{ flex: 1 }}>
        <Stack height="100%" p={2}>
          <Typography variant="subtitle1" mb={1}>
            {violation.violationInfo.title}
          </Typography>
          <Stack mt="auto" mb={2} spacing={1}>
            <Divider />
            <ViolationCardField label="Создано:" value={getFormatDate({ date: violation.createdAt })} />
            <ViolationCardField
              label="Ответственный:"
              value={getFormatName(inspector.lastName, inspector.firstName, inspector.middleName)}
            />
            <ViolationCardField
              label="Статус:"
              value={<Chip label={violationStatusLabels[violation.violationInfo.status]} size="small" />}
            />
          </Stack>
          <Box textAlign="right">
            <Typography variant="body1" fontSize={12}>
              Обновлено: {getFormatDate({ date: violation.updatedAt, withTime: true })}
            </Typography>
          </Box>
        </Stack>
      </CardActionArea>
    </StyledViolationCard>
  )
}
