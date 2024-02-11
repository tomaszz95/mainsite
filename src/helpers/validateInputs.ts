export const isEmpty = (value: string) => {
	if (value.trim().length === 0) {
		return true
	} else {
		return false
	}
}

export const isEmailValidate = (value: string) => {
	if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
		return true
	} else {
		return false
	}
}
