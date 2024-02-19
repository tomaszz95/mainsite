export type InputType = {
	name: string
	type: string
	placeholder: string
	onInputHandler: (inputData: { property: string; value: string }) => void
	value: string
}

export type TextAreaType = {
	name: string
	placeholder: string
	onInputHandler: (inputData: { property: string; value: string }) => void
	value: string
}
