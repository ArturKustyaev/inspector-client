import NiceModal from '@ebay/nice-modal-react'
import { Box, CardActionArea, Typography } from '@mui/material'
import { FC, ReactElement } from 'react'
import { ViolationDrawer } from '../ViolationDrawer'
import { StyledViolationCard } from './ViolationCard.styles'
import { ViolationCardProps } from './ViolationCard.types'

export const ViolationCard: FC<ViolationCardProps> = ({ violation }): ReactElement | null => {
	const cardClickHandler = () => {
		NiceModal.show(ViolationDrawer, { violation })
	}

	return (
		<StyledViolationCard onClick={cardClickHandler}>
			<CardActionArea sx={{ flex: 1 }}>
				<Box height='100%' p={2}>
					<Typography variant='subtitle1' mb={1}>
						{violation.violationInfo.title}
					</Typography>
					<Typography>{violation.violationInfo.description}</Typography>
				</Box>
			</CardActionArea>
		</StyledViolationCard>
	)
}
