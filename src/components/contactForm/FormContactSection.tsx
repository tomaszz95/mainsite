'use client'
import { FormEvent, useState } from 'react'
import { createPortal } from 'react-dom'
import { isEmailValidate, isEmpty } from '../../helpers/validateInputs'
import FormModal from '../formModal/FormModal'
import Input from '../UI/Input'
import TextArea from '../UI/TextArea'

const FormContactSection = () => {
	const [inputsValue, setInputsValue] = useState({ name: '', email: '', subject: '', message: '' })
	const [modal, setModal] = useState({ isOpen: false, message: '' })

	const inputHandler = (inputData: { property: string; value: string }) => {
		setInputsValue(prevValue => {
			const newValue = { ...prevValue, [inputData.property]: inputData.value }
			return newValue
		})
	}

	const sendInputHandler = (event: FormEvent) => {
		event.preventDefault()

		if (
			!isEmpty(inputsValue.name) ||
			isEmailValidate(inputsValue.email) ||
			!isEmpty(inputsValue.subject) ||
			!isEmpty(inputsValue.message)
		) {
			console.log(inputsValue)
			setModal({ isOpen: true, message: 'Message successfully sent!\nI will reply to you as soon as possible.' })
		}
	}

	const closeModalHandler = () => {
		setModal({ isOpen: false, message: '' })
		setInputsValue({ name: '', email: '', subject: '', message: '' })
	}

	return (
		<form className='w-full max-w-[800px] flex flex-col items-center my-4 px-2' onSubmit={sendInputHandler}>
			<div className='w-full flex flex-col items-center'>
				<div className='w-full flex flex-col md:flex-row md:gap-6 items-center md:items-start'>
					<Input
						name='name'
						type='text'
						value={inputsValue.name}
						placeholder='YOUR NAME'
						onInputHandler={inputHandler}
					/>
					<Input
						name='email'
						type='email'
						value={inputsValue.email}
						placeholder='YOUR EMAIL'
						onInputHandler={inputHandler}
					/>
				</div>
				<Input
					name='subject'
					type='text'
					placeholder='YOUR SUBJECT'
					value={inputsValue.subject}
					onInputHandler={inputHandler}
				/>
				<TextArea name='message' placeholder='YOUR MESSAGE' onInputHandler={inputHandler} value={inputsValue.message} />
			</div>
			<button
				aria-label='Send message to email'
				type='submit'
				className='bg-hightlight hover:bg-hightlightHover rounded-3xl duration-300 py-4 px-6 my-10 w-56 disabled:bg-main font-bold'
				disabled={
					isEmpty(inputsValue.name) ||
					!isEmailValidate(inputsValue.email) ||
					isEmpty(inputsValue.subject) ||
					isEmpty(inputsValue.message)
				}>
				SEND MESSAGE
			</button>
			{modal.isOpen &&
				createPortal(<FormModal message={modal.message} onCloseModal={closeModalHandler} />, document.body)}
		</form>
	)
}

export default FormContactSection
