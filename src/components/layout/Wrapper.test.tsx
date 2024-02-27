import { render, screen } from '@testing-library/react'
import Wrapper from './Wrapper'

describe('Wrapper component', () => {
	test('renders children correctly', () => {
		const testContent = 'Test Content'

		render(<Wrapper>{testContent}</Wrapper>)

		const wrapperDiv = screen.getByText(testContent).parentElement

		expect(wrapperDiv).toContainHTML(testContent)
	})

	test('applies classes to wrapper div', () => {
		const testClasses = 'test-class1 test-class2'

		render(<Wrapper classes={testClasses}>Test</Wrapper>)

		const wrapperDiv = screen.getByTestId('wrapper-div')

		expect(wrapperDiv).toHaveClass(testClasses)
	})
})
