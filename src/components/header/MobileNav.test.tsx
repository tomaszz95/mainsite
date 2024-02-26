import { navigation } from '../../constans/navigationLinks'
import { render, fireEvent, screen } from '@testing-library/react'
import MobileNav from './MobileNav'

describe('MobileNav component', () => {
	test('closes navigation when close button is clicked', () => {
		const setIsNavOpenMock = jest.fn()

		render(<MobileNav isNavOpen={true} setIsNavOpen={setIsNavOpenMock} />)

		const closeButton = screen.getByLabelText('Click to close navigation')
		fireEvent.click(closeButton)

		expect(setIsNavOpenMock).toHaveBeenCalledWith(false)
	})

	test('displays close icon with proper alt text', () => {
		render(<MobileNav isNavOpen={true} setIsNavOpen={() => {}} />)

		const closeIcon = screen.getByAltText('Close navigation button')

		expect(closeIcon).toBeInTheDocument()
		expect(closeIcon).toHaveAttribute('src', '/_next/image?url=%2Fimg.jpg&w=96&q=75')
	})

	test('generates correct navigation links', () => {
		render(<MobileNav isNavOpen={true} setIsNavOpen={() => {}} />)

		navigation.forEach(link => {
			const linkElement = screen.getByText(link.linkName)
			expect(linkElement).toBeInTheDocument()
		})
	})

	test('closes navigation when background overlay is clicked', () => {
		const setIsNavOpenMock = jest.fn()

		render(<MobileNav isNavOpen={true} setIsNavOpen={setIsNavOpenMock} />)

        const overlay = screen.getByTestId('overlay-nav')
        
		fireEvent.click(overlay)

		expect(setIsNavOpenMock).toHaveBeenCalledWith(false)
	})
})
