import { Stack } from '@mui/system'
import { FC, memo, ReactElement } from 'react'
import { menuItems } from './Stages.constants'
import { StyledStageItem, StyledStageList } from './Stages.styles'
import { FormationStagesProps } from './Stages.types'

export const Stages: FC<FormationStagesProps> = memo(({ value, status, onChange }): ReactElement | null => {
	const s = status

	return (
		<Stack direction='row'>
			<StyledStageList>
				{menuItems.map((stage, index) => (
					<StyledStageItem
						key={stage.value}
						value={stage.value}
						selected={stage.value === value}
						disabled={false}
						onClick={() => onChange(stage.value)}
					>
						{`Этап ${index + 1}: ${stage.label}`}
					</StyledStageItem>
				))}
			</StyledStageList>
		</Stack>
	)
})

Stages.displayName = 'FormationStages'
