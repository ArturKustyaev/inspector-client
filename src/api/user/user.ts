import { axiosInstance } from 'api'
import { PaginatedResponse } from 'api/api.types'
import { User } from 'types'
import { GetAllRequest } from './user.types'

export const userApi = {
	myProfile: () => axiosInstance.get<User>('/users/my-profile'),
	getAll: (params: GetAllRequest) => axiosInstance.get<PaginatedResponse<User>>('users', { params })
}
