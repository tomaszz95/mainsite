import { render, screen } from '@testing-library/react'
import AboutMeSection from './AboutMeSection'

describe('AboutMeSection component', () => {
	test('renders image with correct alt and class', () => {
		render(<AboutMeSection />)

		const image = screen.getByRole('img')

		expect(image).toBeInTheDocument()

		expect(image).toHaveAttribute(
			'alt',
			'Programmer with dreadlocks is sitting in front of three monitors and writing code'
		)
        
		expect(image).toHaveClass('rounded-full')
	})
})
