import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import LinkButton from './LinkButton'

const href = '/test'
describe('LinkButton component', () => {
	test('renders link with correct href', () => {
		render(
			<LinkButton href={href} openNewWindow={true}>
				Test Link
			</LinkButton>
		)

		const link = screen.getByRole('link')

		expect(link).toHaveAttribute('href', href)
	})

	test('renders link with target blank if openNewWindow is true', () => {
		render(
			<LinkButton href={href} openNewWindow={true}>
				Test Link
			</LinkButton>
		)

		const link = screen.getByRole('link')

		expect(link).toHaveAttribute('target', '_blank')
	})

	test('renders link without target blank if openNewWindow is false', () => {
		render(
			<LinkButton href={href} openNewWindow={false}>
				Test Link
			</LinkButton>
		)

		const link = screen.getByRole('link')
        
		expect(link).not.toHaveAttribute('target', '_blank')
	})
})
