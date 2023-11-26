import { IconButton, alpha, styled } from '@mui/material'

interface StyledTitleItemProps {
	$disabled?: boolean
}

export const StyledTitleItem = styled('div')<StyledTitleItemProps>(({ theme, $disabled }) => ({
	color: $disabled ? theme.palette.grey[400] : theme.palette.primary.main,
	backgroundColor: $disabled ? alpha(theme.palette.grey[400], 0.08) : alpha(theme.palette.primary.main, 0.08),
	border: `1px solid  ${$disabled ? theme.palette.grey[400] : theme.palette.primary.main}`,
	borderRadius: theme.spacing(0.5),
	fontSize: '14px',
	padding: `${theme.spacing(0.5)} ${theme.spacing(1)}`
}))

export const StyledExpandButton = styled(IconButton)(({ theme }) => ({
	fontSize: theme.spacing(2)
}))
