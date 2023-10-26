import { Box, Typography, styled } from '@mui/material'

export const StyledTitle = styled(Typography)`
	color: ${({ theme }) => theme.palette.primary.main};
	padding: 20px 20px 15px;
	text-align: center;
`

export const StyledSubtitle = styled(StyledTitle)`
	color: ${({ theme }) => theme.palette.text.primary};
	font-size: 16px;
`

export const StyledContentWrapper = styled('div')`
	display: flex;
	flex-direction: column;
	flex-grow: 1;
	overflow: auto;
`

export const StyledTitleButtonWrapper = styled(Box)`
	position: absolute;
	top: 50%;
	right: 10px;
	transform: translateY(-50%);
`
