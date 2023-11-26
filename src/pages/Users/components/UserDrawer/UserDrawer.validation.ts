import { roleArray } from 'types'
import * as yup from 'yup'

export const requiredField = 'Обязательное поле'

export const userSchema = yup.object().shape({
	lastName: yup.string().required(requiredField),
	firstName: yup.string().required(requiredField),
	middleName: yup.string().required(requiredField),
	email: yup.string().required('Введите валидный email'),
	login: yup.string().required(requiredField),
	password: yup
		.string()
		.min(5, 'Пароль не может быть меньше 5 символов')
		.when(['isAddUser'], (values, schema) =>
			values.some(Boolean) ? schema.required(requiredField) : schema.transform(value => (value ? value : undefined))
		),
	role: yup
		.string()
		.oneOf(roleArray)
		.required(requiredField)
		.nullable()
		.transform(value => (value ? value : undefined)),
	avatarPreview: yup.string().required().nullable(),
	avatar: yup.mixed<File>().required().nullable(),
	isAddUser: yup.boolean().required()
})
