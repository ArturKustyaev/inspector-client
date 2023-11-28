import { styled } from '@mui/material'
import { checkboxClasses, darken } from '@mui/material'
import { DataGrid, GridActionsCellItem, gridClasses } from '@mui/x-data-grid'

export const StyledSelectPlaceHolder = styled('div')(({ theme }) => ({
  fontSize: '14px',
  color: theme.palette.legends.disabled,
  opacity: 1,
}))

export const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
  border: 'none',

  [`& .${gridClasses.main}`]: {
    borderRadius: theme.spacing(1),
  },

  [`& .${gridClasses.columnHeaders}`]: {
    backgroundColor: theme.palette.secondary.gray,
    color: theme.palette.text.light,

    [`& .${gridClasses.columnHeader}:not(:last-child)`]: {
      borderRight: '1px solid',
      borderColor: theme.palette.secondary.gray ? darken(theme.palette.secondary.gray, 0.05) : undefined,
    },

    [`& .${checkboxClasses.root}`]: {
      color: theme.palette.text.light,
    },
  },

  [`& .${gridClasses.iconSeparator}`]: {
    display: 'none',
  },

  [`& .${gridClasses.virtualScroller}`]: {
    backgroundColor: theme.palette.bg.white,
    color: theme.palette.text.dark,

    '&::-webkit-scrollbar': {
      borderLeft: `1px solid ${theme.palette.bg.gray}`,
    },

    '&::-webkit-scrollbar:horizontal': {
      borderTop: `1px solid ${theme.palette.bg.gray}`,
    },
  },

  [`& .${gridClasses.row}:not(.${gridClasses['row--dynamicHeight']})>.${gridClasses.cell}.nowWrapCell`]: {
    overflow: 'visible',
    whiteSpace: 'initial',
  },

  [`& .${gridClasses.cell}`]: {
    borderColor: theme.palette.bg.gray,
    position: 'relative',

    span: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
    },
  },
})) as typeof DataGrid

export const StyledGridActionsCellItem = styled(GridActionsCellItem)`
  & .MuiSvgIcon-root {
    font-size: 20px !important;
  }
`
