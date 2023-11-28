import { styled, css } from '@mui/material'

interface StyledCommentCellProps {
  $isOverflowed: boolean
  $isEmptyCell: boolean
}

export const StyledCommentCell = styled('div')<StyledCommentCellProps>`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  text-overflow: ellipsis;
  overflow: hidden;
  flex-grow: 1;
  font-size: 14px;
  text-align: ${({ $isEmptyCell }) => `${$isEmptyCell ? 'center' : 'left'}`};

  ${({ $isOverflowed, theme }) => {
    if ($isOverflowed) {
      return css(`
        &:hover {
          content: '';
          position: absolute;
          background-color: white;
          border-bottom: 1px solid ${theme.palette.bg.gray};
          left: 0;
          top: 0;
          display: block;
          overflow: visible;
          padding-inline: 10px;
          padding-top: 1px;
          z-index: 10;
        }
      `)
    }
  }};
`
