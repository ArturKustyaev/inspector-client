import { PaginatedRequest, axiosInstance } from 'api'

export const taskApi = {
	getAll: (params: PaginatedRequest) => axiosInstance.get('tasks', { params })
}
