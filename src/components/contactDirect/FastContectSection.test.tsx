import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import FastContactSection from './FastContactSection'

describe('FastContactSection component', () => {
	describe('Icon presence', () => {
		test('renders LinkedIn icon', () => {
			render(<FastContactSection />)
			const linkedinIcon = screen.getByAltText('Linkedin icon')
			expect(linkedinIcon).toBeInTheDocument()
		})

		test('renders Facebook icon', () => {
			render(<FastContactSection />)
			const facebookIcon = screen.getByAltText('Facebook icon')
			expect(facebookIcon).toBeInTheDocument()
		})

		test('renders Email icon', () => {
			render(<FastContactSection />)
			const emailIcon = screen.getByAltText('Email icon')
			expect(emailIcon).toBeInTheDocument()
		})
	})

	describe('Click behavior', () => {
		test('navigates to LinkedIn profile', () => {
			render(<FastContactSection />)
			const linkedinLink = screen.getByRole('link', { name: 'Linkedin icon in/tomasz-zuber95' })

			const linkedinHref = linkedinLink.getAttribute('href')
			expect(linkedinHref).toBe('https://www.linkedin.com/in/tomasz-zuber95/')
		})

		test('navigates to Facebook profile', () => {
			render(<FastContactSection />)
			const facebookLink = screen.getByRole('link', { name: 'Facebook icon tomasz.zuber.315' })

			const facebookHref = facebookLink.getAttribute('href')
			expect(facebookHref).toBe('https://www.facebook.com/tomasz.zuber.315/')
		})

		test('opens default email client with pre-filled email', () => {
			render(<FastContactSection />)
			const emailLink = screen.getByRole('link', { name: 'Email icon tzuber95@gmail.com' })

			const emailHref = emailLink.getAttribute('href')
			expect(emailHref).toBe('mailto:tzuber95@gmail.com')
		})
	})
})
