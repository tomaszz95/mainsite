import { render, fireEvent, screen } from '@testing-library/react'
import FormContactSection from './FormContactSection'

jest.mock('axios')

describe('FormContactSection component', () => {
	test('renders without crashing', () => {
		render(<FormContactSection />)
	})

	test('updates input fields correctly', () => {
		render(<FormContactSection />)
		
		const nameInput = screen.getByPlaceholderText('YOUR NAME') as HTMLInputElement
		const emailInput = screen.getByPlaceholderText('YOUR EMAIL') as HTMLInputElement
		const subjectInput = screen.getByPlaceholderText('YOUR SUBJECT') as HTMLInputElement
		const messageInput = screen.getByPlaceholderText('YOUR MESSAGE') as HTMLTextAreaElement

		fireEvent.change(nameInput, { target: { value: 'Test' } })
		fireEvent.change(emailInput, { target: { value: 'test@test.com' } })
		fireEvent.change(subjectInput, { target: { value: 'Test' } })
		fireEvent.change(messageInput, { target: { value: 'Test' } })

		expect(nameInput.value).toBe('Test')
		expect(emailInput.value).toBe('test@test.com')
		expect(subjectInput.value).toBe('Test')
		expect(messageInput.value).toBe('Test')
	})

	test('disables submit button when form inputs are invalid', () => {
		render(<FormContactSection />)

		const submitButton = screen.getByText('Submit')

		expect(submitButton).toBeDisabled()

		fireEvent.change(screen.getByPlaceholderText('YOUR NAME'), { target: { value: '' } })
		fireEvent.change(screen.getByPlaceholderText('YOUR EMAIL'), { target: { value: '' } })
		fireEvent.change(screen.getByPlaceholderText('YOUR SUBJECT'), { target: { value: '' } })
		fireEvent.change(screen.getByPlaceholderText('YOUR MESSAGE'), { target: { value: '' } })

		expect(submitButton).toBeDisabled()
	})

	test('enables submit button when form inputs are valid', () => {
		render(<FormContactSection />)

		const submitButton = screen.getByText('Submit')

		fireEvent.change(screen.getByPlaceholderText('YOUR NAME'), { target: { value: 'Test' } })
		fireEvent.change(screen.getByPlaceholderText('YOUR EMAIL'), { target: { value: 'test@test.com' } })
		fireEvent.change(screen.getByPlaceholderText('YOUR SUBJECT'), { target: { value: 'Test' } })
		fireEvent.change(screen.getByPlaceholderText('YOUR MESSAGE'), { target: { value: 'Test' } })

		expect(submitButton).not.toBeDisabled()
	})
})
