import { ArrowForward, Delete } from '@mui/icons-material'
import { Button } from '@mui/material'
import { FC, ReactElement } from 'react'
import { ViolationStatus } from 'types'
import { StyleActionsWrapper } from '../FormActions.styles'

interface CreateActionsProps {
	status: ViolationStatus | undefined
	onCancel: () => void
	onDelete: () => void
}

export const CreateActions: FC<CreateActionsProps> = ({ status, onCancel, onDelete }): ReactElement | null => {
	return (
		<StyleActionsWrapper>
			<Button onClick={onCancel}>Отменить</Button>
			<Button type='submit' form='create-form' color='success'>
				Сохранить
			</Button>
			{status === 'created' && (
				<Button color='success' endIcon={<ArrowForward />}>
					На согласование
				</Button>
			)}
			{status === 'created' && (
				<Button color='error' endIcon={<Delete />} onClick={onDelete}>
					Удалить
				</Button>
			)}
		</StyleActionsWrapper>
	)
}
