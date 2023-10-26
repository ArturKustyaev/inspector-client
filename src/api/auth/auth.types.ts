import { TokenPair, User } from 'types'

export interface LoginRequest {
	login: string
	password: string
}

export interface LoginResponse extends TokenPair {
	user: User
}

export type RefreshTokenRequest = Pick<TokenPair, 'refreshToken'>
