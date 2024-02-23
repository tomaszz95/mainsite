import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import TextArea from './TextArea'

describe('TextArea component', () => {
	it('renders without crashing', () => {
		render(<TextArea name='test' placeholder='Test' onInputHandler={() => {}} value='' />)
	})

	it('calls onInputHandler function with correct data on input change', () => {
		const mockOnInputHandler = jest.fn()

		const { getByRole } = render(
			<TextArea name='test' placeholder='Test' onInputHandler={mockOnInputHandler} value='' />
		)

		fireEvent.change(getByRole('textbox'), { target: { value: 'Test input' } })

		expect(mockOnInputHandler).toHaveBeenCalledWith({ property: 'test', value: 'Test input' })
	})

	it('displays error message when submitting empty input', () => {
		const { getByRole, getByText } = render(
			<TextArea name='test' placeholder='Test' onInputHandler={() => {}} value='' />
		)

		fireEvent.blur(getByRole('textbox'))

		expect(getByText('Test cannot be empty!')).toBeTruthy()
	})

	it('passes input value to onInputHandler function', () => {
		const mockOnInputHandler = jest.fn()

		const { getByRole } = render(
			<TextArea name='test' placeholder='Test' onInputHandler={mockOnInputHandler} value='' />
		)

		fireEvent.change(getByRole('textbox'), { target: { value: 'Test input' } })
		fireEvent.blur(getByRole('textbox'))

		expect(mockOnInputHandler).toHaveBeenCalledWith({ property: 'test', value: 'Test input' })
	})

	it('renders with proper placeholder', () => {
		const { getByPlaceholderText } = render(
			<TextArea name='test' placeholder='Test' onInputHandler={() => {}} value='' />
		)

		expect(getByPlaceholderText('Test')).toBeTruthy()
	})

	it('renders with passed value', () => {
		const { getByDisplayValue } = render(
			<TextArea name='test' placeholder='Test' onInputHandler={() => {}} value='Test value' />
		)

		expect(getByDisplayValue('Test value')).toBeTruthy()
	})

	it('checks if textarea is required', () => {
		const { getByRole } = render(<TextArea name='test' placeholder='Test' onInputHandler={() => {}} value='' />)

		expect((getByRole('textbox') as HTMLInputElement).hasAttribute('required')).toBe(true)
	})

	it('renders with proper error style when error is true', () => {
		const { container } = render(<TextArea name='test' placeholder='Test' onInputHandler={() => {}} value='' />)

		fireEvent.blur(container.querySelector('textarea')!)

		expect(container.querySelector('.text-red-500')).toBeTruthy()
	})
})
