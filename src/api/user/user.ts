import { axiosInstance } from 'api'
import { PaginatedResponse } from 'api/api.types'
import { User } from 'types'
import { GetAllRequest, UpdateRequest, UpdateUserBody } from './user.types'
import { serialize } from 'object-to-formdata'

export const userApi = {
	myProfile: () => axiosInstance.get<User>('/users/my-profile'),
	getAll: (params: GetAllRequest) => axiosInstance.get<PaginatedResponse<User>>('users', { params }),
	create: (body: UpdateUserBody) => {
		const formData = serialize(body)

		console.log(body)

		return axiosInstance.post<User>('/users/create', formData)
	},
	update: ({ body, params }: UpdateRequest) => {
		const formData = serialize(body)

		return axiosInstance.put(`users/${params.id}`, formData, { headers: { 'Content-Type': 'multipart/form-data' } })
	},
	delete: (id: string) => axiosInstance.delete(`users/${id}`)
}
