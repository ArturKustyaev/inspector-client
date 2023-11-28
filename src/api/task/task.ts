import { PaginatedRequest, PaginatedResponse, axiosInstance } from 'api'
import { Violation } from 'types'
import { ApproveBody, ChangeStatusBody, CreateViolationBody, UpdateViolationBody } from './task.types'

export const violation = {
  getAll: (params: PaginatedRequest) => axiosInstance.get<PaginatedResponse<Violation>>('tasks', { params }),
  create: (body: CreateViolationBody) => axiosInstance.post<Violation>('tasks/create', body),
  update: (body: UpdateViolationBody) => axiosInstance.put('tasks/update', body),
  delete: (id: string) => axiosInstance.delete(`tasks/${id}`),
  changeStatus: (body: ChangeStatusBody) => axiosInstance.post('tasks/change-status', body),
  approve: (body: ApproveBody) => axiosInstance.post('tasks/approve', body),
}
