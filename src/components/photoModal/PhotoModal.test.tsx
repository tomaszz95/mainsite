import { render, screen, fireEvent } from '@testing-library/react'
import PhotoModal from './PhotoModal'
import PHOTO from '../../assets/photos/netflix1.jpg'

const alt = 'Some test alt for photo'

describe('PhotoModal component', () => {
	const onCloseHandlerMock = jest.fn()

	test('renders modal with correct photo and alt', () => {
		render(<PhotoModal photo={PHOTO} alt={alt} onCloseHandler={onCloseHandlerMock} />)

		const modal = screen.getByTestId('modal')
		const modalBackground = screen.getByTestId('modal-background')
		const image = screen.getByRole('img')

		expect(modal).toBeInTheDocument()
		expect(modalBackground).toBeInTheDocument()
		expect(image).toHaveAttribute('src', '/_next/image?url=%2Fimg.jpg&w=96&q=75')
		expect(image).toHaveAttribute('alt', alt)
	})

	test('clicking on modal background calls onCloseHandler', () => {
		render(<PhotoModal photo={PHOTO} alt={alt} onCloseHandler={onCloseHandlerMock} />)

		const modalBackground = screen.getByTestId('modal-background')
		fireEvent.click(modalBackground)

		expect(onCloseHandlerMock).toHaveBeenCalledTimes(1)
	})
})
