import { alpha, touchRippleClasses } from '@mui/material'
import { createTheme, darken } from '@mui/material/styles'

export const theme = createTheme({
	palette: {
		primary: {
			main: '#0044B4',
			light: '#6D9ADC',
			dark: '#00358C'
		},
		secondary: {
			main: '#5C6E8C',
			gray: '#7890B2',
			dark: '#5C6E8C'
		},
		error: {
			main: '#F46B6B'
		},
		warning: {
			main: '#ED6C02'
		},
		info: {
			main: '#0288D1'
		},
		success: {
			main: '#2E7D32'
		},
		text: {
			dark: '#2B3648',
			light: '#ffffff'
		},

		legends: {
			blue: '#6D9ADC',
			green: '#8DD4C8',
			red: '#FFB1B1',
			darkred: '#F46B6B',
			yellow: '#FFE08F',
			skyblue: '#68C9FF',
			lightblue: '#B3E5FC',
			darkblue: '#576F92',
			grayBlue: '#8495C0',
			lightorange: '#FDBA74',
			orange: '#FE9B3F',
			purple: '#D0AFFF',
			pink: '#AE81E9',
			darkPink: '#C17AA0',
			lightgreen: '#6FCCBC',
			lightLime: '#D4E157',
			darkLime: '#C0CA33',
			olive: '#A5D6A7',
			lightOlive: '#BCF5BF',
			gray: '#D2DCFF',
			disabled: '#9AA2B0',
			divider: '#D1D8FA'
		},
		bg: {
			gray: '#EDEFF3',
			white: '#ffffff',
			shades: '#F6F7FB'
		},
		table: {
			yellow: '#FFCD4B',
			orange: '#ED6C02',
			green: '#8DD4C8',
			error: '#D32F2F',
			errorBg: '#ff0000'
		},
		purple: '#9427D7',
		disabled: '#9AA2B0'
	},
	components: {
		MuiSvgIcon: {
			variants: [
				{
					props: { color: 'dark' },
					style: ({ theme }) => ({
						color: theme.palette.text.dark
					})
				},
				{
					props: { color: 'purple' },
					style: ({ theme }) => ({
						color: theme.palette.legends.purple
					})
				}
			]
		},
		MuiButton: {
			defaultProps: {
				variant: 'contained',
				disableElevation: true
			},
			variants: [
				{
					props: { variant: 'outlined', color: 'primary' },
					style: ({ theme }) => ({
						borderColor: theme.palette.primary.main,
						backgroundColor: alpha(theme.palette.primary.main, 0.08)
					})
				},
				{
					props: { variant: 'outlined', color: 'error' },
					style: ({ theme }) => ({
						backgroundColor: alpha(theme.palette.error.main, 0.08)
					})
				},
				{
					props: { variant: 'outlined', color: 'success' },
					style: ({ theme }) => ({
						backgroundColor: alpha(theme.palette.table.green, 0.15)
					})
				},
				{
					props: { variant: 'contained', color: 'error' },
					style: ({ theme }) => ({
						color: theme.palette.text.light
					})
				},
				{
					props: { size: 'thin' },
					style: () => ({
						height: '30px',
						fontSize: '13px',
						lineHeight: '22px',
						letterSpacing: '0.46px'
					})
				}
			],
			styleOverrides: {
				root: {
					height: 40,
					padding: '8px 16px',
					whiteSpace: 'nowrap',
					borderRadius: 6,
					boxShadow: 'none'
				},
				text: {
					fontWeight: 500,
					textTransform: 'uppercase'
				},
				containedSecondary: ({ theme }) => ({
					color: theme.palette.primary.main,
					backgroundColor: theme.palette.bg.shades,
					'&:hover': {
						backgroundColor: darken(theme.palette.bg.shades, 0.08)
					},

					[`& .${touchRippleClasses.child}`]: {
						backgroundColor: darken(theme.palette.bg.shades, 0.3)
					}
				}),

				sizeLarge: () => ({
					fontSize: '15px',
					lineHeight: '26px',
					letterSpacing: '0.46px'
				}),
				sizeMedium: () => ({
					fontSize: '14px',
					lineHeight: '24px',
					letterSpacing: '0.4px'
				}),
				sizeSmall: () => ({
					fontSize: '13px',
					lineHeight: '22px',
					letterSpacing: '0.46px'
				})
			}
		},
		MuiTab: {
			styleOverrides: {
				textColorPrimary: ({ theme }) => ({
					color: theme.palette.secondary.main
				})
			}
		},
		MuiTextField: {
			defaultProps: {
				autoComplete: 'off',
				size: 'small'
			}
		},
		MuiCheckbox: {
			styleOverrides: {
				root: ({ theme }) => ({
					color: theme.palette.primary.main
				})
			}
		}
	}
})

theme.typography.h1 = {
	fontWeight: 500,
	fontSize: '18px',
	lineHeight: '160%',
	letterSpacing: '0.15px',
	textTransform: 'none',
	color: `${theme.palette.text.dark}`
}

theme.typography.h2 = {
	fontWeight: 400,
	fontSize: '18px',
	lineHeight: '160%',
	letterSpacing: '0.15px',
	textTransform: 'none',
	color: `${theme.palette.primary.main}`
}

theme.typography.subtitle1 = {
	fontWeight: 600,
	fontSize: '16px',
	lineHeight: '175%',
	letterSpacing: '0.15px',
	textTransform: 'none',
	color: `${theme.palette.primary.main}`
}

theme.typography.subtitle2 = {
	fontWeight: 500,
	fontSize: '14px',
	lineHeight: '130%',
	letterSpacing: '0.1px',
	textTransform: 'none',
	color: `${theme.palette.primary.main}`
}

theme.typography.body1 = {
	fontWeight: 400,
	fontSize: '16px',
	lineHeight: '150%',
	letterSpacing: '0.15px',
	textTransform: 'none',
	color: `${theme.palette.text.dark}`
}

theme.typography.body2 = {
	fontWeight: 400,
	fontSize: '14px',
	lineHeight: '143%',
	letterSpacing: '0.17px',
	textTransform: 'none',
	color: `${theme.palette.secondary.dark}`
}

theme.typography.buttonMedium = {
	fontWeight: 500,
	fontSize: '14px',
	lineHeight: '171%',
	letterSpacing: '0.4px',
	textTransform: 'uppercase',
	color: `${theme.palette.secondary.dark}`
}

theme.typography.buttonSmall = {
	fontWeight: 500,
	fontSize: '13px',
	lineHeight: '169%',
	letterSpacing: '0.46px',
	textTransform: 'uppercase',
	color: `${theme.palette.primary.main}`
}

theme.typography.tooltip = {
	fontWeight: 400,
	fontSize: '12px',
	lineHeight: '110%',
	letterSpacing: 0,
	textTransform: 'uppercase',
	color: `${theme.palette.primary.main}`
}
