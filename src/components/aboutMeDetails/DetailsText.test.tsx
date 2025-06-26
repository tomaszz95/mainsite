import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import DetailsText from './DetailsText'

describe('DetailsText component', () => {
	test('renders component with correct text content', () => {
		const { getByText } = render(<DetailsText />)

		expect(getByText(/My programming journey began nearly 3 years ago with HTML/i)).toBeInTheDocument()
		expect(getByText(/I’m a Frontend Developer with my sights set on full-stack growth./i)).toBeInTheDocument()
	})
})
