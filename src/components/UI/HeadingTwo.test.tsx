import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import HeadingTwo from './HeadingTwo'

const text = 'My'
const coloredText = 'projects'

describe('HeadingTwo component', () => {
	test('renders with correct text', () => {
		render(<HeadingTwo text={text} coloredText={coloredText} />)
		const renderedText = screen.getByText(text)
		expect(renderedText).toBeInTheDocument()
	})

	test('renders with correct colored text', () => {
		render(<HeadingTwo text={text} coloredText={coloredText} />)
		const renderedColoredText = screen.getByText(coloredText)
		expect(renderedColoredText).toBeInTheDocument()
	})

	test('renders with correct class for colored text', () => {
		render(<HeadingTwo text={text} coloredText={coloredText} />)
		const renderedColoredText = screen.getByText(coloredText)
		expect(renderedColoredText).toHaveClass('text-hightlight')
	})
})
