import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import HeadingOne from './HeadingOne'

const text = 'My'
const coloredText = 'contact'

describe('HeadingOne component', () => {
	test('renders with correct text', () => {
		render(<HeadingOne text={text} coloredText={coloredText} />)
		const renderedText = screen.getByText(text)
		expect(renderedText).toBeInTheDocument()
	})
})
