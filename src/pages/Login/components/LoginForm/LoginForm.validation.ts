import * as yup from 'yup'

export const loginFormSchema = yup.object().shape({
	login: yup.string().trim().required('Введите логин'),
	password: yup.string().trim().required('Введите пароль').min(5, 'Пароль не может быть меньше 5 символов')
})
