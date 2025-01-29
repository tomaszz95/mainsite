import { render, screen } from '@testing-library/react'

import SingleProjectContains from './SingleProjectContains'

import photo from '../../assets/photos/netflix1.jpg'

const contents = ['Content 1', 'Content 2', 'Content 3']

const photos = [
	{ photo: photo, alt: 'Image 1' },
	{ photo: photo, alt: 'Image 2' },
]

describe('SingleProjectContains component', () => {
	test('renders project contents list correctly', () => {
		render(<SingleProjectContains contents={contents} photos={photos} />)

		const listItems = screen.getAllByRole('listitem')

		expect(listItems).toHaveLength(contents.length)

		contents.forEach(content => {
			expect(screen.getByText(`• ${content}`)).toBeInTheDocument()
		})
	})

	test('renders project photos correctly', () => {
		render(<SingleProjectContains contents={contents} photos={photos} />)

		const imageElements = screen.getAllByRole('img')

		expect(imageElements).toHaveLength(photos.length)

		photos.forEach(photo => {
			expect(screen.getByAltText(photo.alt)).toBeInTheDocument()
		})
	})
})
