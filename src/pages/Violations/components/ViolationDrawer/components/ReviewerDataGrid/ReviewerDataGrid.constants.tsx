import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid'
import { ReviewStatus, ViolationReview, reviewStatusColors, reviewStatusLabels } from 'types'
import { Chip } from 'ui-kit'
import { getFormatDate } from 'utils'
import { CommentCell } from './components'

export const reviewerDataGridColumns: GridColDef<ViolationReview>[] = [
  {
    field: 'user',
    headerName: 'Юрист',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
    sortable: false,
  },
  {
    field: 'status',
    headerName: 'Статус согласования',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
    sortable: false,
    renderCell: ({ value }: GridRenderCellParams<ViolationReview, ReviewStatus>) =>
      value ? <Chip label={reviewStatusLabels[value]} size="small" color={reviewStatusColors[value]} /> : null,
  },
  {
    field: 'date',
    headerName: 'Дата',
    headerAlign: 'center',
    align: 'center',
    flex: 1,
    sortable: false,
    valueFormatter: ({ value }) => getFormatDate({ date: value, withTime: true }),
  },
  {
    field: 'message',
    headerName: 'Комментарий',
    headerAlign: 'center',
    align: 'left',
    flex: 1,
    cellClassName: 'nowWrapCell',
    sortable: false,
    renderCell: CommentCell,
  },
]
