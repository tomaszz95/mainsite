import { useState } from 'react'
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter'

type ComponentType = {
	name: string
	type: string
	placeholder: string
	onInputHandler: (inputData: { property: string; value: string }) => void
}

const Input: React.FC<ComponentType> = ({ name, type, placeholder, onInputHandler }) => {
	const [error, setError] = useState(false)
	const inputName = capitalizeFirstLetter(name)

	const inputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.value === '') {
			setError(true)
		} else {
			setError(false)
		}

		onInputHandler({ property: name, value: e.target.value })
	}

	return (
		<div className='w-full flex items-center flex-col'>
			<input
				name={name}
				type={type}
				required
				placeholder={placeholder}
				className='w-full bg-main py-4 px-6 rounded-3xl mt-5'
				onChange={inputChange}
			/>
			<p className={`mt-2 text-red-500 ${error ? 'block' : 'hidden'}`}>{inputName} cannot be empty!</p>
		</div>
	)
}

export default Input
