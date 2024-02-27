import { render, screen } from '@testing-library/react'
import CenteredSection from './CenteredSection'

describe('CenteredSection component', () => {
	test('renders children correctly', () => {
		const testContent = 'Test Content'

		render(<CenteredSection>{testContent}</CenteredSection>)

		const centeredSection = screen.getByText(testContent).closest('section')

		expect(centeredSection).toContainHTML(testContent)
	})

	test('applies classes to section element', () => {
		const testClasses = 'test-class1 test-class2'

		render(<CenteredSection classes={testClasses}>Test</CenteredSection>)

		const sectionElement = screen.getByTestId('wrapper-section')

		expect(sectionElement).toHaveClass(testClasses)
	})
})
