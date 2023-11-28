import { MenuItem, Stack } from '@mui/material'
import { FC, ReactElement } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { StyledSelectPlaceHolder } from 'styles'
import { violationStatusLabels } from 'types'
import { Chip, DatePicker } from 'ui-kit'
import { BaseTextField } from 'ui-kit/BaseTextField'
import { getFormatDate, getFormatName } from 'utils'
import { textFieldBaseProps } from '../../ViolationDrawer.constants'
import { CollapseTitle } from '../CollapseTitle'
import { FormField } from '../FormField'
import { districts } from './CreateForm.constants'
import { isCreateFormReadonlyField, mapCreateFormValues } from './CreateForm.service'
import { CreateFormProps, CreateFormValues } from './CreateForm.types'

export const CreateForm: FC<CreateFormProps> = ({ inspector, status, createdAt, onSubmit }): ReactElement | null => {
  const { control, handleSubmit } = useFormContext<CreateFormValues>()

  const submitFormHandler = (values: CreateFormValues) => {
    onSubmit(mapCreateFormValues(values))
  }

  return (
    <Stack component="form" id="create-form" spacing={3} onSubmit={handleSubmit(submitFormHandler)}>
      <CollapseTitle title="Основная информация">
        <Stack spacing={2}>
          <FormField label="Дата создания">{getFormatDate({ date: createdAt })}</FormField>
          <FormField label="Ответственный">
            {inspector && getFormatName(inspector.lastName, inspector.firstName, inspector.middleName)}
          </FormField>
          <FormField label="Статус нарушения">
            {status && <Chip label={violationStatusLabels[status]} size="small" />}
          </FormField>
        </Stack>
      </CollapseTitle>
      <CollapseTitle title="Информация о нарушении">
        <Stack spacing={2}>
          <Controller
            name="title"
            control={control}
            render={({ field: { value, ref, ...fieldProps }, fieldState: { error } }) => (
              <FormField label="Наименование" readonly={isCreateFormReadonlyField(status)} readonlyValue={value}>
                <BaseTextField
                  {...fieldProps}
                  {...textFieldBaseProps}
                  value={value}
                  inputRef={ref}
                  placeholder="Введите текст"
                  helperText={error?.message}
                  error={!!error}
                />
              </FormField>
            )}
          />
          <Controller
            name="discoveryDate"
            control={control}
            render={({ field: { value, ref, ...fieldProps }, fieldState: { error } }) => (
              <FormField
                label="Дата обнаружения нарушения"
                readonlyValue={getFormatDate({ date: value })}
                readonly={isCreateFormReadonlyField(status)}>
                <DatePicker
                  {...fieldProps}
                  value={value}
                  inputRef={ref}
                  slots={{ textField: BaseTextField }}
                  slotProps={{ textField: { error: !!error || undefined } }}
                />
              </FormField>
            )}
          />
          <Controller
            name="violationType"
            control={control}
            render={({ field: { value, ref, ...fieldProps }, fieldState: { error } }) => (
              <FormField label="Тип нарушения" readonlyValue={value} readonly={isCreateFormReadonlyField(status)}>
                <BaseTextField
                  {...fieldProps}
                  {...textFieldBaseProps}
                  value={value}
                  inputRef={ref}
                  placeholder="Введите текст"
                  helperText={error?.message}
                  error={!!error}
                />
              </FormField>
            )}
          />
          <Controller
            name="district"
            control={control}
            render={({ field: { value, ref, ...fieldProps }, fieldState: { error } }) => (
              <FormField label="Район" readonlyValue={value} readonly={isCreateFormReadonlyField(status)}>
                <BaseTextField
                  {...fieldProps}
                  {...textFieldBaseProps}
                  inputRef={ref}
                  value={value}
                  placeholder="Введите текст"
                  helperText={error?.message}
                  error={!!error}
                  select
                  SelectProps={{
                    displayEmpty: true,
                    renderValue: () =>
                      value ? value : <StyledSelectPlaceHolder>Выберите из списка</StyledSelectPlaceHolder>,
                    MenuProps: {
                      sx: { maxHeight: 300 },
                    },
                  }}>
                  {districts.map((district) => (
                    <MenuItem key="district" value={district} selected={value === district}>
                      {district}
                    </MenuItem>
                  ))}
                </BaseTextField>
              </FormField>
            )}
          />
          <Controller
            name="location"
            control={control}
            render={({ field: { value, ref, ...fieldProps }, fieldState: { error } }) => (
              <FormField label="Место обнаружения" readonlyValue={value} readonly={isCreateFormReadonlyField(status)}>
                <BaseTextField
                  {...fieldProps}
                  {...textFieldBaseProps}
                  value={value}
                  inputRef={ref}
                  placeholder="Введите текст"
                  helperText={error?.message}
                  error={!!error}
                />
              </FormField>
            )}
          />
          <Controller
            name="description"
            control={control}
            render={({ field: { value, ref, ...fieldProps } }) => (
              <FormField
                label="Описание нарушения"
                direction="column"
                labelAlign="flex-start"
                maxHeightValue="100px"
                readonlyValue={value}
                noWrapValue={false}
                readonly={isCreateFormReadonlyField(status)}>
                <BaseTextField
                  {...fieldProps}
                  {...textFieldBaseProps}
                  value={value}
                  placeholder="Введите текст"
                  inputRef={ref}
                  multiline
                  rows={6}
                />
              </FormField>
            )}
          />
        </Stack>
      </CollapseTitle>
    </Stack>
  )
}
