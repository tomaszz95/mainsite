import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import SectionBlock from './SectionBlock'

describe('SectionBlock component', () => {
	test('renders with left gradient class if direction is left', () => {
		render(<SectionBlock direction='left' />)
		const sectionBlock = screen.getByTestId('section-block')
		expect(sectionBlock).toHaveClass('leftGradient')
	})

	test('renders with right gradient class if direction is right', () => {
		render(<SectionBlock direction='right' />)
		const sectionBlock = screen.getByTestId('section-block')
		expect(sectionBlock).toHaveClass('rightGradient')
	})
})
