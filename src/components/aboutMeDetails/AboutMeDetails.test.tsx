import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import AboutMeDetails from './AboutMeDetails'

describe('AboutMeDetails component', () => {
	test('renders about me photo', () => {
		render(<AboutMeDetails />)

		const imageElement = screen.getByAltText('Programmer with dreadlocks profile photo')
		
		expect(imageElement).toBeInTheDocument()
	})
})
