import { FC, ReactElement } from 'react'
import { StyledDataGrid } from 'styles'
import { generateRandomString } from 'utils'
import { reviewerDataGridColumns } from './ReviewerDataGrid.constants'
import { ReviewerDataGridProps } from './ReviewerDataGrid.types'

export const ReviewerDataGrid: FC<ReviewerDataGridProps> = ({ data }): ReactElement | null => {
  return (
    <StyledDataGrid
      columns={reviewerDataGridColumns}
      rows={data}
      getRowId={(row) => `${row.user}${generateRandomString()}`}
      localeText={{ noRowsLabel: 'Нет данных' }}
      rowHeight={80}
      hideFooter
      disableRowSelectionOnClick
      disableColumnFilter
      disableColumnMenu
      disableVirtualization
    />
  )
}
