import { render, screen } from '@testing-library/react'
import ProjectsSection from './ProjectsSection'

describe('ProjectsSection component', () => {
	test('renders paragraph with correct text', () => {
		render(<ProjectsSection />)

		const paragraph = screen.getByText(/If you want to know more about the projects/i)

		expect(paragraph).toBeInTheDocument()
	})

	test('renders link with correct href and text', () => {
		render(<ProjectsSection />)

		const link = screen.getByText('click here')

		expect(link).toBeInTheDocument()
		expect(link).toHaveAttribute('href', '/projects')
		expect(link).toHaveClass('text-hightlight')
	})
})
