import { Stack, styled } from '@mui/material'

export const StyledFormBox = styled(Stack)(({ theme }) => ({
	border: `1px solid ${theme.palette.grey[200]}`,
	borderRadius: theme.spacing(2),
	padding: theme.spacing(2.5),
	overflowY: 'auto'
}))
