import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { IconButton, InputAdornment, TextField, TextFieldProps } from '@mui/material'
import { FC, ReactElement, useState } from 'react'

export const PasswordTextField: FC<TextFieldProps> = ({ InputProps, ...props }): ReactElement | null => {
	const [isShowPassword, setIsShowPassword] = useState(false)

	return (
		<TextField
			type={isShowPassword ? 'text' : 'password'}
			InputProps={{
				endAdornment: (
					<InputAdornment position='end'>
						<IconButton size='small' onClick={() => setIsShowPassword(prev => !prev)}>
							{isShowPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
						</IconButton>
					</InputAdornment>
				),
				...InputProps
			}}
			{...props}
		/>
	)
}
