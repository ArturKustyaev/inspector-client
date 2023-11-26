import { User } from 'types'
import { UserDrawerFormValues } from '.'
import { userDrawerFormDefaultValues } from './UserDrawer.constants'
import { UpdateUserBody } from 'api'

export function getUserDrawerTitle(isAddUser: boolean) {
	return isAddUser ? 'Создание пользователя' : 'Редактирование пользователя'
}

export function getUserDrawerFormDefaultValues(user: User | undefined, isAddUser: boolean): UserDrawerFormValues {
	if (!user) return userDrawerFormDefaultValues

	const { avatar, ...restUser } = user

	return {
		...restUser,
		isAddUser,
		avatarPreview: avatar ?? null,
		avatar: null
	}
}

export function mapUserDrawerFormValues(values: UserDrawerFormValues): UpdateUserBody {
	const { password, isAddUser, avatarPreview, ...restValues } = values

	return {
		...restValues,
		role: restValues.role || 'user',
		password: password || undefined
	}
}

const aaa = {
	title: 'Нашел сети на болде',
	description:
		'Я кароче гулял по набережной болды и увидел как браконьеры устанавливают сети, нельзя так делать, буду катать заявление',
	date: '21-11-2023',
	type: 'Несанкционированный отлов рыбы',
	location: 'г. Астрахань, река Бода',
	documents: 'тут будут прикрепленные доки',
	status: 'создание'
}
