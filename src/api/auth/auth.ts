import { axiosInstance } from '../api'
import { LoginRequest, RefreshTokenRequest } from './auth.types'

export const authApi = {
	login: (body: LoginRequest) => axiosInstance.post('auth/login', body),
	refreshToken: (body: RefreshTokenRequest) => axiosInstance.post('auth/refresh-token', body)
}
