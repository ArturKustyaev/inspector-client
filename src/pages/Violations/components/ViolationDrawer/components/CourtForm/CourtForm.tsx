import { MenuItem, Stack } from '@mui/material'
import { FC, ReactElement } from 'react'
import { Controller, useFormContext } from 'react-hook-form'
import { NumericFormat } from 'react-number-format'
import { StyledSelectPlaceHolder } from 'styles'
import { BaseTextField, DatePicker } from 'ui-kit'
import { getFormatDate, getFormatNumber } from 'utils'
import { CourtFormProps, CourtFormValues, textFieldBaseProps } from '../..'
import { CollapseTitle } from '../CollapseTitle'
import { FormField } from '../FormField'
import { courtDecisionOptions } from './CourtForm.constants'
import { isCourtFormReadonlyField } from './CourtForm.service'

export const CourtForm: FC<CourtFormProps> = ({ status }): ReactElement | null => {
  const { control, handleSubmit } = useFormContext<CourtFormValues>()

  const submitFormHandler = (values: CourtFormValues) => {
    console.log(values)
  }

  return (
    <Stack component="form" id="court-form" spacing={3} onSubmit={handleSubmit(submitFormHandler)}>
      <CollapseTitle title="Информация о решении суда">
        <Stack spacing={2}>
          <Controller
            name="endDate"
            control={control}
            render={({ field: { value, ref, onChange, onBlur, ...fieldProps }, fieldState: { error } }) => (
              <FormField
                label="Дата окончательного решения"
                readonlyValue={getFormatDate({ date: value })}
                readonly={isCourtFormReadonlyField(status)}>
                <DatePicker
                  {...fieldProps}
                  value={value}
                  inputRef={ref}
                  slots={{ textField: BaseTextField }}
                  slotProps={{ textField: { error: !!error, helperText: error?.message, onBlur } }}
                  disableFuture
                  onChange={(date) => onChange(date)}
                />
              </FormField>
            )}
          />
          <Controller
            name="courtDecision"
            control={control}
            render={({ field: { value, ref, ...fieldProps }, fieldState: { error } }) => (
              <FormField label="Решение суда" readonlyValue={value} readonly={isCourtFormReadonlyField(status)}>
                <BaseTextField
                  {...fieldProps}
                  {...textFieldBaseProps}
                  value={value ?? ''}
                  inputRef={ref}
                  helperText={error?.message}
                  SelectProps={{
                    displayEmpty: true,
                    renderValue: () =>
                      value ? value : <StyledSelectPlaceHolder>Выберите из списка</StyledSelectPlaceHolder>,
                    MenuProps: { sx: { maxHeight: 300 } },
                  }}
                  error={!!error}
                  select>
                  {courtDecisionOptions.map((decision) => (
                    <MenuItem key={decision} value={decision} selected={decision === value}>
                      {decision}
                    </MenuItem>
                  ))}
                </BaseTextField>
              </FormField>
            )}
          />
          <Controller
            name="amount"
            control={control}
            render={({ field: { value, ref, onChange, ...fieldProps }, fieldState: { error } }) => (
              <FormField
                label="Сумма взыскания"
                readonlyValue={getFormatNumber({ value })}
                readonly={isCourtFormReadonlyField(status)}>
                <NumericFormat
                  {...fieldProps}
                  {...textFieldBaseProps}
                  value={value}
                  placeholder="Введите число"
                  helperText={error?.message}
                  inputRef={ref}
                  customInput={BaseTextField}
                  decimalScale={2}
                  decimalSeparator=","
                  thousandSeparator=" "
                  error={!!error}
                  allowNegative={false}
                  onValueChange={({ floatValue }) => onChange(floatValue ?? null)}
                />
              </FormField>
            )}
          />
        </Stack>
      </CollapseTitle>
    </Stack>
  )
}
