import * as yup from 'yup'

export const requiredField = 'Обязательное поле'

export const createViolationSchema = yup.object().shape({
  title: yup.string().trim().required(requiredField),
  discoveryDate: yup.date().required().nullable(),
  violationType: yup.string().required().nullable(),
  district: yup.string().required().nullable(),
  location: yup.string().trim(),
  description: yup.string().trim(),
})
