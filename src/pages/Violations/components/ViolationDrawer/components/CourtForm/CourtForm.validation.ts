import * as yup from 'yup'

export const requiredField = 'Обязательное поле'

export const courtViolationSchema = yup.object().shape({
  endDate: yup
    .date()
    .required(requiredField)
    .nullable()
    .max(new Date(), 'Нельзя ввести будущую дату')
    .transform((value) => (value === null ? undefined : value))
    .typeError('Введите валидную дату'),
  courtDecision: yup
    .string()
    .trim()
    .required(requiredField)
    .nullable()
    .transform((value) => (value === null ? undefined : value)),
  amount: yup
    .number()
    .required(requiredField)
    .nullable()
    .transform((value) => (value === null ? undefined : value)),
})
