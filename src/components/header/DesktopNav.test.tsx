import { navigation } from '../../constans/navigationLinks'
import { render, screen } from '@testing-library/react'
import DesktopNav from './DesktopNav'

const setIsNavOpenMock = jest.fn()

describe('DesktopNav component', () => {
	test('maps navigation links correctly', () => {
		render(<DesktopNav setIsNavOpen={setIsNavOpenMock} />)

		navigation.forEach(link => {
			const linkElement = screen.getByText(link.linkName)
			expect(linkElement).toBeInTheDocument()
		})
	})
})
