import { PaginatedRequest } from 'api/api.types'
import { User } from 'types'

export interface UpdateUserBody extends Omit<User, '_id' | 'password'> {
	password?: string
}

export interface GetAllRequest extends PaginatedRequest {}

export interface UpdateRequest {
	params: {
		id: string
	}
	body: UpdateUserBody
}
