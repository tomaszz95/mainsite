import { render, screen, fireEvent } from '@testing-library/react'
import Header from './Header'

describe('Header component', () => {
	test('displays logo correctly with proper alt text', () => {
		render(<Header />)

		const logoImage = screen.getByAltText('Tomasz Żuber logo')

		expect(logoImage).toBeInTheDocument()
		expect(logoImage).toHaveAttribute('src', '/_next/image?url=%2Fimg.jpg&w=96&q=75')
	})

	test('logo links to home page', () => {
		render(<Header />)

		const logoLink = screen.getByAltText('Tomasz Żuber logo').closest('a')

		expect(logoLink).toHaveAttribute('href', '/')
	})

	test('hides button when isNavOpen is true and shows when isNavOpen is false', () => {
		render(<Header />)

		const button = screen.getByLabelText('Click to open navigation')
		expect(button).toBeInTheDocument()

		expect(button).not.toHaveClass('hidden')

		fireEvent.click(button)

		expect(button).toHaveClass('hidden')
	})

	test('hides button for md breakpoint', () => {
		render(<Header />)

		const button = screen.getByLabelText('Click to open navigation')
		expect(button).not.toHaveClass('hidden')

		global.innerWidth = 900
		fireEvent(window, new Event('resize'))

		expect(button).toHaveClass('block md:hidden')
	})

	test('clicking button toggles isNavOpen and shows MobileNav', () => {
		render(<Header />)

		const button = screen.getByLabelText('Click to open navigation')
		fireEvent.click(button)

		const mobileNav = screen.getByTestId('mobile-nav')
		expect(mobileNav).toBeInTheDocument()
	})

	test('displays burger icon with proper alt text', () => {
		render(<Header />)

		const burgerIcon = screen.getByAltText('Burger icon')

		expect(burgerIcon).toBeInTheDocument()
		expect(burgerIcon).toHaveAttribute('src', '/_next/image?url=%2Fimg.jpg&w=96&q=75')
		expect(burgerIcon).toHaveAttribute('alt', 'Burger icon')
	})
})
