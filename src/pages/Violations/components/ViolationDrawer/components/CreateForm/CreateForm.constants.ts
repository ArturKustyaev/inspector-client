import { CreateFormValues } from './CreateForm.types'

export const createFormDefaultValues: CreateFormValues = {
	title: '',
	discoveryDate: null,
	violationType: null,
	district: null,
	location: '',
	description: ''
}

export const districts = [
	'Кировский',
	'Советский',
	'Ленинский',
	'Трусовский',
	'Ахтубинский',
	'Володарский',
	'Енотавский',
	'Икрянинский',
	'Камызякский',
	'Красноярский',
	'Лиманский',
	'Наримановский',
	'Приволжский',
	'Харабалинский',
	'Черноярский'
]
