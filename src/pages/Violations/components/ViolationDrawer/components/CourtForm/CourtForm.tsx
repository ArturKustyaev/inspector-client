import { Box, MenuItem, Stack } from '@mui/material'
import { FC, ReactElement } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { BaseTextField, DatePicker } from 'ui-kit'
import { CollapseTitle } from '../CollapseTitle'
import { FormField } from '../FormField'
import { StyledSelectPlaceHolder } from 'styles'
import { textFieldBaseProps } from '../..'
import { courtDecisionOptions } from './CourtForm.constants'
import { NumericFormat } from 'react-number-format'

interface CourtFormProps {}

export const CourtForm: FC<CourtFormProps> = (): ReactElement | null => {
  const { control } = useForm()

  return (
    <Box>
      <Stack spacing={3}>
        <CollapseTitle title="Информация о решении суда">
          <Stack spacing={2}>
            <FormField label="Дата окончательного решения">
              <Controller
                name=""
                control={control}
                render={() => <DatePicker slots={{ textField: BaseTextField }} />}
              />
            </FormField>
            <FormField label="Решение суда">
              <Controller
                name=""
                control={control}
                render={({ field: { value, ref, ...fieldProps } }) => (
                  <BaseTextField
                    {...fieldProps}
                    {...textFieldBaseProps}
                    value={value}
                    inputRef={ref}
                    SelectProps={{
                      displayEmpty: true,
                      renderValue: () =>
                        value ? value : <StyledSelectPlaceHolder>Выберите из списка</StyledSelectPlaceHolder>,
                      MenuProps: {
                        sx: { maxHeight: 300 },
                      },
                    }}
                    select>
                    {courtDecisionOptions.map((decision) => (
                      <MenuItem key={decision} value={decision} selected={decision === value}>
                        {decision}
                      </MenuItem>
                    ))}
                  </BaseTextField>
                )}
              />
            </FormField>
            <FormField label="Сумма взыскания">
              <Controller
                name=""
                control={control}
                render={() => (
                  <NumericFormat
                    {...textFieldBaseProps}
                    customInput={BaseTextField}
                    decimalScale={2}
                    decimalSeparator=","
                    thousandSeparator=" "
                    allowNegative={false}
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
