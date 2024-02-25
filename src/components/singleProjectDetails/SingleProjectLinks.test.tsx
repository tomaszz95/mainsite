import { render, screen } from '@testing-library/react'
import SingleProjectLinks from './SingleProjectLinks'

describe('SingleProjectLinks component', () => {
	test('renders Github and Live buttons with correct links', () => {
		const githubLink = 'https://github.com/example'
		const liveLink = 'https://example.com'
        
		render(<SingleProjectLinks github={githubLink} live={liveLink} />)

		const githubButton = screen.getByRole('link', { name: /github/i })
		const liveButton = screen.getByRole('link', { name: /live/i })

		expect(githubButton).toBeInTheDocument()
		expect(liveButton).toBeInTheDocument()

		expect(githubButton).toHaveAttribute('href', githubLink)
		expect(liveButton).toHaveAttribute('href', liveLink)
	})

	test('Github and Live buttons open in new tab', () => {
		render(<SingleProjectLinks github='https://github.com/example' live='https://example.com' />)

		const githubButton = screen.getByRole('link', { name: /github/i })
		const liveButton = screen.getByRole('link', { name: /live/i })

		expect(githubButton).toHaveAttribute('target', '_blank')
		expect(liveButton).toHaveAttribute('target', '_blank')
	})

	test('Github and Live buttons have correct text content', () => {
		render(<SingleProjectLinks github='https://github.com/example' live='https://example.com' />)

		const githubButton = screen.getByRole('link', { name: /github/i })
		const liveButton = screen.getByRole('link', { name: /live/i })

		expect(githubButton.textContent).toBe('Github')
		expect(liveButton.textContent).toBe('Live')
	})
})
