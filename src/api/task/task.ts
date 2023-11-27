import { PaginatedRequest, PaginatedResponse, axiosInstance } from 'api'
import { ChangeStatusBody, CreateViolationBody, UpdateViolationBody } from './task.types'
import { Violation } from 'types'

export const violation = {
  getAll: (params: PaginatedRequest) => axiosInstance.get<PaginatedResponse<Violation>>('tasks', { params }),
  create: (body: CreateViolationBody) => axiosInstance.post<Violation>('tasks/create', body),
  update: (body: UpdateViolationBody) => axiosInstance.put('tasks/update', body),
  delete: (id: string) => axiosInstance.delete(`tasks/${id}`),
  changeStatus: (body: ChangeStatusBody) => axiosInstance.post('tasks/change-status', body),
}
