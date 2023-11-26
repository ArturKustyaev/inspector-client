import { Box, Stack } from '@mui/material'
import { FC, ReactElement } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { BaseTextField } from 'ui-kit'
import { CollapseTitle } from '../CollapseTitle'
import { FormField } from '../FormField'

interface CourtFormProps {}

export const CourtForm: FC<CourtFormProps> = (): ReactElement | null => {
	const { control } = useForm()

	return (
		<Box>
			<Stack spacing={3}>
				<CollapseTitle title='Информация о решении суда'>
					<Stack spacing={2}>
						<FormField label='Дата окончательного решения'>
							<Controller name='' control={control} render={() => <BaseTextField size='small' />} />
						</FormField>
						<FormField label='Решение суда'>
							<Controller name='' control={control} render={() => <BaseTextField size='small' />} />
						</FormField>
						<FormField label='Сумма взыскания'>
							<Controller name='' control={control} render={() => <BaseTextField size='small' />} />
						</FormField>
					</Stack>
				</CollapseTitle>
			</Stack>
		</Box>
	)
}
