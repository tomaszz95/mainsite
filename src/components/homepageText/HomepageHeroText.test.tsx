import { render, screen } from '@testing-library/react'

import HomepageHeroText from './HomepageHeroText'

describe('HomepageHeroText component', () => {
	test('renders paragraph text correctly', () => {
		render(<HomepageHeroText />)
		const paragraph = screen.getByText(/Shaping/)
		expect(paragraph).toBeInTheDocument()
	})

	test('renders span element has correct color', () => {
		render(<HomepageHeroText />)
		const highlightedText = screen.getByText(/Hi, I'm Tomek/)
		expect(highlightedText).toHaveClass('text-hightlight')
	})
})
