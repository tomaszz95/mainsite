'use client'

import { FormEvent, useState } from 'react'
import { createPortal } from 'react-dom'

import axios from 'axios'

import FormModal from '../formModal/FormModal'
import Input from '../UI/Input'
import TextArea from '../UI/TextArea'

import { isEmailValidate, isEmpty } from '../../helpers/validateInputs'

const FORMSPREE_URL = process.env.NEXT_PUBLIC_FORMSPREE_URL

const FormContactSection = () => {
	const [inputsValue, setInputsValue] = useState({ name: '', email: '', subject: '', message: '' })
	const [status, setStatus] = useState({
		submitted: false,
		submitting: false,
		isModalOpen: false,
		info: { error: false, msg: '' },
	})

	const inputHandler = (inputData: { property: string; value: string }) => {
		setInputsValue(prevValue => {
			const newValue = { ...prevValue, [inputData.property]: inputData.value }
			return newValue
		})
	}

	const closeModalHandler = () => {
		setStatus({
			submitted: false,
			submitting: false,
			isModalOpen: false,
			info: { error: false, msg: '' },
		})
	}

	const handleServerResponse = (ok: boolean, msg: string) => {
		if (ok) {
			setStatus({
				submitted: true,
				submitting: false,
				isModalOpen: true,
				info: { error: false, msg: msg },
			})

			setInputsValue({ name: '', email: '', subject: '', message: '' })
		} else {
			setStatus({
				submitted: false,
				submitting: false,
				isModalOpen: true,
				info: { error: true, msg: msg },
			})
		}
	}

	const handleOnSubmit = (e: FormEvent) => {
		e.preventDefault()

		setStatus(prevStatus => ({ ...prevStatus, submitting: true }))
		if (
			!isEmpty(inputsValue.name) ||
			isEmailValidate(inputsValue.email) ||
			!isEmpty(inputsValue.subject) ||
			!isEmpty(inputsValue.message)
		) {
			axios({
				method: 'POST',
				url: FORMSPREE_URL,
				data: inputsValue,
			})
				.then(res => {
					handleServerResponse(
						true,
						'Thank you, your message has been submitted.\nI will reply to you as soon as possible.'
					)
				})
				.catch(error => {
					handleServerResponse(false, 'Something went wrong.\nPlease try again later.')
				})
		} else {
			handleServerResponse(false, 'Please enter a valid form data!')
		}
	}

	return (
		<form className='w-full max-w-[800px] flex flex-col items-center my-4 px-2' onSubmit={handleOnSubmit}>
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
					isEmpty(inputsValue.message) ||
					status.submitting
				}>
				{!status.submitting ? (!status.submitted ? 'Submit' : 'Submitted') : 'Submitting...'}
			</button>

			{status.isModalOpen &&
				createPortal(<FormModal message={status.info.msg} onCloseModal={closeModalHandler} />, document.body)}
		</form>
	)
}

export default FormContactSection
