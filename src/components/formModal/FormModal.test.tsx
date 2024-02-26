import { render, screen, fireEvent } from '@testing-library/react'
import FormModal from './FormModal'

describe('FormModal component', () => {
	test('displays message correctly', () => {
		const message = 'This is a test message.\nIt has multiple lines.\nEach line should be displayed separately.'

		render(<FormModal message={message} onCloseModal={() => {}} />)

		const messageLines = message.split('\n')

		messageLines.forEach(line => {
			const messageLineElement = screen.getByText(line)
			expect(messageLineElement).toBeInTheDocument()
		})
	})

	test('closes modal on button click', () => {

		const onCloseModalMock = jest.fn()

		render(<FormModal message='Test message' onCloseModal={onCloseModalMock} />)

		const closeButton = screen.getByText('Close modal')
        
		fireEvent.click(closeButton)

		expect(onCloseModalMock).toHaveBeenCalledTimes(1)
	})
})
