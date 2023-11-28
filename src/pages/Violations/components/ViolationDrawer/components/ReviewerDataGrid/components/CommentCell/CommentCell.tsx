import { GridRenderCellParams } from '@mui/x-data-grid'
import { FC, ReactElement, useLayoutEffect, useRef, useState } from 'react'
import { ViolationReview } from 'types'
import { isNullOrUndefined } from 'utils'
import { StyledCommentCell } from './CommentCell.styles'

export const CommentCell: FC<GridRenderCellParams<ViolationReview, string | undefined>> = ({
  value,
}): ReactElement | null => {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isOverflowed, setIsOverflowed] = useState(false)
  const isEmptyComment = isNullOrUndefined(value) || value === ''

  useLayoutEffect(() => {
    const cell = ref.current

    if (cell) {
      const isContentOverflowed = cell.scrollHeight > cell.clientHeight || cell.scrollWidth > cell.clientWidth
      setIsOverflowed(isContentOverflowed)
    }
  }, [])

  return (
    <StyledCommentCell ref={ref} $isOverflowed={isOverflowed} $isEmptyCell={isEmptyComment}>
      {isEmptyComment ? '—' : value}
    </StyledCommentCell>
  )
}
