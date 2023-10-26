import axios from 'axios'
import { TokenPair } from 'types'

const defaultOptions = {
	baseURL: 'http://localhost:8000/api/',
	headers: {
		'Content-Type': 'application/json'
	}
}

export const axiosInstance = axios.create(defaultOptions)

axiosInstance.interceptors.request.use(config => {
	const auth = localStorage.getItem('auth')

	if (auth) {
		const tokenPair: TokenPair = JSON.parse(auth)

		config.headers.Authorization = tokenPair ? `Bearer ${tokenPair.accessToken}` : ''
	}

	return config
})

/* axiosInstance.interceptors.response.use(
	response => response,
	async error => {
		if (error.response.status === 401) {
			try {
				const refreshToken = store.getState().auth.refreshToken

				const response = await axiosInstance.post<LoginResponse>(`/auth/refresh_token`, { token: refreshToken })

				store.dispatch(setCredentials(response.data))

				return axiosInstance(error.config)
			} catch (refreshError) {
				return Promise.reject(refreshError)
			}
		}
		return Promise.reject(error)
	}
) */
