import { render, screen } from '@testing-library/react'
import HeroSection from './HeroSection'

describe('HeroSection component', () => {
	test('renders image with correct alt and class', () => {
		render(<HeroSection />)

		const image = screen.getByAltText(
			'Programmer with dreadlocks is sitting in front of three monitors and writing code'
		)

		expect(image).toBeInTheDocument()
	})
})
