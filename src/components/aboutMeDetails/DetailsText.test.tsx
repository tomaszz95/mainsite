import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import DetailsText from './DetailsText'

describe('DetailsText component', () => {
	test('renders component with correct text content', () => {
		const { getByText } = render(<DetailsText />)

		expect(getByText(/My programming journey began over two years ago./i)).toBeInTheDocument()
		expect(
			getByText(/I am disciplined, ambitious, and ready to continuously improve my programming skills./i)
		).toBeInTheDocument()
	})
})
