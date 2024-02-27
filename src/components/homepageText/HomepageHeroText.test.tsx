import { render, screen, fireEvent } from '@testing-library/react'
import HomepageHeroText from './HomepageHeroText'

describe('HomepageHeroText component', () => {
	test('renders paragraph text correctly', () => {
		render(<HomepageHeroText />)
		const paragraph = screen.getByText(/I am an aspiring/)
		expect(paragraph).toBeInTheDocument()
	})

	test('renders span element has correct color', () => {
		render(<HomepageHeroText />)
		const highlightedText = screen.getByText(/Junior Frontend Developer/)
		expect(highlightedText).toHaveClass('text-hightlight')
	})

	test('download CV link has correct href', () => {
		render(<HomepageHeroText />)

		const downloadLink = screen.getByText('Download CV')

		expect(downloadLink).toHaveAttribute('href', 'Tomasz Zuber CV.pdf')
		expect(downloadLink).toHaveAttribute('download')

		const hrefValue = downloadLink.getAttribute('href')
		const downloadValue = downloadLink.getAttribute('download')

		expect(hrefValue).toMatch(/\.pdf$/)
		expect(downloadValue).toMatch(/\.pdf$/)
	})
})
