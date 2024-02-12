import { useState } from 'react'
import { capitalizeFirstLetter } from '../../helpers/capitalizeFirstLetter'

type ComponentType = {
	name: string
	placeholder: string
	onInputHandler: (inputData: { property: string; value: string }) => void
	value: string
}

const TextArea: React.FC<ComponentType> = ({ name, placeholder, onInputHandler, value }) => {
	const [error, setError] = useState(false)
	const textAreaName = capitalizeFirstLetter(name)

	const inputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
		if (e.target.value === '') {
			setError(true)
		} else {
			setError(false)
		}

		onInputHandler({ property: name, value: e.target.value })
	}

	return (
		<div className='w-full flex flex-col items-center'>
			<textarea
				name={name}
				required
				placeholder={placeholder}
				className='w-full bg-main py-4 px-6 rounded-3xl mt-5 min-h-[150px] max-h-[500px]'
				onChange={inputChange}
				value={value}
			/>
			<p className={`mt-2 text-red-500 ${error ? 'block' : 'hidden'}`}>{textAreaName} cannot be empty!</p>
		</div>
	)
}

export default TextArea
