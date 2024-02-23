import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import Input from './Input'

describe('Input component', () => {
	it('renders without crashing', () => {
		render(<Input name='test' type='text' placeholder='Test' onInputHandler={() => {}} value='' />)
	})

	it('calls onInputHandler function with correct data on input change', () => {
		const mockOnInputHandler = jest.fn()

		const { getByRole } = render(
			<Input name='test' type='text' placeholder='Test' onInputHandler={mockOnInputHandler} value='' />
		)

		fireEvent.change(getByRole('textbox'), { target: { value: 'Test input' } })

		expect(mockOnInputHandler).toHaveBeenCalledWith({ property: 'test', value: 'Test input' })
	})

	it('displays error message when submitting empty input', () => {
		const { getByRole, getByText } = render(
			<Input name='test' type='text' placeholder='Test' onInputHandler={() => {}} value='' />
		)

		fireEvent.blur(getByRole('textbox'))

		expect(getByText('Test cannot be empty!')).toBeTruthy()
	})

	it('passes input value to onInputHandler function', () => {
		const mockOnInputHandler = jest.fn()

		const { getByRole } = render(
			<Input name='test' type='text' placeholder='Test' onInputHandler={mockOnInputHandler} value='' />
		)

		fireEvent.change(getByRole('textbox'), { target: { value: 'Test input' } })
		fireEvent.blur(getByRole('textbox'))

		expect(mockOnInputHandler).toHaveBeenCalledWith({ property: 'test', value: 'Test input' })
	})

	it('sets input attributes correctly', () => {
		const { getByPlaceholderText, getByDisplayValue } = render(
			<Input name='test' type='text' placeholder='Test' onInputHandler={() => {}} value='Initial value' />
		)

		expect(getByPlaceholderText('Test')).toBeTruthy()
		expect(getByDisplayValue('Initial value')).toBeTruthy()
	})

	it('renders with proper error style when error is true', () => {
		const { container } = render(
			<Input name='test' type='text' placeholder='Test' onInputHandler={() => {}} value='' />
		)

		fireEvent.blur(container.querySelector('input')!)
		expect(container.querySelector('.text-red-500')).toBeTruthy()
	})

	it('checks if input is required', () => {
		const { getByRole } = render(
			<Input name='test' type='text' placeholder='Test' onInputHandler={() => {}} value='' />
		)

		expect((getByRole('textbox') as HTMLInputElement).hasAttribute('required')).toBe(true)
	})

	it('renders with passed value', () => {
		const { getByDisplayValue } = render(
			<Input name='test' type='text' placeholder='Test' onInputHandler={() => {}} value='Test value' />
		)
		
		expect(getByDisplayValue('Test value')).toBeTruthy()
	})
})
