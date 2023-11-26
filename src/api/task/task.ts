import { CreateViolationBody, PaginatedRequest, PaginatedResponse, axiosInstance } from 'api'
import { Violation } from 'types'

export const violation = {
	getAll: (params: PaginatedRequest) => axiosInstance.get<PaginatedResponse<Violation>>('tasks', { params }),
	create: (body: CreateViolationBody) => axiosInstance.post<Violation>('/tasks/create', body),
	delete: (id: string) => axiosInstance.delete(`tasks/${id}`)
}
