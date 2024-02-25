import { render, screen } from '@testing-library/react'
import SocialLinks from './SocialLinks'

describe('SocialLinks component', () => {
	test('renders all social media icons', () => {
		render(<SocialLinks />)
		const githubIcon = screen.getByAltText('Tomasz Żuber github')
		const linkedinIcon = screen.getByAltText('Tomasz Żuber linkedin')
		const facebookIcon = screen.getByAltText('Tomasz Żuber facebook')

		expect(githubIcon).toBeInTheDocument()
		expect(linkedinIcon).toBeInTheDocument()
		expect(facebookIcon).toBeInTheDocument()
	})

	test('links to correct URLs', () => {
		render(<SocialLinks />)
		const githubLink = screen.getByRole('link', { name: /github/i })
		const linkedinLink = screen.getByRole('link', { name: /linkedin/i })
		const facebookLink = screen.getByRole('link', { name: /facebook/i })

		expect(githubLink).toHaveAttribute('href', 'https://github.com/tomaszz95')
		expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/tomasz-zuber95/')
		expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com/tomasz.zuber.315/')
	})

	test('opens links in new tab', () => {
		render(<SocialLinks />)
		const githubLink = screen.getByRole('link', { name: /github/i })
		const linkedinLink = screen.getByRole('link', { name: /linkedin/i })
		const facebookLink = screen.getByRole('link', { name: /facebook/i })

		expect(githubLink).toHaveAttribute('target', '_blank')
		expect(linkedinLink).toHaveAttribute('target', '_blank')
		expect(facebookLink).toHaveAttribute('target', '_blank')
	})

	test('rel attribute is set to noreferrer', () => {
		render(<SocialLinks />)
		const githubLink = screen.getByRole('link', { name: /github/i })
		const linkedinLink = screen.getByRole('link', { name: /linkedin/i })
		const facebookLink = screen.getByRole('link', { name: /facebook/i })

		expect(githubLink).toHaveAttribute('rel', 'noopener noreferrer')
		expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer')
		expect(facebookLink).toHaveAttribute('rel', 'noopener noreferrer')
	})
})
