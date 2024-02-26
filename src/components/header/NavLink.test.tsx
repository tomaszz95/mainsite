import { render, fireEvent, screen } from '@testing-library/react'
import NavLink from './NavLink'

describe('NavLink component', () => {
	const mockSetIsNavOpen = jest.fn()

	test('renders link with correct href and text', () => {
		const linkHref = '/about'
		const linkName = 'About'

		render(<NavLink linkHref={linkHref} linkName={linkName} setIsNavOpen={mockSetIsNavOpen} />)

		const link = screen.getByRole('link')

		expect(link).toHaveAttribute('href', linkHref)
		expect(link).toHaveTextContent(linkName)
	})

	test('has proper color while hover', () => {
		const linkHref = '/projects'
		const linkName = 'Projects'

		render(<NavLink linkHref={linkHref} linkName={linkName} setIsNavOpen={mockSetIsNavOpen} />)

		const link = screen.getByRole('link')

		expect(link).toHaveClass('hover:text-hightlight')
	})

	test('closes navigation when link is clicked', () => {
		const linkHref = '/contact'
		const linkName = 'Contact'

		render(<NavLink linkHref={linkHref} linkName={linkName} setIsNavOpen={mockSetIsNavOpen} />)

		const link = screen.getByRole('link')
		fireEvent.click(link)

		expect(mockSetIsNavOpen).toHaveBeenCalledWith(false)
	})
})
