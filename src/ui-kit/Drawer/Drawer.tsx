import { Box, Divider, Drawer as MUIDrawer, Stack } from '@mui/material'
import { FC } from 'react'
import { StyledContentWrapper, StyledSubtitle, StyledTitle, StyledTitleButtonWrapper } from './Drawer.styles'
import { DrawerProps } from './Drawer.types'

export const Drawer: FC<DrawerProps> = ({
	title,
	subtitle,
	titleEndButton,
	anchor = 'right',
	children,
	open,
	width = 400,
	...rest
}) => {
	return (
		<MUIDrawer PaperProps={{ sx: { width, overflow: 'hidden' } }} anchor={anchor} open={open} {...rest}>
			<Stack flex='1 1 auto' overflow='auto'>
				<Box position='relative'>
					<StyledTitle variant='h6'>{title}</StyledTitle>
					{titleEndButton && <StyledTitleButtonWrapper>{titleEndButton}</StyledTitleButtonWrapper>}
				</Box>
				<Divider />
				{subtitle && (
					<>
						<StyledSubtitle variant='subtitle2'>{subtitle}</StyledSubtitle>
						<Divider />
					</>
				)}
				<StyledContentWrapper>{children}</StyledContentWrapper>
			</Stack>
		</MUIDrawer>
	)
}
