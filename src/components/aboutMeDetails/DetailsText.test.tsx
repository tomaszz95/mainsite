import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import DetailsText from './DetailsText'

describe('DetailsText component', () => {
	test('renders component with correct text content', () => {
		const { getByText } = render(<DetailsText />)

		expect(getByText(/My programming journey started nearly/i)).toBeInTheDocument()
		expect(getByText(/I’m an aspiring Junior Frontend Developer/i)).toBeInTheDocument()
	})
})
