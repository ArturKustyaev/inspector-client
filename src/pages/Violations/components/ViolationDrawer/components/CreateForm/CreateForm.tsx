import { Box, MenuItem, Stack } from '@mui/material'
import { CreateViolationBody } from 'api'
import { FC, ReactElement } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { StyledSelectPlaceHolder } from 'styles'
import { ViolationInspector, ViolationStatus, violationStatusLabels } from 'types'
import { Chip, DatePicker } from 'ui-kit'
import { BaseTextField } from 'ui-kit/BaseTextField'
import { getFormatDate, getFormatName } from 'utils'
import { textFieldBaseProps } from '../../ViolationDrawer.constants'
import { CollapseTitle } from '../CollapseTitle'
import { FormField } from '../FormField'
import { districts } from './CreateForm.constants'
import { mapCreateFormValues } from './CreateForm.service'
import { CreateFormValues } from './CreateForm.types'

interface CreateFormProps {
	inspector: ViolationInspector | undefined
	status: ViolationStatus | undefined
	createdAt: string | undefined
	onSubmit: (values: CreateViolationBody) => void
}

export const CreateForm: FC<CreateFormProps> = ({ inspector, status, createdAt, onSubmit }): ReactElement | null => {
	const { control, handleSubmit } = useFormContext<CreateFormValues>()

	const submitFormHandler = (values: CreateFormValues) => {
		onSubmit(mapCreateFormValues(values))
	}

	return (
		<Box>
			<Stack component='form' id='create-form' spacing={3} onSubmit={handleSubmit(submitFormHandler)}>
				<CollapseTitle title='Основная информация'>
					<Stack spacing={2}>
						<FormField label='Дата создания'>{getFormatDate({ date: createdAt })}</FormField>
						<FormField label='Ответственный'>
							{inspector && getFormatName(inspector.lastName, inspector.firstName, inspector.middleName)}
						</FormField>
						<FormField label='Статус нарушения'>
							{status && <Chip label={violationStatusLabels[status]} size='small' />}
						</FormField>
					</Stack>
				</CollapseTitle>
				<CollapseTitle title='Информация о нарушении'>
					<Stack spacing={2}>
						<FormField label='Наименование'>
							<Controller
								name='title'
								control={control}
								render={({ field: { ref, ...fieldProps } }) => (
									<BaseTextField {...fieldProps} {...textFieldBaseProps} inputRef={ref} placeholder='Введите текст' />
								)}
							/>
						</FormField>
						<FormField label='Дата обнаружения нарушения'>
							<Controller
								name='discoveryDate'
								control={control}
								render={({ field: { ref, ...fieldProps }, fieldState: { error } }) => (
									<DatePicker
										{...fieldProps}
										inputRef={ref}
										slots={{ textField: BaseTextField }}
										slotProps={{ textField: { error: !!error || undefined } }}
									/>
								)}
							/>
						</FormField>
						<FormField label='Тип нарушения'>
							<Controller
								name='violationType'
								control={control}
								render={({ field: { ref, ...fieldProps } }) => (
									<BaseTextField {...fieldProps} {...textFieldBaseProps} inputRef={ref} placeholder='Введите текст' />
								)}
							/>
						</FormField>
						<FormField label='Район'>
							<Controller
								name='district'
								control={control}
								render={({ field: { value, ref, ...fieldProps } }) => (
									<BaseTextField
										{...fieldProps}
										{...textFieldBaseProps}
										inputRef={ref}
										value={value}
										placeholder='Введите текст'
										select
										SelectProps={{
											displayEmpty: true,
											renderValue: () =>
												value ? value : <StyledSelectPlaceHolder>Выберите из списка</StyledSelectPlaceHolder>,
											MenuProps: {
												sx: { maxHeight: 300 }
											}
										}}
									>
										{districts.map(district => (
											<MenuItem key='district' value={district} selected={value === district}>
												{district}
											</MenuItem>
										))}
									</BaseTextField>
								)}
							/>
						</FormField>
						<FormField label='Место обнаружения'>
							<Controller
								name='location'
								control={control}
								render={({ field: { ref, ...fieldProps } }) => (
									<BaseTextField {...fieldProps} {...textFieldBaseProps} inputRef={ref} placeholder='Введите текст' />
								)}
							/>
						</FormField>
						<FormField label='Описание нарушения' direction='column' labelAlign='flex-start' maxHeightValue='100px'>
							<Controller
								name='description'
								control={control}
								render={({ field: { ref, ...fieldProps } }) => (
									<BaseTextField
										{...fieldProps}
										{...textFieldBaseProps}
										placeholder='Введите текст'
										inputRef={ref}
										multiline
										rows={6}
									/>
								)}
							/>
						</FormField>
					</Stack>
				</CollapseTitle>
			</Stack>
		</Box>
	)
}
