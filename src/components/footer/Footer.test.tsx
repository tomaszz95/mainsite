import { render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('Footer component', () => {
	test('displays current year', () => {
		const currentYear = new Date().getFullYear()

		render(<Footer />)

		const footerText = screen.getByText(`© Tomasz Żuber ${currentYear} | All Rights Reserved`)
		
		expect(footerText).toBeInTheDocument()
	})
})
