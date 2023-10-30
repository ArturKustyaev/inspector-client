export interface Option<TLabel extends string | number = string, TValue extends string | number = string> {
	label: TLabel
	value: TValue
}
