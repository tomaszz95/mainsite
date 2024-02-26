import { render, screen, fireEvent } from '@testing-library/react'
import SingleProjectImages from './SingleProjectImages'
import photo from '../../assets/photos/netflix1.png'

const mockPhotos = [
	{ photo: photo, alt: 'Mock Photo 1' },
	{ photo: photo, alt: 'Mock Photo 2' },
	{ photo: photo, alt: 'Mock Photo 3' },
]

describe('SingleProjectImages component', () => {
	test('renders images correctly', () => {
		render(<SingleProjectImages photos={mockPhotos} />)

		const images = screen.getAllByRole('img')

		expect(images).toHaveLength(mockPhotos.length)
	})

	test('opens modal when image is clicked', () => {
		render(<SingleProjectImages photos={mockPhotos} />)
		const firstImage = screen.getByAltText('Mock Photo 1')

		fireEvent.click(firstImage)

		const modalImage = screen.getAllByAltText('Mock Photo 1')[1]

		expect(modalImage).toBeInTheDocument()
	})

	test('closes modal when clicked outside of the image', () => {
		render(<SingleProjectImages photos={mockPhotos} />)

		const firstImage = screen.getByAltText('Mock Photo 1')
		fireEvent.click(firstImage)

		const modal = screen.getByTestId('modal')
		expect(modal).toBeInTheDocument()

		const modalBackground = screen.getByTestId('modal-background')
		fireEvent.click(modalBackground)

		const closedModal = screen.queryByTestId('modal')
		expect(closedModal).not.toBeInTheDocument()
	})
})
