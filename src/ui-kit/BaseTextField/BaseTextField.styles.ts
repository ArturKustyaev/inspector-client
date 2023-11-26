import {
	TextField,
	darken,
	formLabelClasses,
	inputBaseClasses,
	outlinedInputClasses,
	selectClasses,
	styled
} from '@mui/material'
import { TextAlign } from './BaseTextField.types'

interface StyledBaseTextFieldProps {
	$textAlign?: TextAlign
	$placeholderTextAlign?: TextAlign
}

export const StyledBaseTextField = styled(TextField)<StyledBaseTextFieldProps>(
	({ theme, $textAlign, $placeholderTextAlign }) => ({
		[`& .${inputBaseClasses.root}`]: {
			color: theme.palette.text.dark,
			backgroundColor: theme.palette.bg.shades,

			[`& .${selectClasses.select}`]: {
				minHeight: 'auto',
				lineHeight: '20px',

				[`&.${inputBaseClasses.input}`]: {
					paddingRight: $textAlign === 'right' ? theme.spacing(4) : undefined
				},

				[`&.${inputBaseClasses.inputSizeSmall}`]: {
					lineHeight: '14px'
				}
			}
		},

		[`& .${inputBaseClasses.multiline}`]: {
			padding: 0
		},

		[`& .${formLabelClasses.root}`]: {
			fontSize: '14px',
			fontWeight: 400,
			position: 'static',
			transform: 'none',
			color: theme.palette.secondary.main,

			[`&.${formLabelClasses.focused}`]: {
				color: theme.palette.secondary.main
			}
		},

		[`& .MuiInputBase-sizeLarge .${inputBaseClasses.input}`]: {
			height: '24px'
		},

		[`& .${inputBaseClasses.input}`]: {
			textAlign: $textAlign ?? 'left',
			height: '20px',
			padding: `${theme.spacing(1)} ${theme.spacing(2)}`,

			[`&.${inputBaseClasses.inputSizeSmall}`]: {
				height: '14px',
				padding: theme.spacing(1)
			},

			'&::placeholder': {
				fontSize: '14px',
				textAlign: $placeholderTextAlign,
				color: theme.palette.legends.disabled,
				opacity: 1
			}
		},

		[`& .${outlinedInputClasses.notchedOutline}`]: {
			borderColor: darken(theme.palette.bg.shades, 0.05),
			borderRadius: theme.spacing(1),
			top: 0,

			'& legend': {
				display: 'none'
			}
		},

		[`& .${inputBaseClasses.sizeSmall} .${outlinedInputClasses.notchedOutline}`]: {
			borderRadius: theme.spacing(0.5)
		},

		[`& .${inputBaseClasses.disabled} .${outlinedInputClasses.notchedOutline}`]: {
			borderColor: darken(theme.palette.bg.shades, 0.03)
		}
	})
)
