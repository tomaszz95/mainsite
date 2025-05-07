import { render, screen, fireEvent } from '@testing-library/react'
import HomepageAboutText from './HomepageAboutText'

jest.mock('next/router', () => ({
	useRouter: () => ({
		push: jest.fn(),
	}),
}))

describe('HomepageAboutText component', () => {
	test('renders paragraph correctly', () => {
		render(<HomepageAboutText />)
		const paragraph = screen.getByText(/I’ve been learning programming/i)
		expect(paragraph).toBeInTheDocument()
	})

	test('link button has correct href', () => {
		render(<HomepageAboutText />)
		const linkButton = screen.getByText('More about me')
		expect(linkButton).toHaveAttribute('href', '/about')
	})

	test('clicking link button redirects to another page', () => {
		render(<HomepageAboutText />)

		const linkButton = screen.getByText('More about me')

		fireEvent.click(linkButton)
	})
})
