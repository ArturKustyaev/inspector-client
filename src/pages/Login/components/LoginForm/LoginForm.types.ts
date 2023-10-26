export interface LoginFormProps {
	isPending: boolean
	onSubmit: (values: LoginFormValues) => void
}

export interface LoginFormValues {
	login: string
	password: string
}
