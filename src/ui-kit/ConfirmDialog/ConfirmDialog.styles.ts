import { Button, DialogActions, styled } from '@mui/material'

export const StyledDialogActions = styled(DialogActions)`
	justify-content: center;
	padding-bottom: ${({ theme }) => theme.spacing(3.75)};
`

export const StyledDialogButton = styled(Button)`
	max-width: 165px;
`
