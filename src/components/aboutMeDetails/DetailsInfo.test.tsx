import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import DetailsInfo from './DetailsInfo'

const aboutMeInfo = [
	{ property: 'First Name', value: 'Tomasz' },
	{ property: 'Last Name', value: 'Żuber' },
]

describe('DetailsInfo component', () => {
	test('renders about me info items correctly', () => {
		render(<DetailsInfo />)

		aboutMeInfo.forEach(item => {
			expect(screen.getByText(`${item.property}:`)).toBeInTheDocument()
			expect(screen.getByText(item.value)).toBeInTheDocument()
		})
	})

	test('renders download CV link', () => {
		render(<DetailsInfo />)

		const downloadLink = screen.getByText('Download CV')
		expect(downloadLink).toBeInTheDocument()
		expect(downloadLink).toHaveAttribute('href', 'Tomasz Zuber CV.pdf')
		expect(downloadLink).toHaveAttribute('download', 'Tomasz Zuber CV.pdf')
	})

	test('clicking on download CV link triggers file download', () => {
		render(<DetailsInfo />)

		const downloadLink = screen.getByText('Download CV')
		fireEvent.click(downloadLink)
	})
})
